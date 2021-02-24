import { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { TextureLoader, LoadingManager } from "three";

type ViewProps = {
  diceContext: DiceContextData;
};

const View: React.FC<ViewProps> = ({ diceContext }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const { dice, rolling } = diceContext;

  const diceRef = useRef<IDice>(null);

  // Texture
  const loadManager = new LoadingManager();
  const loader = new TextureLoader(loadManager);

  const diceFaces = [
    loader.load("images/dice-1.jpg"),
    loader.load("images/dice-2.jpg"),
    loader.load("images/dice-3.jpg"),
    loader.load("images/dice-4.jpg"),
    loader.load("images/dice-5.jpg"),
    loader.load("images/dice-6.jpg"),
  ];

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (!diceRef || !diceRef.current || !diceRef.current.rotation) return;

    // If it's loaded, animate the dice roll
    if (loaded && rolling) {
      diceRef.current.rotation.x -= 0.1;
      diceRef.current.rotation.y += 0.1;
      diceRef.current.rotation.z += 0.1;
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
      rotation={[dice.rotation.x, dice.rotation.y, dice.rotation.z]}
    >
      <boxGeometry attach="geometry" args={[2, 2, 2]} />

      <meshBasicMaterial attachArray="material" map={diceFaces[0]} />
      <meshBasicMaterial attachArray="material" map={diceFaces[1]} />
      <meshBasicMaterial attachArray="material" map={diceFaces[2]} />
      <meshBasicMaterial attachArray="material" map={diceFaces[3]} />
      <meshBasicMaterial attachArray="material" map={diceFaces[4]} />
      <meshBasicMaterial attachArray="material" map={diceFaces[5]} />
    </mesh>
  );
};

export default View;
