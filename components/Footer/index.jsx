import Link from "next/link";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

const Footer = () => {
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Partners", href: "/partners" },
    { label: "Prizes", href: "/prizes" },
    { label: "Schedule", href: "/schedule" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="bg-black flex flex-col px-4 md:px-10 xl:px-28">
      <hr className="border-[#808080] mb-12" />
      <div className="flex flex-col lg:flex-row gap-12 justify-between items-start">
        <div className="w-full md:w-auto flex items-center flex-wrap mb-6 sm:mb-0 gap-8 sm:gap-10">
          {navigationItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-white text-lg font-normal leading-5 md:leading-normal tracking-wide md:tracking-tight hover:text-stone-400 relative after:content-[''] after:bg-stone-400 after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>
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
      <p
        className="text-stone-400 text-lg font-normal leading-normal 
          tracking-tight pt-12 mb-8"
      >
        © 2024 Hackbyte, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
