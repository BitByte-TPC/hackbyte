import React from "react";
import { useRef ,useState} from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Sphere,
  Sparkles,
  Html,
} from "@react-three/drei";
import maptexture from "../../assets/textures/earth.jpg";
import disptexture from "../../assets/textures/disp2.jpg";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { AdditiveBlending, BackSide } from "three";
import { HeroSection } from "../HeroSection";
import gsap from "gsap";

export default function CanvasThree() {
  const canvasRef = useRef(null);
  const location = useLocation(); // use this to show earth only on homepage

  function SphereMain() {
    const colorTexture = useTexture({
      map: maptexture,
      displacementMap: disptexture,
    });
    const sph = useRef(null);
    const [Radius1, setRadius1] = window.innerWidth <= 700 ? useState(2.1) : useState(3.5);
    const [Radius2, setRadius2] = window.innerWidth <= 700 ? useState(1.5) : useState(2.5);

    const vertexShader = `varying vec3 vertexNormal;
    void main() {vertexNormal = normalize(normalMatrix * normal);
    gl_Position = (projectionMatrix * modelViewMatrix * vec4( position, 1.0 ));  
    }`;
    const fragmentShader = `varying vec3 vertexNormal;
    void main(){float intensity = pow(0.5 - dot(vertexNormal,vec3(0,0,1.0)),2.4);
    gl_FragColor = vec4(0.1,0.0,1.0,0.75)* intensity;}`;

    window.addEventListener('resize',()=>{
      if (window.innerWidth <= 700) {
        setRadius1(2.1);
        setRadius2(1.5)
      } else {
        setRadius1(3.5);
        setRadius2(2.5);
      }
    })  

    useFrame(() => {
      sph.current.rotation.y += 0.001;
      sph.current.rotation.x += 0.002;
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

  return (
    <Canvas
      className={styles.canvas}
      ref={canvasRef}
      camera={{ position: [15, 15, 15] }}
      onCreated={(state)=>{gsap.to(state.camera.position,{duration:2.5,delay:0,z:7,x:0,y:0, ease:'Power3.easeOut'})}}
    >
      <Sparkles count={200} scale={[30, 30, 30]} size={2} speed={2.5} />
      <directionalLight position={[2, -5, 7]} intensity={1} />
      <ambientLight intensity={1.5} />

      {location.pathname == "/" && (
        <>
          <SphereMain />
          <Html>
            <HeroSection />
          </Html>
        </>
      )}

      <OrbitControls dampingFactor={0.15} enableZoom={false} enablePan={false}/>
    </Canvas>
  );
}
