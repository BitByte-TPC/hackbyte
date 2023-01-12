import React from "react";
import styles from './styles.module.scss';
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.svg';
import HamBurgerIcon from '../../assets/HamBurger.svg';

const Header = () => {
  return (
    <div className={styles.container}>
        <img
          className={styles.logo}
          src={Logo} 
          alt="" 
        />
      <div className={styles.links}>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/'>FAQS</Link>
        <Link to='/'>PRIZES</Link>
        <Link to='/'>SPONSORS</Link>
      </div>
      <div className={styles.icon}>
        <img
          src={HamBurgerIcon} 
          alt="" 
        />
      </div>
    </div>
  );
};

export default Header;