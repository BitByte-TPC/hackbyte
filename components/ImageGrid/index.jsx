"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import img1 from "@/public/ImageGallery/img1.webp";
import img2 from "@/public/ImageGallery/img2.webp";
import img3 from "@/public/ImageGallery/img3.webp";
import img4 from "@/public/ImageGallery/img4.webp";
import img5 from "@/public/ImageGallery/img5.webp";
import img6 from "@/public/ImageGallery/img6.webp";
import img7 from "@/public/ImageGallery/img7.webp";
import img8 from "@/public/ImageGallery/img8.webp";
import img9 from "@/public/ImageGallery/img9.webp";
import img10 from "@/public/ImageGallery/img10.jpg";
import img11 from "@/public/ImageGallery/img11.jpg";
import img12 from "@/public/ImageGallery/img12.jpg";
import img13 from "@/public/ImageGallery/img13.jpg";
import img14 from "@/public/ImageGallery/img14.jpg";
import img15 from "@/public/ImageGallery/img15.jpg";
import img16 from "@/public/ImageGallery/img16.jpg";
import img17 from "@/public/ImageGallery/img17.jpg";
import img18 from "@/public/ImageGallery/img18.jpg";
import img19 from "@/public/ImageGallery/img19.jpg";
import img20 from "@/public/ImageGallery/img20.jpg";
import img21 from "@/public/ImageGallery/img21.jpg";
import img22 from "@/public/ImageGallery/img22.jpg";
import img23 from "@/public/ImageGallery/img23.jpg";
import img24 from "@/public/ImageGallery/img24.jpg";
import img25 from "@/public/ImageGallery/img25.jpg";
import img26 from "@/public/ImageGallery/img26.jpg";
import img27 from "@/public/ImageGallery/img27.jpg";
import img28 from "@/public/ImageGallery/img28.jpg";
import img29 from "@/public/ImageGallery/img29.jpg";
import img30 from "@/public/ImageGallery/img30.jpg";
import img31 from "@/public/ImageGallery/img31.jpg";
import img32 from "@/public/ImageGallery/img32.jpg";
import img33 from "@/public/ImageGallery/img33.jpg";
import img34 from "@/public/ImageGallery/img34.jpg";
import img35 from "@/public/ImageGallery/img35.jpg";
import img36 from "@/public/ImageGallery/img36.jpg";
import img37 from "@/public/ImageGallery/img37.jpg";
import img38 from "@/public/ImageGallery/img38.jpg";




const GridImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={` h-14  w-14 absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-4" : "right-4"
      } bg-white/40 backdrop-blur-sm hover:bg-white/80 rounded-full p-2 shadow-lg transition-all z-10 flex items-center justify-center`}
    >
      {direction === "left" ? (
        <ArrowLeft className="h-8 w-8" />
      ) : (
        <ArrowRight className="h-8 w-8" />
      )}
    </button>
  );

  return (
    <>
      <div className="w-8xl mx-auto flex relative overflow-hidden transform-gpu">
        <div
          className="w-full flex-shrink-0 flex justify-center items-center  mx-auto py-16 bg-pink-300/300 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
            perspective: "1000px",
            backfaceVisibility: "hidden",
            opacity: "1",
          }}
        >
          <div className="inline-flex flex-col gap-5 md:flex-row w-auto bg-blue-500/500">
            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img6}
                  alt="1"
                  className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img7}
                  alt="2"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img4}
                  alt="3"
                  className="xl:w-[420px] xl:h-[530px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img8}
                  alt="4"
                  className="xl:w-[420px] xl:h-[520px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img9}
                  alt="5"
                  className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img5}
                  alt="6"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img1}
                  alt="7"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img2}
                  alt="8"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img3}
                  alt="9"
                  className="xl:w-[420px] xl:h-[540px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full flex-shrink-0 flex justify-center items-center  mx-auto py-16 bg-pink-300/300 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
            perspective: "1000px",
            backfaceVisibility: "hidden",
            opacity: "1",
          }}
        >
          <div className="inline-flex flex-col gap-5 md:flex-row w-auto bg-blue-500/500">
            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img17}
                  alt="1"
                  className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img16}
                  alt="2"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img13}
                  alt="3"
                  className="xl:w-[420px] xl:h-[530px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img11}
                  alt="4"
                  className="xl:w-[420px] xl:h-[520px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img35}
                  alt="5"
                  className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img24}
                  alt="6"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img18}
                  alt="7"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img37}
                  alt="8"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img10}
                  alt="9"
                  className="xl:w-[420px] xl:h-[540px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full flex-shrink-0 flex justify-center items-center  mx-auto py-16 bg-pink-300/300 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
            perspective: "1000px",
            backfaceVisibility: "hidden",
            opacity: "1",
          }}
        >
          <div className="inline-flex flex-col gap-5 md:flex-row w-auto bg-blue-500/500">
            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img27}
                  alt="1"
                  className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img23}
                  alt="2"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img29}
                  alt="3"
                  className="xl:w-[420px] xl:h-[530px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img31}
                  alt="4"
                  className="xl:w-[420px] xl:h-[520px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img38}
                  alt="5"
                  className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img21}
                  alt="6"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <div>
                <Image
                  src={img26}
                  alt="7"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img34}
                  alt="8"
                  className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img10}
                  alt="9"
                  className="xl:w-[420px] xl:h-[540px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>

        <ArrowButton direction="left" onClick={goToPrev} />
        <ArrowButton direction="right" onClick={goToNext} />
      </div>
    </>
  );
};

const BannerImage = ({ imgsrc }) => {
  return (
    <Image
      src={imgsrc}
      alt="Banner"
      className="xl:w-[1080px] xl:h-[470px] lg:w-[880px] lg:h-[380px] md:w-[672px] md:h-[288px] w-[350px] h-[150px] rounded-xl object-cover"
      placeholder="blur"
      quality={100}
    />
  );
};

export { GridImage, BannerImage };
