"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const TSPrizeCard = ({
  index,
  logo,
  alt,
  title,
  supportText,
  description,
  docLink,
}) => {
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
    "radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)";
  const hoverGradient =
    "radial-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)";

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
        <Tilt options={defaultOptions}>
          <a
            href={docLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center cursor-pointer gap-6 md:gap-12 p-4 
              md:p-8 rounded-[8px] border border-[rgba(255,255,255,0.5)] 
              min-[820px]:min-h-[500px] lg:min-h-[490px]"
            style={{
              "--default-gradient": defaultGradient,
              "--hover-gradient": hoverGradient,
              background: "var(--default-gradient)",
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--hover-gradient)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--default-gradient)")
            }
          >
            <div style={{ width: "100%" }}>
              <Image
                src={logo}
                alt={alt}
                style={{ objectFit: "contain", width: "100%" }}
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <p
                className="font-[500] text-[1.25rem] md:text-[1.5rem] text-left leading-8"
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

              <div className="flex flex-col items-start gap-1">
                <p className="text-white font-semibold text-[1rem] md:text-[1.125rem]">
                  {supportText}
                </p>
                <p
                  className="text-[#EAECF0] font-[Inter] font-normal text-left 
                    text-[1rem] md:[1.125rem]"
                >
                  {description}
                </p>
              </div>
            </div>
          </a>
        </Tilt>
      </motion.div>
    </>
  );
};

export default TSPrizeCard;
