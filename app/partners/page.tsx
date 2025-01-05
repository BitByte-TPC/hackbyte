import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import SponsorCard from "@/components/SponsorCard";
import hackbyte2Logo from "@/public/ImageGallery/HB2Logo.svg";

import logitech from "@/public/partnersPage/logitech.jpg";
// Sponsors
import mlh from "@/public/partnersPage/mlh.webp";
import github from "@/public/partnersPage/github.jpg";
import postman from "@/public/partnersPage/postman.jpg";
import bobble from "@/public/partnersPage/bobble.webp";
import godspeed from "@/public/partnersPage/godSpeed.jpg";
import devfolio from "@/public/partnersPage/devfolio.webp";
import virtualProtocol from "@/public/partnersPage/virtualProtocol.jpg";
import nextgen from "@/public/partnersPage/nextgen.jpg";
import auth0 from "@/public/partnersPage/auth0.webp";
import taipy from "@/public/partnersPage/taipy.jpg";
import godaddy from "@/public/partnersPage/godaddy.webp";
// In Kind Sponsors
import balsamiq from "@/public/partnersPage/balsamiq.webp";
import edubard from "@/public/partnersPage/edubard.webp";
import wolfram from "@/public/partnersPage/wolfram.webp";
import mongodb from "@/public/partnersPage/mongodb.webp";
import finlatics from "@/public/partnersPage/finlatics.webp";
import jdoodle from "@/public/partnersPage/jdoodle.png";

