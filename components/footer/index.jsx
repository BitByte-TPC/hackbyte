import Image from "next/image";
import Hackbyte3Logo from "../../public/FooterLogo/Hackbyte3Logo.png";
import linkedIn from "../../public/FooterLogo/linkedin.svg";
import instagram from "../../public/FooterLogo/instagram.svg";
import twitter from "../../public/FooterLogo/twitter.svg";
import discord from "../../public/FooterLogo/discord.svg";

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
          <div className="text-right text-supporting-lightGray monitor:text-6xl xl:text-5xl text-4xl font-bold w-full">
            Hack the Protocol
          </div>
          <div className="text-right text-supporting-mediumGray monitor:text-5xl xl:text-4xl text-3xl font-normal w-full">
            Break the red tape
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-center xl:px-32 lg:px-16 px-0 mt-8 bg-red-500 rotate-3">
        <div className="flex flex-wrap lg:gap-4 monitor:gap-12 xl:gap-8 gap-0 md:my-4 hover:items-start text-supporting-lightGray">
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
        <div className="flex md:gap-4 gap-2 monitor:gap-8 items-center md:static absolute top-12 right-4">
          <Image
            src={linkedIn}
            alt="linkedIn"
            className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <Image
            src={instagram}
            alt="Instagram"
            className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <Image
            src={twitter}
            alt="Twitter"
            className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <Image
            src={discord}
            alt="Discord"
            className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="text-supporting-darkGray font-bold xl:text-lg md:text-base text-sm py-2 lg:pl-32 md:pl-16 pl-4">
        © 2025 Hackbyte, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
