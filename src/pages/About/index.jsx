import { motion } from "framer-motion";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import Photo_1 from "../../assets/Photo-1.jpg";
import Photo_2 from "../../assets/Photo-2.jpg";
import Photo_3 from "../../assets/Photo-3.jpg";
import Photo_4 from "../../assets/Photo-4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";
import { pageVariants, transition } from "../../utils/animations";

const About = () => {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <PageContainer>
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
              <LazyLoadImage
                src={Photo_1}
                alt=''
                effect='blur'
                placeholderSrc={Photo_1}
              />
            </div>
            <div className={styles.photo}>
              <LazyLoadImage
                src={Photo_2}
                alt=''
                effect='blur'
                placeholderSrc={Photo_2}
              />
            </div>
            <div className={styles.photo}>
              <LazyLoadImage
                src={Photo_3}
                alt=''
                effect='blur'
                placeholderSrc={Photo_3}
              />
            </div>
            <div className={styles.photo}>
              <LazyLoadImage
                src={Photo_4}
                alt=''
                effect='blur'
                placeholderSrc={Photo_4}
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
};
export default About;
