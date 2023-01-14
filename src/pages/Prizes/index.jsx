import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import Header from "../../components/Header";

const Prizes = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PageHeading title='PRIZES' subHeading='What you can get' />
      <h1>To be declared soon</h1>
    </div>
  );
};
export default Prizes;
