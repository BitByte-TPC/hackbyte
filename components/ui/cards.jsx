"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Tilt } from "react-tilt";

const SponsorCard = ({ index, sponsor, category, sponsorimgsrc, site }) => {
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
              className="w-[295px] min-w-[306px] xl:w-[350px]  
                shadow text-white rounded-[8px]"
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
                src={sponsorimgsrc}
                className="rounded-t-[8px] w-[306px] h-[181px] xl:w-[350px] 
                  xl:h-[207px] outline-none"
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
                    className="w-6 h-6 p-[2px] hover:-rotate-45 
                    transition-transform duration-300 ease-in-out"
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
