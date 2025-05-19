import Image from "next/image";
import linkedIn from "@/public/FooterLogo/linkedin.svg";
import instagram from "@/public/FooterLogo/instagram.svg";
import twitter from "@/public/FooterLogo/twitter.svg";
import discord from "@/public/FooterLogo/discord.svg";
import milaap from "@/public/FooterLogo/milaap.svg";
import tpclogo from "@/public/HomePageLogo/tpclogo.svg";
import institutelogo from "@/public/HomePageLogo/Institutelogo.svg";
import redtapeImg from "@/public/HomePageLogo/Redtape1.svg";
import HB3_powered_logo from "@/public/HB3_powered_logo.png";
import Link from "next/link";
import BannerAnim from "@/components/BannerAnim";
// import { PulsatingButton } from "@/components/ui/pulsating-button";
import Countdown from "@/components/Countdown";
import HB4Banner from "@/public/HB4Banner.png";

const HeroSection = () => {
  {
    return (
      <>
        <div className="flex flex-col lg:px-16 md:px-8 px-4 pb-12 pt-4 md:pt-12 absolute w-full">
          <div className="w-full flex justify-between items-start">
            <div className="hidden sm:block">
              <div className="text-3xl md:text-4xl xl:text-5xl monitor:text-6xl font-bold text-supporting-lightGray">
                Break the red tape
              </div>
              <div className="text-supporting-darkGray text-xl xl:text-2xl monitor:text-3xl font-bold leading-7">
                Our Theme
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:my-32 lg:my-0 monitor:my-16">
          <div className="max-md:hidden">
            <BannerAnim />
          </div>
          <div className="md:hidden">
            <Image
              src={redtapeImg}
              alt="Redtape"
              className="md:w-full md:pt-16 lg:scale-100 md:scale-[1.3] scale-[2] pt-32 md:-mt-8 lg:-mt-0 w-full"
              priority
            />
            <Image
              src={HB3_powered_logo}
              alt="Hackbyte 3.0"
              className="w-[200px] xs:w-[250px] sm:w-[140px] md:w-[250px] lg:w-[350px] xl:w-[500px] absolute top-[95%] xs:top-[90%] sm:top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[5deg]"
            />
            <div className="max-w-[300px] absolute monitor:top-48 xl:top-40 xl:right-20 md:top-32 lg:right-12 sm:top-24 sm:mt-0 mt-44 right-0 sm:rotate-[-5deg] font-bold pr-8 hidden sm:block">
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
              </div>
            </div>
          </div>
        </div>
        {/* This btn is for the Desktop view */}
        <div className="hidden sm:flex justify-center sm:justify-end mt-4 mb-8">
          {/* <Countdown /> */}
          {/* <PulsatingButton className="px-6 xl:px-8 py-2 xl:py-3 bg-white text-[#FF3044] font-bold text-[28px] xl:text-[32px] hover:bg-black hover:text-white z-10 hover:cursor-pointer transition-colors ease-in-out duration-700">
        <a href="https://hackbyte3.devfolio.co/">Register Now!</a>
        </PulsatingButton> */}
        </div>
        <div className="flex flex-col gap-8 justify-center md:gap-0 md:flex-row md:justify-between lg:px-16 px-2 xs:px-8 md:pb-16 md: pb-4 sm:mt-0 mt-32">
          {/* This is the btn for the Mobile view */}
          <div className="sm:hidden flex justify-center md:justify-end md:mr-8 lg:mr-16 md:-mt-24 lg:-mt-12 xl:-mt-20 z-10">
            {/* <Countdown /> */}
            {/* <PulsatingButton className="px-6 xl:px-8 py-2 xl:py-3 bg-white text-[#FF3044] font-bold text-[28px] xl:text-[32px] hover:bg-black hover:text-white z-10 hover:cursor-pointer">
          <a href="https://hackbyte3.devfolio.co/">Register Now!</a>
        </PulsatingButton> */}
          </div>
          <div className="flex justify-evenly md:justify-center gap-4 md:pt-4 z-20">
            <Link href="https://www.linkedin.com/company/bitbyte-tpc">
              <Image
                src={linkedIn}
                alt="linkedIn"
                className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              />
            </Link>
            <Link href="https://www.instagram.com/hackbyte.tpc">
              <Image
                src={instagram}
                alt="Instagram"
                className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              />
            </Link>
            <Link href="https://x.com/HackbyteTPC">
              <Image
                src={twitter}
                alt="Twitter"
                className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              />
            </Link>
            <Link href="https://discord.gg/6RDuTPnAME">
              <Image
                src={discord}
                alt="Discord"
                className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              />
            </Link>
            <Link href="https://milaap.org/fundraisers/support-hackbyte-3-0">
              <Image
                src={milaap}
                alt="Milaap"
                className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer rounded-md"
              />
            </Link>
          </div>
          <div className="flex lg:gap-16 md:gap-12 gap-3 xs:gap-14 rotate-[0deg] md:rotate-0 sm:justify-start justify-end items-center">
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
  }
};

export default HeroSection;
