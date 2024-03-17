"use client";
import React from "react";
import { Tilt } from "react-tilt";

const PrizeCard = ({ amount, category, bg }) => {
  const defaultOptions = {
    reverse: false,
    max: 8,
    perspective: 1000,
    scale: 1.02,
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
          className="flex flex-col justify-center items-center py-[7.25rem] 
      rounded-[1rem] border border-[#FFFAEF]"
          style={{
            background: bg,
          }}
        >
          <p
            className="text-white font-[500] text-[7rem] leading-[8rem] 
        md:text-[10rem] md:leading-[10rem]"
          >
            {amount}
          </p>
          <p
            className="text-[rgba(255,255,255,0.66)] font-[500] font-[Inter] 
        text-[1.5rem] md:text-[2rem]"
          >
            {category}
          </p>
        </div>
      </Tilt>
    </>
  );
};

export default PrizeCard;