export const metadata = {
  title: "Partners | HackByte",
  description:
    "Explore the invaluable support from our esteemed sponsors and partners at HackByte - the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
  keywords:
    "Sponsors, Partners, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Collaboration, Innovation, Community Support, Technology Events",
  openGraph: {
    title: "Partners | HackByte",
    description:
      "Explore the invaluable support from our esteemed sponsors and partners at HackByte - the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
    url: "https://hackbyte.in/partners",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const normalSponsorsData = [
  {
    sponsor: "MLH",
    category: "Platform Partner",
    sponsorimgsrc: mlh,
    site: "https://mlh.io",
  },
  {
    sponsor: "GitHub",
    category: "Gold Sponsor",
    sponsorimgsrc: github,
    site: "https://gh.io/hackbyte2",
  },
  {
    sponsor: "Postman",
    category: "Gold Sponsor",
    sponsorimgsrc: postman,
    site: "https://community.postman.com",
  },
  {
    sponsor: "Bobble Fan Store",
    category: "Merch Partner",
    sponsorimgsrc: bobble,
    site: "https://fanstore.bobble.ai",
  },
  {
    sponsor: "Godspeed Systems",
    category: "Silver Sponsor",
    sponsorimgsrc: godspeed,
    site: "https://godspeed.systems",
  },
  {
    sponsor: "Devfolio",
    category: "Platform Partner",
    sponsorimgsrc: devfolio,
    site: "https://devfolio.co",
  },
  {
    sponsor: "Virtual Protocol",
    category: "Bronze Sponsor",
    sponsorimgsrc: virtualProtocol,
    site: "https://www.virtuals.io/",
  },
  {
    sponsor: "NextGen",
    category: "Bronze Sponsor",
    sponsorimgsrc: nextgen,
    site: "https://nextgenglobalhub.github.io/opensourcecohort/",
  },
  {
    sponsor: "Auth0",
    category: "Track Sponsor",
    sponsorimgsrc: auth0,
    site: "http://hackp.ac/auth0",
  },
  {
    sponsor: "Taipy",
    category: "Track Sponsor",
    sponsorimgsrc: taipy,
    site: "https://hackp.ac/taipy-gettingstarted",
  },
  {
    sponsor: "Go Daddy Registry",
    category: "Track Sponsor",
    sponsorimgsrc: godaddy,
    site: "http://hackp.ac/godaddyregistry",
  },
];

const inKindSponsorsData = [
  {
    sponsor: "Edubard",
    category: "Media Partner",
    sponsorimgsrc: edubard,
    site: "https://edubard.in",
  },
  {
    sponsor: "Balsamiq",
    category: "Community Sponsor",
    sponsorimgsrc: balsamiq,
    site: "https://balsamiq.com",
  },
  {
    sponsor: "Wolfram",
    category: "Community Sponsor",
    sponsorimgsrc: wolfram,
    site: "https://www.wolfram.com/wolfram-one/",
  },
  {
    sponsor: "MongoDB",
    category: "Community Sponsor",
    sponsorimgsrc: mongodb,
    site: "https://www.mongodb.com/",
  },
  {
    sponsor: "Finlatics",
    category: "Community Sponsor",
    sponsorimgsrc: finlatics,
    site: "https://www.finlatics.com/",
  },
  {
    sponsor: "JDoodle",
    category: "Community Sponsor",
    sponsorimgsrc: jdoodle,
    site: "https://www.jdoodle.com/?utm_source=Event+Website&utm_medium=Event+Sponsorship&utm_campaign=HackByte+Sponsorship+2024&utm_id=HackByte+2.0",
  },
];

const TitleSponsorCard: React.FC = () => {
  return (
    <a
      href="https://www.logitech.com/en-in/mx/master-series.html"
      target="_blank"
      rel="noreferrer"
      className="w-full xl:max-w-[95%] 2xl:max-w-[90%] flex justify-center"
    >
      <div className="flex flex-col md:flex-row">
        <Image
          className="w-full md:w-[300px] lg:w-[350px] xl:w-[42%]  rounded-t-[20px] 
              md:rounded-r-none md:rounded-l-[20px]"
          src={logitech}
          alt="Logitech"
          placeholder="blur"
        />
        <div
          className="flex flex-col justify-center items-start bg-[#4E2529] px-4 
              xl:px-8 py-8 md:p-[40px] gap-2 rounded-b-[20px] md:rounded-l-none 
              md:rounded-r-[20px]"
        >
          <p className="text-[#FF939E] font-bold text-[1.25rem] md:text-[1.5rem]">
            Title Sponsor
          </p>
          <div className="w-full flex justify-between items-center">
            <p className="font-black text-white text-[2rem] xl:text-[4rem]">
              Logitech
            </p>
          </div>
          <p className="text-supporting-mediumGray font-medium text-[1rem] md:text[1.125rem]">
            The MX Master Series is expertly designed for users, empowering
            coders to unleash productivity and optimize performance during
            intense coding marathons.
          </p>
        </div>
      </div>
    </a>
  );
};

const PartnersPage = () => {
  return (
    <>
      <div
        className="flex flex-col min-h-screen lg:gap-[20px] 3xl:gap-[88px]
          lg:px-16 lg:pb-[92px] pt-[48px] px-4"
      >
        <div className="flex md:gap-[40px]">
          <div>
            <h1 className="text-white font-black text-[28px] md:text-5xl lg:text-7xl xl:text-[80px] xl:leading-[6rem] mb-5">
              Past Partners
              <br /> who Supported
            </h1>
            <p className="text-supporting-mediumGray font-medium md:text-xl lg:text-2xl text-sm">
              We are proud to collaborate with visionary organizations that
              share our passion for innovation and technology.
            </p>
          </div>
          <Image
            src={hackbyte2Logo}
            className="mt-[-80px] xl:w-auto lg:w-72 md:w-60 w-32"
            alt="HackByte 2.0 Logo"
          />
        </div>

        <Tabs
          defaultValue="Sponsors"
          className="flex flex-col justify-center mt-4 md:mt-12"
        >
          <TabsList className="bg-transparent mb-5 md:mb-11 flex justify-start ">
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
              <TitleSponsorCard />
              <div
                className="w-full xl:max-w-[95%] 2xl:max-w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-8 lg:gap-[44px]"
              >
                {normalSponsorsData.map((sponsor, index) => {
                  return <SponsorCard key={index} index={index} {...sponsor} />;
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="In Kind Sponsors" className="flex justify-center">
            <div
              className="w-full xl:max-w-[95%] 2xl:max-w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
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
