"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeTitle = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    setDisplay(window.innerWidth < 450 ? "none" : "block");
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      display: display,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#DED9C6",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <p
        className="text-[#FAF8ED] text-[2.375rem] font-medium leading-[1.2] 
          lg:leading-[1.1] lg:text-[3rem]"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        This year&apos;s theme <br /> unveils in April ...
      </p>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default ThemeTitle;
