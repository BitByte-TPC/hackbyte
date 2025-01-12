import PrizeSection from "@/components/PrizeSection";
import Image from "next/image";
import YetToBeDisclosed from "@/components/YetToBeDisclosed";
import medal from "@/public/HomePageLogo/medal.webp";
import cup4 from "@/public/cup4 (2).svg";

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
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Prizes() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col min-h-screen px-4 md:px-16 lg:px-28 monitor:px-32 md:pt-16 pb-40 pt-[32px] xl:pt-[48px]">
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex justify-between">
            <div className="flex flex-col items-start gap-2">
              <p className="text-supporting-lightGray text-[36px] xs:text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] leading-tight font-black">
                Prizes for the <br />
                Winners
              </p>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <p
                  className="w-full xl:max-w-[85%] text-supporting-mediumGray
                text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-medium"
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

          <div className="flex flex-col gap-6 md:gap-8 mt-14">
            <div>
              <PrizeSection/>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div
                className="flex flex-col items-center gap-4 md:gap-12 px-4 xs:px-8 py-6 
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
                className="flex flex-col items-center gap-4 md:gap-12 px-4 xs:px-8 py-6 
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
        <div className="w-full flex flex-col pt-24">
          <p className="text-supporting-lightGray text-center text-[2.25rem] md:text-[3.5rem] lg:text-[5rem] font-black">
            Sponsored Tracks
          </p>
          <YetToBeDisclosed />
        </div>
      </div>
    </div>
  );
}
