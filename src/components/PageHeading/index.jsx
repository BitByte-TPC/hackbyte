import styles from "./styles.module.scss";
const PageHeading = ({ title, subHeading }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  );
};
export default PageHeading;
