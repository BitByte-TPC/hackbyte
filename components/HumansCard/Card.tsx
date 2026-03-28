import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon
} from "@radix-ui/react-icons";
import beLogo from "@/public/behanceLogo.svg"

interface HumanCardProps {
  name: string;
  role?: string;
  image: StaticImageData;
  linkedin?: string;
  twitter?: string;
  github?: string;
  behance?: string;
  instagram?: string;
}

export default function HumanCard({
  name,
  role,
  image,
  linkedin,
  twitter,
  github,
  instagram,
  behance
}: HumanCardProps) {
  return (
    <div className="w-full max-w-[300px] flex flex-col gap-3">
      <div className=" relative
  w-full
  aspect-square
  rounded-2xl
  bg-white
  overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-[0.25em] items-start pl-1">
        {role && (
          <p
            className="
              text-[#777777] font-Poppins text-sm sm:text-base font-semibold leading-[140%]
            "
          >
            {role}
          </p>
        )}
        <p
          className="
            text-white font-Kanit text-xl sm:text-2xl font-semibold leading-[140%]
          "
        >
          {name}
        </p>
        <div className="flex gap-[0.5em] items-start text-[#777777]">
          {linkedin && (
            <Link href={linkedin} target="_blank">
              <LinkedInLogoIcon className="w-[1em] h-[1em]" />
            </Link>
          )}
          {twitter && (
            <Link href={twitter} target="_blank">
              <TwitterLogoIcon className="w-[1em] h-[1em]" />
            </Link>
          )}
          {instagram && (
            <Link href={instagram} target="_blank">
              <InstagramLogoIcon className="w-[1em] h-[1em]" />
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank">
              <GitHubLogoIcon className="w-[1em] h-[1em]" />
            </Link>
          )}
          {behance && (
            <Link href={behance} target="_blank">
              <Image src={beLogo} alt="behance" className="w-[1em] h-[1em]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
