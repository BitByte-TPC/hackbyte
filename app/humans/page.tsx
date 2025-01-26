import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";

import humansSticker from "@/public/humansPage/humansSticker.svg";
import { OrganizersData } from "@/data/organizersData";
import { MentorsData } from "@/data/mentorsData";
import { FamilyData } from "@/data/familyData";

export const metadata = {
  title: "Humans | HackByte",
  description:
    "Meet the team behind HackByte 3.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
  keywords:
    "Humans, Team, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech",
  openGraph: {
    title: "Humans | HackByte",
    description:
      "Meet the team behind HackByte 3.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
    url: "https://hackbyte.in/humans",
    images:
      "https://res.cloudinary.com/dlsqbiwug/image/upload/v1736876616/Frame_463_zdbkgu.png",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const Humans = () => {
  return (
    <>
      <div
        className="flex flex-col min-h-screen lg:gap-[20px] 3xl:gap-[88px]
          md:px-16 xl:px-28 lg:pb-[92px] md:pt-16 xl:pt-12 pt-[32px] px-4"
      >
        <div className="flex lg:gap-[40px]">
          <div>
            <div className="text-white font-black text-[36px] xs:text-[42px] md:text-[2.9rem] lg:text-[3.9rem] xl:text-[80px] xl:leading-[6rem] mb-5">
              Meet the Humans
              <br /> of HackByte
            </div>
            <p className="text-supporting-mediumGray font-medium lg:text-2xl md:text-xl text-lg">
              Hacker Experience is what we prioritize! Have questions, need
              assistance, or just want to connect? Feel free to reach out!
            </p>
          </div>
          <Image
            src={humansSticker}
            alt="Humans Sticker"
            className="lg:w-auto md:w-56 w-32 hidden md:block"
          />
        </div>

        <Tabs
          defaultValue="Organizers"
          className="flex flex-col justify-center mt-4 md:mt-12"
        >
          <TabsList className="bg-transparent mb-5 md:mb-11 flex justify-start ">
            <TabsTrigger
              value="Organizers"
              className="sm:text-xl text-md font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
            >
              Organizers
            </TabsTrigger>
            <TabsTrigger
              value="Past Mentors"
              className="sm:text-xl text-md font-bold text-supporting-mediumGray 
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
            >
              Past Mentors
            </TabsTrigger>
            <TabsTrigger
              value="Elders"
              className="sm:text-xl text-md font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
            >
              Our family
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Organizers">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {OrganizersData.map((human, index) => (
                <MagicCard
                  key={index}
                  className="cursor-pointer flex-col items-center justify-center whitespace-nowrap"
                  gradientColor="#D9D9D955"
                >
                  <HumansCard index={index} {...human} />
                </MagicCard>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Past Mentors">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {MentorsData.map((human, index) => (
                <MagicCard
                  key={index}
                  className="cursor-pointer flex-col items-center justify-center whitespace-nowrap"
                  gradientColor="#D9D9D955"
                >
                  <HumansCard index={index} {...human} />
                </MagicCard>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Elders">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center"
            >
              {FamilyData.map((human, index) => (
                <MagicCard
                  key={index}
                  className="cursor-pointer flex-col items-center justify-center whitespace-nowrap"
                  gradientColor="#D9D9D955"
                >
                  <HumansCard index={index} {...human} />
                </MagicCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Humans;
