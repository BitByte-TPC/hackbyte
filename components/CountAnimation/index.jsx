"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function CountAnimation({ targetValue }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, targetValue, {
      duration: 1,
      ease: "linear",
      onUpdate: (latest) => count.set(latest),
    });
    return animation.stop;
  }, []);

  return (
    <div className="flex">
      <motion.p
        className="self-stretch text-center text-white text-5xl md:text-3xl 
        lg:text-[3.25rem] xl:text-6xl font-semibold font-['Inter'] leading-[72px]"
      >
        {rounded}
      </motion.p>
      <p
        className="self-stretch text-center text-white text-5xl md:text-3xl 
        lg:text-[3.25rem] xl:text-6xl font-semibold font-['Inter'] leading-[72px]"
      >
        +
      </p>
    </div>
  );
}
