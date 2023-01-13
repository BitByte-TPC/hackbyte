import React from "react";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import Photo_1 from "../../assets/Photo-1.jpg";
import Photo_2 from "../../assets/Photo-2.jpg";
import Photo_3 from "../../assets/Photo-3.jpg";
import Photo_4 from "../../assets/Photo-4.jpg";
import PageHeading from "../../components/PageHeading";

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PageHeading title='ABOUT' subHeading='What is Hackbyte?' />
      <div className={styles.text}>
        <p>
          HackByte is the IIITDMJ's student-run hackathon, which centers on
          bringing developers and problem solvers from different foundations
          together and enables them to develop projects that can bring out an
          impact. The hackathon gives a fun yet challenging way to gain
          knowledge around various technologies and gives a lot more
          opportunities to utilize them within
        </p>
      </div>
      <div className={styles.gallery}>
        <p>Past Events Gallery</p>
        <div className={styles.photos}>
          <div className={styles.photo}>
            <img src={Photo_1} alt='' />
          </div>
          <div className={styles.photo}>
            <img src={Photo_2} alt='' />
          </div>
          <div className={styles.photo}>
            <img src={Photo_3} alt='' />
          </div>
          <div className={styles.photo}>
            <img src={Photo_4} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
