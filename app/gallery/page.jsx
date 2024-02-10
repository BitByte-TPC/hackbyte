import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import banner from "@/public/galleryPage/banner.jpg";
import ImageLoading from "../../components/ImageLoader";
import BannerLoading from "../../components/BannerLoader";

const GridImage = dynamic(
  () => import("@/components/ImageGrid").then((module) => module.GridImage),
  { loading: () => <ImageLoading />, ssr: false }
);

const BannerImage = dynamic(
  () => import("@/components/ImageGrid").then((module) => module.BannerImage),
  { loading: () => <BannerLoading />, ssr: false }
);

const Gallery = () => {
  return (
    <>
      <div
        className="flex flex-col justify-around min-h-screen bg-black
          p-4 lg:px-12 md:py-8 mb-0 sm:mb-8 xl:mb-0"
        style={{
          backgroundImage: "url(/galleryPage/gridbg.svg)",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        <div className="flex flex-col justify-center items-center my-8 xl:my-16">
          <div
            className="text-[#FAF8ED] text-[2.375rem] text-center font-medium leading-[1.2] 
                lg:leading-[1.1] lg:text-[3rem]"
          >
            2024 (HACKBYTE 2.0)
          </div>
        </div>

        <GridImage />

        <div className="flex flex-col justify-center items-center my-8 xl:my-16">
          <div
            className="text-[#FAF8ED] text-[2.375rem] text-center font-medium leading-[1.2] 
                lg:leading-[1.1] lg:text-[3rem]"
          >
            COMMITTEE <span>CREW</span>
          </div>
        </div>

        <div className="mt-6 lg:mt-16">
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
