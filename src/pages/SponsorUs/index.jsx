import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import PageHeading from "../../components/PageHeading";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import brochureIcon from "../../assets/brochure.svg";
import man from "../../assets/man2.png";
import devfolioLogo from "../../assets/devfolio_logo.png";
import replitLogo from "../../assets/replit_logo.png";
import polygonLogo from "../../assets/polygon_logo.png";

const SponsorUs = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <PageHeading title='SPONSOR' subHeading='How you can help?' />
        <p>
          HackByte is the IIITDMJ's student-run hackathon, which centers on
          bringing developers and problem solvers from different foundations
          together and enables them to develop projects that can bring out an
          impact. The hackathon gives a fun yet challenging way to gain
          knowledge around various technologies and gives a lot more
          opportunities to utilize them within
        </p>
        <div className={styles.btn}>
          <Button
            type='primary'
            text='Download Brochure'
            icon={brochureIcon}
            onClick={() => {
              window.open("http://bit.ly/hackbyte23-brochure", "_blank");
            }}
          />
        </div>
        <div className={styles.sponsorUs}>
          <div className={styles.innerFlex}>
            <div className={styles.left}>
              <h2>Who are with us?</h2>
              <p>
                We are excited to announce that we have onboarded leading
                sponsors such as <span>Devfolio, Replit, Polygon</span> and
                more. As a sponsor of HackByte, your company will have the
                opportunity to connect with a highly engaged and motivated
                audience of tech-savvy students.
              </p>
              <p>
                Your organization will be prominently featured on all of our
                social media channels and given priority according to the level
                of sponsorship. This is an excellent opportunity for companies
                to network with and recruit top talent in the tech industry.
              </p>
              <div className={styles.logos}>
                <img src={devfolioLogo} />
                <img src={polygonLogo} />
                <img src={replitLogo} />
              </div>
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
            <div className={styles.right}>
              <img src={man} width='400px' />
            </div>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
};

export default SponsorUs;
