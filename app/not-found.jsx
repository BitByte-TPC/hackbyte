import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div
        class="bg-[#101010] flex flex-col min-h-fit
          p-4 md:pb-64 lg:px-0 md:pt-24 pt-16"
      >
        <div
          className="flex flex-col items-start gap-12 xl:gap-16 px-4 pt-20 
            md:px-8 lg:px-20 2xl:px-40 lg:pt-12"
        >
          <div className="flex flex-col items-start gap-6 max-w-full lg:max-w-[80%]">
            <div
              className="flex items-center rounded-[2.5rem] border border-[#D1CAC7] 
                py-3 px-4 md:py-4"
            >
              <p className="text-[#AD9C94] font-normal text-[1.125rem] md:text-[1.25rem]">
                ERROR 404
              </p>
            </div>
            <p
              className="text-[#F5F0D8] font-normal text-[3rem] leading-[4rem] 
                xl:leading-[5.5rem] xl:text-[5rem]"
            >
              Sorry, but the page you are looking for might have been removed or
              is temporarily unavailable.
            </p>
          </div>

          <Link href="/">
            <Button
              size="sm"
              className="bg-[#FAF8ED] text-black text-[1.125rem] font-medium
                p-6 rounded-none hover:bg-[#FAF8ED] hover:text-black"
              style={{
                boxShadow:
                  "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
              }}
            >
              BACK TO HOME
              <ArrowTopRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
              text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
              tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
