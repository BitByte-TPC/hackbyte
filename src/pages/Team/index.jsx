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
    linkedinHandle: "https://www.linkedin.com/in/masterchief164/",
    twitterHandle: "#",
    instagramHandle: "#",
    githubHandle: "https://github.com/masterchief164",
  },
  {
    urlname: "mehta",
    name: "Priyansh Mehta",
    position: "Co-Coordinator",
    linkedinHandle: "https://www.linkedin.com/in/priyansh61/",
    twitterHandle: "https://twitter.com/priyansh_61",
    instagramHandle: "https://www.instagram.com/priyansh.mehta.790/",
    githubHandle: "https://github.com/Priyansh61",
  },
];

const technicalTeam = [
  {
    urlname: "aksh",
    name: "Aksh Bansal",
    position: "Technical Core Member",
    linkedinHandle: "https://www.linkedin.com/in/aksh-bansal-0a1073200/",
    twitterHandle: "#",
    instagramHandle: "#",
    githubHandle: "https://github.com/Aksh-Bansal-dev",
  },
  {
    urlname: "akshat",
    name: "Akshat Nema",
    position: "Technical Core Member",
    linkedinHandle: "https://www.linkedin.com/in/akshat-nema/",
    twitterHandle: "#",
    instagramHandle: "#",
    githubHandle: "https://github.com/akshatnema",
  },
  {
    urlname: "arnab",
    name: "Arnab Mondal",
    position: "Technical Core Member",
    linkedinHandle: "#",
    twitterHandle: "#",
    instagramHandle: "#",
    githubHandle: "#",
  },
  {
    urlname: "prajjwal",
    name: "Prajjwal Kapoor",
    position: "Technical Core Member",
    linkedinHandle: "https://www.linkedin.com/in/prajjwal-kapoor/",
    twitterHandle: "https://twitter.com/the_prajjwal",
    instagramHandle: "https://www.instagram.com/prajjwal.kapoor/",
    githubHandle: "https://github.com/prajjwalkapoor",
  },
  {
    urlname: "vansh",
    name: "Vansh Mittal",
    position: "Technical Core Member",
    linkedinHandle: "https://www.linkedin.com/in/vansh-mittal-21869922a/",
    twitterHandle: "https://twitter.com/mittalvansh_11",
    instagramHandle: "https://www.instagram.com/mittalvansh11/",
    githubHandle: "https://github.com/mittalvansh",
  },
  {
    urlname: "chinmay",
    name: "Chinmay Joshi",
    position: "Technical Core Member",
    linkedinHandle: "https://www.linkedin.com/in/chinmay-r-joshi/",
    twitterHandle: "#",
    instagramHandle: "https://www.instagram.com/jawhawk160/",
    githubHandle: "https://github.com/JawHawk",
  },
];

const designTeam = [
  {
    urlname: "waishnav",
    name: "Waishnav Deore",
    position: "Web Design",
    linkedinHandle: "https://www.linkedin.com/in/waishnav-deore/",
    twitterHandle: "#",
    instagramHandle: "https://www.instagram.com/waishnav.here/",
    githubHandle: "https://github.com/Waishnav",
  },
  {
    urlname: "priyansh",
    name: "Priyansh Prajapati",
    position: "Media Design",
    linkedinHandle: "#",
    twitterHandle: "#",
    instagramHandle: "https://www.instagram.com/itsspriyansh/",
    githubHandle: "#",
  },
];

const publicRelationTeam = [
  {
    urlname: "varun",
    name: "Varun Singh",
    position: "PR Lead",
    linkedinHandle: "https://www.linkedin.com/in/varun-singh-018242224/",
    twitterHandle: "#",
    instagramHandle: "https://www.instagram.com/varunsingh__7/",
    githubHandle: "https://github.com/varun7singh",
  },
  {
    urlname: "manoj",
    name: "Manoj Panjwani",
    position: "Operations Lead",
    linkedinHandle: "https://www.linkedin.com/in/manojpanjwani03/",
    twitterHandle: "#",
    instagramHandle: "https://www.instagram.com/mojo__03/",
    githubHandle: "https://github.com/Mojo-03",
  },
  {
    urlname: "tushir",
    name: "Tushir Sahu",
    position: "Social Media Lead",
    linkedinHandle: "https://www.linkedin.com/in/tushir-sahu-b95549205/",
    twitterHandle: "#",
    instagramHandle: "https://www.instagram.com/tushir__sahu/",
    githubHandle: "https://github.com/TushirSahu",
  },
  {
    urlname: "aryan",
    name: "Aryan Sharma",
    position: "Event Management",
    linkedinHandle: "https://www.linkedin.com/in/aryan-sharma-3035b7226/",
    twitterHandle: "https://twitter.com/Aryan48648373",
    instagramHandle: "https://www.instagram.com/aint_no_aryan/",
    githubHandle: "https://github.com/salted0dreams",
  },
  {
    urlname: "raman",
    name: "Raman Chaudhary",
    position: "Event Management",
    linkedinHandle: "https://www.linkedin.com/in/raman-chaudhary-222914229/",
    twitterHandle: "https://twitter.com/raman_c27",
    instagramHandle: "https://www.instagram.com/chaudhary_raman27/",
    githubHandle: "https://github.com/ChaudharyRaman",
  },
  {
    urlname: "tushar",
    name: "Tushar Jain",
    position: "Event Management",
    linkedinHandle: "https://www.linkedin.com/in/tushar-jain4/",
    twitterHandle: "https://twitter.com/TusharJ84868317",
    instagramHandle: "https://www.instagram.com/tushar_._4/",
    githubHandle: "https://github.com/Tusharjain123",
  },
  {
    urlname: "samyak",
    name: "Samyak Bhargava",
    position: "Event Management",
    linkedinHandle: "https://www.linkedin.com/in/sammybh6/",
    twitterHandle: "#",
    instagramHandle: "https://www.instagram.com/samyakbh06/",
    githubHandle: "https://github.com/sammybh6",
  },
  {
    urlname: "rishabh",
    name: "Rishabh Gupta",
    position: "Event Management",
    linkedinHandle: "https://www.linkedin.com/in/rishabh-g-014020139/",
    twitterHandle: "#",
    instagramHandle: "#",
    githubHandle: "https://github.com/IamRishabhGupta",
  },
  {
    urlname: "rayal",
    name: "Prajwal Rayal",
    position: "Event Management",
    linkedinHandle: "https://www.linkedin.com/in/prajwal-rayal-30b323222/",
    twitterHandle: "https://twitter.com/rayalprajwal",
    instagramHandle: "https://www.instagram.com/prajwalrayal/",
    githubHandle: "https://github.com/Prajwalrayal",
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
              <MemberCard member={member} key={member.urlname} />
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
              <MemberCard member={member} key={member.urlname} />
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <h2 className={styles.text}>Design Team</h2>
          <div className={styles.members}>
            {designTeam.map((member) => (
              <MemberCard member={member} key={member.urlname} />
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
              <MemberCard member={member} key={member.urlname} />
            ))}
          </div>
        </div>
        <Footer />
      </motion.div>
    </PageContainer>
  );
};

export default Event;
