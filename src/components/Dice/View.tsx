import { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { TextureLoader, LoadingManager, NearestFilter } from "three";

type ViewProps = {
  rolling: boolean;
};

const View: React.FC<ViewProps> = ({ rolling }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const dice: IDice = {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

  const diceRef = useRef<any>(null); // @TODO fix this any type

  // Texture
  const loadManager = new LoadingManager();
  const loader = new TextureLoader(loadManager);

  const textureSides = loader.load("images/dice.jpg");
  textureSides.magFilter = NearestFilter;

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (!diceRef || !diceRef.current || !diceRef.current.rotation) return;

    if (loaded && rolling) {
      diceRef.current.rotation.x += 0.1;
      diceRef.current.rotation.y += 0.1;
    }
  });

  loadManager.onLoad = () => {
    setLoaded(true);
  };

  if (!loaded) return <></>;

  return (
    <mesh
      ref={diceRef}
      position={[dice.position.x, dice.position.y, dice.position.z]}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" map={textureSides} />
    </mesh>
  );
};

export default View;
