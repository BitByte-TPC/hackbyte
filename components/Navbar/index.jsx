"use client";

import { useState } from "react";
import classes from "./index.module.css";
import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Schedule", href: "#" },
  { label: "Team", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "#" },
];

const NavItem = ({ label, href }) => (
  <div className="group">
    <Link href={href}>
      <p className="text-lg md:text-base lg:text-lg text-center">{label}</p>
    </Link>
    <div className="mx-2"></div>
  </div>
);

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-center font-[600] text-[#7A7A7A]">
        <div
          className="hidden h-10 md:flex md:justify-center md:items-center md:space-x-10 
            px-12 py-8 rounded-full border border-solid border-gray-800 
            bg-opacity-60 backdrop-blur-md"
        >
          {navigationItems.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </div>
        <div className="md:hidden flex items-center justify-end w-full">
          <button
            id="menu-btn"
            type="button"
            className={`z-40 hamburger md:hidden focus:outline-none ${
              isMenuOpen ? classes.open : ""
            } ${classes.hamburger}`}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className={classes.hamburgerTop}></span>
            <span className={classes.hamburgerMiddle}></span>
            <span className={classes.hamburgerBottom}></span>
          </button>
        </div>
      </nav>

      <div
        id="menu"
        className={`absolute top-0 bottom-0 left-0 ${
          isMenuOpen ? "block" : "hidden"
        } w-full min-h-screen py-1 pt-40 px-8 backdrop-blur-lg`}
      >
        <div
          className="flex flex-col self-end space-y-8 text-lg text-[#9d9d9d] 
          font-medium uppercase p-8 border-1 border-[#222] rounded-[2rem] bg-[#090909]
          bg-opacity-80"
        >
          {navigationItems.map(({ label, href }) => (
            <Link href={href} key={label} className="hover:text-[#F5F5F5]">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
