import React, { memo } from "react";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Sphere,
  Sparkles,
  Cloud,
} from "@react-three/drei";
import cloud from "../../assets/cloud.webp";
import maptexture from "../../assets/textures/earth.webp";
import disptexture from "../../assets/textures/disp.webp";
import styles from "./styles.module.scss";
import { AdditiveBlending, BackSide, Vector3 } from "three";
import gsap from "gsap";

function CloudMain({ onHome, cloudOpacity }) {
  const state = useThree();
  useEffect(() => {
    if (onHome) {
      state.camera.position.set(15, 15, 15);
      gsap.to(state.camera.position, {
        duration: 2.5,
        delay: 0,
        z: 7,
        x: 0,
        y: 0,
        ease: "Power3.easeOut",
      });
    } else {
      state.camera.position.set(0, 0, 7);
    }
  }, [onHome]);

  return (
    <Cloud speed={1} opacity={cloudOpacity} texture={cloud} color="#696969" />
  );
}

function CanvasThree({ setIsLoading, onHome }) {
  const canvasRef = useRef(null);
  function SphereMain({ isRender }) {
    if (!isRender) {
      return null;
    }
    const colorTexture = useTexture({
      map: maptexture,
      displacementMap: disptexture,
    });
    const sph = useRef(null);
    const [Radius1, setRadius1] =
      window.innerWidth <= 700 ? useState(2.5) : useState(4);
    const [Radius2, setRadius2] =
      window.innerWidth <= 700 ? useState(1.7) : useState(2.5);

    const vertexShader = `varying vec3 vertexNormal;
    void main() {vertexNormal = normalize(normalMatrix * normal);
    gl_Position = (projectionMatrix * modelViewMatrix * vec4( position, 1.0 ));  
    }`;
    const fragmentShader = `varying vec3 vertexNormal;
    void main(){float intensity = pow(0.5 - dot(vertexNormal,vec3(0,0,1.0)),2.4);
    gl_FragColor = vec4(0.1,0.0,1.0,0.65)* intensity;}`;

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        setRadius1(2.5);
        setRadius2(1.7);
      } else {
        setRadius1(4);
        setRadius2(2.5);
      }
    });
    useFrame((state) => {
      sph.current.rotation.y += 0.003;
      sph.current.position.z = 0.6 * Math.sin(state.clock.elapsedTime);
      sph.current.position.lerp(
        new Vector3(state.mouse.x * 0.5, state.mouse.y * 0.3, 7),
        0.03
      );
    });

    return (
      <group ref={sph}>
        <Sphere args={[Radius1, 100, 100]}>
          <shaderMaterial
            vertexShader={vertexShader}
            side={BackSide}
            fragmentShader={fragmentShader}
            blending={AdditiveBlending}
          />
        </Sphere>
        <Sphere args={[Radius2, 100, 100]}>
          <meshStandardMaterial
            transparent
            opacity={0.85}
            roughness={1}
            metalness={0}
            {...colorTexture}
            displacementScale={0.3}
          />
        </Sphere>
      </group>
    );
  }

  return (
    <Canvas
      className={styles.canvas}
      ref={canvasRef}
      camera={{ position: [15, 15, 15] }}
      onCreated={() => {
        setIsLoading(false);
      }}
    >
      <Sparkles count={250} scale={[30, 30, 30]} size={2} speed={2.5} />
      <directionalLight position={[2, -5, 7]} intensity={1} />
      <ambientLight intensity={1.5} />
      {onHome ? (
        <>
          <CloudMain onHome={onHome} cloudOpacity={0} />
          <SphereMain isRender={true} />
        </>
      ) : (
        <>
          <CloudMain onHome={onHome} cloudOpacity={0.1} />
          <SphereMain isRender={false} />
        </>
      )}

      <OrbitControls
        dampingFactor={0.15}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

export default memo(CanvasThree);
