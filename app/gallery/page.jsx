import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import img1 from "@/public/galleryPage/img1.webp";
import img2 from "@/public/galleryPage/img2.webp";
import img3 from "@/public/galleryPage/img3.webp";
import img4 from "@/public/galleryPage/img4.webp";
import img6 from "@/public/galleryPage/img6.webp";
import img7 from "@/public/galleryPage/img7.webp";
import img9 from "@/public/galleryPage/img9.webp";
import img11 from "@/public/galleryPage/img11.webp";
import img13 from "@/public/galleryPage/img13.webp";
import banner from "@/public/galleryPage/banner.webp";

const Gallery = () => {
  return (
    <>
      <div
        className="flex flex-col justify-around min-h-screen bg-black
        bg-cover bg-no-repeat p-4 md:px-12 md:py-8"
        style={{
          backgroundImage: "url(/galleryPage/gridbg.svg)",
          backgroundAttachment: "fixed",
          backgroundPositionY: "bottom",
        }}
      >
        <Navbar />
        <div />
        <div className="flex flex-col justify-center items-center my-8 xl:my-16">
          <div
            className="text-[#FAF8ED] text-[2.375rem] text-center font-medium leading-[1.2] 
                lg:leading-[1.1] lg:text-[3rem]"
          >
            2024 (HACKBYTE 2.0)
          </div>
        </div>

        <div className="max-w-8xl mx-auto py-10">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex flex-col gap-5">
              <div>
                <Image
                  src={img7}
                  alt="1"
                  className="w-full h-full rounded-xl object-cover"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img9}
                  alt="2"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div>
                <Image
                  src={img6}
                  alt="3"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <Image
                  src={img11}
                  alt="4"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div>
                <Image
                  src={img13}
                  alt="5"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div>
                <Image
                  src={img4}
                  alt="6"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <Image
                  src={img1}
                  alt="7"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div>
                <Image
                  src={img3}
                  alt="8"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div>
                <Image
                  src={img2}
                  alt="9"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

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
            <Image
              src={banner}
              alt="10"
              className="w-full xl:w-[80%] h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Gallery;
