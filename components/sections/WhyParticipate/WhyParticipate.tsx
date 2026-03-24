"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollingBackground } from "./ScrollingBackground";

//image imports
import bg from "./assets/bg.png";
import collab from "./assets/collab.svg";
import prizes from "./assets/prizes.svg";
import workshops from "./assets/workshops.svg";
import mentorship from "./assets/mentorship.svg";
import recruitment from "./assets/recruitment.svg";

import brokenNormal from "./assets/brokenNormal.svg"

const cards = [
  { src: collab, alt: "collaborate and skill up", className: "relative z-10 w-150 -left-50 max-sm:w-46 max-sm:-left-11" },
  { src: prizes, alt: "win exciting prizes", className: "relative z-10 left-40 -top-30 w-150 max-sm:w-46 max-sm:left-16 max-sm:-top-9" },
  { src: workshops, alt: "engaging workshops", className: "relative z-9 w-150 -left-50 -top-85 max-sm:w-46 max-sm:-left-11 max-sm:-top-26" },
  { src: mentorship, alt: "attend mentor sessions", className: "relative z-8 left-40 -top-138 w-150 max-sm:w-46 max-sm:left-16 max-sm:-top-42" },
  { src: recruitment, alt: "recruitment offers", className: "relative z-7 w-150 -left-50 -top-170 max-sm:w-46 max-sm:-left-11 max-sm:-top-51" },
];

export default function WhyParticipate() {
  return (
    <div className="w-full h-full z-10 gap-0 flex relative flex-col m-0">
      <Image
            src={brokenNormal}
            alt="broken normal"
            className="w-full z-50"
          />
      <div className="w-full h-80 relative flex flex-col xl:-top-38 max-md:-top-28 max-sm:-top-12 max-sm:h-60 lg:-top-32" style={{background: "linear-gradient(180deg, #2E0050 0%, #450079 100%)"}}>
        <Image
          src="/newParticipate.svg"
          width={400}
          height={300}
          alt="Why Participate?"
          className="block xl:w-[70%] mx-auto p-10 max-sm:p-2 max-sm:mt-8 max-sm:w-[280px] lg:w-[800px] lg:mt-5 xl:mt-0"
        />
      </div>
      <section
        className="relative min-h-125 h-full max-h-250 overflow-hidden border-t-white border-t-12 border-b-white border-b-12 p-0 -top-38 -mb-38 max-sm:min-h-50 max-sm:max-h-82"
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
        <div className="relative flex flex-col w-full h-full items-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={card.className} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15, 
                ease: "easeOut" 
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );

}