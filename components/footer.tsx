import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="relative w-full flex flex-col"
      style={{
        backgroundImage: "url(/blackbgFooter.png)",
        backgroundSize: "cover",
      }}
    >
      {/*socials tape*/}
      <div className=" relative flex flex-row w-full justify-between items-center h-[216px] bg-[#62009b] border-white border-t-12 border-b-12 px-8 max-sm:h-[230px] max-sm:border-b-3 max-sm:border-t-3 max-sm:items-start max-sm:px-4 max-sm:inline-block">


        <Image
          src="/HbSmallLogo.svg"
          alt="Hackbyte logo"
          width={500}
          height={300}
          className="z-20 relative left-40 max-sm:w-[200px] max-sm:h-[100px] max-sm:-left-15 max-sm:-top-10"
        />
        <div className="flex flex-col items-end gap-6 p-4 max-sm:pr-0 max-sm:pl-0 max-sm:w-full">
          {/*pages*/}
          <div>
            <ul
              className="relative flex flex-row gap-6 justify-around text-white font-bold font-gotham text-lg 
                            max-sm:text-[70%]
                            max-sm:grid
                            max-sm:grid-cols-4
                            max-sm:gap-y-2
                            max-sm:gap-x-3
                            max-sm:w-[86%]
                            max-sm:left-[18%]
                            max-sm:bottom-25
                            max-sm:justify-items-center
                            "
            >
              <li className="text-center">
                <Link href="/">Home</Link>
              </li>
              <li className="text-center">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="text-center">
                <Link href="/faq">FAQs</Link>
              </li>
              <li className="text-center">
                <Link href="/humans">Humans</Link>
              </li>
              <li className="text-center">
                <Link href="/schedule">Schedule</Link>
              </li>
              <li className="text-center">
                <Link href="/prizes">Prizes</Link>
              </li>
              <li className="text-center">
                <Link href="/sponsors">Partners</Link>
              </li>
              <li className="text-center">
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          {/*socials*/}
          <div className="flex flex-row gap-10 justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:w-full max-sm:absolute max-sm:left-2 max-sm:top-18">
            <p className="text-white text-6xl font-extrabold font-kanit max-sm:text-3xl max-sm:block">
              Follow our socials
            </p>
            <ul className="flex flex-row gap-6 justify-between items-center">
              <li>
                <Link href="https://www.linkedin.com/company/bitbyte-tpc">
                  <Image
                    src="/linkdin.svg"
                    alt="linkedIn"
                    width={38}
                    height={38}
                    className="max-sm:w-[25px] max-sm:h-[25px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/hackbyte.tpc">
                  <Image
                    src="/insta.svg"
                    alt="instagram"
                    width={38}
                    height={38}
                    className="max-sm:w-[25px] max-sm:h-[25px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/HackbyteTPC">
                  <Image
                    src="/x.svg"
                    alt="x"
                    width={38}
                    height={38}
                    className="max-sm:w-[25px] max-sm:h-[25px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://discord.com/invite/NTueHjdPn8">
                  <Image
                    src="/discord.svg"
                    alt="discord"
                    width={38}
                    height={38}
                    className="max-sm:w-[25px] max-sm:h-[25px]"
                  />
                </Link>
              </li>
            </ul>
          </div>
          {/*copyright*/}
          <div>
            <p className="text-[#D9D9D9] font-bold opacity-51 text-lg font-gotham max-sm:top-45 max-sm:absolute max-sm:bottom-0 max-sm:text-sm max-sm:block max-sm:w-full max-sm:left-0 text-center">
              @2025 Hackbyte, All rights reserved
            </p>
          </div>
        </div>
      </div>
      {/*Broken glass*/}
      <div>
        <Image
          src="BrokenGlassFooter.svg"
          alt="broken glass"
          className="inline-block w-full"
          width={1298}
          height={138}
        />
      </div>
      {/*patch the reality*/}
      <div>
        <Image
          src="/PatchTheReality-footer.svg"
          alt="patch the reality"
          width={764}
          height={100}
          className="mx-auto mt-25 mb-10 max-sm:mt-10 max-sm:w-[360px]"
        />
      </div>
    </footer>
  )
}
