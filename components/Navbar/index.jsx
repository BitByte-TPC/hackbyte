"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import classes from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import HBMobileLogo from "@/public/HBMobileLogo.svg";
import { AnimatePresence, motion } from "framer-motion";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Partners", href: "/partners" },
  { label: "Prizes", href: "/prizes" },
  { label: "Schedule", href: "/schedule" },
  { label: "Humans", href: "/humans" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const NavItem = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <div
      className={`group relative text-[#9A9A9A] font-[600] px-6 py-2 
      rounded-full transition-all ease-in-out focus-visible:outline-2 ${
        pathname === href ? "" : "hover:bg-[#FFFFFF10]"
      }`}
    >
      <AnimatePresence initial={false} mode="wait">
        {pathname === href && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 z-10 bg-[#FFFFFF1A]  mix-blend-difference"
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            key={label}
          />
        )}
      </AnimatePresence>
      <Link href={href}>
        <p className="text-lg md:text-base lg:text-lg text-center">{label}</p>
      </Link>
      <div className="mx-2"></div>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="absolute sm:z-[2] w-full flex items-center xl:justify-center px-4 pt-8">
        <Image
          src={HBMobileLogo}
          alt="Hackathon-Mobile-Logo"
          className="md:hidden"
          width={"6rem"}
          height={"3rem"}
          priority
        />
        <div
          className="hidden h-10 xl:flex xl:justify-center xl:items-center 
            px-3 py-8 rounded-full border-2 border-solid border-gray-800 
            bg-opacity-60 backdrop-blur-xl space-x-2"
        >
          {navigationItems.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </div>
        <a
          id="mlh-trust-badge"
          className="block absolute top-0 w-[10%] z-10000 max-w-[65px] min-w-[60px] 
            right-[100px] md:right-[120px] xl:right-[80px]"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            className="w-full hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </a>

        <div className="flex items-center justify-end w-full xl:hidden">
          <button
            id="menu-btn"
            aria-label="Toggle Menu"
            type="button"
            className={`z-40 hamburger xl:hidden focus:outline-none ${
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
        className={`absolute z-[1] top-0 bottom-0 left-0 ${
          isMenuOpen ? "block" : "hidden"
        } w-full min-h-screen py-1 pt-40 px-8 backdrop-blur-lg`}
      >
        <div
          className="flex flex-col self-end space-y-8 text-lg text-[#9d9d9d] 
            font-medium uppercase p-8 border-1 border-[#222] rounded-[2rem] 
            bg-[#090909] bg-opacity-80"
        >
          {navigationItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="hover:text-[#F5F5F5]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
