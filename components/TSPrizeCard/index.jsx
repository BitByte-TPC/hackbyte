"use client";
import React from "react";
import Image from "next/image";
import leftLeaf from "@/public/prizesPage/left_leaf.svg";
import rightLeaf from "@/public/prizesPage/right_leaf.svg";
import { Tilt } from "react-tilt";

const TSPrizeCard = ({ logo, alt, price, title, description }) => {
  const defaultOptions = {
    reverse: false,
    max: 10,
    perspective: 1000,
    scale: 1.08,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };
  return (
    <>
      <Tilt options={defaultOptions}>
        <div
          className="flex flex-col items-center gap-6 md:gap-12 p-4 rounded-[1rem] 
      border border-[rgba(255,255,255,0.5)] md:p-8 lg:min-h-[582px]"
          style={{
            background:
              "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
          }}
        >
          <Image src={logo} alt={alt} />

          <div className="flex justify-center items-center gap-0">
            <Image src={leftLeaf} alt="" />
            <p
              className="text-white text-center font-medium text-[4.5rem]"
              style={{
                textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
              }}
            >
              {price}
            </p>
            <Image src={rightLeaf} alt="" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <p
              className="font-[500] text-[1.25rem] md:text-[1.5rem] text-center"
              style={{
                background:
                  "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </p>

            <p
              className="text-[#EAECF0] font-[Inter] text-center text-[1rem] 
          md:[1.125rem] font-normal"
            >
              {description}
            </p>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default TSPrizeCard;
