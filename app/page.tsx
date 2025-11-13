import Image from "next/image";
import stats from "@/public/HomePageLogo/redtape2.png";
import HeroSection from "@/components/Herosection";
import DiscordCard from "@/components/DiscordCard";
import whyParticipate from "@/public/HomePageLogo/whyParticipate.png";
import g1 from "@/public/HomePageLogo/g1.svg";
import g2 from "@/public/HomePageLogo/g2.svg";
import g3 from "@/public/HomePageLogo/g3.svg";
import g4 from "@/public/HomePageLogo/g4.svg";
import g5 from "@/public/HomePageLogo/g5.svg";
import g6 from "@/public/HomePageLogo/g6.svg";
import g7 from "@/public/HomePageLogo/g7.svg";
import g8 from "@/public/HomePageLogo/g8.svg";
import g9 from "@/public/HomePageLogo/g9.svg";
import g10 from "@/public/HomePageLogo/g10.svg";
import bottomstats from "@/public/upper.svg";
import topstats from "@/public/lower.svg";
import * as motion from "motion/react-client";
import AnimatedTitle from "@/components/AnimatedTitle";
import CountAnimation from "@/components/CountAnimation";
import Link from "next/link";

interface GuidlinesCard {
  title: string;
  description: string;
  icon: string;
  index: number;
}

