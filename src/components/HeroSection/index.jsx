import React from "react";
import styles from "./styles.module.scss";
import heading from "../../assets/headingText.svg";
export const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <img src={heading} alt='heading' className={styles.heading} />
      <p className={styles.heroSubText}>WE THINK TO INNOVATE</p>
    </div>
  );
};
