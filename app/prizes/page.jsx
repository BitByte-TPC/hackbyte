import goldCup from "@/public/prizesPage/goldCup.png";
import silverCup from "@/public/prizesPage/silverCup.png";
import bronzeCup from "@/public/prizesPage/bronzeCup.png";
import img1 from "@/public/prizesPage/img1.png";
import img2 from "@/public/prizesPage/img2.png";
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

const prizesData = [
  {
    id: 1,
    position: "2nd",
    type: "Silver",
    amount: "15K INR",
    image: silverCup,
  },
  { id: 2, position: "1st", type: "Gold", amount: "25K INR", image: goldCup },
  {
    id: 3,
    position: "3rd",
    type: "Bronze",
    amount: "10K INR",
    image: bronzeCup,
  },
];

function PrizeCard({ position, type, amount, image }) {
  return (
    <div
      className={`flex flex-col items-start p-6 gap-8 bg-[#272727] ${
        position === "1st" && "order-[-1] md:order-[0]"
      }`}
    >
      <Image src={image} alt={`${type} Cup`} placeholder="blur" />
      <div className="w-full flex flex-col items-center">
        <p className="text-[#fff] text-[2rem] font-[500]">{`${position}-${type}`}</p>
        <p className="text-[#D1CAC7] text-[1.5rem] font-normal">Win {amount}</p>
      </div>
    </div>
  );
}

export default function Prizes() {
  return (
    <>
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-16 lg:px-20 py-40"
      >
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex flex-col items-center gap-4 md:gap-6">
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
              <p
                className="w-full text-[#C3C3C3] font-[Inter] 
                  text-center font-normal text-[1.25rem] md:text-[1.5rem]"
              >
                Winners will also get MLH winner pins 🌟
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {prizesData.map((prize) => (
                <PrizeCard key={prize.id} {...prize} />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div
                className="flex flex-col items-center gap-12 px-8 py-6 
                  md:flex-row md:px-6 bg-[#272727]"
              >
                <Image
                  src={img1}
                  alt=""
                  className="w-[10rem] h-[10rem]"
                  placeholder="blur"
                />
                <div className="w-full flex flex-col items-center md:items-start gap-4">
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
                  md:flex-row md:px-6 bg-[#272727]"
              >
                <Image
                  src={img2}
                  alt=""
                  className="w-[10rem] h-[10rem]"
                  placeholder="blur"
                />
                <div className="w-full flex flex-col items-center md:items-start gap-4">
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
