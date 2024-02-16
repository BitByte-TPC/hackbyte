"use client";
import { useEffect, useState } from "react";
import styles from "./circle-animate.module.css";

const images = ["/2.0.svg", "/arrow.svg", "/arrow-1.svg", "globe.svg"];

const CircleAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      // Change the image every 2 seconds (adjust as needed)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <div className={`${styles.rotatingContainer} w-80 overflow-hidden`}>
      <div className="w-full h-full flex justify-center align-middle">
        <img src={images[currentIndex]} alt="" />
      </div>
    </div>
  );
};

export default CircleAnimation;
