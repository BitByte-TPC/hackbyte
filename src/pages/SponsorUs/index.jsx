import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import PageHeading from "../../components/PageHeading";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import brochureIcon from "../../assets/brochure.svg";
import devfolioLogo from "../../assets/Devfolio_Logo.svg";
import replitLogo from "../../assets/Replit_Logo.svg";
import polygonLogo from "../../assets/Polygon_Logo.svg";
import solanaLogo from "../../assets/Solana_Logo.svg";
import beeceptorLogo from "../../assets/Beeceptor_Logo.svg";
import fuelerLogo from "../../assets/Fueler_Logo.svg";
import neuneticsLogo from "../../assets/Neunetics_Logo.svg";
import verbwireLogo from "../../assets/Verbwire_Logo.svg";
import fileCoinLogo from "../../assets/Filecoin_Logo.svg";
import eduBardLogo from "../../assets/Edubard_Logo.png";
import Footer from "../../components/Footer";

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
        <div className={styles.content}>
          <p className={styles.text}>
            We are excited to announce that we have onboarded leading sponsors
            such as <span>Devfolio, Replit, Polygon</span> and more. As a
            sponsor of HackByte, your company will have the opportunity to
            connect with a highly engaged and motivated audience of tech-savvy
            students.
          </p>
        </div>
        <div className={styles.sponsors}>
          <h2>
            GOLD <span>SPONSORS</span>
          </h2>
          <div className={styles.links}>
            <a href="https://devfolio.co/" target="blank">
              <img src={devfolioLogo} />
            </a>
            <a href="https://polygon.technology/">
              <img src={polygonLogo} />
            </a>
            <a href="https://beeceptor.com/">
              <img src={beeceptorLogo} />
            </a>
          </div>
        </div>
        <div className={styles.sponsors}>
          <h2>
            SILVER <span>SPONSORS</span>
          </h2>
          <div className={styles.links}>
            <a href="https://solana.com/">
              <img src={solanaLogo} />
            </a>
            <a href="https://replit.com//">
              <img src={replitLogo} />
            </a>
            <a href="https://filecoin.io/">
              <img src={fileCoinLogo} />
            </a>
            <a href="https://www.verbwire.com/">
              <img src={verbwireLogo} />
            </a>
          </div>
        </div>
        <div className={styles.sponsors}>
          <h2>
            BRONZE <span>SPONSORS</span>
          </h2>
          <div className={styles.links}>
            <a href="https://fueler.io/">
              <img src={fuelerLogo} />
            </a>
            <a href="https://neunetics.com/">
              <img src={neuneticsLogo} />
            </a>
          </div>
        </div>
        <div className={styles.sponsors}>
          <h2>
            MEDIA <span>SPONSORS</span>{" "}
          </h2>
          <div className={styles.links}>
            <a href="https://edubard.in/">
              <img src={eduBardLogo} />
            </a>
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.details}>
            <p className={styles.text}>
              As a sponsor, your organization will be highlighted on all of our
              social media channels. If you have any questions, please contact
              us.
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
        <Footer />
      </motion.div>
    </PageContainer>
  );
};

export default SponsorUs;
