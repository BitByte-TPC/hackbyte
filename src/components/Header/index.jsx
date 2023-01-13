import React from "react";
import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import HamBurgerIcon from "../../assets/HamBurger.svg";

const Header = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt='' />
      {location.pathname !== "/" && (
        <div className={styles.nav}>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/faq'>FAQS</Link>
          <Link to='/'>PRIZES</Link>
          <Link to='/'>SPONSORS</Link>
        </div>
      )}
      <div className={styles.icon}>
        <img src={HamBurgerIcon} alt='' />
      </div>
    </div>
  );
};

export default Header;
