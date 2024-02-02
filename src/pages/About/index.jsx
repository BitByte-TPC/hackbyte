import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import about_bg from "@/assets/aboutPage/about_bg.png";
import heroImage from "@/assets/aboutPage/heroImage.png";
import img1 from "@/assets/aboutPage/img1.svg";
import img2 from "@/assets/aboutPage/img2.svg";
import img3 from "@/assets/aboutPage/img3.svg";
import img4 from "@/assets/aboutPage/img4.svg";
import img5 from "@/assets/aboutPage/img5.svg";
import img6 from "@/assets/aboutPage/img6.svg";
import checkIcon from "@/assets/aboutPage/checkIcon.png";
import featureImage from "@/assets/aboutPage/featureImage.png";
import getInTouchImage from "@/assets/aboutPage/getInTouchImage.svg";

export default function About() {
  return (
    <>
      <div
        className="flex flex-col justify-around w-full min-h-screen 
          bg-cover bg-no-repeat p-4 md:px-12 md:py-8"
        style={{ backgroundImage: `url(${about_bg})` }}
      >
        <Navbar />
        <div className="flex-col justify-start items-center py-16 inline-flex">
          <div className="w-full flex flex-col justify-start items-start gap-3 sm:px-8">
            <p className="text-gray-200 text-xs sm:text-base font-semibold font-['Inter']">
              Nice to meet you
            </p>
            <div className="w-full flex flex-col justify-between md:flex-row gap-4">
              <p
                className="self-stretch max-w-[651px] text-white text-4xl sm:text-5xl 
                  font-medium font-['Clash Grotesk'] leading-[50px] tracking-tighter"
              >
                Our mission is to increase the GDP of your startup
              </p>
              <p
                className="max-w-[384px] self-stretch text-gray-200 text-xl 
                font-normal font-['Inter'] leading-[30px]"
              >
                Untitled is a technology company that builds infrastructure for
                your startup, so you don't have to. Businesses of every
                size—from new startups to public companies—use our software to
                manage their businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-col justify-start items-center py-16 inline-flex">
          <div className="justify-start items-center gap-24 px-2 md:px-8 md:inline-flex">
            <div className="flex-col justify-start items-start gap-16 grow shrink basis-0 inline-flex">
              <div className="flex flex-col self-stretch justify-start items-start gap-8 md:flex-row">
                <div className="flex-col justify-start items-center gap-3 grow shrink basis-0 inline-flex">
                  <p
                    className="self-stretch text-center text-white text-5xl 
                    md:text-6xl font-semibold font-['Inter'] leading-[72px]"
                  >
                    400+
                  </p>
                  <p
                    className="self-stretch text-center text-white text-lg 
                    font-semibold font-['Inter'] leading-7"
                  >
                    Projects completed
                  </p>
                  <p
                    className="self-stretch text-center text-gray-200 text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    We've helped build over 400 amazing projects.
                  </p>
                </div>
                <div className="flex-col justify-start items-center gap-3 grow shrink basis-0 inline-flex">
                  <p
                    className="self-stretch text-center text-white text-5xl 
                    md:text-6xl font-semibold font-['Inter'] leading-[72px]"
                  >
                    600%
                  </p>
                  <p
                    className="self-stretch text-center text-white text-lg
                    font-semibold font-['Inter'] leading-7"
                  >
                    Return on investment
                  </p>
                  <p
                    className="self-stretch text-center text-gray-200 text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    Our customers have reported an average of ~600% ROI.
                  </p>
                </div>
              </div>
              <div className="flex flex-col self-stretch justify-start items-start gap-8 md:flex-row">
                <div className="flex-col justify-start items-center gap-3 grow shrink basis-0 inline-flex">
                  <p
                    className="self-stretch text-center text-white text-5xl 
                    md:text-6xl font-semibold font-['Inter'] leading-[72px]"
                  >
                    10k
                  </p>
                  <p
                    className="self-stretch text-center text-white text-lg 
                    font-semibold font-['Inter'] leading-7"
                  >
                    Global downloads
                  </p>
                  <p
                    className="self-stretch text-center text-gray-200 text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    Our free UI kit has been downloaded over 10k times.
                  </p>
                </div>
                <div className="flex-col justify-start items-center gap-3 grow shrink basis-0 inline-flex">
                  <p
                    className="self-stretch text-center text-white text-5xl 
                    md:text-6xl font-semibold font-['Inter'] leading-[72px]"
                  >
                    200+
                  </p>
                  <p
                    className="self-stretch text-center text-white text-lg 
                    font-semibold font-['Inter'] leading-7"
                  >
                    5-star reviews
                  </p>
                  <p
                    className="self-stretch text-center text-gray-200 text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    We're proud of our 5-star rating with over 200 reviews.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-0">
              <img className="w-full h-auto" src={heroImage} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex-col justify-start items-center gap-16 py-16 sm:py-24 bg-white">
        <div className="flex flex-col justify-start items-start gap-12 px-4 sm:px-16">
          <div className="w-full flex flex-col justify-start items-center gap-5">
            <div className="flex flex-col justify-start items-start gap-3">
              <p
                className="self-stretch text-center text-violet-700 text-sm 
                md:text-base font-semibold font-['Inter'] leading-normal"
              >
                Our values
              </p>
              <p
                className="text-center text-gray-900 text-3xl 
                md:text-4xl font-medium font-['Clash Grotesk'] leading-[44px]"
              >
                We're an ambitious and smart team with a shared mission
              </p>
            </div>
            <p
              className="text-center text-slate-600 text-lg md:text-xl 
              font-normal font-['Inter'] leading-[30px]"
            >
              Our shared values keep us connected and guide us as one team.
            </p>
          </div>

          <div className="flex-col justify-start items-start gap-16 inline-flex">
            <div className="flex flex-col self-stretch justify-start items-start gap-8 md:flex-row">
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img className="w-10 h-10 md:w-12 md:h-12" src={img1} />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    md:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Share team inboxes
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img className="w-10 h-10 md:w-12 md:h-12" src={img2} />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    md:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Deliver instant answers
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base
                    font-normal font-['Inter'] leading-normal"
                  >
                    An all-in-one customer service platform that helps you
                    balance everything your customers need to be happy.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img className="w-10 h-10 md:w-12 md:h-12" src={img3} />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    md:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Manage your team with reports
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base
                    font-normal font-['Inter'] leading-normal"
                  >
                    Measure what matters with Untitled's easy-to-use reports.
                    You can filter, export, and drilldown on the data in a
                    couple clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col self-stretch justify-start items-start gap-8 sm:flex-row">
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img className="w-10 h-10 md:w-12 md:h-12" src={img4} />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg
                     md:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Connect with customers
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    Solve a problem or close a sale in real-time with chat. If
                    no one is available, customers are seamlessly routed to
                    email without confusion.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img className="w-10 h-10 md:w-12 md:h-12" src={img5} />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    md:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Connect the tools you already use
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base
                     font-normal font-['Inter'] leading-normal"
                  >
                    Explore 100+ integrations that make your day-to-day workflow
                    more efficient and familiar. Plus, our extensive developer
                    tools.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img className="w-10 h-10 md:w-12 md:h-12" src={img6} />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    md:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Our people make the difference
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    We're an extension of your customer service team, and all of
                    our resources are free. Chat to our friendly team 24/7 when
                    you need help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#EBB323] w-full h-full flex flex-col md:flex-row justify-between 
        items-center px-4 md:px-20 lg:px-10 xl:px-36 pt-10 pb-28 lg:pb-48 xl:pb-40"
      >
        <div className="flex flex-col justify-center items-center max-w-lg">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p
                className=" text-black text-4xl md:text-5xl font-medium 
                font-['Clash Grotesk'] leading-[2.75rem] tracking-tighter"
              >
                Share team inboxes
              </p>
              <p
                className="max-w-[30rem] text-black text-base md:text-lg 
                font-normal font-['Inter'] leading-6 sm:leading-7 tracking-tight"
              >
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:pl-4">
              <div className="flex gap-3 sm:gap-4 items-center">
                <img className="w-7 h-7" src={checkIcon} alt="" />
                <p
                  className=" text-black text-base md:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Leverage automation to move fast
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <img className="w-7 h-7" src={checkIcon} alt="" />
                <p
                  className=" text-black text-base md:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Always give customers a human to chat to
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <img className="w-7 h-7" src={checkIcon} alt="" />
                <p
                  className=" text-black text-base md:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Automate customer support and close leads faster
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl flex justify-center items-center mb-16 sm:mb-0">
          <div className="max-w-md">
            <img className="" src={featureImage} alt="" />
          </div>
        </div>
      </div>

      <div className="relative bg-[#000000] w-full h-full flex flex-col justify-end pt-48 sm:pt-80">
        <div className="absolute top-[-9rem] sm:top-[-6rem] w-full flex justify-center">
          <div
            className="w-full flex flex-col justify-between items-start gap-8 
            sm:w-[80%] mx-4 px-3 py-10 md:p-16 bg-gray-50 rounded-2xl shadow md:flex-row"
          >
            <div className="max-w-xl flex-col justify-start items-start gap-3 inline-flex">
              <div
                className="self-stretch text-gray-900 text-3xl md:text-3xl 
                font-medium font-['Clash Grotesk'] leading-8"
              >
                Join our newsletter
              </div>
              <div
                className="self-stretch text-slate-600 text-lg md:text-xl 
              font-normal font-['Inter'] leading-[1.75rem]"
              >
                Sign up for the very best tutorials and the latest news.
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-4 md:flex-row w-full xl:max-w-md">
              <div className="w-full md:max-w-lg flex-col justify-start items-start gap-1.5 inline-flex">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full py-3 px-3.5 bg-[#ffffff] rounded-lg text-gray-500 
                    border-2 border-[#D0D5DD] focus:outline-purple-300 focus:text-gray-900"
                />
              </div>
              <Button
                size="sm"
                className="w-full md:w-32 flex justify-center items-center bg-black 
                  text-white text-[1.125rem] font-medium p-6 rounded-none 
                  hover:bg-black hover:text-white"
                style={{
                  boxShadow:
                    "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-between gap-20 md:flex-row px-6 
          lg:px-10 xl:px-20 py-20"
        >
          <p
            className="max-w-3xl text-6xl lg:text-9xl xl:text-[10rem] 
          text-white font-normal font-['Clash Grotesk'] md:leading-[8rem] 
            lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <img
            className="w-44 h-44 lg:h-60 lg:w-60"
            src={getInTouchImage}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
