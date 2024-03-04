import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SponsorCard from "@/components/ui/cards";

import mlh from "@/public/partnersPage/mlh.webp";
import github from "@/public/partnersPage/github.webp";
import postman from "@/public/partnersPage/postman.webp";
import godspeed from "@/public/partnersPage/godspeed.webp";
import devfolio from "@/public/partnersPage/devfolio.webp";
import edubard from "@/public/partnersPage/edubard.webp";
import bobble from "@/public/partnersPage/bobble.webp";
import wolfram from "@/public/partnersPage/wolfram.webp";
import balsamiq from "@/public/partnersPage/balsamiq.webp";

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

const NormalSponsors = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 xl:gap-12 pt-8">
        <SponsorCard
          sponsor={"MLH"}
          category={"Platform Partner"}
          sponsorimgsrc={mlh}
        />
        <SponsorCard
          sponsor={"Github"}
          category={"Gold Sponsor"}
          sponsorimgsrc={github}
        />
        <SponsorCard
          sponsor={"Postman"}
          category={"Gold Sponsor"}
          sponsorimgsrc={postman}
        />
        <SponsorCard
          sponsor={"Godspeed Systems"}
          category={"Silver Sponsor"}
          sponsorimgsrc={godspeed}
        />
        <SponsorCard
          sponsor={"Devfolio"}
          category={"Platform Partner"}
          sponsorimgsrc={devfolio}
        />
      </div>
    </>
  );
};

const InKindSponsors = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 xl:gap-12 pt-8">
      <SponsorCard
        sponsor={"Bobble Fan Store"}
        category={"Merch Partner"}
        sponsorimgsrc={bobble}
      />
      <SponsorCard
        sponsor={"Balsamiq"}
        category={"Community Sponsor"}
        sponsorimgsrc={balsamiq}
      />
      <SponsorCard
        sponsor={"Edubard"}
        category={"Media Partner"}
        sponsorimgsrc={edubard}
      />
      <SponsorCard
        sponsor={"Wolfram"}
        category={"Community Sponsor"}
        sponsorimgsrc={wolfram}
      />
    </div>
  );
};

const Partners = () => {
  return (
    <>
      <div
        className="bg-[#101010] flex flex-col items-center min-h-screen 
          lg:px-20 px-4 py-52"
      >
        <Tabs
          defaultValue="Sponsors"
          className="flex flex-col justify-center items-center text-white"
        >
          <TabsList className="mb-16 w-[19rem] min-w-[321px]:w-80 sm:w-[488px]">
            <TabsTrigger
              value="Sponsors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl text-xl leading-7"
            >
              Sponsors
            </TabsTrigger>
            <TabsTrigger
              value="InKind Sponsors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl text-xl leading-7"
            >
              In Kind Sponsors
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Sponsors">
            <NormalSponsors />
          </TabsContent>
          <TabsContent value="InKind Sponsors">
            <InKindSponsors />
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
};

export default Partners;
