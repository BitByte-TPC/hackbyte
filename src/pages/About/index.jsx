import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";
import Footer from "../../components/Footer";
import FAQ from "../FAQ";

const About = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <PageHeading title="ABOUT" subHeading="What is Hackbyte?" />
        <div className={styles.content}>
          <p className={styles.text}>
            Hackbyte is the annual hackathon of IIIT Jabalpur taking place in
            <span className={styles.detail}> April(tentative)</span> and is
            organised by{" "}
            <span className={styles.detail}> The Programming Club (TPC)</span>{" "}
            run by students of our institute. This will bring together
            developers and problem solvers from diverse backgrounds to
            collaborate on innovative projects. The event offers a unique and
            challenging learning experience for participants, providing them the
            opportunity to work with the latest technologies and expand their
            skills.
          </p>
          <div
            className={styles.newsletter}
            onLoad={() => {
              document;
            }}
          >
            <iframe
              src="https://bitbyte.substack.com/embed"
              width="480"
              height="150"
              style={{ background: "transparent" }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className={styles.opportunity}>
          <div className={styles.details}>
            <div className={styles.container}>
              <h2>Opportunities for Participants</h2>
              <p className={styles.textdetails}>
                Participants will have the opportunity to work on projects in
                teams, and the best projects will be awarded prizes, including
                domain-specific prizes. In addition to the hackathon, we will be
                hosting workshops, mentorship sessions, and networking
                opportunities for participants to connect with industry
                professionals and developer communities from around the world.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faq}>
          <FAQ />
        </div>
        <Footer />
      </motion.div>
    </PageContainer>
  );
};
export default About;
