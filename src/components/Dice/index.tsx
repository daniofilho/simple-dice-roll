import { Canvas } from "react-three-fiber";

import View from "./View";

const camera = {
  fov: 100,
  position: {
    x: 0,
    y: 0,
    z: -3,
  },
};

type DiceProps = {
  rolling: boolean;
};

const Dice: React.FC<DiceProps> = ({ rolling }) => {
  return (
    <Canvas
      camera={{
        fov: camera.fov,
        position: [camera.position.x, camera.position.y, camera.position.z],
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <View rolling={rolling} />
    </Canvas>
  );
};

export default Dice;
