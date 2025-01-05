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
        <div className="text-4xl font-bold text-supporting-lightGray">
          Break the red tape
        </div>
        <div className="text-supporting-darkGray text-xl font-bold leading-7">
          Our Theme
        </div>
      </div>
      <div className="relative">
        <Image
          src={redtapeImg}
          alt="Redtape"
          className=" md:w-full pt-16"
          priority
        />
        <Image
          src={HB3Logo}
          alt="Hackbyte 3.0"
          className="w-[140px] md:w-[250px] lg:w-[350px] xl:w-[500px] absolute top-[67%] md:top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="max-w-[300px] absolute xl:top-40 xl:right-20 lg:top-32 lg:right-12 top-24 md:right-6 right-0 rotate-[-5deg] font-bold">
          <div className="text-[#ff97a1] md:text-lg lg:text-xl text-xs xl:text-2xl md:leading-7">
            Join us from
            <br />
          </div>
          <div className="text-white text-sm md:text-xl lg:text-2xl xl:text-3xl md:leading-[33.60px] max-w-32 md:max-w-64">
            4th-6th April 2025,
          </div>
          <div className="text-[#ff97a1] text-xs md:text-lg lg:text-xl xl:text-2xl md:leading-7">
            at IIITDM Jabalpur
            <br />
            for hackathon.
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between lg:px-16 px-8 md:pb-16 md: pb-4">
        <div className="flex justify-end md:justify-center gap-4 md:pt-4 -rotate-[5deg] md:rotate-0">
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
