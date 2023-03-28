import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
import hb from "../../assets/HB.svg";
import discordIcon from "../../assets/Discord_Logo.svg";
import Button from "../Button";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [activemenus, setActiveMenus] = useState(location.pathname);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActive(!active);
  };

  return (
    <>
      {
        <div className={`${styles.menu} ${active && styles.menuVisible}`}>
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={activemenus == "/" ? { color: "#fff" } : {}}
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={activemenus == "/about" ? { color: "#fff" } : {}}
          >
            ABOUT
          </Link>
          <Link
            to="/events"
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={activemenus == "/events" ? { color: "#fff" } : {}}
          >
            EVENTS
          </Link>
          <Link
            to="/speakers"
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={activemenus == "/speakers" ? { color: "#fff" } : {}}
          >
            SPEAKERS
          </Link>
          <Link
            to="/sponsors"
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={activemenus == "/sponsors" ? { color: "#fff" } : {}}
          >
            SPONSORS
          </Link>
          <Link
            to="/team"
            onClick={() => {
              setIsMenuOpen(false);
              setActive(false);
            }}
            style={activemenus == "/team" ? { color: "#fff" } : {}}
          >
            TEAM
          </Link>
        </div>
      }
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.logo} src={hb} alt="" />
        </Link>
        {location.pathname !== "/" && (
          <div className={styles.nav}>
            <Link to="/" style={activemenus == "/" ? { color: "#fff" } : {}}>
              HOME
            </Link>
            <Link
              to="/about"
              style={activemenus == "/about" ? { color: "#fff" } : {}}
            >
              ABOUT
            </Link>
            <Link
              to="/events"
              style={activemenus == "/events" ? { color: "#fff" } : {}}
            >
              EVENTS
            </Link>
            <Link
              to="/speakers"
              style={activemenus == "/speakers" ? { color: "#fff" } : {}}
            >
              SPEAKERS
            </Link>
            <Link
              to="/sponsors"
              style={activemenus == "/sponsors" ? { color: "#fff" } : {}}
            >
              SPONSORS
            </Link>
            <Link
              to="/team"
              style={activemenus == "/team" ? { color: "#fff" } : {}}
            >
              TEAM
            </Link>
          </div>
        )}
        <div className={styles.navbar_right}>
          <div className={styles.discordBtn}>
            <a href="https://discord.gg/4696xNnJ7n" target="blank">
              <Button
                type="secondary"
                text="Join Discord"
                icon={discordIcon}
                style={{ width: "150px" }}
                onClick={() => {
                  window.open("https://discord.gg/4696xNnJ7n", "_blank");
                }}
              />
            </a>
          </div>
          <div className={styles.discordIcon}>
            <a href="https://discord.gg/4696xNnJ7n">
              <img
                src={discordIcon}
                alt=""
                onClick={() => {
                  window.open("https://discord.gg/4696xNnJ7n", "_blank");
                }}
              />
            </a>
          </div>

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
      </div>
    </>
  );
};

export default Header;
