"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CountAnimation({ targetValue }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animation = animate(count, targetValue, {
            duration: 1,
            ease: "linear",
            onUpdate: (latest) => count.set(latest),
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const styles = {
    background:
      "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div ref={ref} className="flex">
      <motion.p
        className="font-medium text-[3rem] md:text-[4rem] leading-[3rem]"
        style={styles}
      >
        {rounded}
      </motion.p>
      <p
        className="font-medium text-[3rem] md:text-[4rem] leading-[3rem]"
        style={styles}
      >
        +
      </p>
    </div>
  );
}
