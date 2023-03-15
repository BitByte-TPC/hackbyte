import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import PageHeading from "../../components/PageHeading";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import brochureIcon from "../../assets/brochure.svg";
import man from "../../assets/man2.png";
import devfolioLogo from "../../assets/Devfolio_Logo-White.svg";
import replitLogo from "../../assets/logo-light-text-bg.svg";
import polygonLogo from "../../assets/Polygon_Logo-White.svg";
import solanaLogo from "../../assets/Solana_Dark.svg";
import beeceptorLogo from "../../assets/beeceptor-logo-vector 1.svg";
import fuelerLogo from "../../assets/fueler_logo 1.svg";
import fileCoinLogo from "../../assets/Filecoin Coloured White Text-1.svg";
import eduBardLogo from "../../assets/edubard.png";

const SponsorUs = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <PageHeading title="SPONSOR" subHeading="HACKBYTE SPONSORS" />
        <div className={styles.sponsorUs}>
          <div className={styles.innerFlex}>
            <div className={styles.left}>
              {/* <h2>Who are with us?</h2> */}
              <p>
                We are excited to announce that we have onboarded leading
                sponsors such as <span>Devfolio, Replit, Polygon</span> and
                more. As a sponsor of HackByte, your company will have the
                opportunity to connect with a highly engaged and motivated
                audience of tech-savvy students.
              </p>

              <h2>
                GOLD <span>SPONSORS</span>
              </h2>
              <div className={styles.logos}>
                <a href="https://devfolio.co/" target="blank">
                  <div className={styles.sponsor}>
                    <img src={devfolioLogo} />
                  </div>
                </a>
                <a href="https://polygon.technology/">
                  <div className={styles.sponsor}>
                    <img src={polygonLogo} />
                  </div>
                </a>
                <a href="https://beeceptor.com/">
                  <div className={styles.sponsor}>
                    <img src={beeceptorLogo} />
                  </div>
                </a>
              </div>
              <h2>
                SILVER <span>SPONSORS</span>
              </h2>
              <div className={styles.logos}>
                <a href="https://solana.com/">
                  <div className={styles.sponsor}>
                    <img src={solanaLogo} />
                  </div>
                </a>
                <a href="https://replit.com//">
                  <div className={styles.sponsor}>
                    <img src={replitLogo} />
                  </div>
                </a>
                <a href="https://filecoin.io/">
                  <div className={styles.sponsor}>
                    <img src={fileCoinLogo} />
                  </div>
                </a>
              </div>
              <h2>
                BRONZE <span>SPONSORS</span>
              </h2>
              <div className={styles.logos}>
                <a href="https://fueler.io/">
                  <div className={styles.sponsor}>
                    <img src={fuelerLogo} />
                  </div>
                </a>
              </div>
              <h2>
                MEDIA <span>SPONSORS</span>{" "}
              </h2>
              <div className={styles.logos}>
                <a href="https://edubard.in/">
                  <div className={styles.sponsor}>
                    <img src={eduBardLogo} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.text}>
              <p>
                As a sponsor, your organization will be highlighted on all of
                our social media channels.
              </p>
            </div>
            <div className={styles.button}>
              <Button
                type="primary"
                text="Contact Us"
                icon={brochureIcon}
                style={{ padding: "0.8rem 2rem" }}
                onClick={() => {
                  window.open("mailto:theprogclub@iiitdmj.ac.in", "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
};

export default SponsorUs;
