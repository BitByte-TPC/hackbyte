import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Img1 from "../../assets/mailIcon.svg";
import Img2 from "../../assets/twitterIcon.svg";
import Img3 from "../../assets/youtubeIcon.svg";
import Img4 from "../../assets/linkedinIcon.svg";
import PhoneIcon from "../../assets/phone_icon.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.media}>
        <div className={styles.club}>
          <img src={Logo} alt="" />
          <h2>The Programming Club</h2>
        </div>
        <p className={styles.college}>IIIT Jabalpur</p>
        <div className={styles.contact}>
          <img src={PhoneIcon} alt="" />
          <p className={styles.contact_num}>+91 89498 47292</p>
        </div>
        <div className={styles.social}>
          <a href="mailto:theprogclub@iiitdmj.ac.in">
            <img src={Img1} alt="" />
          </a>
          <a href="https://twitter.com/BitByte_IIITDMJ" target="_blank">
            <img src={Img2} alt="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCJl5pJUMxHzypPk9j40-2pg"
            target="_blank"
          >
            <img src={Img3} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/bitbyte-tpc/"
            target="_blank"
          >
            <img src={Img4} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.site}>
        <h2>HackByte</h2>
        <Link to="/about">About hackathon</Link>
        <Link to="/sponsors">Our Sponsors</Link>
        <Link to="/prizes">Prizes and Perks</Link>
        <Link to="/events">Timeline and Events</Link>
      </div>
      <div className={styles.resources}>
        <h2>Resources and Links</h2>
        <a
          href="https://docs.google.com/document/d/1jQTyncuzg4cUZ3YoPSrLcQQlbJAHhehjxP2dRAE0RHY/edit"
          target="_blank"
        >
          Code of Conduct
        </a>
        <a
          href="https://drive.google.com/file/d/19FOOabWl3vf3VLobFxzi8frBZF2mOH_A/view"
          target="_blank"
        >
          Hackathon Brouchure
        </a>
        <a href="https://hackbyte.devfolio.co/" target="_blank">
          Devfolio HackByte Page
        </a>
        <a href="https://discord.gg/4696xNnJ7n" target="_blank">
          Discord Link
        </a>
      </div>
      <div className={styles.clubdetails}>
        <h2>TPC and BitByte</h2>
        <a
          href="https://www.iiitdmj.ac.in/webix.iiitdmj.ac.in/#/"
          target="_blank"
        >
          TPC Website
        </a>
        <Link to="/team">Team behind all this</Link>
        <a href="https://www.iiitdmj.ac.in/" target="_blank">
          About IIIT Jabalpur
        </a>
      </div>
    </div>
  );
};

export default Footer;
