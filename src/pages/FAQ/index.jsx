import Header from "../../components/Header";
import PageHeading from "../../components/PageHeading";
import styles from "./styles.module.scss";
const FAQ = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PageHeading title='FAQs' subHeading='Frequently Asked Questions' />
    </div>
  );
};
export default FAQ;
