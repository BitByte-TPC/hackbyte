import React from "react";
import { motion } from "framer-motion";
import PageHeading from "../../components/PageHeading";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";
import SpeakerCard from "../../components/SpeakerCard";

const SpeakersData = [
  {
    name: "Sandeep Jain",
    urlname: "sandeep",
    designation: "Founder & CEO at GeeksforGeeks",
    linkedinHandle: "https://www.linkedin.com/in/sandeep-jain-b3940815/",
    twitterHandle:
      "https://twitter.com/sandeep_jain?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    instagramHandle: "https://www.secure.instagram.com/sandeep_gfg/",
  },
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
        <PageHeading title="SPEAKERS" subHeading="Event Speakers" />
        <div className={styles.speakerContainer}>
          {SpeakersData.map((speaker) => (
            <SpeakerCard speaker={speaker} key={speaker.name} />
          ))}
        </div>
        <Footer />
      </motion.div>
    </PageContainer>
  );
}

export default Speakers;
