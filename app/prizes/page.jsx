import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import PrizeCard from "@/components/PrizeCard";
import TSPrizeCard from "@/components/TSPrizeCard";
import LogitechTrackCard from "@/components/LogitechTrackCard";
import Image from "next/image";

import bestBeginner from "@/public/prizesPage/best_beginner.png";
import bestGirls from "@/public/prizesPage/best_girls.png";

import leftLeaf from "@/public/schedulePage/leftLeaf.svg";
import rightLeaf from "@/public/schedulePage/rightLeaf.svg";

import img1 from "@/public/prizesPage/img1.svg";
import img2 from "@/public/prizesPage/img2.svg";
import img3 from "@/public/prizesPage/img3.svg";
import img4 from "@/public/prizesPage/img4.svg";
import prizeImg1 from "@/public/prizesPage/prizeImg1.webp";
import prizeImg2 from "@/public/prizesPage/prizeImg2.webp";
import prizeImg3 from "@/public/prizesPage/prizeImg3.webp";

// Sponsor Logos
import mongodbLogo from "@/public/prizesPage/mongodbLogo.svg";
import godSpeedLogo from "@/public/prizesPage/godSpeedLogo.png";
import godaddyLogo from "@/public/prizesPage/godaddyLogo.svg";
import virtualProtocolLogo from "@/public/prizesPage/virtualProtocolLogo.png";
import auth0Logo from "@/public/prizesPage/auth0Logo.svg";
import taipyLogo from "@/public/prizesPage/taipyLogo.svg";
import wolframLogo from "@/public/prizesPage/wolframLogo.png";
import postmanLogo from "@/public/prizesPage/postmanLogo.jpg";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Prizes | HackByte",
  description:
    "Discover the exciting prizes at HackByte! Explore the rewards, recognition, and opportunities awaiting you. Connect with us for more information on IIIT Jabalpur's hackathon.",
  keywords:
    "Hackathon prizes, Rewards, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech",
  openGraph: {
    title: "Prizes | HackByte",
    description:
      "Discover the exciting prizes at HackByte! Explore the rewards, recognition, and opportunities awaiting you. Connect with us for more information on IIIT Jabalpur's hackathon.",
    url: "https://hackbyte.in/prizes",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const sponsorData = [
  {
    logo: postmanLogo,
    alt: "Postman",
    title: "Best API Design and use of postman for docs",
    supportText: "Postman Swag Kit",
    description:
      "Postman offers a complete toolkit for the API lifecycle, accelerating design, testing, documentation, and sharing among millions of developers.",
    docLink:
      "https://docs.google.com/document/d/1TXbfdm_3N70MC3S43Yuhl_p2LDFoXMuO5ha8WfAETpc/edit?usp=sharing",
  },
  {
    logo: mongodbLogo,
    alt: "MongoDB",
    title: "Best Use of MongoDB Atlas",
    supportText: "M5GO IoT Starter Kit",
    description:
      "MongoDB Atlas takes the leading modern database and makes it accessible in the cloud! Get started with a $50 credit for students or sign up for the Atlas free forever tier (no credit card required).",
  },
  {
    logo: godSpeedLogo,
    alt: "GodSpeed",
    title: "Innovative use of Godspeed Systems",
    supportText: "Godspeed Swag pack",
    description:
      "Unleash your creativity with Godspeed ! Make use of any offering that Godspeed provides to bring your ideas to life. This category welcomes truly silly and fun submissions, so feel free to dream big and get ridiculously creative!",
    docLink:
      "https://docs.google.com/document/d/15YHM6PuHMMrMLNhDJt_PxEELtkW_QXnlAubIQ9mFTFg/edit",
  },
  {
    logo: godaddyLogo,
    alt: "GoDaddy",
    title: "Best Domain Name from GoDaddy Registry",
    supportText: "Hack from Home Kit",
    description:
      "GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win a Hack from Home Kit!",
  },
  {
    logo: virtualProtocolLogo,
    alt: "Virtual Protocol",
    title: "Best AI use case",
    supportText: "Cash Prize of 15k",
    description:
      "Create an AI-driven solution revolutionizing Gaming, Social, or Digital Entertainment. Utilize Gen AI to enrich UX, simplify content creation, boost social interaction, or innovate entertainment experiences.",
    docLink:
      "https://docs.google.com/document/d/1ReAl3V-HbWDOqwfxRar0dn_IxAGD4wEFTKTtgXayWEs/edit?usp=sharing",
  },
  {
    logo: auth0Logo,
    alt: "Auth0",
    title: "Best Use of Auth0",
    supportText: "Wireless Headphones & Battery Pack",
    description:
      "Secure your applications with Auth0's hassle-free features like social sign-in and Multi-Factor Authentication. No credit card needed, try it free for up to 7,000 users. Plus, enter to win wireless headphones and battery packs for your team by using Auth0 APIs!",
  },
  {
    logo: taipyLogo,
    alt: "Taipy",
    title: "Best Use of Taipy",
    supportText: "Wireless Headphones",
    description:
      "Taipy empowers Python developers with rapid web app creation, simplifying UI design and backend integration. Win Wireless Headphones & website feature by incorporating Taipy into your hackathon project!",
  },
  {
    logo: wolframLogo,
    alt: "Wolfram",
    title: "The Top 7 teams",
    supportText: "The Wolfram Award",
    description:
      "Each member of the top 7 teams will receive the Wolfram Award, which includes a one-year subscription to Wolfram | One Personal Edition and Wolfram | Alpha Pro, worth $375.",
  },
];

const logitechTracksData = [
  {
    imgSrc: img1,
    title: "Blind Type",
    description:
      "Played in team of two, one person is blindfolded and the other one has to speak out the text and the blindfolded one types it. The team with most WordsPerMinute wins.",
    prize: "K950 Wireless Keyboard",
    prizeImg: prizeImg1,
    borderColor: "#E5F1FF",
    bgColor:
      "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(255, 209, 233, 0.10) 0%, rgba(255, 212, 234, 0.02) 100%)",
  },
  {
    imgSrc: img2,
    title: "Trending Tweet",
    description:
      "Tweet about the most fun and interesting moments during HackByte, tag HackByte and Logitech. The one with the maximum engagement gets the amazing POP Mouse.",
    prize: "Logitech POP Mouse",
    prizeImg: prizeImg2,
    borderColor: "#E5F1FF",
    bgColor:
      "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
  },
  {
    imgSrc: img3,
    title: "Stress Buster",
    description:
      "Feeling tense about finding that bug in your code? Join us for a fun game to recharge! The best moments will be recorded and compiled into a reel.",
    prize: "Logitech M240",
    prizeImg: prizeImg3,
    borderColor: "#E5FFF1",
    bgColor:
      "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 255, 183, 0.10) 0%, rgba(109, 217, 156, 0.02) 100%)",
  },
  {
    imgSrc: img4,
    title: "Snap It if You Can",
    description:
      "A short insta pause game, we'll explain you this in subsequent announcements",
    prize: "Logitech POP Mouse",
    prizeImg: prizeImg2,
    borderColor: "#FFFAEF",
    bgColor:
      "radial-gradient(129.97% 124.9% at 0% 6.52%, #38351C 0%, rgba(56, 53, 28, 0.17) 100%)",
  },
];

export default function Prizes() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 2xl:px-32 py-40"
      >
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#F5F0D8] text-[2.25rem] font-normal md:text-[5rem]">
              Prizes
            </p>
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <p
                className="w-full lg:max-w-[80%] text-[#C3C3C3] font-[Inter] 
                  text-center font-normal text-[1.25rem] md:text-[1.5rem]"
              >
                Collaborate and innovate to build something awesome ! All
                monetary prizes will be split equally among the winning team
                members.
              </p>
              <div className="rounded-full border border-[#D1CAC7] px-4 py-1">
                <p
                  className="w-full text-[#C3C3C3] font-[Inter] 
                  text-center font-normal text-[1.25rem] md:text-[1.5rem]"
                >
                  Winners will also get MLH winner pins 🌟
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="grid grid-cols-1">
              <PrizeCard
                amount="25K"
                category="1st prize- Gold"
                default_bg="radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)"
                hover_bg="radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <PrizeCard
                amount="15K"
                category="2nd prize- Silver"
                default_bg="radial-gradient(148.8% 129.29% at 94.87% 3.94%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)"
                hover_bg="radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)"
              />
              <PrizeCard
                amount="10K"
                category="3rd prize- Bronze"
                default_bg="radial-gradient(148.8% 129.29% at 94.87% 3.94%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)"
                hover_bg="radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div
                className="flex flex-col items-center gap-12 px-8 py-6 
                  md:flex-row md:px-6 rounded-[8px] border border-[rgba(255,255,255,0.5)]"
                style={{
                  background:
                    "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
                }}
              >
                <Image
                  src={bestGirls}
                  alt=""
                  className="w-[6.5rem] h-[6.5rem]"
                  placeholder="blur"
                />
                <div className="w-full flex flex-col items-center md:items-start gap-2">
                  <p className="text-[#fff] text-[2rem] font-normal">
                    Best Girls Team
                  </p>
                  <p
                    className="text-[#C3C3C3] text-[1.25rem] font-normal 
                      text-center md:text-left"
                  >
                    Best performing All-Girls Team at HackByte
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center gap-12 px-8 py-6 
                  md:flex-row md:px-6 rounded-[8px] border border-[rgba(255,255,255,0.5)]"
                style={{
                  background:
                    "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
                }}
              >
                <Image
                  src={bestBeginner}
                  alt=""
                  className="w-[6.5rem] h-[6.5rem]"
                  placeholder="blur"
                />
                <div className="w-full flex flex-col items-center md:items-start gap-2">
                  <p className="text-[#fff] text-[2rem] font-normal">
                    First Time Hacking?
                  </p>
                  <p
                    className="text-[#C3C3C3] text-[1.25rem] font-normal 
                      text-center md:text-left"
                  >
                    For freshmen and novices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logitech Tracks Section */}
        <div id="logitech-tracks" className="w-full flex flex-col pt-24">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <p
              className="text-[#F5F0D8] text-center font-normal text-[2.25rem] 
                md:text-[5rem] leading-10 md:leading-[5rem] xl:leading-[4.5rem]"
            >
              Exclusive Tracks by Logitech
            </p>
            <p
              className="w-full xl:max-w-[70%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              Get to interact and learn more about the amazing{" "}
              <span className="font-semibold">Master Series</span> by Logitech
              and win amazing prizes along the way!
            </p>
          </div>

          <div
            className="mt-[4.5rem] px-[1rem] md:px-[3.5rem] py-[4.5rem] 
              rounded-[8px] border-2 border-[rgba(255,255,255,0.5)]"
            style={{
              background:
                "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)",
            }}
          >
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <div className="flex justify-center items-center gap-0">
                <Image
                  src={leftLeaf}
                  alt="leaf"
                  className="w-10 h-10 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                />
                <p
                  className="text-white text-center font-medium text-[1.125rem] 
                    md:text-[2.25rem] lg:text-[3rem]"
                  style={{
                    textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
                  }}
                >
                  Logitech Macro Challenge
                </p>
                <Image
                  src={rightLeaf}
                  alt="leaf"
                  className="w-10 h-10 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                />
              </div>

              <p
                className="w-full xl:max-w-[85%] text-[#EAECF0] text-center font-normal text-[1.25rem] 
                  md:text-[1.5rem]"
              >
                Enter Logitech's Smart Action Hack challenge: automate tasks
                with a keystroke using MX Master series and Logi Options+ to win
                MX Master 3s and MX Keys S! 🚀
              </p>

              <a href="https://forms.gle/xHMjGfZja8NxmneW9" target="_blank">
                <Button
                  size="sm"
                  className="bg-[#FAF8ED] text-black text-[1.125rem] font-semibold 
                    p-6 rounded-none hover:bg-[#FAF8ED] hover:text-black 
                    hover:scale-105 transition-transform ease-in-out duration-300"
                  style={{
                    boxShadow:
                      "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
                  }}
                >
                  Submit your macro idea
                  <ArrowTopRightIcon className="w-5 h-5 ml-1" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center mt-[4.5rem]">
            <p
              className="text-[#F5F0D8] text-center font-normal text-[2.25rem] 
                md:text-[5rem] leading-10 md:leading-[5rem] xl:leading-[4.5rem]"
            >
              Explore more tracks by Logitech
            </p>

            <div
              className="w-full grid grid-cols-1 xl:grid-cols-2 place-content-center 
                place-items-center gap-8 xl:gap-12 mt-[4.5rem]"
            >
              {logitechTracksData.map((card, index) => (
                <LogitechTrackCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>

        {/* Sponsor Tracks Section */}
        <div className="w-full flex flex-col pt-24">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <p className="text-[#F5F0D8] text-[2.25rem] font-normal md:text-[5rem]">
              Sponsor Tracks
            </p>
            <p
              className="w-full lg:max-w-[80%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              Explore our sponsor tracks and leverage their technologies to
              bring your projects to life! All monetary prizes will be split
              equally among the winning team members.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-6 md:gap-8 min-[820px]:grid-cols-2 
              xl:grid-cols-3 pt-8 md:pt-16"
          >
            {sponsorData.map((sponsor, index) => (
              <TSPrizeCard key={index} index={index} {...sponsor} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
          px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
            tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </div>
  );
}
