import Image from "next/image";
import Hackbyte3Logo from "../../public/FooterLogo/Hackbyte3Logo.png";
import linkedIn from "../../public/FooterLogo/linkedin.svg";
import instagram from "../../public/FooterLogo/instagram.svg";
import twitter from "../../public/FooterLogo/twitter.svg";
import discord from "../../public/FooterLogo/discord.svg";
import milaap from "../../public/FooterLogo/milaap.svg";

const sidebarLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Partners", href: "/partners" },
  { name: "Prizes", href: "/prizes" },
  { name: "Schedule", href: "/schedule" },
  { name: "Humans", href: "/humans" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <div className="md:overflow-hidden bg-[#161616]">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-start xl:mx-32 lg:mx-20 md:mx-12 mx-4 gap-6 md:gap-0">
        <Image
          src={Hackbyte3Logo}
          alt="TPCLogo"
          className="monitor:w-[38rem] xl:w-[30rem] lg:w-[24rem] w-[20rem] pt-4"
        />
        <div className="flex flex-col gap-2 justify-start items-start md:items-end pt-8 md:pt-16 w-full">
          <div className="text-right text-supporting-lightGray monitor:text-6xl xl:text-5xl text-3xl xs:text-4xl font-bold w-full">
            Hack the Protocol
          </div>
          <div className="text-right text-supporting-mediumGray monitor:text-5xl xl:text-4xl text-2xl xs:text-3xl font-normal w-full">
            Break the red tape
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-center xl:px-32 lg:px-10 md:px-1 px-0 mt-8 bg-[#FF3044] rotate-3">
        <div className="flex flex-wrap justify-evenly xs:justify-start lg:gap-4 monitor:gap-12 xl:gap-8 gap-0 md:my-4 hover:items-start text-supporting-lightGray">
          {sidebarLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="monitor:text-lg lg:text-base text-[14px] p-2 rounded-[2.5rem] font-bold leading-snug hover:-rotate-6 transition-all duration-300"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        <div className="flex md:gap-4 gap-8 xs:gap-2 monitor:gap-8 xxs:w-full md:w-auto xxs:justify-evenly xs:justify-end items-center md:static xs:absolute top-11 right-4">
          <a href="https://www.linkedin.com/company/bitbyte-tpc">
            <Image
              src={linkedIn}
              alt="linkedIn"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/bitbyte.tpc">
            <Image
              src={instagram}
              alt="Instagram"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </a>
          <a href="https://twitter.com/BitByte_IIITDMJ">
            <Image
              src={twitter}
              alt="Twitter"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </a>
          <a href="https://discord.gg/TEATaaK9">
            <Image
              src={discord}
              alt="Discord"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </a>
          <a href="https://milaap.org/fundraisers/support-hackbyte-3-0">
            <Image
              src={milaap}
              alt="Discord"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer rounded-md"
            />
          </a>
        </div>
      </div>
      <div className="text-supporting-darkGray font-bold xl:text-lg md:text-base text-sm py-2 lg:pl-32 md:pl-16 pl-4">
        © 2025 Hackbyte, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
