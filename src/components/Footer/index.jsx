import React from "react";
import fb_icon from "../../assets/fb_icon.svg";
import ig_icon from "../../assets/ig_icon.svg";
import tweet_icon from "../../assets/tweet_icon.svg";
import ld_Icon from "../../assets/ld_icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Partners", href: "#" },
    { label: "Schedule", href: "#" },
    { label: "Team", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const footerMenuItem = ({ label, href }) => (
    <div className="group">
      <Link to={href}>
        <p className="text-lg">{label}</p>
      </Link>
      <div className="mx-2"></div>
    </div>
  );

  return (
    <>
      <div className="bg-[#000000] flex flex-col px-2 md:px-10 xl:px-28 ">
        <hr className="border-[#808080] mb-12" />
        <div className="Navmenu flex flex-wrap justify-between sm:items-center flex-col sm:flex-row gap-12 ">
          <div className="menu-items flex items-center flex-wrap mb-6 sm:mb-0 gap-6 sm:gap-10">
            {navigationItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white text-base sm:text-lg font-normal font-['Clash Grotesk'] leading-5 sm:leading-normal tracking-wide sm:tracking-tight hover:text-stone-400 relative after:content-[''] after:bg-stone-400 after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full "
              >
                {label}
              </a>
            ))}
          </div>
          <div className="socials">
            <div className="flex gap-6">
              <Link to="#">
                <img className="w-7 h-7 transition ease-in-out delay-150 hover:scale-125 duration-300" src={fb_icon} alt="" />
              </Link>

              <Link to="#">
                <img className="w-7 h-7 transition ease-in-out delay-150 hover:scale-125 duration-300" src={ig_icon} alt="" />
              </Link>
              <Link to="#">
                <img className="w-7 h-7 transition ease-in-out delay-150 hover:scale-125 duration-300" src={tweet_icon} alt="" />
              </Link>
              <Link to="#">
                <img className="w-7 h-7 transition ease-in-out delay-150 hover:scale-125 duration-300" src={ld_Icon} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-stone-400 text-lg font-normal font-['Clash Grotesk'] leading-normal tracking-tight py-20">
          © 2024 Hackbyte, All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
