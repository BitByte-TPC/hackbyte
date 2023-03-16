import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/logo.png";
import Img1 from "../../assets/mailIcon.png";
import Img2 from "../../assets/twitterIcon.png";
import Img3 from "../../assets/youtubeIcon.png";
import Img4 from "../../assets/linkedinIcon.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.media}>
        <div className={styles.club}>
          <img src={Logo} alt="" />
          <h2>The Programming Club</h2>
        </div>
        <p className={styles.college}>IIIT Jabalpur</p>
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
        <a href="#">Team behind this</a>
      </div>
      <div className={styles.resources}>
        <h2>Resources and Links</h2>
        <a href="#">Hackathon Brouchure</a>
        <a href="#">Devfolio HackByte Page</a>
        <a href="#">Discord Link</a>
      </div>
      <div className={styles.clubdetails}>
        <h2>TPC and BitByte</h2>
        <a href="#">TPC Website</a>
        <a href="#">Team behind all this</a>
        <a href="#">About IIIT Jabalpur</a>
      </div>
    </div>
  );
};

export default Footer;
