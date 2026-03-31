"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ScrollingBackgroundProps {
  imageUrl: string;
  direction?: "left" | "right" | "diagonal";
  speed?: number; 
}

export const ScrollingBackground = ({
  imageUrl,
  direction = "diagonal",
  speed = 60,
}: ScrollingBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [bgSize, setBgSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      setBgSize({ w: img.naturalWidth, h: img.naturalHeight });
    };
  }, [imageUrl]);

  useEffect(() => {
    if (!bgRef.current || !bgSize) return;

    let xEnd = 0;
    let yEnd = 0;

  
    if (direction === "diagonal") {
      xEnd = bgSize.w;
      yEnd = bgSize.h;
    } else if (direction === "left") {
      xEnd = bgSize.w;
    } else if (direction === "right") {
      xEnd = -bgSize.w;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { x: 0, y: 0 },
        {
          x: xEnd,
          y: yEnd,
          ease: "none",
          repeat: -1,
          duration: speed,
          force3D: true, 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [bgSize, direction, speed]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -10 }} 
    >
      
      {bgSize && (
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            top: -bgSize.h,
            left: -bgSize.w,
            width: `calc(100% + ${bgSize.w * 2}px)`,
            height: `calc(100% + ${bgSize.h * 2}px)`,
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "repeat",
            opacity: 0.3,
            willChange: "transform",
          }}
        />
      )}
    </div>
  );
};