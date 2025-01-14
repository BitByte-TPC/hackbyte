"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import lamp_orange from "../../public/lamp_orange.svg";
import lamp_white from "../../public/lamp_white.svg";
import lamp_yellow from "../../public/lamp_yellow.svg";
import cup2 from "@/public/cup2.svg";
import cup3 from "@/public/cup3.svg";
import cup1 from "../../public/cup1.svg"
// import {Tilt} from "react-tilt";

const PrizeSection = () => {
  //   const defaultOptions = {
  //     reverse: false,
  //     max: 4,
  //     perspective: 1000,
  //     scale: 1.02,
  //     speed: 200,
  //     transition: true,
  //     axis: null,
  //     reset: true,
  //     easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  //   };

  return (
    <>
   <div className="flex justify-between w-screen flex-col sm:flex-row px-10 sm:-ml-9 md:-ml-24 lg:-ml-40 xl:mt-14">



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
    className="flex flex-col items-center justify-center mt-28"
  >
    <div className="flex flex-col items-center justify-center">
      <div>
        <Image src={lamp_white} alt="cup" className="lg:w-[20vw]  sm:w-[18vw] z-10" />
      </div>
      <div className="blur-[20px] -mt-6 -z-10 flex flex-col justify-center items-center">
        <div
          className={`lg:w-[38vw] w-[80vw] sm:w-[36vw] sm:h-[550px] h-[635px] lg:h-[665px]  bg-gradient-to-b 
            from-[#BBBBBB]/30 from-5% 
            via-[#BBBBBB]/40 via-0% 
            to-transparent to-90% clip-trapezium`}
        ></div>
      </div>
    </div>
    <div className="absolute flex flex-col items-center justify-center gap-3 mb-24">
      <Image src={cup2} className="w-14" alt="cup"/>
      <p className="font-gotham lg:text-5xl text-5xl md:text-4xl sm:text-3xl font-extrabold text-white">INR 15K</p>
      <p className="font-gotham lg:text-2xl text-2xl md:text-xl sm:text-lg font-extrabold text-[#BBBBBB]">2nd Prize - Silver</p>
    </div>
  </motion.div>



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
    className=" flex flex-col items-center justify-center sm:-ml-14 lg:-ml-20"
  >
    <div className="flex flex-col items-center justify-center">
      <div>
        <Image src={lamp_yellow} alt="cup" className="lg:w-[20vw]  sm:w-[19vw] z-10" />
      </div>
      <div className="blur-[20px] lg;-mt-6 -z-10 flex flex-col justify-center items-center">
        <div
          className={`lg:w-[42vw] w-[80vw] sm:w-[39vw] sm:h-[600px] h-[765px] lg:h-[765px] bg-gradient-to-b 
            from-[#FFAE0C]/30 from-5% 
            via-[#FFAE0C]/40 via-0% 
            to-transparent to-90% clip-trapezium`}
        ></div>
      </div>
    </div>
    
    <div className="absolute flex flex-col items-center justify-center gap-3 mb-40">
      <Image src={cup1} className="w-14" alt="cup"/>
      <p className="font-gotham md:text-5xl text-6xl sm:text-4xl  font-extrabold text-white">INR 25K</p>
      <p className="font-gotham lg:text-2xl md:text-xl text-xl font-extrabold text-[#FFAE0C]">1st Prize - Gold</p>
    </div>
  </motion.div>



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
    className=" flex flex-col items-center justify-center sm:-ml-14 lg:-ml-20 mt-28"
  >
    <div className="flex flex-col items-center justify-center">
      <div>
        <Image src={lamp_orange} alt="cup" className="lg:w-[20vw]  sm:w-[18vw]  z-10" />
      </div>
      <div className="blur-[20px] -mt-6 -z-10 flex flex-col justify-center items-center">
        <div
          className={`lg:w-[38vw] w-[80vw] sm:w-[36vw] sm:h-[550px] h-[635px] lg:h-[665px] bg-gradient-to-b 
            from-[#D76835]/30 from-5%
            via-[#D76835]/40 via-0% 
            to-transparent to-90% clip-trapezium`}
        ></div>
      </div>
    </div>
    <div className="absolute flex flex-col items-center justify-center gap-3 mb-24">
      <Image src={cup3} className="w-14" alt="cup"/>
      <p className="font-gotham lg:text-5xl text-5xl md:text-4xl sm:text-3xl font-extrabold text-white">INR 10K</p>
      <p className="font-gotham lg:text-2xl text-2xl md:text-xl sm:text-lg font-extrabold text-[#D76835]">3rd Prize - Bronze</p>
    </div>
  </motion.div>
</div>

    </>
  );
};

export default PrizeSection;
