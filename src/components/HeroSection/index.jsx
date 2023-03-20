import React from "react";
import styles from "./styles.module.scss";
import heading from "../../assets/headingText.svg";
import { motion } from "framer-motion";
import Button from "../Button";

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
      <div className={styles.cta}>
        <div
          className={`apply-button`}
          data-hackathon-slug="hackbyte"
          data-button-theme="dark-inverted"
          style={{ height: "44px", width: "15rem" }}
        ></div>
        <Button text="Register For Offline" type='secondary' link="offline-registration" />
      </div>
    </motion.div>
  );
};
