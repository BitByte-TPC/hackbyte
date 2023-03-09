import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import PageHeading from "../../components/PageHeading";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import brochureIcon from "../../assets/brochure.svg";
import man from "../../assets/man2.png";
import devfolioLogo from "../../assets/devfolio_logo_s.svg";
import replitLogo from "../../assets/replit_logo_s.svg";
import polygonLogo from "../../assets/polygon_logo_s.svg";

const SponsorUs = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <PageHeading title='SPONSOR' subHeading='HACKBYTE SPONSORS' />
        {/* <p>
          We are excited to announce that we have onboarded leading
          sponsors such as Devfolio, Replit, Polygon and more.
        </p> */}
        {/* <div className={styles.btn}>
          <Button
            type='primary'
            text='Download Brochure'
            icon={brochureIcon}
            onClick={() => {
              window.open("http://bit.ly/hackbyte23-brochure", "_blank");
            }}
          />
        </div> */}



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

              <h2>GOLD SPONSORS</h2>
              <div className={styles.logos}>
                <div className={styles.sponsor}>
                  <img src={devfolioLogo} />
                </div>
                <div className={styles.sponsor}>
                  <img src={polygonLogo} />
                </div>
                <div className={styles.sponsor}>
                  <img src={replitLogo} />
                </div>
              </div>
              <h2>SILVER SPONSORS</h2>
              <div className={styles.logos}>
                <div className={styles.sponsor}>
                  <img src={devfolioLogo} />
                </div>
                <div className={styles.sponsor}>
                  <img src={polygonLogo} />
                </div>
                <div className={styles.sponsor}>
                  <img src={replitLogo} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.text}>
              <p>As a sponsor, your organization will be highlighted on all of
                our social media channels and given priority</p>
            </div>
            <div className={styles.button}>
              <Button
                type='primary'
                text='Contact Us'
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
