"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

const HumansCard = ({ index, Name, role, profilepic, linkenin, twitter, github }) => {
  const defaultOptions = {
    reverse: false,
    max: 8,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  const defaultGradient =
    "radial-gradient(100% at center, #363636 100%, #1A1A1A 27%)";

  return (
    <>
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
          y: index % 3 === 1 ? 20 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <div
          className="w-[260px]shadow text-white rounded-[8px] flex flex-col gap-3"
          style={{
            background: defaultGradient,
          }}
        >
          <Image
            src={profilepic}
            className="rounded-[8px] outline-none w-[260px] h-[320px]"
            placeholder="blur"
            alt="Profile Picture"
          />

          <div className="w-full flex flex-col gap-2 rounded-b-[8px] p-1">
            <p className="sm:text-2xl text-xl text-white">{Name}</p>
            <p className="text-[#D1CAC7] sm:text-xl text-lg leading-9 font-[Inter]">
              {role}
            </p>
            <div className="flex gap-6 py-2">
              <SocialMediaIcon
                href={linkenin}
                Icon={LinkedInLogoIcon}
              />
              <SocialMediaIcon
                href={twitter}
                Icon={TwitterLogoIcon}
              />
              <SocialMediaIcon
                href={github}
                Icon={GitHubLogoIcon}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HumansCard;
