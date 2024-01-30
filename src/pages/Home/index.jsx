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
      className="w-full min-h-screen bg-cover bg-no-repeat py-4 md:py-0"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundAttachment: "fixed",
        overflow: "auto",
      }}
    >
      <Navbar />
      <div className="w-full mt-[4.5rem] md:my-4 px-4 md:px-12">
        <div className="flex flex-wrap justify-between items-center gap-4 lg:gap-0">
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <p
              className="text-[#FAF8ED] text-[1.25rem] font-medium uppercase 
                lg:text-[1.5rem] 2xl:text-[1.75rem]"
            >
              This year&apos;s theme :{" "}
            </p>
            <p
              className="text-[#FAF8ED] text-[2.375rem] font-medium leading-[1.2] 
                lg:leading-[1.1] lg:text-[3rem] 2xl:text-[4rem]"
            >
              Digital Anonymity
              <br /> Unleashed
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 w-full lg:items-end lg:w-1/2">
            <p
              className="text-[#FAF8ED] text-[1.25rem] font-medium text-left 
              lg:text-right lg:text-[1.5rem] 2xl:text-[1.75rem]"
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

        <div className="flex items-center justify-center my-12 lg:mt-4 2xl:mt-12">
          <img
            src={hackByteLogo}
            alt="HackByte Logo"
            className="max-w-full h-auto"
          />
        </div>

        <div className="flex items-center justify-between gap-4 mt-8 2xl:mt-12">
          <div className="flex flex-col items-start gap-2">
            <p
              className="text-[#FAF8ED] text-[1rem] font-[600]
               md:text-[1.125rem] 2xl:text-[1.25rem]"
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
                    style={{
                      width: "4rem",
                      height: "2.125rem",
                    }}
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
                    style={{
                      width: "5.5rem",
                      height: "2rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:items-end w-1/3">
            <p
              className="text-[#FAF8ED] text-[1rem] lg:text-[1.125rem] 
              2xl:text-[1.25rem] font-[600] text-right"
            >
              HackByte: Empower Your Digital Odyssey!
            </p>
            <p
              className="text-[#FAF8ED] text-[1rem] lg:text-[1.125rem] 
              2xl:text-[1.25rem] font-normal text-right uppercase"
            >
              Embark on an enriching voyage with
              <br /> HackByte, where the fusion of tech expertise and boundless
              innovation unfolds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
