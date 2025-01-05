import Image from "next/image";
import stats from "@/public/HomePageLogo/redtape2.png";
import HeroSection from "@/components/Herosection";
import Newsletter from "@/components/Newsletter";
import whyParticipate from "@/public/HomePageLogo/whyParticipate.webp";
import g1 from "@/public/HomePageLogo/g1.svg";
import g2 from "@/public/HomePageLogo/g2.svg";
import g3 from "@/public/HomePageLogo/g3.svg";
import g4 from "@/public/HomePageLogo/g4.svg";
import g5 from "@/public/HomePageLogo/g5.svg";
import g6 from "@/public/HomePageLogo/g6.svg";
import g7 from "@/public/HomePageLogo/g7.svg";
import g8 from "@/public/HomePageLogo/g8.svg";
import g9 from "@/public/HomePageLogo/g9.svg";

interface GuidlinesCard {
  title: string;
  description: string;
  icon: string;
}

export default function Home() {
  const Guidelines = [
    {
      icon: g1,
      title: "Register with Ease",
      description:
        "Pre-registration opens January 2025—no red tape, just one click away!",
    },
    {
      icon: g2,
      title: "No Prerequisites",
      description:
        "Anyone can join, no prerequisites—just bring your creativity!",
    },
    {
      icon: g3,
      title: "Form Team",
      description:
        "Go solo or team up with 2-4 members; join our Discord to find teammates and get the latest updates!",
    },
    {
      icon: g4,
      title: "Flexible Teams",
      description:
        "Add teammates later by submitting an individual application, and they’ll be added once approved.",
    },
    {
      icon: g5,
      title: "Zero Fees, Full Perks",
      description: "No cost to participate, plus free meals and accommodation.",
    },
    {
      icon: g6,
      title: "Free Food",
      description:
        "Enjoy complimentary meals, water, and coffee throughout the event.",
    },
    {
      icon: g7,
      title: "In-person Event",
      description: "HackByte 3.0 is an in-person / offline hackathon event.",
    },
    {
      icon: g8,
      title: "Hassle-Free Stay",
      description:
        "Shared hall accommodations with mattresses—simple and sorted.",
    },
    {
      icon: g9,
      title: "Venue",
      description:
        "IIITDM Jabalpur awaits—explore the campus and bring ideas to life.",
    },
  ];

  function GuidelinesCard({ title, description, icon }: GuidlinesCard) {
    return (
      <div className="card flex gap-4 items-start ">
        <Image src={icon} alt="Icon" className="xl:w-20 md:w-16 pt-1" />
        <div className="flex flex-col justify-center gap-2">
          <div className="xl:text-3xl lg:text-2xl text-xl text-white font-bold">
            {title}
          </div>
          <div className="text-sm lg:text-base xl:text-lg font-normal text-supporting-darkGray md:max-w-64 lg:max-w-[500px] leading-[1.5rem]">
            {description}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="md:overflow-hidden">
      <HeroSection />
      <div className="relative">
        <Image src={stats} alt="Stats" className=" md:w-full" />
        <div className="w-full flex justify-evenly rotate-[5deg] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="max-w-[90px] md:max-w-[250px] text-center flex flex-col items-center gap-2 lg:gap-4">
            <div className="font-black text-xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
              2437
            </div>
            <div className="font-bold text-xs md:text-2xl lg:text-3xl xl:text-4xl text-white">
              Registrations
            </div>
            <div className="font-bold text-xs md:text-base lg:text-lg xl:text-xl text-[#FFC1C7]">
              2400+ registrations from across the country.
            </div>
          </div>
          <div className="max-w-[90px] md:max-w-[250px] text-center flex flex-col items-center gap-2 lg:gap-4">
            <div className="font-black text-xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
              420
            </div>
            <div className="font-bold text-xs md:text-2xl lg:text-3xl xl:text-4xl text-white">
              Registrations
            </div>
            <div className="font-bold text-xs md:text-base lg:text-lg xl:text-xl text-[#FFC1C7]">
              2400+ registrations from across the country.
            </div>
          </div>
          <div className="max-w-[90px] md:max-w-[250px] text-center flex flex-col items-center gap-2 lg:gap-4">
            <div className="font-black text-xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
              100+
            </div>
            <div className="font-bold text-xs md:text-2xl lg:text-3xl xl:text-4xl text-white">
              Volunteers
            </div>
            <div className="font-bold text-xs md:text-base lg:text-lg xl:text-xl text-[#FFC1C7]">
              To help you, get the best out of HackByte.
            </div>
          </div>
          <div className="max-w-[90px] md:max-w-[250px] text-center flex flex-col items-center gap-2 lg:gap-4">
            <div className="font-black text-xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
              100+
            </div>
            <div className="font-bold text-xs md:text-2xl lg:text-3xl xl:text-4xl text-white">
              Projects
            </div>
            <div className="font-bold text-xs md:text-base lg:text-lg xl:text-xl text-[#FFC1C7]">
              Innovative submissions from various domains.
            </div>
          </div>
        </div>
      </div>

      {/* Why Participate */}
      <div className="flex flex-col items-center gap-4 md:gap-16 md:py-28 py-20">
        <div className=" text-supporting-lightGray lg:text-5xl xl:text-6xl md:text-4xl text-2xl font-bold leading-[64px]">
          Why Participate in Hackbyte 3.0?
        </div>
        <Image
          src={whyParticipate}
          alt="Why Participate"
          className="xl:w-[800px] lg:w-[700px] md:w-[500px] w-[300px]"
        />
      </div>

      {/* Guidelines */}
      <div className="flex flex-col items-center gap-4 md:gap-16">
        <div className=" text-supporting-lightGray lg:text-5xl xl:text-6xl md:text-4xl text-2xl font-bold leading-[64px]">
          Guidelines for Hackbyte 3.0
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-20 xl:gap-x-28 lg:gap-x-16 gap-x-4 py-8 md:py-16 xl:px-28 lg:px-16 px-4">
          {Guidelines.map((item, index) => (
            <GuidelinesCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-16 pt-4 lg:pt-8 xl:pb-12 pb-8 md:pb-16">
        <div className=" text-supporting-lightGray lg:text-5xl xl:text-6xl md:text-4xl text-2xl font-bold leading-[64px] pb-4 md:pb-8 lg:pb-16">
          Join our Newsletter
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
