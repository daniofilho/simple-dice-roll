import { useContext } from "react";
import { Canvas } from "react-three-fiber";
import { DiceContext } from "../../contexts/DiceContext";

import View from "./View";

const camera = {
  fov: 100,
  position: {
    x: 0,
    y: 0,
    z: -3,
  },
};

const Dice: React.FC = () => {
  const diceContext = useContext(DiceContext);

  return (
    <Canvas
      camera={{
        fov: camera.fov,
        position: [camera.position.x, camera.position.y, camera.position.z],
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <View diceContext={diceContext} />
    </Canvas>
  );
};

export default Dice;
