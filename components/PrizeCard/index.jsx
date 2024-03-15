"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function PrizeCard({ position, type, amount, image }) {
  return (
    <>
      <div
        className={`flex flex-col items-start p-6 gap-8 bg-[#272727] relative overflow-hidden group rounded-t-xl rounded-b-xl border-b-4 ${
          position === "1st"
            ? "border-yellow-300"
            : position === "2nd"
            ? "border-gray-400"
            : "border-orange-400"
        } ${position === "1st" && "order-[-1] md:order-[0]"}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            position === "1st"
              ? "from-yellow-300 to-yellow-400"
              : position === "2nd"
              ? "from-gray-300 to-gray-600"
              : "from-orange-400 to-orange-500"
          } translate-y-[100%] group-hover:translate-y-[75%] transition-transform duration-500`}
        />
        <motion.div
          className="card"
          whileHover={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 1.8 }}
        >
          <Image
            src={image}
            alt={`${type} Cup`}
            placeholder="blur"
            className="z-10"
          />
        </motion.div>
        <div className="w-full flex flex-col items-center z-10">
          <p className="text-[#fff] text-[2rem] font-[500]">{`${position}-${type}`}</p>
          <p className="text-[#d1cac7] text-[1.5rem] font-normal group-hover:font-bold">
            Win {amount}
          </p>
        </div>
      </div>
    </>
  );
}
