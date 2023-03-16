import Header from "../../components/Header";
import { motion } from "framer-motion";
import PageContainer from "../../components/PageContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <PageHeading title="404" subHeading="Page not found" />
        <p className={styles.text}>
          Oops! Looks like we've lost that page, but don't worry, there's plenty
          more to explore.
        </p>
        <Footer />
      </motion.div>
    </PageContainer>
  );
};

export default NotFound;
