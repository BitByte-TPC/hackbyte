"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { motion } from "motion/react";

function Template({ children }) {
  useLenis(({ scroll }) => {
    // Trigger animations or state changes based on scroll position
    if (scroll > 200) {
      console.log("User scrolled past 200px");
    }
  });

  return (
    <ReactLenis
      root
      options={{
        duration: 0.6,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smooth: true,
        smoothTouch: true,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </ReactLenis>
  );
}

export default Template;