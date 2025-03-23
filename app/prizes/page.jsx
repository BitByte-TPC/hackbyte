import PrizeSection from "@/components/PrizeSection";
import Image from "next/image";
import medal from "@/public/HomePageLogo/medal.webp";
import cup4 from "@/public/prizesPageLogo/cup4 (2).svg";
import { sponsorTrackPrizesData } from "../../data/sponsorTrackPrizesData";
import TrackPrizeCard from "@/components/TrackPrizeCard";

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
      "https://res.cloudinary.com/dlsqbiwug/image/upload/v1736876616/Frame_463_zdbkgu.png",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Prizes() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col min-h-screen md:pt-16 pb-40 pt-[32px] xl:pt-[48px]">
        <div className="w-full flex flex-col gap-10 md:gap-0">
          <div className="flex justify-between px-4 md:px-16 lg:px-28 monitor:px-32">
            <div className="flex flex-col items-start gap-2">
              <p className="text-supporting-lightGray text-[36px] xs:text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] leading-tight font-black max-w-[95%]">
                Prizes for the
                Winners
              </p>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <p
                  className="w-full xl:max-w-[85%] text-supporting-mediumGray
                md:text-xl lg:text-2xl text-lg xs:text-md font-medium"
                >
                  Collaborate and innovate to build something awesome ! All
                  monetary prizes will be split equally among the winning team
                  members.
                </p>
                {/* <div className="rounded-full border bg-[#333333] border-[#D1CAC7] px-4 py-1">
                  <p
                    className="w-full text-supporting-mediumGray
                  text-center text-[1rem] md:text-[1.5rem]"
                  >
                    Winners will also get MLH winner pins 🌟
                  </p>
                </div> */}
              </div>
            </div>
            <Image
              src={medal}
              alt="Medal"
              className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] hidden md:block"
            />
          </div>

          <div className="flex flex-col gap-6 md:gap-8 sm:mt-14">
            <PrizeSection />
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 px-4 md:px-16 xl:px-28 monitor:px-32">
              <div
                className="flex flex-col items-center gap-4 md:gap-12 px-4 xs:px-6 py-6 
                  md:flex-row md:px-6 rounded-3xl bg-[#451C20]"
              >
                <Image src={cup4} alt="cup" className="w-[4.7rem] h-[4.7rem]" />
                <div className="w-full flex flex-col items-center md:items-start gap-2">
                  <p className="text-[#fff] text-[1.5rem] xs:text-[2rem] font-bold">
                    Best Girls Team
                  </p>
                  <p
                    className="text-[#FFA5AE] font-normal text-[1.25rem] 
                      text-center md:text-left"
                  >
                    Best performing All-Girls Team at HackByte
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center gap-4 md:gap-12 px-4 xs:px-6 py-6 
                  md:flex-row md:px-6 rounded-3xl bg-[#451C20]"
              >
                <Image src={cup4} alt="cup" className="w-[4.7rem] h-[4.7rem]" />
                <div className="w-full flex flex-col items-center md:items-start gap-2">
                  <p className="text-[#fff] text-[1.5rem] xs:text-[2rem] font-bold">
                    First Time Hacking?
                  </p>
                  <p
                    className="text-[#FFA5AE] font-normal text-[1.25rem] 
                      text-center md:text-left"
                  >
                    For freshmen and novices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor Tracks Section */}
        <div className="w-full flex flex-col pt-24 px-4 md:px-16 lg:px-28 monitor:px-32">
          <p className="text-supporting-lightGray text-[2.25rem] md:text-[3.5rem] lg:text-[5rem] font-black">
            Sponsored Tracks
          </p>
          <p
            className="w-full xl:max-w-[85%] text-supporting-mediumGray
          md:text-xl lg:text-2xl text-lg xs:text-md font-medium mb-8 sm:mb-12"
          >
            Explore our sponsor tracks and leverage their technologies to bring your projects to life! All monetary prizes will be split equally among the winning team members.
          </p>
          <div
            className="w-full xl:max-w-[95%] monitor:max-w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
              gap-8 lg:gap-[44px]"
          >
            {sponsorTrackPrizesData.map((sponsor, index) => {
              return <TrackPrizeCard key={index} index={index} {...sponsor} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
