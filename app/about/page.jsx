"use client";

import { useState } from "react";
import Image from "next/image";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import backgroundImg from "@/public/background.webp";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loader";
import { Suspense } from "react";

export default function About() {
  const [email, setEmail] = useState("");
  const dbInstance = collection(db, "subscribers");

  function notify(message) {
    toast(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      progress: undefined,
    });
  }

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      notify("Please enter your email address");
      return;
    }

    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      notify("Please enter a valid email address");
      return;
    }

    try {
      await addDoc(dbInstance, {
        email,
        timestamp: new Date(),
      });
      notify("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error.message);
      notify("An error occurred. Please try again later.");
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative flex flex-col justify-around w-full min-h-screen">
        <ToastContainer />
        <Image
          src={backgroundImg}
          alt="Background Image"
          fill={true}
          priority
        />
        <div className="relative z-1 w-full p-4 md:px-12 md:py-8">
          <Navbar />
          <div className="w-full flex-col justify-start items-center py-16 inline-flex">
            <div className="w-full flex flex-col justify-start items-start gap-3 lg:px-8 xl:px-20">
              <p className="text-gray-200 text-xs sm:text-base font-semibold font-['Inter']">
                Nice to meet you
              </p>
              <div className="w-full flex flex-col justify-between md:flex-row gap-4">
                <p
                  className="self-stretch max-w-xl  text-white text-4xl md:text-3xl lg:text-[2.5rem] xl:text-5xl  
                  font-medium font-['Clash Grotesk'] leading-[50px] tracking-tighter"
                >
                  We aim to nurture thriving innovation
                </p>
                <p
                  className="max-w-sm md:max-w-[15rem] lg:max-w-xs xl:max-w-sm self-stretch text-gray-200 text-xl md:text-base lg:text-xl 
                font-normal font-['Inter'] leading-[30px]"
                >
                  Embark on an enriching voyage with HackByte, where the fusion
                  of tech expertise and boundless innovation unfolds.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-col justify-start items-center py-16 inline-flex">
            <div className="justify-start items-center gap-24 md:gap-12 xl:gap-24 px-2 md:px-0 xl:px-10 md:inline-flex">
              <div className="flex-col justify-start items-start gap-16 grow shrink basis-0 inline-flex">
                <div className="flex flex-col self-stretch justify-start items-start gap-8 md:flex-row">
                  <div className="flex-col justify-start items-center gap-3 w-full inline-flex">
                    <p
                      className="self-stretch text-center text-white text-5xl md:text-3xl 
                    lg:text-[3.25rem] xl:text-6xl font-semibold font-['Inter'] leading-[72px]"
                    >
                      1500+
                    </p>
                    <p
                      className="self-stretch text-center text-white text-lg md:text-sm lg:text-lg 
                    font-semibold font-['Inter'] leading-7"
                    >
                      Registrations
                    </p>
                    <p
                      className="self-stretch text-center text-gray-200 text-base md:text-xs lg:text-base 
                    font-normal font-['Inter'] leading-normal"
                    >
                      1500+ registrations from across the country.
                    </p>
                  </div>
                  <div className="flex-col justify-start items-center gap-3 w-full inline-flex">
                    <p
                      className="self-stretch text-center text-white text-5xl md:text-3xl 
                    lg:text-[3.25rem] 
                     xl:text-6xl font-semibold font-['Inter'] leading-[72px]"
                    >
                      500+
                    </p>
                    <p
                      className="self-stretch text-center text-white md:text-sm lg:text-lg 
                    font-semibold font-['Inter'] leading-7"
                    >
                      Offline Participants
                    </p>
                    <p
                      className="self-stretch text-center text-gray-200 text-base md:text-xs lg:text-base 
                    font-normal font-['Inter'] leading-normal"
                    >
                      500+ participants joined the offline hackathon!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col self-stretch justify-start items-start gap-8 md:flex-row">
                  <div className="flex-col justify-start items-center gap-3 w-full inline-flex">
                    <p
                      className="self-stretch text-center text-white text-5xl 
                    md:text-4xl 
                    lg:text-[3.25rem] xl:text-6xl font-semibold font-['Inter'] leading-[72px]"
                    >
                      100+
                    </p>
                    <p
                      className="self-stretch text-center text-white md:text-sm lg:text-lg 
                    font-semibold font-['Inter'] leading-7"
                    >
                      Volunteers
                    </p>
                    <p
                      className="self-stretch text-center text-gray-200 text-base md:text-xs lg:text-base 
                    font-normal font-['Inter'] leading-normal"
                    >
                      To help you, get the best out of HackByte
                    </p>
                  </div>
                  <div className="flex-col justify-start items-center gap-3 w-full inline-flex">
                    <p
                      className="self-stretch text-center text-white text-5xl 
                    md:text-4xl 
                    lg:text-[3.25rem] xl:text-6xl font-semibold font-['Inter'] leading-[72px]"
                    >
                      120+
                    </p>
                    <p
                      className="self-stretch text-center text-white md:text-sm lg:text-lg 
                    font-semibold font-['Inter'] leading-7"
                    >
                      Projects
                    </p>
                    <p
                      className="self-stretch text-center text-gray-200 text-base md:text-xs lg:text-base
                    font-normal font-['Inter'] leading-normal"
                    >
                      Innovative submissions from various domains.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-0">
                <img
                  className="w-full md:max-w-xs lg:max-w-sm xl:max-w-xl h-auto"
                  src="/aboutPage/about_img1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex-col justify-start items-center gap-16 py-16 md:py-24 bg-white">
        <div className="flex flex-col justify-start items-start gap-12 px-4 md:px-8 xl:px-20">
          <div className="w-full flex flex-col justify-start items-center gap-5">
            <div className="flex flex-col justify-start items-start gap-3">
              <p
                className="self-stretch text-center text-violet-700 text-sm md:text-sm 
                lg:text-base font-semibold font-['Inter'] leading-normal"
              >
                Opportunities for Participants
              </p>
              <p
                className="text-center text-gray-900 text-3xl 
                lg:text-4xl font-medium font-['Clash Grotesk'] leading-[44px]"
              >
                Why participate in Hackbyte?
              </p>
            </div>
            <p
              className="text-center text-slate-600 text-lg lg:text-xl 
              font-normal font-['Inter'] leading-[30px]"
            >
              HackByte 2.0 promises a wonderful experience to the participants.
            </p>
          </div>

          <div className="flex-col justify-start items-start gap-16 inline-flex">
            <div className="flex flex-col self-stretch justify-start items-start gap-8 md:flex-row">
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="/aboutPage/img1.svg"
                />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    lg:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Collaborate and skill up
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base md:text-sm lg:text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    Connect with people, form a team , learn new skills and
                    develop amazing projects!
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="/aboutPage/img2.svg"
                />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    lg:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Exciting Prices
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base md:text-sm lg:text-base
                    font-normal font-['Inter'] leading-normal"
                  >
                    Top 3 teams plus best projects of each domain will win
                    prizes which will disclosed soon!
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="/aboutPage/img3.svg"
                />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    lg:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Engaging Workshops
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base md:text-sm lg:text-base
                    font-normal font-['Inter'] leading-normal"
                  >
                    Technical workshops and events like no-light event will keep
                    the participants engaged throughout.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col self-stretch justify-start items-start gap-8 sm:flex-row">
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="/aboutPage/img4.svg"
                />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg
                     md:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Mentorship sessions
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base md:text-sm lg:text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    Get mentorship and guidance from prominent technocrats of
                    industry.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="/aboutPage/img5.svg"
                />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    lg:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Recruitment offers
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base md:text-sm lg:text-base
                     font-normal font-['Inter'] leading-normal"
                  >
                    Best performers will get recruitment offers from prestigious
                    companies.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col justify-start items-center gap-5 inline-flex">
                <img
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="/aboutPage/img6.svg"
                />
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <p
                    className="self-stretch text-center text-gray-900 text-lg 
                    lg:text-xl font-semibold font-['Inter'] leading-[30px]"
                  >
                    Expand network
                  </p>
                  <p
                    className="self-stretch text-center text-slate-600 text-base md:text-sm lg:text-base 
                    font-normal font-['Inter'] leading-normal"
                  >
                    Connect with industry professionals and recruiters and other
                    teams to learn and grow more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#EBB323] w-full h-full flex flex-col md:flex-row justify-between 
        items-center px-4 md:px-8 xl:px-36 pt-10 pb-28 lg:pb-48 xl:pb-40"
      >
        <div className="flex flex-col justify-center items-center max-w-lg">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p
                className=" text-black text-4xl lg:text-5xl font-medium 
                font-['Clash Grotesk'] leading-[2.75rem] tracking-tighter"
              >
                Share team inboxes
              </p>
              <p
                className="max-w-[30rem] text-black text-base md:text-sm lg:text-lg 
                font-normal font-['Inter'] leading-6 sm:leading-7 tracking-tight"
              >
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:pl-4">
              <div className="flex gap-3 sm:gap-4 items-center">
                <img
                  className="w-7 h-7 md:w-5 md:h-5"
                  src="/aboutPage/checkIcon.svg"
                />
                <p
                  className=" text-black text-base md:text-sm lg:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Get updates about your application status
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <img
                  className="w-7 h-7 md:w-5 md:h-5"
                  src="/aboutPage/checkIcon.svg"
                />
                <p
                  className=" text-black text-base md:text-sm lg:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Get notified for exciting events!
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <img
                  className="w-7 h-7 md:w-5 md:h-5"
                  src="/aboutPage/checkIcon.svg"
                />
                <p
                  className=" text-black text-base md:text-sm lg:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Be the first ones to register for HackByte 2.0
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl flex justify-center items-center mb-16 lg:mb-0">
          <div className="max-w-md md:max-w-sm lg:max-w-md">
            <img className="" src="/aboutPage/about_img2.png" />
          </div>
        </div>
      </div>

      <div className="relative bg-[#000000] w-full h-full flex flex-col justify-end pt-48 md:pt-60 lg:pt-80">
        <div className="absolute top-[-9rem] sm:top-[-6rem] w-full flex justify-center">
          <div
            className="w-full flex flex-col justify-between items-start gap-8 
            sm:w-[80%] mx-4 px-3 py-10 md:p-10 lg:p-16 bg-gray-50 rounded-2xl shadow md:flex-row"
          >
            <div className="max-w-xl flex-col justify-start items-start gap-3 inline-flex">
              <div
                className="self-stretch text-gray-900 text-3xl md:text-2xl lg:text-3xl 
                font-medium font-['Clash Grotesk'] leading-8"
              >
                Join our newsletter
              </div>
              <div
                className="self-stretch text-slate-600 text-lg md:text-base lg:text-xl 
              font-normal font-['Inter'] leading-[1.75rem]"
              >
                Sign up for the very best tutorials and the latest news.
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-4 lg:flex-row w-full xl:max-w-md">
              <div className="w-full md:max-w-lg flex-col justify-start items-start gap-1.5 inline-flex">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 px-3.5 bg-[#ffffff] rounded-lg text-gray-500 
                    border-2 border-[#D0D5DD] focus:outline-purple-300 focus:text-gray-900"
                />
              </div>
              <Button
                size="sm"
                onClick={handleSubscribe}
                className="w-full lg:w-32 flex justify-center items-center bg-black 
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
          md:px-8 xl:px-20 py-20"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-9xl xl:text-[10rem] 
          text-white font-normal font-['Clash Grotesk'] md:leading-[8rem] 
            lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <img
            className="w-44 h-44 lg:h-60 lg:w-60"
            src="/aboutPage/getInTouchImage.svg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}
