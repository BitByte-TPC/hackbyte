import Image from "next/image";
import linkedIn from "@/public/FooterLogo/linkedin.svg";
import instagram from "@/public/FooterLogo/instagram.svg";
import twitter from "@/public/FooterLogo/twitter.svg";
import discord from "@/public/FooterLogo/discord.svg";
import tpclogo from "@/public/HomePageLogo/tpclogo.svg";
import institutelogo from "@/public/HomePageLogo/Institutelogo.svg";
import redtapeImg from "@/public/HomePageLogo/Redtape1.svg";
import HB3Logo from "@/public/HomePageLogo/HB3Logo.svg";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col lg:px-16 md:px-8 px-4 pb-12 pt-4 md:pt-12 absolute">
        <div className="text-3xl md:text-4xl xl:text-5xl monitor:text-6xl font-bold text-supporting-lightGray">
          Break the red tape
        </div>
        <div className="text-supporting-darkGray text-xl xl:text-2xl monitor:text-3xl font-bold leading-7">
          Our Theme
        </div>
      </div>
      <div className="relative md:my-32 lg:my-0 monitor:my-16">
        <Image
          src={redtapeImg}
          alt="Redtape"
          className=" md:w-full md:pt-16  lg:scale-100 md:scale-[1.3] scale-[2] pt-40"
          priority
        />
        <Image
          src={HB3Logo}
          alt="Hackbyte 3.0"
          className=" w-[250px] sm:w-[140px] md:w-[250px] lg:w-[350px] xl:w-[500px] absolute top-[98%] sm:top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />
        <div className="max-w-[300px] absolute monitor:top-48 xl:top-40 xl:right-20 md:top-32 lg:right-12 sm:top-24 sm:mt-0 mt-44 right-0 sm:rotate-[-5deg] font-bold pr-8">
          <div className="sm:text-[#ff97a1] text-white/50 sm:text-lg lg:text-xl text-xl monitor:text-3xl xl:text-2xl md:leading-7 sm:text-start text-end">
            Join us from
            <br />
          </div>
          <div className="text-white text-2xl sm:text-sm md:text-xl lg:text-2xl monitor:text-4xl xl:text-3xl md:leading-[33.60px] max-w-[80vw] sm:max-w-32 md:max-w-64 ">
            4th-6th April 2025,
          </div>
          <div className="sm:text-[#ff97a1] text-white/50 text-lg sm:text-xs md:text-lg lg:text-xl xl:text-2xl md:leading-7 sm:text-start text-end">
            at IIITDM Jabalpur
            <br />
            for hackathon
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between lg:px-16 px-8 md:pb-16 md: pb-4 sm:mt-0 mt-14">
        <div className="hidden justify-end md:justify-center gap-4 md:pt-4 -rotate-[5deg] md:rotate-0 sm:flex ">
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
        <div className="flex lg:gap-16 md:gap-12 gap-14 rotate-[0deg] md:rotate-0 sm:mt-0 mt-72 sm:justify-start justify-end">
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
