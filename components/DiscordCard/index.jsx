import Image from "next/image";
import HB3Logo from "@/public/HomePageLogo/HB3Logo.svg";
import discord from "@/public/FooterLogo/discord.svg";
import * as motion from "motion/react-client";
import Link from "next/link";
import HB4Logo from "@/public/HB4Logo.png";


export default function DiscordCard() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 relative">
      <motion.div
        initial={{
          y: 200,
        }}
        viewport={{ once: true }}
        whileInView={{
          y: [200, 0, 0, 0],
          rotate: [0, 0, 3, 3],
          transition: {
            ease: [0, 0.71, 0.2, 1.01],
            times: [0, 0, 1.8, 2],
            duration: 2,
            type: "spring",
            bounce: 0.5,
          },
        }}
        className=" bg-[#FF3044] rounded-[32px] w-[80%] h-[360px] xs:h-[385px] min-[410px]:h-[370px] md:h-[500px] lg:h-[560px] transform -z-10"
      ></motion.div>
      <motion.div
        initial={{
          y: 200,
        }}
        viewport={{ once: true }}
        whileInView={{
          y: [200, 0, 0, 0],
          rotate: [0, 0, -5, -5],
          transition: {
            ease: [0, 0.71, 0.2, 1.01],
            times: [0, 0, 1.8, 2],
            duration: 2,
            type: "spring",
            bounce: 0.5,
          },
        }}
        className="bg-white rounded-[32px] absolute top-0 w-[80%] md:h-[500px] lg:h-[560px] flex flex-col gap-2 md:gap-8 px-4 md:px-8 lg:px-12 py-4 lg:pt-8"
      >
        <div className="text-xl text-black xs:text-2xl md:text-4xl monitor:text-6xl xl:text-5xl font-bold mb-2 flex gap-2 items-center">
          Join our Discord <span className="hidden md:block">Server!</span>
        </div>
        <p className="text-[#161616] mb-4 md:mb-0 text-sm xs:text-base md:text-xl lg:text-2xl monitor:text-3xl font-normal max-w-full md:max-w-[90%] leading-[140%]">
          To stay up-to-date with{" "}
          <span className="font-bold">HackByte 4.0</span>, consider joining our
          discord.
          <span className="hidden lg:inline">
            {" "}
            Helps us share important updates right away with hackers and
            enthusiasts alike!
          </span>
        </p>

        <div className="flex justify-between items-start">
          <ul className="space-y-2 md:space-y-4 lg:space-y-6 text-[#FF3044] font-bold text-sm xs:text-base md:text-lg monitor:text-2xl xl:text-xl leading-[140%]">
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O</span>
              Get the latest news and announcements.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O</span> Get notified
              for exciting events!
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O</span> Connect with
              like-minded individuals.
            </li>
            <Link
              className="max-w-[214px] h-12 md:h-[64px] flex gap-4 justify-center items-center bg-[#5966f3] rounded-[55px] hover:scale-110 transition-all duration-300 cursor-pointer"
              href="https://discord.gg/6RDuTPnAME"
            >
              <div className="text-white text-[32px] font-bold font-gotham">
                Join
              </div>
              <Image
                src={discord}
                alt="Discord"
                className="w-6 md:w-7 xl:w-8 hover:animate-shrug transition-all duration-300 cursor-pointer"
              />
            </Link>
          </ul>

          <Image
            src={HB4Logo}
            alt="HackByte 4.0 Logo"
            className="mt-12 monitor:mt-0 md:w-40 lg:w-48 monitor:w-72 xl:w-64 hidden md:block"
          />
        </div>
      </motion.div>
    </div>
  );
}
