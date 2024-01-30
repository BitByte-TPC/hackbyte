import React from "react";
import backgroundImg from "../../assets/background.png";
import Navbar from "@/components/Navbar";
import hackByteLogo from "../../assets/hackbyteLogo.png";
import tpcLogo from "../../assets/tpcLogo.svg";
import iiitdmjLogo from "../../assets/iiitdmjLogo.svg";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-around w-full min-h-screen 
        bg-cover bg-no-repeat p-4 md:px-12 md:py-8"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <div className="flex flex-wrap justify-between items-center gap-4 lg:gap-0">
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <p
            className="text-[#FAF8ED] text-[1.25rem] font-medium uppercase 
                lg:text-[1.5rem]"
          >
            This year&apos;s theme :{" "}
          </p>
          <p
            className="text-[#FAF8ED] text-[2.375rem] font-medium leading-[1.2] 
                lg:leading-[1.1] lg:text-[3rem]"
          >
            Digital Anonymity
            <br /> Unleashed
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 w-full lg:items-end lg:w-1/2">
          <p
            className="text-[#FAF8ED] text-[1.25rem] font-medium text-left 
              lg:text-right lg:text-[1.5rem]"
          >
            — Round 1 kicks off at
            <br /> 5 April 2024, IIIT Jabalpur
          </p>
          <Button
            size="sm"
            className="bg-[#FAF8ED] text-black text-[1.125rem] font-medium uppercase 
                    p-6 rounded-none hover:bg-[bg-[#FAF8ED] hover:text-black"
            style={{
              boxShadow:
                "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
            }}
          >
            Explore Challenge
            <ArrowTopRightIcon />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center my-12 lg:my-4">
        <img
          src={hackByteLogo}
          alt="HackByte Logo"
          className="max-w-[35rem] min-w-[15rem] w-[80%] 2xl:max-w-[45rem]"
        />
      </div>

      <div className="flex items-center justify-between gap-4 mt-8 lg:mt-4">
        <div className="flex flex-col items-start gap-2">
          <p
            className="text-[#FAF8ED] text-[1rem] font-[600]
               md:text-[1.125rem]"
          >
            HackByte: Empower Your Digital Odyssey!
          </p>
          <div className="flex items-stretch">
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center gap-4">
                <img
                  src={tpcLogo}
                  alt="TPC Logo"
                  className="w-[4rem] h-[2.125rem]"
                />
                <p className="text-[#FAF8ED] text-[0.75rem] font-[600]">
                  Organised by
                  <br className="hidden md:block" /> The Programming Club of
                  IIITDMJ
                </p>
              </div>
            </div>
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center">
                <img
                  src={iiitdmjLogo}
                  alt="IIITDMJ Logo"
                  className="w-[5.5rem] h-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:items-end w-1/3">
          <p className="text-[#FAF8ED] text-[1rem] lg:text-[1.125rem] font-[600] text-right">
            HackByte: Empower Your Digital Odyssey!
          </p>
          <p className="text-[#FAF8ED] text-[1rem] lg:text-[1.125rem] font-normal text-right uppercase">
            Embark on an enriching voyage with HackByte, where the fusion of
            tech expertise and boundless innovation unfolds.
          </p>
        </div>
      </div>
    </div>
  );
}
