import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import linkedinIcon from "../../assets/linkedin_icon.svg";
import twitterIcon from "../../assets/twitter_icon.svg";
import instagramIcon from "../../assets/instagram_icon.svg";

function SpeakerCard({ speaker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={styles.container}
    >
      <div className={styles.imgContainer}>
        <img src={`images/${speaker.urlname}.webp`} alt={speaker.name} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 style={{ color: "white", fontWeight: "500" }}>{speaker.name}</h2>
          <span style={{ color: "#8A8A8A", fontWeight: "500" }}>
            {speaker.designation}
          </span>
        </div>

        <div className={styles.social}>
          <a href={speaker.linkedinHandle}>
            <img src={linkedinIcon} alt="" />
          </a>
          <a href={speaker.twitterHandle}>
            <img src={twitterIcon} alt="" />
          </a>
          <a href={speaker.instagramHandle}>
            <img src={instagramIcon} alt="" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default SpeakerCard;
