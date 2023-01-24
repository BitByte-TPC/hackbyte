import React from "react";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Sphere,
  Sparkles,
  Cloud,
} from "@react-three/drei";
import maptexture from "../../assets/textures/earth.jpg";
import disptexture from "../../assets/textures/disp2.jpg";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { AdditiveBlending, BackSide } from "three";
import gsap from "gsap";

export default function CanvasThree() {
  const canvasRef = useRef(null);
  const location = useLocation(); // use this to show earth only on homepage
  const [cloudOpacity, setcloudOpacity] = useState(0);
  function SphereMain() {
    const state = useThree();
    const colorTexture = useTexture({
      map: maptexture,
      displacementMap: disptexture,
    });
    const sph = useRef(null);
    const [Radius1, setRadius1] =
      window.innerWidth <= 700 ? useState(3.2) : useState(4.3);
    const [Radius2, setRadius2] =
      window.innerWidth <= 700 ? useState(2.2) : useState(2.8);

    const vertexShader = `varying vec3 vertexNormal;
    void main() {vertexNormal = normalize(normalMatrix * normal);
    gl_Position = (projectionMatrix * modelViewMatrix * vec4( position, 1.0 ));  
    }`;
    const fragmentShader = `varying vec3 vertexNormal;
    void main(){float intensity = pow(0.5 - dot(vertexNormal,vec3(0,0,1.0)),2.4);
    gl_FragColor = vec4(0.1,0.0,1.0,0.65)* intensity;}`;

    useEffect(() => {
      state.camera.position.set(15, 15, 15);
      gsap.to(state.camera.position, {
        duration: 2.5,
        delay: 0,
        z: 7,
        x: 0,
        y: 0,
        ease: "Power3.easeOut",
      });
    }, []);

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        setRadius1(2.8);
        setRadius2(1.8);
      } else {
        setRadius1(4.3);
        setRadius2(2.8);
      }
    });

    useFrame((state) => {
      sph.current.rotation.y += 0.003;
      sph.current.position.z = 0.6 * Math.sin(state.clock.elapsedTime);
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
            displacementScale={0.7}
          />
        </Sphere>
      </group>
    );
  }
  useEffect(() => {
    location.pathname === "/" ? setcloudOpacity(0) : setcloudOpacity(0.175);
  }, [location.pathname]);

  return (
    <Canvas
      className={styles.canvas}
      ref={canvasRef}
      camera={{ position: [15, 15, 15] }}
    >
      <Sparkles count={200} scale={[30, 30, 30]} size={2} speed={2.5} />
      <directionalLight position={[2, -5, 7]} intensity={1} />
      <ambientLight intensity={1.5} />
      <Cloud
        speed={0.75}
        opacity={cloudOpacity}
        color='#2160a3'
        depth={-1}
        depthTest
      />
      {location.pathname == "/" && (
        <>
          <SphereMain />
        </>
      )}

      <OrbitControls
        dampingFactor={0.15}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
