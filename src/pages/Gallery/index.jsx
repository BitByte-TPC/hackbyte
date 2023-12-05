import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";
import Footer from "../../components/Footer";
import img1 from "../../assets/gallery/img1.webp";
import img2 from "../../assets/gallery/img2.webp";
import img3 from "../../assets/gallery/img3.webp";
import img4 from "../../assets/gallery/img4.webp";
import img6 from "../../assets/gallery/img6.webp";
import img7 from "../../assets/gallery/img7.webp";
import img9 from "../../assets/gallery/img9.webp";
import img11 from "../../assets/gallery/img11.webp";
import img13 from "../../assets/gallery/img13.webp";

const Gallery = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <PageHeading title="Gallery" subHeading="EXPLORE OUR JOURNEY" />
        <div className={styles.title}>
          <h2>
            2023 <span>(HACKBYTE 1.0)</span>
          </h2>
        </div>

        <div className={styles.maincontainer}>
          <div className={styles.gridcontainer}>
            <div className={styles.column}>
              <div className={styles.photo}>
                <img src={img7} alt="" />
              </div>
              <div className={styles.photo}>
                <img src={img9} alt="" />
              </div>
              <div className={styles.photo}>
                <img src={img6} alt="" />
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.photo}>
                <img src={img11} alt="" />
              </div>
              <div className={styles.photo}>
                <img src={img13} alt="" />
              </div>
              <div className={styles.photo}>
                <img src={img4} alt="" />
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.photo}>
                <img src={img1} alt="" />
              </div>
              <div className={styles.photo}>
                <img src={img3} alt="" />
              </div>
              <div className={styles.photo}>
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </PageContainer>
  );
};
export default Gallery;
