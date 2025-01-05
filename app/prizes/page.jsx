import PrizeCard from "@/components/PrizeCard";
import Image from "next/image";
import YetToBeDisclosed from "@/components/YetToBeDisclosed";
import medal from "@/public/HomePageLogo/medal.webp";
import cup1 from "@/public/cup1.svg";
import cup2 from "@/public/cup2.svg";
import cup3 from "@/public/cup3.svg";
import cup4 from "@/public/cup4.svg";

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
      <div className="flex flex-col min-h-screen px-4 md:px-10 lg:px-20 2xl:px-32 pt-4 md:pt-16 pb-40">
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex justify-between">
            <div className="flex flex-col items-start gap-2">
              <p className="text-supporting-lightGray text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] leading-tight font-black">
                Prizes for the <br />
                Winners
              </p>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <p
                  className="w-full lg:max-w-[85%] text-supporting-mediumGray
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
              className="w-[300px] h-[300px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] hidden md:block"
            />
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="grid grid-cols-1">
              <PrizeCard
                amount="INR 25K"
                category="1st prize- Gold"
                cupsrc={cup1}
                default_bg="#FFAE0C"
                // hover_bg="radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <PrizeCard
                amount="INR 15K"
                category="2nd prize- Silver"
                cupsrc={cup2}
                default_bg="#999999"
                // hover_bg="radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)"
              />
              <PrizeCard
                amount="INR 10K"
                category="3rd prize- Bronze"
                cupsrc={cup3}
                default_bg="#D76835"
                // hover_bg="radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div
                className="flex flex-col items-center gap-4 md:gap-12 px-8 py-6 
                  md:flex-row md:px-6 rounded-[8px] bg-[#FF3044]"
              >
                <Image src={cup4} alt="cup" className="w-[6.5rem] h-[6.5rem]" />
                <div className="w-full flex flex-col items-center md:items-start gap-2">
                  <p className="text-[#fff] text-[2rem] font-normal">
                    Best Girls Team
                  </p>
                  <p
                    className="text-[#FFA5AE] font-semibold text-[1.25rem] 
                      text-center md:text-left"
                  >
                    Best performing All-Girls Team at HackByte
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center gap-4 md:gap-12 px-8 py-6 
                  md:flex-row md:px-6 rounded-[8px] bg-[#FF3044]"
              >
                <Image src={cup4} alt="cup" className="w-[6.5rem] h-[6.5rem]" />
                <div className="w-full flex flex-col items-center md:items-start gap-2">
                  <p className="text-[#fff] text-[2rem] font-normal">
                    First Time Hacking?
                  </p>
                  <p
                    className="text-[#FFA5AE] font-medium text-[1.25rem] 
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
          <p className="text-supporting-lightGray text-center text-[2.25rem] md:text-[5rem] font-black">
            Sponsored Tracks
          </p>
          <YetToBeDisclosed />
        </div>
      </div>
    </div>
  );
}
