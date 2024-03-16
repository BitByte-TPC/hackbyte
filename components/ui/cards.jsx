"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const SponsorCard = ({ index, sponsor, category, sponsorimgsrc, site }) => {
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
          <div
            className="w-[295px] min-w-[306px] xl:w-[350px] bg-[#1B1B1B] 
              hover:bg-[#353535] shadow text-white rounded-[1rem]"
          >
            <Image
              src={sponsorimgsrc}
              className="rounded-t-[1rem] w-[306px] h-[181px] xl:w-[350px] 
                xl:h-[207px] outline-none"
              placeholder="blur"
            />
            <div className="flex justify-between items-start p-6">
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
        </a>
      </motion.div>
    </>
  );
};

export default SponsorCard;
