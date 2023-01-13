import React from "react";
import styles from "./styles.module.scss";
export const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroText}>HACKBYTE</h1>
      <p className={styles.heroSubText}>WE THINK TO INOVATE</p>
    </div>
  );
};