function GuidelinesCard({ title, description, icon, index }: GuidlinesCard) {
  // Define animation variants based on index
  const animationVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="card flex gap-4 items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={animationVariants}
    >
      <Image src={icon} alt="Icon" className="xl:w-20 md:w-16 pt-1" />
      <div className="flex flex-col justify-center gap-2">
        <div className="monitor:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-bold">
          {title}
        </div>
        <div className="text-base lg:text-base xl:text-lg monitor:text-xl font-normal text-supporting-darkGray md:max-w-64 lg:max-w-[500px] leading-[1.5rem]">
          {description}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const Guidelines = [
    {
      icon: g1,
      title: "Register with Ease",
      description:
        "Pre-registration opens Shortly—no red tape, just one click away!",
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
        "Team up with 2-4 members; join our Discord to find teammates and get the latest updates!",
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
      description: "HackByte 4.0 is an in-person / offline hackathon event.",
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

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div className="sm:hidden w-screen mt-28">
        <Image src={bottomstats} alt="bottomstats" className="w-screen" />
        <Image src={topstats} alt="topstats" className="w-screen" />
      </div>
      <div className="relative sm:mt-0 mt-28 sm:block hidden">
        <Image
          src={stats}
          alt="Stats"
          className=" md:w-full md:scale-125 lg:scale-100"
        />
        <div className="w-full flex justify-evenly rotate-[5deg] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="max-w-[90px] md:max-w-[250px] text-center flex flex-col items-center gap-2 lg:gap-4">
            <CountAnimation targetValue={5154} />
            <div className="font-bold text-xs md:text-2xl lg:text-3xl xl:text-4xl text-white">
              Registrations
            </div>
            <div className="font-bold text-xs md:text-base lg:text-lg xl:text-xl text-[#FFC1C7]">
              5100+ registrations from across the country.
            </div>
          </div>
          <div className="max-w-[90px] md:max-w-[250px] text-center flex flex-col items-center gap-2 lg:gap-4">
          <CountAnimation targetValue={425} />
            <div className="font-bold text-xs md:text-2xl lg:text-3xl xl:text-4xl text-white">
              Participants
            </div>
            <div className="font-bold text-xs md:text-base lg:text-lg xl:text-xl text-[#FFC1C7]">
              400+ participants joined the offline hackathon!
            </div>
          </div>
          <div className="max-w-[90px] md:max-w-[250px] text-center flex flex-col items-center gap-2 lg:gap-4">
          <CountAnimation targetValue={100} />
            <div className="font-bold text-xs md:text-2xl lg:text-3xl xl:text-4xl text-white">
              Volunteers
            </div>
            <div className="font-bold text-xs md:text-base lg:text-lg xl:text-xl text-[#FFC1C7]">
              To help you, get the best out of HackByte.
            </div>
          </div>
          <div className="max-w-[90px] md:max-w-[250px] text-center flex flex-col items-center gap-2 lg:gap-4">
          <CountAnimation targetValue={105} />
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
      <div className="flex flex-col items-center gap-4 md:gap-16 md:py-28 py-16">
        <div className=" text-supporting-lightGray lg:text-5xl monitor:text-7xl xl:text-6xl md:text-4xl sm:text-2xl text-3xl xs:text-4xl font-bold leading-[48px] xs:leading-[64px] text-center">
          <AnimatedTitle viewport={true}>
            Why Participate in Hackbyte 4.0?
          </AnimatedTitle>
        </div>
        <AnimatedTitle viewport={true}>
          <Image
            src={whyParticipate}
            alt="Why Participate"
            className="monitor:w-[900px] xl:w-[800px] lg:w-[700px] md:w-[500px] w-[350px] pt-4 md:pt-0 px-2 xs:px-0"
          />
        </AnimatedTitle>
      </div>

      {/* Guidelines */}
      <div className="flex flex-col items-center gap-4 md:gap-16">
        <div className=" text-supporting-lightGray lg:text-5xl monitor:text-7xl xl:text-6xl md:text-4xl text-center text-3xl xs:text-2xl font-bold leading-[48px] xs:leading-[64px]">
          <AnimatedTitle viewport={true}>
            Guidelines for Hackbyte 4.0
          </AnimatedTitle>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-20 xl:gap-x-28 lg:gap-x-16 gap-x-4 py-8 md:py-16 xl:px-28 lg:px-16 px-4 monitor:place-items-center">
          {Guidelines.map((item, index) => (
            <GuidelinesCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
          <motion.div
            className="card flex gap-4 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants= {{
              hidden: { opacity: 0, x: 9 % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image src={g10} alt="Icon" className="xl:w-20 md:w-16 pt-1" />
            <div className="flex flex-col justify-center gap-2">
              <div className="monitor:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-bold">
              Safe and Secure
              </div>
              <div className="text-base lg:text-base xl:text-lg monitor:text-xl font-normal text-supporting-darkGray md:max-w-64 lg:max-w-[500px] leading-[1.5rem]">
                We follow the MLH <Link
                  href="https://mail.mlh.io/e/c/eyJlbWFpbF9pZCI6ImRnU2lwd2tCQU11SERzcUhEZ0dWSHZKeG9wTzFtUmNmM3Rad01CST0iLCJocmVmIjoiaHR0cHM6Ly9tbGguaW8vY29kZS1vZi1jb25kdWN0P3V0bV9jYW1wYWlnbj1NZW1iZXIrRXZlbnQrLStPbmJvYXJkaW5nK1JlbWluZGVyXHUwMDI2dXRtX2NvbnRlbnQ9T25ib2FyZGluZytOZWVkZWRcdTAwMjZ1dG1fbWVkaXVtPUVtYWlsXHUwMDI2dXRtX3NvdXJjZT1DdXN0b21lci5pbyIsImludGVybmFsIjoiYTJhNzA5MDdmYTllMDFjYjg3MGUiLCJsaW5rX2lkIjo0MzE1fQ/516fa2299b66f1a1234c527d474494f98067ddaf9622617db3ae85da8f3d985b"
                  className="underline decoration-white/60"
                  target="_blank"
                >
                  Code of Conduct
                </Link> for a inclusive, and secure environment for everyone
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-16 pt-4 lg:pt-8 xl:pb-12 pb-8 md:pb-16 mt-8 md:my-20 xl:my-32">
        <div className=" text-supporting-lightGray lg:text-5xl monitor:text-7xl xl:text-6xl md:text-4xl text-2xl font-bold pb-4 md:pb-8 lg:pb-16 text-center">
          <AnimatedTitle viewport={true}>
            Join our Discord Community
          </AnimatedTitle>
        </div>
        <DiscordCard />
      </div>
    </div>
  );
}
