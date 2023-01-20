import styles from "./styles.module.scss";
const Button = ({ type, icon, text, ...others }) => {
  if (type === "primary")
    return (
      <button className={styles.primaryContainer} {...others}>
        {icon && (
          <img src={icon} alt='icon' />
        )}
        <span>{text}</span>
      </button>
    );
  else if (type === "secondary")
    return (
      <button className={styles.secondaryContainer} {...others}>
        <span>{text}</span>
      </button>
    );
  else return <></>;
};
export default Button;
