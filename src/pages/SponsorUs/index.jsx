import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import PageHeading from "../../components/PageHeading";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import brochureIcon from "../../assets/brochure.svg";
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
      </motion.div>
    </PageContainer>
  );
};

export default SponsorUs;
