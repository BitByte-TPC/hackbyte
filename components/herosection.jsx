import Image from "next/image";
import linkedIn from "../public/FooterLogo/linkedin.svg";
import instagram from "../public/FooterLogo/instagram.svg";
import twitter from "../public/FooterLogo/twitter.svg";
import discord from "../public/FooterLogo/discord.svg";
import tpclogo from "../public/HomePageLogo/tpclogo.svg";
import institutelogo from "../public/HomePageLogo/Institutelogo.svg";
import redtapeImg from "../public/HomePageLogo/Redtape.webp";

const HeroSection = () => {
  return (
    <>
      <Image src={redtapeImg} alt="Hackbyte 3.0" className=" -rotate-[5deg]" />

      <div className="flex justify-between lg:px-16 px-8 items-center lg:py-0 xl:pt-32 py-16 ">
        <div className="flex justify-center gap-4 py-12">
          <Image
            src={linkedIn}
            alt="linkedIn"
            className="w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <Image
            src={instagram}
            alt="Instagram"
            className="w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <Image
            src={twitter}
            alt="Twitter"
            className="w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <Image
            src={discord}
            alt="Discord"
            className="w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
        </div>
        <div className="flex lg:gap-16 gap-12">
          <Image
            src={tpclogo}
            alt="TPCLogo"
            className="lg:w-[325px] w-[250px]"
          />
          <Image
            src={institutelogo}
            alt="InstituteLogo"
            className="lg:w-[175px] w-[120px]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
