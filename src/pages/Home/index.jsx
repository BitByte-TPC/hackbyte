import React from "react";
import { HeroSection } from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";
const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <Navbar />
    </div>
  );
};
export default Home;
