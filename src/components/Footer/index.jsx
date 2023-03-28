import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/logo.png";
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
          <p className={styles.contact_num}>+91 8779608702</p>
        </div>
        <div className={styles.social}>
          <a href="mailto:theprogclub@iiitdmj.ac.in">
            <img src={Img1} alt="" />
          </a>
          <a href="https://twitter.com/HackbyteTPC">
            <img src={Img2} alt="" />
          </a>
          <a href="https://www.youtube.com/@theprogrammingclubiiitdmj6156">
            <img src={Img3} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/bitbyte-tpc/">
            <img src={Img4} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.site}>
        <h2>HackByte</h2>
        <a href="/about">About hackathon</a>
        <a href="/sponsors">Our Sponsors</a>
        <a href="/prizes">Prizes and Perks</a>
        <a href="/events">Timeline and Events</a>
        <a href="/team">Team behind this</a>
      </div>
      <div className={styles.resources}>
        <h2>Resources and Links</h2>
        <a href="https://drive.google.com/file/d/1PvgeaNBSaISvDuUwTH_Cs0JPSi-8EzBG/view">
          Hackathon Brouchure
        </a>
        <a href="https://hackbyte.devfolio.co/">Devfolio HackByte Page</a>
        <a href="https://discord.gg/4696xNnJ7n">Discord Link</a>
      </div>
      <div className={styles.clubdetails}>
        <h2>TPC and BitByte</h2>
        <a href="https://www.iiitdmj.ac.in/webix.iiitdmj.ac.in/#/">
          TPC Website
        </a>
        <a href="/team">Team behind all this</a>
        <a href="https://www.iiitdmj.ac.in/">About IIIT Jabalpur</a>
      </div>
    </div>
  );
};

export default Footer;
