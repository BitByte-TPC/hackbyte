import React from "react";
import styles from "./styles.module.scss";
import linkedinIcon from "../../assets/linkedin_icon.svg";
import twitterIcon from "../../assets/twitter_icon.svg";
import instagramIcon from "../../assets/instagram_icon.svg";
import githubIcon from "../../assets/github_icon.svg";

const MemberCard = (props) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.content}>
        <img src={`images/${props.member.urlname}.webp`} alt="" />
        <div className={styles.details}>
          <h2 className={styles.name}>{props.member.name}</h2>
          <p className={styles.description}>{props.member.position}</p>
          <div className={styles.social}>
            <a href={props.member.linkedinHandle}>
              <img src={linkedinIcon} alt="" />
            </a>
            <a href={props.member.twitterHandle}>
              <img src={twitterIcon} alt="" />
            </a>
            <a href={props.member.instagramHandle}>
              <img src={instagramIcon} alt="" />
            </a>
            <a href={props.member.githubHandle}>
              <img src={githubIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
