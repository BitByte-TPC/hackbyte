"use client";
import { ReactLenis, useLenis } from "lenis/react";

function Template({ children }) {
  useLenis(({ scroll }) => {
    // Trigger animations or state changes based on scroll position
    // if (scroll > 200) {
    //   console.log("User scrolled past 200px");
    // }
  });

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smooth: true,
        smoothTouch: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default Template;
