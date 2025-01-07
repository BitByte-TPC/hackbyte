import banner from "@/public/ImageGallery/banner.jpg";
import HB2Logo from "@/public/ImageGallery/HB2Logo.svg";
import { GridImage, BannerImage } from "@/components/ImageGrid";
import Image from "next/image";

export const metadata = {
  title: "Gallery | HackByte",
  description:
    "Discover memorable moments from  HackByte 2.0 at IIITDMJ, explore images, and feel the excitement of the coding community.",
  keywords:
    "Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Gallery, Photos, Videos, Past Events, Previous Events",
  openGraph: {
    title: "Gallery | HackByte",
    description:
      "Discover memorable moments from past HackByte events at IIITDMJ, explore images, and feel the excitement of the coding community.",
    url: "https://hackbyte3.vercel.app",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const Gallery = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen p-4 px-2 md:px-16 lg:px-24 xl:px-28 lg:pb-40 md:pb-28 pb-12 xl:pt-[48px]">
        <div className="flex flex-col items-start gap-5 ">
          <div className="flex justify-between items-center w-full">
            <div className=" text-white xl:text-[6rem] lg:text-[4.2rem] text-[56px] font-black xl:leading-tight">
            HackByte 2.0 <br/>Highlights
            </div>
            <Image
              className="xl:w-[420px] lg:w-80 md:w-56 hidden md:block"
              src={HB2Logo}
              alt="HackByte 2.0 Logo"
            />
            
          </div>
          <div className=" max-w-[600px] lg:max-w-[650px] xl:max-w-[800px] text-supporting-mediumGray xl:text-2xl lg:text-xl text-lg font-medium leading-[33.60px]">
            Explore our gallery of memorable moments from HackByte 2.0 event at IIITDM Jabalpur.
            </div>
        </div>

        <GridImage />

        <div className="flex flex-col justify-center items-center my-4 xl:my-8">
          <div
            className="text-[#FAF8ED] text-center font-bold text-[2.375rem]
              leading-[1.2] lg:leading-[1.1] lg:text-[3rem]"
          >
            COMMITTEE <span>CREW</span>
          </div>
        </div>

        <div className="mt-4 xl:mt-8">
          <div className="flex justify-center items-center">
            <div className="w-full xl:w-[80%] h-full flex justify-center items-center">
              <BannerImage imgsrc={banner} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
