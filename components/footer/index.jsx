import Image from "next/image";
import Hackbyte3Logo from "../../public/FooterLogo/Hackbyte3Logo.png";
import webdock from "../../public/FooterLogo/webdock_footer_logo.svg";
import benq from "../../public/FooterLogo/benq_footer_logo.svg";
import linkedIn from "../../public/FooterLogo/linkedin.svg";
import instagram from "../../public/FooterLogo/instagram.svg";
import twitter from "../../public/FooterLogo/twitter.svg";
import discord from "../../public/FooterLogo/discord.svg";
import milaap from "../../public/FooterLogo/milaap.svg";
import Link from "next/link";
import AnimatedTitle from "../AnimatedTitle";
import HB4Logo from "../../public/FooterLogo/HB4Logo.png";



const sidebarLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Partners", href: "/partners" },
  //{ name: "Prizes", href: "/prizes" },
  //{ name: "Schedule", href: "/schedule" },
  { name: "Humans", href: "/humans" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <div className="md:overflow-hidden bg-[#161616]">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-start xl:mx-32 md:mx-12 mx-4 gap-6 md:gap-0 mt-12 mb-20">
        <div className="flex items-center justify-center py-4 px-2 md:px-6 mt-6 w-full">
          <Image
            src={HB4Logo}
            alt="HackByte 3.0"
            className="xxs:h-16 xs:h-20 md:h-32 w-auto"
          />

          
         
        </div>
        <div className="flex flex-col gap-2 justify-start items-start md:items-end pt-8 md:pt-16 w-full">
          <div className="text-right text-supporting-lightGray monitor:text-6xl xl:text-5xl text-3xl xs:text-4xl font-bold w-full">
            <AnimatedTitle viewport={true}>Hack the Protocol</AnimatedTitle>
          </div>
          <div className="text-right text-supporting-mediumGray monitor:text-5xl xl:text-4xl text-2xl xs:text-3xl font-normal w-full">
            <AnimatedTitle viewport={true}>Break the red tape</AnimatedTitle>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-center xl:px-32 lg:px-10 md:px-1 px-0 mt-8 bg-[#FF3044] rotate-2">
        <div className="flex flex-wrap justify-evenly xs:justify-start lg:gap-4 monitor:gap-12 xl:gap-8 gap-0 md:my-4 hover:items-start text-supporting-lightGray">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="monitor:text-lg lg:text-base text-[14px] p-2 rounded-[2.5rem] font-bold leading-snug hover:-rotate-6 transition-all duration-300"
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex md:gap-4 gap-8 xs:gap-2 monitor:gap-8 xxs:w-full md:w-auto xxs:justify-evenly xs:justify-end items-center md:static xs:absolute top-11 right-4">
          <Link href="https://www.linkedin.com/company/bitbyte-tpc">
            <Image
              src={linkedIn}
              alt="linkedIn"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.instagram.com/hackbyte.tpc">
            <Image
              src={instagram}
              alt="Instagram"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://x.com/HackbyteTPC">
            <Image
              src={twitter}
              alt="Twitter"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://discord.gg/6RDuTPnAME">
            <Image
              src={discord}
              alt="Discord"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://milaap.org/fundraisers/support-hackbyte-3-0">
            <Image
              src={milaap}
              alt="Milaap"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer rounded-md"
            />
          </Link>
        </div>
      </div>
      <div className="text-supporting-darkGray font-bold xl:text-lg md:text-base text-sm py-2 lg:pl-32 md:pl-16 pl-4">
        © 2025 Hackbyte, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
