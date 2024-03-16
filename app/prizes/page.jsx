import bestBeginner from "@/public/prizesPage/best_beginner.png";
import bestGirls from "@/public/prizesPage/best_girls.png";

// Sponsor Logos
import adobeLogo from "@/public/prizesPage/adobeLogo.svg";
import mongodbLogo from "@/public/prizesPage/mongodbLogo.svg";
import godaddyLogo from "@/public/prizesPage/godaddyLogo.svg";

// Leaf Images
import leftLeaf from "@/public/prizesPage/left_leaf.svg";
import rightLeaf from "@/public/prizesPage/right_leaf.svg";

import Image from "next/image";
import CircleAnimation from "@/components/CircleAnimation";
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
    logo: adobeLogo,
    alt: "Adobe",
    price: "15k",
    title: "Most Creative Adobe Express Add-On",
    description:
      "Adobe Express is an AI-first, all-in-one content creation app that makes it fast, easy and fun to design and share videos, images, PDFs, flyers, TikToks, logos and more. Best of all, it's free to get started.",
  },
  {
    logo: mongodbLogo,
    alt: "MongoDB",
    price: "25k",
    title: "Best Use of MongoDB Atlas",
    description:
      "MongoDB Atlas takes the leading modern database and makes it accessible in the cloud! Get started with a $50 credit for students or sign up for the Atlas free forever tier (no credit card required).",
  },
  {
    logo: godaddyLogo,
    alt: "GoDaddy",
    price: "10k",
    title: "Best Domain Name from GoDaddy Registry",
    description:
      "GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win a Hack from Home Kit!",
  },
];

const SponsorCard = ({ logo, alt, price, title, description }) => (
  <div
    className="flex flex-col items-center gap-6 md:gap-12 p-4 rounded-[1rem] 
      border border-[rgba(255,255,255,0.5)] md:p-8"
    style={{
      background:
        "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
    }}
  >
    <Image src={logo} alt={alt} />

    <div className="flex justify-center items-center gap-0">
      <Image src={leftLeaf} alt="" />
      <p
        className="text-white text-center font-medium text-[4.5rem]"
        style={{
          textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
        }}
      >
        {price}
      </p>
      <Image src={rightLeaf} alt="" />
    </div>

    <div className="flex flex-col items-center gap-4">
      <p
        className="font-[500] text-[1.25rem] md:text-[1.5rem] text-center"
        style={{
          background:
            "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </p>

      <p
        className="text-[#EAECF0] font-[Inter] text-center text-[1rem] 
          md:[1.125rem] font-normal"
      >
        {description}
      </p>
    </div>
  </div>
);

export default function Prizes() {
  return (
    <>
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-16 lg:px-20 2xl:px-48 py-40"
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
              <div
                className="flex flex-col justify-center items-center py-[7.25rem] 
                  rounded-[1rem] border border-[#FFFAEF]"
                style={{
                  background:
                    "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)",
                }}
              >
                <p
                  className="text-white font-[500] text-[7rem] leading-[8rem] 
                    md:text-[10rem] md:leading-[10rem]"
                >
                  25k
                </p>
                <p
                  className="text-[rgba(255,255,255,0.66)] font-[500] font-[Inter] 
                    text-[1.5rem] md:text-[2rem]"
                >
                  1st Prize- Gold
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div
                className="flex flex-col justify-center items-center py-[7.25rem] 
                  rounded-[1rem] border border-[#FFFAEF]"
                style={{
                  background:
                    "radial-gradient(148.8% 129.29% at 94.87% 3.94%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
                }}
              >
                <p
                  className="text-white font-[500] text-[7rem] leading-[8rem] 
                    md:text-[10rem] md:leading-[10rem]"
                >
                  15k
                </p>
                <p
                  className="text-[rgba(255,255,255,0.66)] font-[500] font-[Inter] 
                    text-[1.5rem] md:text-[2rem]"
                >
                  2nd Prize- Silver
                </p>
              </div>
              <div
                className="flex flex-col justify-center items-center py-[7.25rem] 
                  rounded-[1rem] border border-[#FFFAEF]"
                style={{
                  background:
                    "radial-gradient(148.8% 129.29% at 94.87% 3.94%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
                }}
              >
                <p
                  className="text-white font-[500] text-[7rem] leading-[8rem] 
                    md:text-[10rem] md:leading-[10rem]"
                >
                  10k
                </p>
                <p
                  className="text-[rgba(255,255,255,0.66)] font-[500] font-[Inter] 
                    text-[1.5rem] md:text-[2rem]"
                >
                  3rd Prize- Bronze
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div
                className="flex flex-col items-center gap-12 px-8 py-6 
                  md:flex-row md:px-6 rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
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
                  md:flex-row md:px-6 rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
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
            className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 
              xl:grid-cols-3 pt-8 md:pt-16"
          >
            {sponsorData.map((sponsor, index) => (
              <SponsorCard key={index} {...sponsor} />
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
              text-white font-normal font-['Clash Grotesk'] md:leading-[8rem] 
                lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <CircleAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
