"use client";

import React, { useEffect, useRef } from "react";
import Sketch from "./sktech";
import Image from "next/image";
import hackbyteLogo from "@/public/hackbyteLogo.png";

const HackbyteLogo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let sketch;
    if (containerRef.current) {
      sketch = new Sketch({ dom: containerRef.current });
    }
    return () => {
      if (
        containerRef.current &&
        sketch &&
        containerRef.current.contains(sketch.renderer.domElement)
      ) {
        containerRef.current.removeChild(sketch.renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-[1240px]:h-72 flex items-center justify-center my-12 xl:my-4">
      <Image
        src={hackbyteLogo}
        className={"max-w-[30rem] min-w-[15rem] w-[70%] min-[1240px]:invisible"}
        alt="HackByte Logo"
        priority
      />
      <div
        // className="absolute min-w-[15rem] w-[70%] 2xl:max-w-[32rem] max-w-[30rem]"
        className="absolute top-0 -z-[1] left-0 w-full h-full"
        style={{
          backgroundColor: "#000",
          backgroundImage: "url(/background.png)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        id="canvasContainer"
        ref={containerRef}
        data-grid="30"
        data-mouse="0.25"
        data-strength="0.18"
      >
        <img
          src={"/hackbyte.png"}
          alt="HackByte Logo"
          id="hackbyteLogo"
          // className="max-[1240px]:max-w-[30rem] max-[1240px]min-w-[15rem] max-[1240px]:w-[70%] min-[1240px]:invisible"
          className="invisible"
        />
      </div>
    </div>
  );
};

export { HackbyteLogo };
