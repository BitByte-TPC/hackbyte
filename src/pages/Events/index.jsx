import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";
import Footer from "../../components/Footer";
import Arrow from "../../assets/arrow.png";

const Event = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <PageHeading title="TIMELINE" subHeading="Events and Timeline" />
        <div className={styles.wrapper}>
          <p className={styles.heading}>
            Your Journey to innovation begins here
          </p>
        </div>
        <div className={styles.timeline}>
          <div className={`${styles.container} ${styles.right}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#4C4C7B" }}>
                <h2>10th March</h2>
              </div>
              <p className={styles.event}>REGISTRAION BEGINS</p>
              <p className={styles.link}>
                Register here
                <img src={Arrow} alt="" />
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>31st March</h2>
              </div>
              <p className={styles.event}>Facebook Dev Club Inauguration</p>
              <p className={styles.link}>
                Meet link here
                <img src={Arrow} alt="" />
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#7B684C" }}>
                <h2>1st April</h2>
              </div>
              <p className={styles.event}>Replit, Solana and speaker session</p>
              <p className={styles.link}>
                Meet link here
                <img src={Arrow} alt="" />
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>7th April</h2>
              </div>
              <p className={styles.event}>HACKBYTE Opening Ceremony</p>
              <p className={styles.description}>Problem statement revealed</p>
              <p className={styles.link}>
                Meet link here
                <img src={Arrow} alt="" />
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>8th April</h2>
              </div>
              <p className={styles.event}>Mini Event</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>9th April</h2>
              </div>
              <p className={styles.event}>HACKBYTE Closing Ceremony</p>
              <p className={styles.link}>
                Meet link here
                <img src={Arrow} alt="" />
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right} ${styles.last}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>15th April</h2>
              </div>
              <p className={styles.event}>Results Announcment</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.circle}`}></div>
        </div>
        <div class={styles.results}>
          <div className={styles.content}>
            <div className={styles.date} style={{ background: "#7B4C4C" }}>
              <h2>15th April</h2>
            </div>
            <p className={styles.event}>Results Announcment</p>
          </div>
        </div>
        <Footer />
      </motion.div>
    </PageContainer>
  );
};
export default Event;
