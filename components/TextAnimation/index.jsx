"use client";
import { motion } from "framer-motion";

export default function TextAnimation({ text }) {
  const textArray = text.split(" ");

  return (
    <div>
      {textArray.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
          className="max-w-[840px] text-[#f5f0d8] text-[4rem] 
            font-normal leading-[5rem] tracking-tighter md:text-[8rem] lg:text-[6rem] 
            xl:text-[9.5rem] md:leading-[100%] md:tracking-normal"
        >
          {el === "<br>" ? <br /> : el}{" "}
        </motion.span>
      ))}
    </div>
  );
}
