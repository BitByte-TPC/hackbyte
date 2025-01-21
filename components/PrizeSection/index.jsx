"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import lamp_orange from "@/public/lamp_orange.svg";
import lamp_white from "@/public/lamp_white.svg";
import lamp_yellow from "@/public/lamp_yellow.svg";
import cup2 from "@/public/cup2.svg";
import cup3 from "@/public/cup3.svg";
import cup1 from "@/public/cup1.svg";

const PrizeCard = ({
  lampImage,
  cupImage,
  prizeAmount,
  prizeDescription,
  gradientColors,
  gradientClasses,
  textColor,
}) => (
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
    className={`flex flex-col items-center justify-center sm:-ml-8 lg:-ml-12 mt-8 sm:mt-28 ${prizeDescription == "2nd Prize - Silver" ? "sm:order-1 order-2" : prizeDescription == "3rd Prize - Bronze" ? "sm:order-3 order-3" : "order-1 sm:order-2 md:mb-16 lg:mb-20 xl:mb-32"}`}
  >
    <div className="flex flex-col items-center justify-center xl:w-[460px]">
      <div>
        <Image
          src={lampImage}
          alt="lamp"
          className="lg:w-[20vw] sm:w-[18vw] z-10"
        />
      </div>
      <div className="blur-[20px] -mt-6 -z-10 flex flex-col justify-center items-center">
        <div
          className={`lg:w-[38vw] w-[98vw] sm:w-[36vw] h-[350px] lg:h-[500px] xl:h-[665px] bg-gradient-to-b ${gradientColors} ${gradientClasses}`}
        ></div>
      </div>
    </div>
    <div className="absolute flex flex-col items-center justify-center gap-3 mb-8 sm:mb-24">
      <Image src={cupImage} className="w-14" alt="cup" />
      <p className="font-gotham lg:text-5xl text-5xl md:text-4xl sm:text-3xl font-extrabold text-white">
        {prizeAmount}
      </p>
      <div
        className={`font-gotham lg:text-2xl text-2xl md:text-xl sm:text-lg font-extrabold ${textColor}`}
      >
        {prizeDescription}
      </div>
    </div>
  </motion.div>
);

const PrizeSection = () => {
  const prizeData = [
    {
      lampImage: lamp_yellow,
      cupImage: cup1,
      prizeAmount: "INR 35K",
      prizeDescription: "1st Prize - Gold",
      gradientColors: "from-[#FFAE0C]/30 via-[#FFAE0C]/40 to-transparent to-85%",
      gradientClasses: "clip-trapezium",
      textColor: "text-[#FFAE0C]",
    },
    {
      lampImage: lamp_white,
      cupImage: cup2,
      prizeAmount: "INR 25K",
      prizeDescription: "2nd Prize - Silver",
      gradientColors:
        "from-supporting-mediumGray/30 via-supporting-mediumGray/40 to-transparent to-85%",
      gradientClasses: "clip-trapezium",
      textColor: "text-supporting-mediumGray",
    },
    {
      lampImage: lamp_orange,
      cupImage: cup3,
      prizeAmount: "INR 15K",
      prizeDescription: "3rd Prize - Bronze",
      gradientColors: "from-[#D76835]/30 via-[#D76835]/40 to-transparent to-85%",
      gradientClasses: "clip-trapezium",
      textColor: "text-[#FFAE0C]",
    },
  ];

  return (
    <div className="flex justify-evenly items-center w-screen flex-col sm:flex-row">
      {prizeData.map((prize, index) => (
        <PrizeCard
          key={index}
          lampImage={prize.lampImage}
          cupImage={prize.cupImage}
          prizeAmount={prize.prizeAmount}
          prizeDescription={prize.prizeDescription}
          gradientColors={prize.gradientColors}
          gradientClasses={prize.gradientClasses}
          textColor={prize.textColor}
        />
      ))}
    </div>
  );
};

export default PrizeSection;
