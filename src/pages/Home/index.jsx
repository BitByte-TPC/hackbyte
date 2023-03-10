import React from "react";
import { HeroSection } from "../../components/HeroSection";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import Navbar from "../../components/Navbar";
import Timer from "../../components/Timer"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Timer />
        <Header />
      </div>
      <HeroSection />
      <Navbar />
    </div>
  );
};
export default Home;
