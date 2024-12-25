import Image from "next/image";
import { StaticImageData } from "next/image";
import stats from "../public/HomePageLogo/stats.webp";
import HeroSection from "@/components/herosection";
import collborate from "../public/HomePageLogo/collaborate.webp";
import mentorship from "../public/HomePageLogo/mentorship.webp";
import recruit from "../public/HomePageLogo/recruit.webp";
import medal from "../public/HomePageLogo/medal.webp";
import workshop from "../public/HomePageLogo/workshop.png";
import FAQSection from "@/components/faq/FaqSection"

const WhycardDetails = [
  {
    id: 1,
    title: "Collaborate and Skill Up",
    description:
      "Connect with people, form a team, learn new skills and develop amazing projects!",
    bgColor: "from-[#1ddf7a] to-[#006e2f]",
    icon: collborate,
    iconWidth: "xl:w-[280px] lg:w-[250px]",
    iconTop: "xl:top-[-75px] top-[-50px]",
  },
  {
    id: 2,
    title: "Mentorship Sessions",
    description:
      "Get mentorship and guidance from prominent technocrats of the industry.",
    bgColor: "from-[#ffdf64] to-[#d49500]",
    icon: mentorship,
    iconWidth: "lg:w-[220px]",
    iconTop: "top-[-125px]",
  },
  {
    id: 3,
    title: "Recruitment Offers",
    description:
      "Best performers will get recruitment offers from prestigious companies.",
    bgColor: "from-[#ffb17b] to-[#d35500]",
    icon: recruit,
    iconWidth: "xl:w-[200px] lg:w-[180px] w-[160px]",
    iconTop: "top-[-110px]",
  },
  {
    id: 4,
    title: "Exciting Prizes!",
    description:
      "Top 3 teams plus best projects of each domain will win prizes which will be disclosed soon!",
    bgColor: "from-[#7d4ea2] to-[#39187a]",
    icon: medal,
    iconWidth: "xl:w-[180px] lg:w-[170px] w-[140px]",
    iconTop: "lg:top-[-120px] top-[-110px]",
  },
];

export default function Home() {
  interface WhyCardProps {
    title: string;
    description: string;
    bgColor: string;
    icon: StaticImageData;
    iconWidth: string;
    iconTop: string;
  }
  const WhyCard = ({
    title,
    description,
    bgColor,
    icon,
    iconWidth,
    iconTop,
  }: WhyCardProps) => {
    return (
      <div
        className={`xl:w-[600px] xl:h-[350px] lg:w-[400px] lg:h-[300px] md:w-[350px] md:h-[250px] mx-8 md:mx-0  px-8 xl:pt-[120px] lg:pt-24 pt-16 pb-8 bg-gradient-to-b ${bgColor} rounded-[32px] backdrop-blur-[100px] flex-col justify-start items-center gap-2.5 inline-flex relative`}
      >
        <div className="flex-col justify-start items-center gap-6 flex">
          <div className="text-center text-white xl:text-4xl lg:text-2xl text-xl font-bold">
            {title}
          </div>
          <div className="max-w-md text-center text-supporting-lightGray xl:text-2xl lg:text-xl md:text-lg font-medium">
            {description}
          </div>
        </div>
        <div
          className={`absolute ${iconTop}`}
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image src={icon} alt="Icon" className={iconWidth} />
        </div>
      </div>
    );
  };
  
  return (
    <div className="md:overflow-hidden">
      <HeroSection />
      <Image
        src={stats}
        alt="Stats"
        className="rotate-[5deg] xl:mt-40 lg:mt-24 md:w-full"
      />
      <div className="text-center text-supporting-lightGray lg:text-5xl md:text-4xl text-2xl font-bold leading-[64px] md:py-40 py-20">
        Why Participate in Hackbyte 3.0?
      </div>
  
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-y-40 justify-items-center">
        {WhycardDetails.map((card) => (
          <WhyCard
            key={card.id}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            icon={card.icon}
            iconWidth={card.iconWidth}
            iconTop={card.iconTop}
          />
        ))}
      </div>

      <div className="xl:w-[1250px] lg:w-[900px] md:w-[640px] xl:mx-32 md:mx-16 mx-8 xl:mt-60 my-20 mt-40 lg:pt-[120px] pt-[80px] xl:pb-32 pb-8 bg-gradient-to-b from-[#31a3f5] to-[#0027f5] rounded-[32px] backdrop-blur-[100px] flex-col justify-start items-center gap-2.5 flex relative">
        <div
          className="absolute xl:-top-[140px] lg:-top-[100px] -top-[80px]"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src={workshop}
            alt="Icon"
            className="xl:w-[250px] lg:w-48 w-40"
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="text-center text-white xl:text-4xl md:text-3xl text-xl font-bold">
            Engaging Workshops
          </div>
          <div className=" text-center text-supporting-lightGray xl:text-3xl lg:text-2xl md:text-xl px-2 font-medium">
            Technical workshops and events like no-light event will keep the
            participants engaged throughout.
          </div>
        </div>
      </div>
      <FAQSection />
    </div>
  );
}
