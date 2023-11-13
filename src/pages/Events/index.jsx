import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";
import Footer from "../../components/Footer";
import Arrow from "../../assets/arrow.svg";

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
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#4C4C7B" }}>
                <h2>1st March (tentative)</h2>
              </div>
              <p className={styles.event}>ROUND 1 BEGINS</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>1Oth March (tentative)</h2>
              </div>
              <p className={styles.event}>ROUND 1 RESULT</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>5th April (tentative)</h2>
              </div>
              <p className={styles.event}>HACKBYTE Opening Ceremony</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>6th April (tentative)</h2>
              </div>
              <p className={styles.event}>No Light Event</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>7th April (tentative)</h2>
              </div>
              <p className={styles.event}>PitchByte</p>
              <p className={styles.description}>
                Fun Pitching Event where you can pitch your ideas to make it
                come true
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>7th April (tentative)</h2>
              </div>
              <p className={styles.event}>HACKBYTE Closing Ceremony</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right} ${styles.last}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>15th April (tentative)</h2>
              </div>
              <p className={styles.event}>Results Announcment</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.circle}`}></div>
        </div>
        <div className={styles.results}>
          <div className={styles.content}>
            <div className={styles.date} style={{ background: "#4C4C7B" }}>
              <h2>15th April (tentative)</h2>
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
