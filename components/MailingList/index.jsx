"use client";
import { useState } from "react";
import Image from "next/image";
import FadeInView from "@/components/FadeInView";

const MailingList = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(""); // NEW

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubscribe = async () => {
    const trimmedEmail = email.trim();

    // NEW: validation + user feedback
    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append("entry.1008749988", trimmedEmail);

    try {
      await fetch(
        "https://docs.google.com/forms/d/1APq2vApbi9Aysa-h_9cKiNxl2o77UnOojfVztmgdUDc/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setEmail("");
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission failed", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen relative bg-[linear-gradient(206deg,_#4E0088_13.13%,_#180029_86.33%)] overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Lightning Left - no animation (decorative background) */}
      <FadeInView className={"absolute top-[5px] md:top-[-180px] left-[-5%] md:left-[-40px] w-[50vw] md:w-[620px] aspect-square z-0 pointer-events-none"}>
      <div className="">
        
          <Image
          src="/MailingList/lightning_left.svg"
          alt="lightning-effect"
          fill
          className="object-contain"
        />
      </div>
      </FadeInView>

      {/* Lightning Right - no animation (decorative background) */}
      <FadeInView className="absolute top-[-25px] md:top-[-190px] right-[-5%] md:right-[-10px] w-[50vw] md:w-[620px] aspect-square z-0 pointer-events-none">
        <div className="">
          <Image
          src="/MailingList/lightning_right.svg"
          alt="lightning-effect"
          fill
          className="object-contain"
        />
      </div>
      </FadeInView>

      
      <div className="absolute top-0 md:top-[-90px] left-[5%] md:left-[100px] z-10 pt-10 md:pt-16 pointer-events-none">

        <FadeInView className="relative w-[100px] h-[100px] md:w-[210px] md:h-[210px] rotate-[-147]">
          <Image
              src="/MailingList/siren.svg"
              alt="soundhorn-svg"
              fill
              className="object-contain origin-center"
            />
        </FadeInView>
      </div>
      
      {/* Siren Icon */}

      {/* Join Newsletter Header */}
        <FadeInView delay={0.5} className="absolute top-[50px] md:top-[50px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[93px] z-20 w-[90%] md:w-[800px] h-[150px] md:h-[240px] pointer-events-none">
          <Image
            src="/MailingList/join_newsletter.svg"
            alt="Join Our Newsletter"
            fill
            className="object-contain rotate-[-4deg] drop-shadow-[0_2.878px_0_rgba(0,0,0,0.25)]"
          />
        </FadeInView>
      

      <div
        className={`mt-[140px] md:mt-[250px] w-full flex flex-col items-center px-4 md:px-6 relative z-30 font-kanit`}
      >
        <div className="relative w-full max-w-[850px] px-2">
          {/* Main Card */}
          <FadeInView delay={0.1}>
            <div className="relative w-full z-20 bg-[linear-gradient(97deg,_#570089_-1.22%,_#A200FF_49.96%,_#210035_142.76%)] border-[4px] md:border-[11px] border-white rounded-[20px] p-2 md:p-3 shadow-2xl">
              {/* Bandaid decoration */}
              <div className="absolute bottom-0 right-0 translate-x-[35%] translate-y-[43%] md:top-0 md:left-0 md:-translate-x-[40%] md:-translate-y-[35%] w-[200px] md:w-[clamp(370px,8vw,100px)] aspect-[2.2/1] z-30 pointer-events-none transform rotate-[-33.74]">
                <Image
                  src="/MailingList/bandaid.svg"
                  alt="Decoration"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>

              <div className="flex flex-col items-center w-full pt-1 pb-4 md:px-4">
                {/* Mobile Join Text */}
                <div className="relative w-[260px] h-[60px] mb-5 md:hidden">
                  <Image
                    src="/MailingList/mobile_join.svg"
                    alt="Join mailing list (mobile)"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Desktop Join Text */}
                <div className="relative w-[600px] h-[120px] mb-1 hidden md:block">
                  <Image
                    src="/MailingList/join_maillist.svg"
                    alt="Be a part of our mailing list"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Benefits List */}
                <div className="bg-white rounded-[24px] w-full mb-5 py-4 pt-0 px-5 md:py-12 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 shadow-[0_3.18px_0_0_rgba(0,0,0,0.25)]">
                  <ul className="space-y-4 flex-1 w-full mt-5 md:mt-0">
                    {[
                      "Be the first ones to register for HackByte 4.0",
                      "Get updates about your application status",
                      "Get notified for exciting events!",
                    ].map((text, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-1 md:mr-3 flex-shrink-0">
                          <Image
                            src="/MailingList/bullet_p.svg"
                            width={20}
                            height={20}
                            alt="bullet"
                            className="w-2 h-2 md:w-5 md:h-5"
                          />
                        </div>
                        <span
                          className={`text-[#6b21a8] text-[4vw] md:text-xl leading-tight font-poppins ${
                            i === 2 ? "font-[900]" : "font-[400]"
                          }`}
                        >
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex-shrink-0 relative w-[60px] h-[60px] mr-1 md:w-[120px] md:h-[80px]">
                    <Image
                      src="/hbb4.svg"
                      alt="HB 4.0 Logo"
                      fill
                      className="object-contain scale-150"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Email Input Form */}
        <div className="w-full max-w-[850px] mt-17 md:mt-8 relative">
          <div className="mx-1 relative rounded-[24px] md:rounded-full p-[5px] bg-[#7A00D4] shadow-[0_10px_0_rgba(0,0,0,0.35)]">
            <div
              className="relative
                flex flex-col md:flex-row
                bg-white
                rounded-[24px] md:rounded-full
                p-2 px-4 py-5 md:p-0
                gap-2 md:gap-0"
            >
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(""); // NEW: clear error on typing
                  setSubmitted(false); // NEW: allow resubscribe after edits
                }}
                aria-invalid={Boolean(error)} // NEW
                className="
                    w-full
                    h-12 md:h-20
                    px-4 md:px-0
                    bg-[#F2F2F2]
                    md:bg-transparent
                    outline-none
                    md:px-10
                    rounded-[14px]
                    text-base md:text-lg
                    text-gray-700
                    placeholder:text-gray-400
                    font-light
                    font-kanit"
              />

              {/* NEW: error message */}
              {error ? (
                <p className="md:absolute md:left-10 md:top-full md:mt-2 text-sm text-red-200">
                  {error}
                </p>
              ) : null}

              <button
                onClick={handleSubscribe}
                disabled={submitted}
                className="
                    w-full md:w-auto
                    h-12 md:h-16
                    px-6 md:px-10
                    rounded-[14px]
                    md:rounded-full
                    bg-[linear-gradient(104deg,_#FFEC1A_24.89%,_#FFE60B_56.78%,_#FFE41A_108.63%)]
                    text-[#2B0040]
                    font-extrabold
                    text-sm md:text-lg
                    transition-transform
                    active:scale-95
                    md:active:scale-90
                    shadow-[0_4px_0_rgba(0,0,0,0.25)]
                    md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2"

              >
                {submitted ? "Subscribed" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
