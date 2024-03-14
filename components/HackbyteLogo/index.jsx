"use client";

import React, { useEffect, useRef } from "react";
import Sketch from "./sktech";

const HackbyteLogo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let sketch;
    if (containerRef.current) {
      sketch = new Sketch({ dom: containerRef.current });
    }
    return () => {
      if (containerRef.current && sketch) {
        containerRef.current.removeChild(sketch.renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="h-72 flex items-center justify-center my-12 xl:my-4">
      <div
        // className="absolute min-w-[15rem] w-[70%] 2xl:max-w-[32rem] max-w-[30rem]"
        className="fixed top-0 -z-[1] left-0 w-full h-full"
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
        data-strength="0.15"
      >
        <img
          src={"/hackbyte.png"}
          alt="HackByte Logo"
          className="absolute invisible"
        />
      </div>
    </div>
  );
};

export { HackbyteLogo };
