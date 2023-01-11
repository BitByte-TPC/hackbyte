import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to='/'>HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/'>FAQS</Link>
      <Link to='/'>PRIZES</Link>
      <Link to='/'>SPONSORS</Link>
    </div>
  );
};

export default Navbar;
