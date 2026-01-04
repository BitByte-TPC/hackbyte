"use client";

import { useRef } from "react";
import Image from "next/image";
import { useHorizontalScroll } from "./useHorizontalScroll";
import { ScrollingBackground } from "./ScrollingBackground";

//image imports
import bg from "./assets/bg.png";
import whyParticipate from "./assets/why-paricipate.svg";
import hb4 from "./assets/hb4.svg";
import collab from "./assets/collab.png";
import shards from "./assets/stats-bottom.svg"
import prizes from "./assets/prizes.png";
import workshops from "./assets/workshops.png";
import mentorship from "./assets/mentorship.png";
import recruitment from "./assets/recruitment.png";
import alert from "./assets/Alert.svg";
import scrollDown from "./assets/scroll-down.svg";
import crack from "./assets/crack.svg"
import brokenNormal from "./assets/brokenNormal.svg"

export default function WhyParticipate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useHorizontalScroll({
    containerRef,
    sliderRef,
    cardCount: 5,
  });

  return (
    <div className="w-full h-full z-10 gap-0 flex-col justify-between flex m-0 flex-col" ref={containerRef}>
      <div className="w-full z-10 -mb-139 max-sm:-mb-20 max-sm:z-50 max-md:-mb-100">
          <Image
            src={shards}
            alt="glass design"
            className="w-full z-50 max-sm:hidden"
          />
          <Image
            src={brokenNormal}
            alt="broken normal"
            className="w-full z-50 hidden max-sm:inline-block"
          />
          <Image
            src={scrollDown}
            alt="scroll down"
            className="relative mx-auto bottom-150 animate-bounce max-sm:w-[25px] max-sm:h-[28px] max-sm:-top-18 max-md:w-[30px] max-lg:h-[36px]"
          />
      </div>
      <div 
        className="relative w-full flex flex-row justify-around shrink-0 -mb-75 max-sm:flex-col max-sm:-mb-10" 
        style={{ 
          background: "linear-gradient(90deg, rgba(43, 8, 69, 1) 0%, #450079 100%)",
        }}
      >
        <Image
          src={whyParticipate}
          alt="Why Participate?"
          className="relative inline-block w-[55%] z-10 left-50 -top-20 max-sm:left-0 max-sm:top-0 max-sm:mt-10 max-sm:mx-auto max-sm:w-[90%] max-sm:-mb-5"
        />
        <Image
          src={crack}
          alt="crack"
          className="absolute hidden max-sm:inline-block w-[60%] left-[24%] top-[20%] z-10"
        />
        <Image src={hb4} alt="hackbyte 4.0 logo" className="relative inline-block z-10 w-[30%] h-[80%] -top-16 max-sm:top-0 max-sm:w-[35%] max-sm:left-10 max-sm:mx-auto "/>
      </div>
      {/*Scroll ref*/}
      <section
        className="relative min-h-[500px] -full h-full overflow-hidden border-t-white border-t-12 border-b-white border-b-12 p-0 max-sm:h-[450px]"
        style={{
          background: "linear-gradient(180deg, #8A00DA 0%, #BA45E8 100%)",
        }}

      >
        {/* Animated texture*/}
        <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
          <ScrollingBackground 
              imageUrl={bg.src} 
              speed={40}
              direction="diagonal" 
          />
        </div>

        <div
          ref={sliderRef}
          className="relative z-10 h-full flex flex-row w-max items-center"
        >
          <div className="relative w-screen h-141.5 shrink-0 flex flex-col items-center justify-center p-10 z-20 max-sm:h-[450px]">
            <Image src={collab} alt="collaborate" className="inline-block" />
            <Image
              src={alert}
              alt="Collaborate"
              width={120}
              height={120}
              className="absolute bottom-27 left-170 max-sm:bottom-30 max-sm:left-12 max-sm:w-[80px] max-sm:h-[80px]"
            />
          </div>
          <div className="relative w-screen h-141.5 shrink-0 flex flex-col items-center justify-center p-8 max-sm:h-[450px] max-sm:-top-2">
            <Image src={prizes} alt="prizes" className="inline-block" />
            <Image
              src={alert}
              alt="prizes"
              className="absolute w-[120px] h-[120px] bottom-27 left-170 max-sm:bottom-30 max-sm:left-8 max-sm:w-[80px] max-sm:h-[80px]" 
            />
          </div>
          <div className="relative w-screen h-141.5 shrink-0 flex flex-col items-center justify-center p-8 max-sm:h-[450px] max-sm:-top-3">
            <Image src={workshops} alt="workshops" className="inline-block" />
            <Image
              src={alert}
              alt="workshops"
              width={120}
              height={120}
              className="absolute bottom-25 left-170 max-sm:bottom-30 max-sm:left-10 max-sm:w-[80px] max-sm:h-[80px]"
            />
          </div>
          <div className="relative w-screen h-[600px] shrink-0 flex flex-col items-center justify-center p-8 max-sm:h-[450px] max-sm:-top-3">
            <Image src={mentorship} alt="mentorship" className="inline-block" />
            <Image
              src={alert}
              alt="Collaborate"
              width={120}
              height={120}
              className="absolute bottom-27 left-170 max-sm:bottom-30 max-sm:left-9 max-sm:w-[80px] max-sm:h-[80px]"
            />
          </div>
          <div className="relative w-screen h-141.5 shrink-0 flex flex-col items-center justify-center p-8  max-sm:h-[450px] max-sm:-top-6">
            <Image src={recruitment} alt="collaborate" className="inline-block" />
          </div>
        </div>
        <Image
          src={scrollDown}
          alt="scroll down"
          className="absolute left-1/2 z-30 bottom-5 w-[38px] h-[42px] animate-bounce"
        />
      </section>
    </div>
  );

}