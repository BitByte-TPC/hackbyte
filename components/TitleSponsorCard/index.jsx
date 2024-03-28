"use client";

import Image from "next/image";
import logitech from "@/public/partnersPage/logitech.jpg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Tilt } from "react-tilt";

export default function TitleSponsorCard() {
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

  const defaultGradient =
    "radial-gradient(100% at center, #363636 100%, #1A1A1A 27%)";
  const hoverGradient =
    "radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)";

  return (
    <a
      href="https://www.logitech.com"
      target="_blank"
      rel="noreferrer"
      className="w-full xl:max-w-[95%] 2xl:max-w-[90%] flex justify-center"
    >
      <Tilt options={defaultOptions}>
        <div
          className="flex flex-col md:flex-row shadow rounded-[8px]"
          style={{
            "--default-gradient": defaultGradient,
            "--hover-gradient": hoverGradient,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--hover-gradient)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--default-gradient)")
          }
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
              <p className="text-[1.25rem] md:text-[1.5rem]">Logitech</p>
              <div className="hover:bg-[#1B1B1B] mt-1 p-1">
                <ArrowRightIcon
                  className="w-6 h-6 md:w-8 md:h-8 p-[2px] hover:-rotate-45 
                transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
            <p className="text-[#C3C3C3] text-[1.25rem] md:text-[1.5rem] font-[Inter]">
              Title Sponsor
            </p>
            <p className="text-[#EAECF0] font-normal font-[Inter] text-[1rem] md:text[1.125rem]">
              Join us to explore the innovative world of Logitech, interact with
              cutting edge peripherals through a dedicated booth and wait did we
              tell you about the amazing prizes ✨
            </p>
          </div>
        </div>
      </Tilt>
    </a>
  );
}
