import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to='/'>HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/faq'>FAQS</Link>
      <Link to='/prizes'>PRIZES</Link>
      <Link to='/sponsor-us'>SPONSOR US</Link>
    </div>
  );
};

export default Navbar;
