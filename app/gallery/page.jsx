import Navbar from "@/components/Navbar";
import banner from "@/public/galleryPage/banner.jpg";
import { GridImage, BannerImage } from "@/components/ImageGrid";

import FooterAnimation from "@/components/FooterAnimation";
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
      <div className="bg-[#101010] flex flex-col min-h-screen p-4 md:px-8 lg:px-12 py-40">
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#F5F0D8] font-normal text-[2.25rem] md:text-[5rem]">
              Gallery
            </p>
            <p
              className="w-full xl:max-w-[75%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              Explore our gallery of memorable moments from HackByte events at
              IIITDMJ. Immerse in the vibrant coding community, witness
              innovation, and get inspired.
            </p>
          </div>
        </div>

        <GridImage />

        <div className="flex flex-col justify-center items-center my-4 xl:my-8">
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

          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Gallery;
