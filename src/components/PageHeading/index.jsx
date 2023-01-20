import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
const PageHeading = ({ title, subHeading }) => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <p
        className={`${styles.title} ${
          pathname.length > 6 ? styles.titleSmall : ""
        }`}
      >
        {title}
      </p>
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  );
};
export default PageHeading;
