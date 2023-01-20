import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import { motion } from "framer-motion";

const Prizes = () => {
  return (
    <PageContainer>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 100 }}  
          animate={{ opacity: 1, y: 0 }}
          // exit={{ y: -100 }}
          transition={{delay: 0.3, duration: 0.7}}
        >
        <PageHeading title='PRIZES' subHeading='What you can get' />
        <h1>To be declared soon</h1>
      </motion.div>
    </PageContainer>
  );
};
export default Prizes;
