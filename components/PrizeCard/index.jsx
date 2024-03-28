"use client";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const PrizeCard = ({ amount, category, default_bg, hover_bg }) => {
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
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <Tilt options={defaultOptions}>
          <div
            className="flex flex-col justify-center items-center py-[7.25rem] 
              rounded-[8px] border border-[#FFFAEF]"
            style={{
              "--default-gradient": default_bg,
              "--hover-gradient": hover_bg,
              background: "var(--default-gradient)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--hover-gradient)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--default-gradient)")
            }
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
      </motion.div>
    </>
  );
};

export default PrizeCard;
