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
              <p className={styles.event}>REGISTRATION BEGINS</p>
              <a href="https://hackbyte.devfolio.co/" className={styles.link}>
                Register here
                <img src={Arrow} alt="" />
              </a>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>1st April, 11:30AM</h2>
              </div>
              <p className={styles.event}>Devfolio session</p>
              <a
                href="https://meet.google.com/ywe-gtpp-zga?hs=224"
                className={styles.link}
              >
                Meet link here
                <img src={Arrow} alt="" />
              </a>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>1st April, 6:00PM</h2>
              </div>
              <p className={styles.event}>Solana Session</p>
              <a
                href="https://meet.google.com/caz-bsxc-ixd?hs=224"
                className={styles.link}
              >
                Meet link here
                <img src={Arrow} alt="" />
              </a>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>1st April, 6:30PM</h2>
              </div>
              <p className={styles.event}>Replit Session</p>
              <a
                href="https://meet.google.com/bgr-tjgf-gss?hs=224"
                className={styles.link}
              >
                Meet link here
                <img src={Arrow} alt="" />
              </a>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>7th April, 6:00PM</h2>
              </div>
              <p className={styles.event}>HACKBYTE Opening Ceremony</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>8th April, 3:00PM</h2>
              </div>
              <p className={styles.event}>API 101 Postman session</p>
              <p className={styles.link}>
                Meet link here
                <img src={Arrow} alt="" />
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>8th April, 6:00PM</h2>
              </div>
              <p className={styles.event}>Mini Events</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>9th April, 6:00PM</h2>
              </div>
              <p className={styles.event}>Facebook Developer Club Session</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div class={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>9th April, 6:00PM</h2>
              </div>
              <p className={styles.event}>HACKBYTE Closing Ceremony</p>
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
            <div className={styles.date} style={{ background: "#4C4C7B" }}>
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
