import React from "react";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Sphere,
  Sparkles,
  Cloud,
} from "@react-three/drei";
import cloud from "../../assets/cloud.png";
import maptexture from "../../assets/textures/earth.jpg";
import disptexture from "../../assets/textures/disp2.jpg";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { AdditiveBlending, BackSide, Vector3 } from "three";
import { HeroSection } from "../HeroSection";

export default function CanvasThree({ setIsLoading }) {
  const canvasRef = useRef(null);
  const location = useLocation(); // use this to show earth only on homepage
  const [cloudOpacity, setcloudOpacity] = useState(0)
  
  function SphereMain() {
    const colorTexture = useTexture({
      map: maptexture,
      displacementMap: disptexture,
    });
    const sph = useRef(null);
    const [Radius1, setRadius1] =
      window.innerWidth <= 700 ? useState(3.2) : useState(4);
    const [Radius2, setRadius2] =
      window.innerWidth <= 700 ? useState(2.2) : useState(2.5);

    const vertexShader = `varying vec3 vertexNormal;
    void main() {vertexNormal = normalize(normalMatrix * normal);
    gl_Position = (projectionMatrix * modelViewMatrix * vec4( position, 1.0 ));  
    }`;
    const fragmentShader = `varying vec3 vertexNormal;
    void main(){float intensity = pow(0.5 - dot(vertexNormal,vec3(0,0,1.0)),2.4);
    gl_FragColor = vec4(0.1,0.0,1.0,0.65)* intensity;}`;
    
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        setRadius1(2.8);
        setRadius2(1.8);
      } else {
        setRadius1(4);
        setRadius2(2.5);
      }
    });

    useFrame((state) => {
      sph.current.rotation.y += 0.003;
      sph.current.position.z = 0.6*Math.sin(state.clock.elapsedTime)
      sph.current.position.lerp(new Vector3(state.mouse.x*0.5,state.mouse.y*0.3,7),0.05)     
    });

    return (
      <group ref={sph}>
        <Sphere
          args={[Radius1, 100, 100]}
          onAfterRender={() => {
            setIsLoading(false);
          }}
        >
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
      camera={{ position: [0,0,7] }}
      // style={{background:'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(22,20,46,1) 50%, rgba(0,0,0,1) 100%'}}
    >
      <Sparkles count={250} scale={[30, 30, 30]} size={2} speed={2.5} />
      <directionalLight position={[2, -5, 7]} intensity={1} />
      <ambientLight intensity={1.5} />
      <Cloud speed={1} opacity={cloudOpacity} texture={cloud} color="#2160a3" />
      {location.pathname == "/" && (
        <>
          <SphereMain />
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
