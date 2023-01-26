import styles from "./styles.module.scss";
const PageContainer = ({ children }) => {
  return (
    <div className={styles.container} id='page-content'>
      {children}
    </div>
  );
};
export default PageContainer;
