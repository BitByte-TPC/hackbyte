import Image from "next/image"
import Hackbyte3Logo from "../../public/FooterLogo/Hackbyte3Logo.png"
import webdock from "../../public/FooterLogo/webdock_footer_logo.svg"
import benq from "../../public/FooterLogo/benq_footer_logo.svg"
import linkedIn from "../../public/FooterLogo/linkedin.svg"
import instagram from "../../public/FooterLogo/instagram.svg"
import twitter from "../../public/FooterLogo/twitter.svg"
import discord from "../../public/FooterLogo/discord.svg"
import milaap from "../../public/FooterLogo/milaap.svg"
import Link from "next/link"
import AnimatedTitle from "../AnimatedTitle"
import hackbyte4logo from "@/public/HB4Logo.svg"

const sidebarLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Partners", href: "/partners" },
  //{ name: "Prizes", href: "/prizes" },
  //{ name: "Schedule", href: "/schedule" },
  { name: "Humans", href: "/humans" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

const Footer = () => {
  return (
    <div className="md:overflow-hidden bg-[#161616]">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-start xl:mx-32 md:mx-12 mx-4 gap-6 md:gap-0 mt-12 mb-20">
        <div className="flex items-center justify-center py-4 px-2 md:px-6 mt-6 w-full">
          <Image
            src={hackbyte4logo}
            alt="HackByte 3.0"
            className="xxs:h-32 xs:h-40 md:h-64 w-auto"
          />

          <div className="h-40 w-px bg-gray-500 mx-4 hidden md:block"></div>
          <div className="flex-col hidden md:flex">
            <div className="text-white text-5xl font-semibold mb-1">
              Will be back with
            </div>
            <div className="items-center text-white text-xl">
              <p>
                A Brand new <span className="text-red-500">Theme</span>
              </p>
              <p>
                Stronger{" "}
                <span className="uppercase font-bold">Determination</span>
              </p>
              <p>Cool Surprises🎁!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-center xl:px-32 lg:px-10 md:px-1 px-0 mt-8 bg-[#FF3044] rotate-2">
        <div className="flex flex-wrap justify-evenly xs:justify-start lg:gap-4 monitor:gap-12 xl:gap-8 gap-0 md:my-4 hover:items-start text-supporting-lightGray">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="monitor:text-lg lg:text-base text-[14px] p-2 rounded-[2.5rem] font-bold leading-snug hover:-rotate-6 transition-all duration-300"
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex md:gap-4 gap-8 xs:gap-2 monitor:gap-8 xxs:w-full md:w-auto xxs:justify-evenly xs:justify-end items-center md:static xs:absolute top-11 right-4">
          <Link href="https://www.linkedin.com/company/bitbyte-tpc">
            <Image
              src={linkedIn}
              alt="linkedIn"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.instagram.com/hackbyte.tpc">
            <Image
              src={instagram}
              alt="Instagram"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://x.com/HackbyteTPC">
            <Image
              src={twitter}
              alt="Twitter"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://discord.gg/6RDuTPnAME">
            <Image
              src={discord}
              alt="Discord"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://milaap.org/fundraisers/support-hackbyte-3-0">
            <Image
              src={milaap}
              alt="Milaap"
              className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all duration-300 cursor-pointer rounded-md"
            />
          </Link>
        </div>
      </div>
      <div className="text-supporting-darkGray font-bold xl:text-lg md:text-base text-sm py-2 lg:pl-32 md:pl-16 pl-4">
        © 2025 Hackbyte, All rights reserved
      </div>
    </div>
  )
}

export default Footer
