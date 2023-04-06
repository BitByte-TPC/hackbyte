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
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>1st April, 12:30PM</h2>
              </div>
              <p className={styles.event}>Devfolio session</p>
              <a
                href="https://www.youtube.com/live/qlzZOl43xRs?feature=share"
                className={styles.link}
                target="_blank"
              >
                Meet link here
                <img src={Arrow} alt="" />
              </a>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>7th April, 4:30PM</h2>
              </div>
              <p className={styles.event}>HACKBYTE Opening Ceremony</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>8th April, 11:00AM-12:00PM</h2>
              </div>
              <p className={styles.event}>How to win Hackathons?</p>
              <p className={styles.name}>
                Session by Mr Abhishek Srivastav, Winner of S.I.H
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>8th April, 3:00PM-5:00PM</h2>
              </div>
              <p className={styles.event}>API 101 Postman session</p>
              <p className={styles.name}>
                By Aanchal Mishra(Developer Advocate, Postman)
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>8th April, 7:30PM-8:00PM</h2>
              </div>
              <p className={styles.event}>No Light Events</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>9th April, 10:30AM-1:00PM</h2>
              </div>
              <p className={styles.event}>Startup Diaries</p>
              <p className={styles.name}>By Sandeep Jain</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>9th April, 3:00PM-6:00PM</h2>
              </div>
              <p className={styles.event}>PitchByte</p>
              <p className={styles.description}>
                Fun Pitching Event where you can pitch your ideas to make it
                come true
              </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#4C7B5C" }}>
                <h2>9th April, 6:00PM-7:30PM</h2>
              </div>
              <p className={styles.event}>Facebook Developer Club Session</p>
              <p className={styles.name}>By Mrinal Jain</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>9th April, 7:30PM-8:00PM</h2>
              </div>
              <p className={styles.event}>HACKBYTE Closing Ceremony</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right} ${styles.last}`}>
            <div className={styles.content}>
              <div className={styles.date} style={{ background: "#7B4C4C" }}>
                <h2>15th April</h2>
              </div>
              <p className={styles.event}>Results Announcment</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.circle}`}></div>
        </div>
        <div className={styles.results}>
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
