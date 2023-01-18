import React from "react";
import { HeroSection } from "../../components/HeroSection";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <HeroSection />
      {/* <Navbar /> */}
    </div>
  );
};
export default Home;
