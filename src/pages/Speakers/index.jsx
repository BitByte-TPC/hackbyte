import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Poster from "../../assets/Sandeep_Jain_Poster.webp";
import PageHeading from "../../components/PageHeading";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import Footer from "../../components/Footer";
import SpeakerCard from "../../components/SpeakerCard";

const SpeakersData = [
  {
    name: "Aanchal Mishra",
    urlname: "aanchal",
    designation: "Developer Advocate, Postman",
    linkedinHandle: "https://www.linkedin.com/in/mishra-aanchal/",
    twitterHandle: "https://twitter.com/Aanchalmishra__",
    instagramHandle: "https://www.instagram.com/iaanchalmishra/?hl=en",
  },
  {
    name: "Mrinal Jain",
    urlname: "mrinal",
    designation: "Community Manager @Meta",
    linkedinHandle: "https://www.linkedin.com/in/mrinaljain/",
    twitterHandle: "#",
    instagramHandle: "https://www.instagram.com/introvert_influencer/?hl=en",
  },
];

function Speakers() {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <PageHeading title="SPEAKERS" subHeading="EVENT SPEAKERS" />
        <div className={styles.wrapper}>
          <img src={Poster} alt="Sandeep Jain" />
          <p className={styles.text}>
            <span className={styles.detail}>Startup Diaries</span> is a series
            of live talk sessions organised by
            <span className={styles.detail}> E-Cell, IIITDM Jabalpur.</span> The
            sessions feature some prominent figures of the startup world where
            they share their life lessons, experiences and their knowledge of
            the entrepreneurial world. In the 2nd chapter of Startup Diaries, we
            are joined by none other than...
          </p>
          <div>
            <p className={styles.about}>About Sandeep Jain:</p>
            <p className={styles.content}>
              Sandeep Jain is the founder and CEO of Geeks for Geeks, the
              largest community based coding and software programming platform
              in India. His passion for learning and zeal to nurture young minds
              led him to rise to great heights from humble beginnings. Join us
              as we uncover his mantras for success, and much more.
            </p>
          </div>

          <div className={styles.otherSpeakers}>
            <h1 className={styles.header}>OTHER SPEAKERS</h1>
            <div className={styles.speakerContainer}>
              {SpeakersData.map((speaker) => (
                <SpeakerCard speaker={speaker} key={speaker.name} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </PageContainer>
  );
}

export default Speakers;
