import Image from "next/image";
import linkedIn from "@/public/FooterLogo/linkedin.svg";
import instagram from "@/public/FooterLogo/instagram.svg";
import twitter from "@/public/FooterLogo/twitter.svg";
import discord from "@/public/FooterLogo/discord.svg";
import tpclogo from "@/public/HomePageLogo/tpclogo.svg";
import institutelogo from "@/public/HomePageLogo/Institutelogo.svg";
import redtapeImg from "@/public/HomePageLogo/Redtape.webp";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col lg:px-16 md:px-8 px-4 pb-12 pt-4 md:pt-12">
        <div className="text-4xl font-bold text-supporting-lightGray">
          Break the red tape
        </div>
        <div className="text-supporting-darkGray text-xl font-bold leading-7">
          Our Theme
        </div>
      </div>
      <Image
        src={redtapeImg}
        alt="Hackbyte 3.0"
        className=" -rotate-[5deg] md:w-full"
        priority
      />

      <div className="flex flex-col md:flex-row justify-between lg:px-16 px-8 md:items-center lg:pt-32 md:pt-16 md:pb-16 pt-2 pb-4">
        <div className="flex justify-end md:justify-center gap-4 md:py-12 pb-4 -rotate-[5deg] md:rotate-0">
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
        <div className="flex lg:gap-16 md:gap-12 gap-14 rotate-[5deg] md:rotate-0">
          <Image
            src={tpclogo}
            alt="TPCLogo"
            className="lg:w-[325px] md:w-[250px] w-48"
          />
          <Image
            src={institutelogo}
            alt="InstituteLogo"
            className="lg:w-[175px] md:w-[120px] w-24"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
