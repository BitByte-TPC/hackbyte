import React, { Suspense } from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Sphere, Sparkles } from "@react-three/drei";
import maptexture from "../../assets/textures/earth.jpg";
import disptexture from "../../assets/textures/park_dirt_disp_4k.jpg";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

export default function CanvasThree() {
  const canvasRef = useRef(null);
  const location = useLocation(); // use this to show earth only on homepage
  function SphereMain() {
    const colorTexture = useTexture({
      map: maptexture,
      displacementMap: disptexture,
    });
    const sph = useRef(null);
    useFrame(() => {
      sph.current.rotation.y += 0.001;
      sph.current.rotation.x += 0.002;
    });
    // console.log(location.pathname);
    return (
      <Sphere ref={sph} args={[2.5, 100, 100]}>
        <meshStandardMaterial
          transparent
          opacity={0.8}
          roughness={1}
          metalness={0}
          {...colorTexture}
          displacementScale={0.5}
        />
      </Sphere>
    );
  }

  return (
    <Canvas
      className={styles.canvas}
      ref={canvasRef}
      camera={{ position: [0, 0, 7] }}
    >
      <directionalLight position={[0, 0, -7]} intensity={1} />
      <spotLight
        position={[-2, -3, 5]}
        angle={0.1}
        color={"red"}
        intensity={1.5}
        penumbra={1}
      />
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <SphereMain />
        <Sparkles count={200} scale={[30, 30, 30]} size={2} speed={2.5} />
      </Suspense>
      <OrbitControls dampingFactor={0.15} enableZoom={false} />
    </Canvas>
  );
}
