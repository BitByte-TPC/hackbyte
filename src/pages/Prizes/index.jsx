import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import solanaLogo from "../../assets/Solana_Logo.svg";
import polygonLogo from "../../assets/Polygon_Logo.svg";
import beeceptorLogo from "../../assets/Beeceptor_Logo.svg";
import verbwireLogo from "../../assets/Verbwire_Logo.svg";
import replitLogo from "../../assets/Replit_Logo.svg";
import fileCoinLogo from "../../assets/Filecoin_Logo.svg";
import fuelerLogo from "../../assets/Fueler_Logo.svg";
import prizeTag from "../../assets/Prize_Tag.svg";
import Footer from "../../components/Footer";

const Prizes = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <PageHeading title="PRIZES" subHeading="Discover our past prizes" />
        <div className={styles.wrapper}>
          <p className={styles.heading}>Prize Pool Worth</p>
          <p className={styles.prizepool}>₹ 4 Lakhs +</p>

          <div className={styles.sponsors}>
            <p className={styles.header}>Past Prizes from our sponsors</p>
            <div className={styles.prizeSection}>
              <div className={styles.prizeCard}>
                <img src={prizeTag} className={styles.tag} />
                <a href="https://solana.com/">
                  <img src={solanaLogo} />
                </a>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Master glasseater :<span> $500</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    For the best advanced project that is almost ready for
                    full-time development.
                  </p>
                </div>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Rising teknoking :<span> $250</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    For the best project that goes into depth, demonstrating
                    higher-order code
                  </p>
                </div>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Young gun :<span> $100</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    For the best project beginners just starting out on Solana
                  </p>
                </div>
              </div>
              <div className={styles.prizeCard}>
                <img src={prizeTag} className={styles.tag} />
                <a href="https://polygon.technology/">
                  <img src={polygonLogo} />
                </a>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Best hack built on Ethereum + Polygon : <span> $200</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    Get started with Polygon
                    <a
                      href="https://replit.com/@devfolio/Polygon-Smart-Contract-Template?v=1#README.md"
                      className={styles.link}
                    >
                      {" "}
                      here.
                    </a>
                  </p>
                </div>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Best hack built on Ethereum :<span> $150</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    Get started with Polygon
                    <span>
                      <a
                        href="https://replit.com/@devfolio/Polygon-Smart-Contract-Template?v=1#README.md"
                        className={styles.link}
                      >
                        {" "}
                        here.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.prizeCard}>
                <img src={prizeTag} className={styles.tag} />
                <a href="https://beeceptor.com/">
                  <img src={beeceptorLogo} />
                </a>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    1 Year Free Access to beeceptor's Premium :
                    <span> $120</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    Beeceptor offers one year access plan to winning team or
                    participants.
                  </p>
                </div>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Cash Prize :<span> $60</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    A direct cash reward of Rs. 5K to the winning participant
                    who creates a video on Beeceptor.
                  </p>
                </div>
              </div>
              <div className={styles.prizeCard}>
                <img src={prizeTag} className={styles.tag} />
                <a href="https://www.verbwire.com/">
                  <img src={verbwireLogo} />
                </a>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Cash Prize :<span> 20K</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>4K per team, 5 teams</p>
                </div>
              </div>
              <div className={styles.prizeCard}>
                <img src={prizeTag} className={styles.tag} />
                <a href="https://replit.com//">
                  <img src={replitLogo} />
                </a>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Winning Project deployed on Replit :<span> $50</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    Get started with Replit
                    <a
                      href="https://replit.com/@devfolio/Replit-Devfolio-Hackathons?v=1"
                      className={styles.link}
                    >
                      {" "}
                      here.
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.prizeCard}>
                <img src={prizeTag} className={styles.tag} />
                <a href="https://filecoin.io/">
                  <img src={fileCoinLogo} />
                </a>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    Best use of Filecoin and/or IPFS :<span> $250</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    Get started with IPFS/Filecoin
                    <a
                      href="https://replit.com/@devfolio/IPFSFilecoin-Template?v=1#README.md"
                      className={styles.link}
                    >
                      {" "}
                      here.
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.prizeCard}>
                <img src={prizeTag} className={styles.tag} />
                <a href="https://fueler.io/">
                  <img src={fuelerLogo} />
                </a>
                <div className={styles.content}>
                  <p className={styles.topic}>
                    6-month Fueler Premium :<span> $180</span>
                  </p>
                  <p className={styles.txt}>1 Prize</p>
                  <p className={styles.details}>
                    6-month access to Fueler Premium worth $180 to the winning
                    team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </motion.div>
    </PageContainer>
  );
};
export default Prizes;
