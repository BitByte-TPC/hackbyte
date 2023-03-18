import React from "react";
import styles from "./styles.module.scss";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";

const MemberCard = ({ name, position, urlname }) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.content}>
        <img src={`images/${urlname}.webp`} alt="" />
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>{position}</p>
          <div className={styles.social}>
            <a href="#">
              <img src={linkedinIcon} alt="" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="#">
              <img src={githubIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
