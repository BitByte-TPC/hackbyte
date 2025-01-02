import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";
import YetToBeDisclosed from "@/components/YetToBeDisclosed";
import Image from "next/image";

import humansSticker from "@/public/humansPage/humansSticker.svg";
import { MentorsData } from "@/data/mentorsData";
import { EldersData } from "@/data/eldersData";

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
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
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
          lg:px-16 lg:pb-[92px] pt-[48px] px-4"
      >
        <div className="flex md:gap-[40px]">
          <div>
            <h1 className="text-white font-bold text-[28px] xl:text-[80px] xl:leading-[6rem] mb-5">
              Meet the Humans
              <br /> of HackByte
            </h1>
            <p className="text-supporting-mediumGray font-medium lg:text-2xl md:text-xl text-sm">
              Hacker Experience is what we prioritize! Have questions, need
              assistance, or just want to connect? Feel free to reach out!
            </p>
          </div>
          <Image
            src={humansSticker}
            alt="Humans Sticker"
            className="lg:w-auto md:w-64 w-32"
          />
        </div>

        <Tabs
          defaultValue="Organizers"
          className="flex flex-col justify-center mt-4 md:mt-12"
        >
          <TabsList className="bg-transparent mb-5 md:mb-11 flex justify-start ">
            <TabsTrigger
              value="Organizers"
              className="sm:text-xl text-md min-[300px]:text-lg font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
            >
              Organizers
            </TabsTrigger>
            <TabsTrigger
              value="Mentors"
              className="sm:text-xl text-md min-[300px]:text-lg font-bold text-supporting-mediumGray 
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
            >
              Mentors
            </TabsTrigger>
            <TabsTrigger
              value="Elders"
              className="sm:text-xl text-md min-[300px]:text-lg font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
            >
              Elders
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Organizers">
            <YetToBeDisclosed />
          </TabsContent>
          <TabsContent value="Mentors">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {MentorsData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Elders">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center"
            >
              {EldersData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Humans;
