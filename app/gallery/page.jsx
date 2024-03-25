import Navbar from "@/components/Navbar";
import banner from "@/public/galleryPage/banner.jpg";
import { GridImage, BannerImage } from "@/components/ImageGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery | HackByte",
  description:
    "Discover memorable moments from past HackByte events at IIITDMJ, explore images, and feel the excitement of the coding community.",
  keywords:
    "Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Gallery, Photos, Videos, Past Events, Previous Events",
  openGraph: {
    title: "Gallery | HackByte",
    description:
      "Discover memorable moments from past HackByte events at IIITDMJ, explore images, and feel the excitement of the coding community.",
    url: "https://hackbyte.in/gallery",
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
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen pt-16 md:pt-24 p-4 
          lg:px-12 pb-24"
      >
        <div className="flex flex-col justify-center items-center pt-20">
          <div
            className="text-[#FAF8ED] text-center font-medium text-[2.375rem] 
              leading-[1.2] lg:leading-[1.1] lg:text-[3rem]"
          >
            2023 (HACKBYTE)
          </div>
        </div>

        <GridImage />

        <div className="flex flex-col justify-center items-center my-4 xl:my-12">
          <div
            className="text-[#FAF8ED] text-center font-medium text-[2.375rem]
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
      <Footer />
    </>
  );
};
export default Gallery;
