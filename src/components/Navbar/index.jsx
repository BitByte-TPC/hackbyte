import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link
        to="/"
        style={{
          color: "#fff",
        }}
      >
        HOME
      </Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/events">EVENTS</Link>
      <Link to="/speakers">SPEAKERS</Link>
      <Link to="/sponsors">SPONSORS</Link>
      <Link to="/team">TEAM</Link>
    </div>
  );
};

export default Navbar;
