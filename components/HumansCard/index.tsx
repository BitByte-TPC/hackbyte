import Image, { StaticImageData } from "next/image";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import behanceLogo from "../../public/behanceLogo.svg";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ComponentType } from "react";
import Link from "next/link";

interface SocialMediaIconProps {
  Icon: ComponentType<IconProps>;
  href: string;
}

const SocialMediaIcon = ({ Icon, href }: SocialMediaIconProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title="Social Media Link"
  >
    <Icon
      className="w-7 h-7 bg-[#161616] text-supporting-darkGray transition ease-in-out delay-150 
		hover:scale-125 duration-300"
    />
  </Link>
);

interface HumansCardProps {
  index: number;
  name: string;
  role?: string;
  profilepic: StaticImageData;
  linkedin: string;
  twitter: string;
  github: string;
  behance?: string;
}

const HumansCard: React.FC<HumansCardProps> = ({
  name,
  role,
  profilepic,
  linkedin,
  twitter,
  github,
  behance
}: HumansCardProps) => {
  return (
    <>
      <div className="flex flex-col gap-3 p-[16px] shadow text-white justify-center items-center">
        <Image
          src={profilepic}
          className="w-[232px] h-[232px] outline-none object-cover rounded-[12px]"
          placeholder="blur"
          alt="Profile Picture"
        />

        <div className="w-full flex flex-col gap-2 rounded-b-[8px]">
          <p className="sm:text-xl text-lg text-white font-bold">{name}</p>
          {role && (
            <p className="font-bold text-supporting-mediumGray text-md sm:text-md leading-9">
              {role}
            </p>
          )}
          <div className="flex gap-6">
            <SocialMediaIcon href={linkedin} Icon={LinkedInLogoIcon} />
            <SocialMediaIcon href={twitter} Icon={TwitterLogoIcon} />
            { !behance ? (
              <SocialMediaIcon href={github} Icon={GitHubLogoIcon} />
            ) : (
              <Link
                href={behance}
                target="_blank"
                rel="noopener"
                title="Behance Profile"
              >
                <Image
                  src={behanceLogo}
                  className="w-7 h-7"
                  alt="Behance Logo"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HumansCard;
