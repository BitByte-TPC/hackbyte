import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import HamBurgerIcon from "../../assets/HamBurger.svg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActive(!active);
  };

  return (
    <>
      {
        <div className={`${styles.menu} ${active && styles.menuVisible}`}>
          <Link
            to='/'
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={location.pathname == "/" ? { color: "#fff" } : {}}
          >
            HOME
          </Link>
          <Link
            to='/about'
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={location.pathname == "/about" ? { color: "#fff" } : {}}
          >
            ABOUT
          </Link>
          <Link
            to='/faq'
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={location.pathname == "/faq" ? { color: "#fff" } : {}}
          >
            FAQS
          </Link>
          <Link
            to='/prizes'
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
          >
            PRIZES
          </Link>
          <Link
            to='/sponsor-us'
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={location.pathname == "/sponsor-us" ? { color: "#fff" } : {}}
          >
            SPONSOR US
          </Link>
        </div>
      }
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt='' />
        {location.pathname !== "/" && (
          <div className={styles.nav}>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/faq'>FAQS</Link>
            <Link to='/prizes'>PRIZES</Link>
            <Link to='/sponsor-us'>SPONSOR US</Link>
          </div>
        )}
        <div
          className={styles.hamburger}
          id={active ? styles.active : null}
          onClick={handleMenu}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </>
  );
};

export default Header;
