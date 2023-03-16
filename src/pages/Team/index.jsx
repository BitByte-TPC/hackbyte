import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";
import MemberCard from "../../components/MemberCard";
import Footer from "../../components/Footer";

const officeBearers = [
  {
    urlname: "shaswat",
    name: "Shaswat Gupta",
    position: "Coordinator",
  },
  {
    urlname: "mehta",
    name: "Priyansh Mehta",
    position: "Co-Coordinator",
  },
];

const technicalTeam = [
  {
    urlname: "aksh",
    name: "Aksh Bansal",
    position: "Technical Core Member",
  },
  {
    urlname: "akshat",
    name: "Akshat Nema",
    position: "Technical Core Member",
  },
  {
    urlname: "arnab",
    name: "Arnab Mondal",
    position: "Technical Core Member",
  },
  {
    urlname: "prajjwal",
    name: "Prajjwal Kapoor",
    position: "Technical Core Member",
  },
  {
    urlname: "vansh",
    name: "Vansh Mittal",
    position: "Technical Core Member",
  },
  {
    urlname: "chinmay",
    name: "Chinmay Joshi",
    position: "Technical Core Member",
  },
];

const designTeam = [
  {
    urlname: "waishnav",
    name: "Waishnav Deore",
    position: "Web Design",
  },
  {
    urlname: "priyansh",
    name: "Priyansh Prajapati",
    position: "Media Design",
  },
];

const publicRelationTeam = [
  {
    urlname: "varun",
    name: "Varun Singh",
    position: "PR Lead",
  },
  {
    urlname: "manoj",
    name: "Manoj Panjwani",
    position: "Operations Lead",
  },
  {
    urlname: "tushir",
    name: "Tushir Sahu",
    position: "Social Media Lead",
  },
  {
    urlname: "aryan",
    name: "Aryan Sharma",
    position: "Event Management",
  },
  {
    urlname: "raman",
    name: "Raman Choudhary",
    position: "Event Management",
  },
  {
    urlname: "tushar",
    name: "Tushar Jain",
    position: "Event Management",
  },
];

const Event = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <PageHeading title="TEAM" subHeading="MEET OUR TEAM" />
        <div className={styles.wrapper}>
          <h2 className={styles.text}>Office Bearers</h2>
          <div className={styles.members}>
            {officeBearers.map((member) => (
              <MemberCard
                urlname={member.urlname}
                name={member.name}
                position={member.position}
                key={member.name}
              />
            ))}
          </div>
        </div>
        <div
          className={styles.wrapper}
          style={{
            paddingInline: "6rem",
          }}
        >
          <h2 className={styles.text}>Technical Team</h2>
          <div className={styles.members}>
            {technicalTeam.map((member) => (
              <MemberCard
                urlname={member.urlname}
                name={member.name}
                position={member.position}
                key={member.name}
              />
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <h2 className={styles.text}>Design Team</h2>
          <div className={styles.members}>
            {designTeam.map((member) => (
              <MemberCard
                urlname={member.urlname}
                name={member.name}
                position={member.position}
                key={member.name}
              />
            ))}
          </div>
        </div>
        <div
          className={styles.wrapper}
          style={{
            paddingInline: "6rem",
          }}
        >
          <h2 className={styles.text}>PR and Operations Team</h2>
          <div className={styles.members}>
            {publicRelationTeam.map((member) => (
              <MemberCard
                urlname={member.urlname}
                name={member.name}
                position={member.position}
                key={member.name}
              />
            ))}
          </div>
        </div>
        <Footer />
      </motion.div>
    </PageContainer>
  );
};

export default Event;
