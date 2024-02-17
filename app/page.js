import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import hackbyteLogo from "@/public/hackbyteLogo.png";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

export default function Home() {
  return (
    <div
      className="flex flex-col justify-around min-h-screen
        bg-cover p-4 md:px-12 md:py-4"
      style={{
        backgroundColor: "#000",
        backgroundImage: "url(/background.png)",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <div className="flex flex-wrap justify-between items-center pt-16 gap-4 xl:pt-4 lg:gap-0">
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <p
            className="text-[#FAF8ED] text-[2.375rem] font-medium leading-[1.2] 
                lg:leading-[1.1] lg:text-[3rem]"
          >
            This year&apos;s theme <br /> unveils in April ...
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 w-full lg:items-end lg:w-1/2">
          <p
            className="text-[#FAF8ED] text-[1.25rem] font-medium text-left 
              lg:text-right lg:text-[1.5rem]"
          >
            — Round 1 kicks off at
            <br /> 5 April 2024, IIIT Jabalpur
          </p>
          <a href="https://hackbyte2.devfolio.co/" target="_blank">
            <Button
              size="sm"
              className="bg-[#FAF8ED] text-black text-[1.125rem] font-medium uppercase 
                p-6 rounded-none hover:bg-[#FAF8ED] hover:text-black"
              style={{
                boxShadow:
                  "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
              }}
            >
              Register Now
              <ArrowTopRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center my-12 xl:my-4">
        <Image
          src={hackbyteLogo}
          alt="HackByte Logo"
          className="max-w-[30rem] min-w-[15rem] w-[70%] 2xl:max-w-[32rem] brightness-120"
          priority
        />
      </div>

      <div className="flex items-center justify-between gap-4 mt-8 xl:mt-4">
        <div className="flex flex-col items-start gap-2">
          <p
            className="text-[#FAF8ED] text-[1rem] font-[600]
               md:text-[1.125rem]"
          >
            HackByte: Empower Your Digital Odyssey!
          </p>
          <div className="flex items-stretch">
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center gap-4">
                <img
                  src="/tpcLogo.svg"
                  alt="TPC Logo"
                  className="w-[4rem] h-[2.125rem]"
                />
                <p className="text-[#FAF8ED] text-[0.75rem] font-[600]">
                  Organised by
                  <br className="hidden md:block" /> The Programming Club of
                  IIITDMJ
                </p>
              </div>
            </div>
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center">
                <img
                  src="/iiitdmjLogo.svg"
                  alt="IIITDMJ Logo"
                  className="w-[5.5rem] h-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-end gap-4 lg:max-w-[24rem] xl:max-w-md">
          <p className="text-[#FAF8ED] text-[1rem] xl:text-[1.125rem] font-[600] text-right">
            HackByte: Empower Your Digital Odyssey!
          </p>
          <div className="flex gap-6">
            <SocialMediaIcon
              href="https://www.instagram.com/hackbyte.tpc/"
              Icon={InstagramLogoIcon}
            />
            <SocialMediaIcon
              href="https://twitter.com/HackbyteTPC"
              Icon={TwitterLogoIcon}
            />
            <SocialMediaIcon
              href="https://www.linkedin.com/company/bitbyte-tpc/"
              Icon={LinkedInLogoIcon}
            />
            <SocialMediaIcon
              href="https://discord.gg/NTueHjdPn8"
              Icon={DiscordLogoIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
