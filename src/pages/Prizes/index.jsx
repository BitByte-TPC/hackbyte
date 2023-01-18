import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import { motion } from "framer-motion";

const Prizes = () => {
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
        <PageHeading title='PRIZES' subHeading='What you can get' />
        <h1>To be declared soon</h1>
      </PageContainer>
    </motion.div>
  );
};
export default Prizes;
