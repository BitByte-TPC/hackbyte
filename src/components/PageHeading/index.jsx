import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
const PageHeading = ({ title, subHeading }) => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <span
        className={`${styles.title} ${
          pathname.length > 6 ? styles.titleSmall : ""
        }`}
      >
        {title}
      </span>
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  );
};
export default PageHeading;
