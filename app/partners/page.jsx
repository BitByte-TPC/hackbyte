import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SponsorCard from "@/components/ui/cards";

import logitech from "@/public/partnersPage/logitech.jpg";

import mlh from "@/public/partnersPage/mlh.webp";
import github from "@/public/partnersPage/github.png";
import postman from "@/public/partnersPage/postman.webp";
import godspeed from "@/public/partnersPage/godspeed.webp";
import devfolio from "@/public/partnersPage/devfolio.webp";
import edubard from "@/public/partnersPage/edubard.webp";
import bobble from "@/public/partnersPage/bobble.webp";
import wolfram from "@/public/partnersPage/wolfram.webp";
import balsamiq from "@/public/partnersPage/balsamiq.webp";
import Nextgen from "@/public/partnersPage/Nextgen.webp";
import Finlatics from "@/public/partnersPage/Finlatics.webp";
import Mongodb from "@/public/partnersPage/Mongodb.webp";
import Auth0 from "@/public/partnersPage/Auth0.webp";
import Taipy from "@/public/partnersPage/taipy.webp";
import Godaddy from "@/public/partnersPage/Godaddy.webp";

import CircleAnimation from "@/components/CircleAnimation";
import Footer from "@/components/Footer";

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
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const normalSponsorsData = [
  {
    sponsor: "Logitech",
    category: "Title Sponsor",
    sponsorimgsrc: logitech,
    site: "https://www.logitech.com",
  },
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
    sponsor: "NextGen",
    category: "Bronze Sponsor",
    sponsorimgsrc: Nextgen,
    site: "https://nextgenglobalhub.github.io/opensourcecohort/",
  },
  {
    sponsor: "Auth0",
    category: "Track Sponsor",
    sponsorimgsrc: Auth0,
    site: "http://hackp.ac/auth0",
  },
  {
    sponsor: "Taipy",
    category: "Track Sponsor",
    sponsorimgsrc: Taipy,
    site: "https://hackp.ac/taipy-gettingstarted",
  },
  {
    sponsor: "Go Daddy Registry",
    category: "Track Sponsor",
    sponsorimgsrc: Godaddy,
    site: "http://hackp.ac/godaddyregistry",
  },
];

const inKindSponsorsData = [
  {
    sponsor: "Balsamiq",
    category: "Community Sponsor",
    sponsorimgsrc: balsamiq,
    site: "https://balsamiq.com",
  },
  {
    sponsor: "Edubard",
    category: "Media Partner",
    sponsorimgsrc: edubard,
    site: "https://edubard.in",
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
    sponsorimgsrc: Mongodb,
    site: "https://www.mongodb.com/",
  },
  {
    sponsor: "Finlatics",
    category: "Community Sponsor",
    sponsorimgsrc: Finlatics,
    site: "https://www.finlatics.com/",
  },
];

const Partners = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col items-center min-h-screen 
          lg:px-20 px-4 py-48"
      >
        <Tabs
          defaultValue="Sponsors"
          className="flex flex-col justify-center items-center text-white"
        >
          <TabsList className="mb-16 w-[19rem] min-w-[321px]:w-80 sm:w-[488px]">
            <TabsTrigger
              value="Sponsors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              Sponsors
            </TabsTrigger>
            <TabsTrigger
              value="InKind Sponsors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              In Kind Sponsors
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Sponsors">
            <div className="flex flex-wrap justify-center gap-8 xl:gap-12 pt-8">
              {normalSponsorsData.map((sponsor, index) => {
                return <SponsorCard key={index} index={index} {...sponsor} />;
              })}
            </div>
          </TabsContent>
          <TabsContent value="InKind Sponsors">
            <div className="flex flex-wrap justify-center gap-8 xl:gap-12 pt-8">
              {inKindSponsorsData.map((sponsor, index) => {
                return <SponsorCard key={index} index={index} {...sponsor} />;
              })}
            </div>
          </TabsContent>
        </Tabs>
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

          <CircleAnimation />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partners;
