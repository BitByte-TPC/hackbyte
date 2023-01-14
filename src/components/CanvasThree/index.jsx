import React, { Suspense, useState } from "react";
import { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Sphere,
  Sparkles,
  shaderMaterial,
  Html,
} from "@react-three/drei";
import maptexture from "../../assets/textures/earth.jpg";
import disptexture from "../../assets/textures/disp2.jpg";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { AdditiveBlending, BackSide } from "three";
import Loading from "../Loading";
import { HeroSection } from "../HeroSection";

export default function CanvasThree() {
  const canvasRef = useRef(null);
  const location = useLocation(); // use this to show earth only on homepage

  function SphereMain() {
    const colorTexture = useTexture({
      map: maptexture,
      displacementMap: disptexture,
    });
    const sph = useRef(null);

    const vertexShader = `varying vec3 vertexNormal;
    void main() {vertexNormal = normalize(normalMatrix * normal);
    gl_Position = (projectionMatrix * modelViewMatrix * vec4( position, 1.0 ));  
    }`;
    const fragmentShader = `varying vec3 vertexNormal;
    void main(){float intensity = pow(0.5 - dot(vertexNormal,vec3(0,0,1.0)),2.4);
    gl_FragColor = vec4(0.1,0.0,1.0,0.75)* intensity;}`;

    useFrame((e) => {
      sph.current.rotation.y += 0.001;
      sph.current.rotation.x += 0.002;
    });

    return (
      <group ref={sph}>
        <Sphere args={[3.5, 100, 100]}>
          <shaderMaterial
            vertexShader={vertexShader}
            side={BackSide}
            fragmentShader={fragmentShader}
            blending={AdditiveBlending}
          />
        </Sphere>
        <Sphere args={[2.5, 100, 100]}>
          <meshStandardMaterial
            transparent
            opacity={0.85}
            roughness={1}
            metalness={0}
            {...colorTexture}
            displacementScale={0.7}
          />
        </Sphere>
      </group>
    );
  }

  return (
    <Canvas
      className={styles.canvas}
      ref={canvasRef}
      camera={{ position: [0, 0, 7] }}
    >
      <Sparkles count={200} scale={[30, 30, 30]} size={2} speed={2.5} />
      <directionalLight position={[2, -5, 7]} intensity={1} />
      <ambientLight intensity={1.5} />

      {location.pathname == "/" && (
        <>
          <Suspense
            fallback={
              <Html>
                <Loading />
              </Html>
            }
          >
            <SphereMain />
            <Html>
              <HeroSection />
            </Html>
          </Suspense>
        </>
      )}

      <OrbitControls dampingFactor={0.15} enableZoom={false} />
    </Canvas>
  );
}
