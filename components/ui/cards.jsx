"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Tilt } from "react-tilt";

const SponsorCard = ({ index, sponsor, category, sponsorimgsrc, site }) => {
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

  const defaultGradient =
    "radial-gradient(100% at center, #363636 100%, #1A1A1A 27%)";
  const hoverGradient =
    "radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)";

  return (
    <>
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
          y: index % 3 === 1 ? 20 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <a href={site} target="_blank" rel="noreferrer">
          <Tilt options={defaultOptions}>
            <div
              className="w-full shadow text-white rounded-[8px]"
              style={{
                "--default-gradient": defaultGradient,
                "--hover-gradient": hoverGradient,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--hover-gradient)";
                setIsHovered(true);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--default-gradient)";
                setIsHovered(false);
              }}
            >
              <Image
                src={sponsorimgsrc}
                className="w-full h-[181px] xl:h-[207px] rounded-t-[8px] outline-none"
                placeholder="blur"
              />
              <div
                className="flex justify-between items-start p-6 rounded-b-[8px] 
                  border-b border-x border-[#FFFAEF]"
              >
                <div className="flex flex-col gap-2">
                  <p className="sm:text-2xl text-xl">{sponsor}</p>
                  <p className="text-[#C3C3C3] sm:text-2xl text-xl leading-9 font-[Inter]">
                    {category}
                  </p>
                </div>
                <div className="hover:bg-[#1B1B1B] mt-1 p-1">
                  <ArrowRightIcon
                    className={`w-6 h-6 p-[2px] transition-transform duration-300 
                      ease-in-out ${isHovered ? "-rotate-45" : ""}`}
                  />
                </div>
              </div>
            </div>
          </Tilt>
        </a>
      </motion.div>
    </>
  );
};

export default SponsorCard;
