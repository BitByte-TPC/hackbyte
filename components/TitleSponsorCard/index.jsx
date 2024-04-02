"use client";

import { useState } from "react";
import Image from "next/image";
import logitech from "@/public/partnersPage/logitech.jpg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Tilt } from "react-tilt";

export default function TitleSponsorCard() {
  const [isHovered, setIsHovered] = useState(false);
  const defaultOptions = {
    reverse: false,
    max: 4,
    perspective: 1000,
    scale: 1.02,
    speed: 200,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  return (
    <a
      href="https://www.logitech.com/en-in/mx/master-series.html"
      target="_blank"
      rel="noreferrer"
      className="w-full xl:max-w-[95%] 2xl:max-w-[90%] flex justify-center"
    >
      <Tilt options={defaultOptions}>
        <div
          className="flex flex-col md:flex-row shadow rounded-[8px]"
          style={{
            background:
              "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)",
          }}
          onMouseEnter={(e) => {
            setIsHovered(true);
          }}
          onMouseLeave={(e) => {
            setIsHovered(false);
          }}
        >
          <Image
            className="w-full md:w-[300px] lg:w-[350px] xl:w-[450px] rounded-t-[8px] 
              md:rounded-r-none md:rounded-l-[8px]"
            src={logitech}
            alt="Logitech"
            placeholder="blur"
          />
          <div
            className="flex flex-col justify-center items-start px-4 
              xl:px-8 py-8 md:py-4 gap-2 rounded-b-[8px] md:rounded-l-none 
              md:rounded-r-[8px] border-x border-b md:border-l-0 md:border-y 
              md:border-r border-[#FFFAEF]"
          >
            <div className="w-full flex justify-between items-center">
              <p className="font-medium text-[2rem] xl:text-[2.25rem]">
                Logitech
              </p>
              <div className="hover:bg-[#1B1B1B] mt-1 p-1">
                <ArrowRightIcon
                  className={`w-6 h-6 lg:w-8 lg:h-8 p-[2px] transition-transform 
                    duration-300 ease-in-out ${isHovered ? "-rotate-45" : ""}`}
                />
              </div>
            </div>
            <p className="text-[#C3C3C3] text-[1.25rem] md:text-[1.5rem] font-[Inter]">
              Title Sponsor
            </p>
            <p className="text-[#EAECF0] font-normal font-[Inter] text-[1rem] md:text[1.125rem]">
              The MX Master Series is expertly designed for users, empowering
              coders to unleash productivity and optimize performance during
              intense coding marathons.
            </p>
          </div>
        </div>
      </Tilt>
    </a>
  );
}
