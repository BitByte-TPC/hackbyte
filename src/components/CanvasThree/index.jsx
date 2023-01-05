import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./styles.module.scss";
export default function CanvasThree() {
  return (
    <Canvas className={styles.canvas}>
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshNormalMaterial wireframe />
      </mesh>
      <OrbitControls dampingFactor={0.15} />
    </Canvas>
  );
}
