import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
const Button = ({ type, icon, text, link, ...others }) => {
  if (type === "primary")
    return (
      <Link className={styles.primaryContainer} to={link ? link : null} {...others}>
        {icon && (
          <img src={icon} alt='icon' />
        )}
        <span>{text}</span>
      </Link>
    );
  else if (type === "secondary")
    return (
      <Link className={styles.secondaryContainer} to={link ? link : ''} {...others}>
        {icon && (
          <img src={icon} alt='icon' />
        )}
        <span>{text}</span>
      </Link>
    );
  else return <></>;
};
export default Button;
