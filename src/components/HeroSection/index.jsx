import React from "react";
import styles from "./styles.module.scss";
import heading from "../../assets/headingText.png";
import { motion } from "framer-motion";

export const HeroSection = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      className={styles.heroContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <img src={heading} alt="heading" className={styles.heading} />
      <p className={styles.heroSubText}>WE THINK TO INNOVATE</p>
    </motion.div>
  );
};
