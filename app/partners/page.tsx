import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import SponsorCard from "@/components/SponsorCard";

import webdock from "@/public/partnersPage/webdock.png";
import benq from "@/public/partnersPage/benq.png";
import { inKindSponsorsData, normalSponsorsData } from "@/data/sponsorData";
import TitleSponsorCard from "@/components/TitleSponsorCard";
import HB4Logo from "@/public/HB4Logo.png";



export const metadata = {
  title: "Partners | HackByte",
  description:
    "Explore the invaluable support from our esteemed sponsors and partners at HackByte – the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
  keywords:
    "Sponsors, Partners, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Collaboration, Innovation, Community Support, Technology Events",
  openGraph: {
    title: "Partners | HackByte",
    description:
      "Explore the invaluable support from our esteemed sponsors and partners at HackByte – the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
    url: "https://hackbyte.in/partners",
    images:
      "https://res.cloudinary.com/dlsqbiwug/image/upload/v1736876616/Frame_463_zdbkgu.png",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const PartnersPage = () => {
  const TitleSponsors = [
    {
      title: "Webdock.io",
      description:
        "Webdock.io is revolutionizing VPS hosting with a faster, more affordable, and developer-friendly platform. Built from the ground up, Webdock offers a powerful yet simple hosting experience with a custom control panel, predictable billing, and blazing-fast performance.",
      imageSrc: webdock,
      link: "https://webdock.io/en",
    },
    {
      title: "BenQ",
      description:
        "BenQ is a world-leading human technology and solutions provider driven by the corporate vision of 'Bringing Enjoyment ‘N’ Quality to Life' to elevate and enrich the aspects of life that matter most to people today – lifestyle, business, healthcare, and education.",
      imageSrc: benq,
      link: "https://www.benq.com/en-in/campaign/best-coding-monitor-for-programmers.html?utm_source=event&utm_medium=referral&utm_campaign=wed_programming_webtraffic_others_programming%20series_hackbyte_traffic_202504",
    },
  ];
  return (
    <>
      <div
        className="flex flex-col min-h-screen lg:gap-[20px] 3xl:gap-[88px]
          lg:px-16 xl:px-28 lg:pb-[92px] pt-[32px] md:pt-[48px] px-4"
      >
        <div className="flex flex-col gap-5 md:pl-12 lg:pl-0">
          <div className="grid md:grid-cols-[auto,1fr] grid-cols-1 place-items-end items-start">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="text-white font-gotham font-black text-[36px] xs:text-[42px] md:text-5xl lg:text-[4.2rem] xl:text-[96px] xl:leading-tight">
                Our Past Partners
                <br /> who Supported
              </div>
              <p className="text-supporting-mediumGray font-medium md:text-xl lg:text-2xl text-lg xs:text-md max-w-[500px] lg:max-w-[700px] xl:max-w-[800px]">
                We are proud to collaborate with visionary organizations that
                share our passion for innovation and technology.
              </p>
            </div>
            <Image
              src={HB4Logo}
              className="hidden md:block xl:w-[380px] lg:w-72 md:w-64 w-32"
              alt="HackByte 4.0 Logo"
            />
          </div>
        </div>

        <Tabs
          defaultValue="Sponsors"
          className="flex flex-col justify-center mt-4 md:mt-12"
        >
          <TabsList className="bg-transparent mb-5 md:mb-11 flex justify-start md:px-12 lg:px-0">
            <TabsTrigger
              value="Sponsors"
              className="sm:text-xl text-md min-[300px]:text-lg font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
            >
              Sponsors
            </TabsTrigger>
            <TabsTrigger
              value="In Kind Sponsors"
              className="sm:text-xl text-md min-[300px]:text-lg font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
            >
              In Kind Sponsors
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Sponsors">
            <div className="w-full flex flex-col items-center gap-8 xl:gap-12">
              <div className="flex flex-col md:flex-row gap-4 md:gap-11">
                {TitleSponsors.map((sponsor, index) => (
                  <TitleSponsorCard key={index} {...sponsor} />
                ))}
              </div>

              <div
                className="w-full xl:max-w-[95%] monitor:max-w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-8 lg:gap-[44px] md:px-8 lg:px-0 place-items-center"
              >
                {normalSponsorsData.map((sponsor, index) => {
                  return <SponsorCard key={index} index={index} {...sponsor} />;
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="In Kind Sponsors" className="flex justify-center">
            <div
              className="w-full xl:max-w-[95%] monitor:max-w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-8 lg:gap-[44px]"
            >
              {inKindSponsorsData.map((sponsor, index) => {
                return <SponsorCard key={index} index={index} {...sponsor} />;
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PartnersPage;
