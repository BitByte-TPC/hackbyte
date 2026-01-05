"use client"
import { useState, useMemo } from "react"
import HumanCard from "@/components/HumansCard/Card"
import Image from "next/image"
import { organizerss } from "@/data/orgData.js"
import { mentorss } from "@/data/mentorData"
import { famm } from "@/data/famData"
import FadeInView from "@/components/FadeInView"

export default function HumansPage() {
  const [activeTab, setActiveTab] =
    useState<"organizers" | "mentors" | "family">("organizers")

  const organizersGrid = useMemo(
    () => (
      <div className="w-full">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-y-16
            gap-x-12
            max-w-[300px]
            md:max-w-[1400px]
            mx-auto
            px-8
            "
        >
          {organizerss.map((p, i) => (
            <FadeInView key={p.name} delay={0.02 * i} yOffset={30}>
              <HumanCard {...p} />
            </FadeInView>
          ))}
        </div>
      </div>
    ),
    []
  )

  const mentorsGrid = useMemo(
    () => (
      <div
        className="grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-y-16
            gap-x-12
            max-w-[300px]
            md:max-w-[1400px]
            mx-auto
            px-8"
      >
        {mentorss.map((p, i) => (
          <FadeInView key={p.name} delay={0.02 * i} yOffset={30}>
            <HumanCard {...p} />
          </FadeInView>
        ))}
      </div>
    ),
    []
  )

  const familyGrid = useMemo(
    () => (
      <div
        className="grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-y-16
            gap-x-12
            max-w-[300px]
            md:max-w-[1400px]
            mx-auto
            px-8"
      >
        {famm.map((p, i) => (
          <FadeInView key={p.name} delay={0.02 * i} yOffset={30}>
            <HumanCard {...p} />
          </FadeInView>
        ))}
      </div>
    ),
    []
  )

  return (
    <div className="w-screen min-h-svh overflow-x-hidden">
      <div className="-z-10 sm:h-[95vh] h-[35vh] w-screen relative overflow-hidden">
        <Image
          src="/sponsers_bg.svg"
          alt="Sponsors background"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Past Partners Section */}
        <div className="absolute inset-0 flex sm:flex-row w-screen flex-col items-center sm:justify-between justify-center lg:px-0 xl:gap-40">
          {/* Left side - Past Partners text */}
          <div className="w-[90%] sm:self-center self-start sm:w-[70%]  md:w-[70%] lg:w-[60%] xl:w-[60%] z-20">
            <FadeInView delay={0.1} yOffset={20}>
              <Image
                src="/humans_title.svg"
                alt="Humans at Hackbyte"
                width={574}
                height={158}
                className="w-full h-auto object-contain object-center"
                priority
              />
            </FadeInView>
          </div>

          {/* Right side - HB4 Logo */}
          <div className="w-[35%] sm:block hidden sm:self-center self-end sm:w-[30%] md:w-[25%] lg:w-[25%] xl:w-[10%]sm:mr-40 md:mr-15 lg:mr-30 xl:mr-40">
            <FadeInView delay={0.2} yOffset={20}>
              <Image
                src="/keyboard.svg"
                alt="Cool Keyboard"
                width={250}
                height={250}
                className="w-full h-auto object-contain object-center"
                priority
              />
            </FadeInView>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-screen bg-gradient-to-b from-black relative to-[#34085B] flex flex-col items-center pt-16 pb-30">
        <div className="w-full h-32 absolute z-10 bg-amber-300/300 -top-[14.9vw]">
          <FadeInView delay={0.05} yOffset={10}>
            <Image
              src="/stats-upper-2.svg"
              alt="Decorative glass design"
              className="w-full object-cover object-top"
              width={100}
              height={100}
              loading="lazy"
            />
          </FadeInView>
        </div>

        {/* Toggle Button */}
        <FadeInView delay={0.15} yOffset={20} className="w-full">
          <div className="w-full flex items-start justify-start sm:pt-50 pt-15 z-100 px-8 md:px-20">
            <div className="flex items-center bg-[#3D1A5C] rounded-full border border-purple-700/50 h-8 md:h-10">
              <button
                onClick={() => setActiveTab("organizers")}
                aria-pressed={activeTab === "organizers"}
                className={`px-6 md:px-8 h-full rounded-full font-semibold text-sm md:text-lg transition-all duration-300 ${activeTab === "organizers"
                    ? "bg-[#9E00F9] text-white shadow-lg"
                    : "bg-transparent text-purple-300 hover:text-white"
                  }`}
              >
                Organizers
              </button>

              <button
                onClick={() => setActiveTab("mentors")}
                aria-pressed={activeTab === "mentors"}
                className={`px-6 md:px-8 h-full rounded-full font-semibold text-sm md:text-lg transition-all duration-300 ${activeTab === "mentors"
                    ? "bg-[#9E00F9] text-white shadow-lg"
                    : "bg-transparent text-purple-300 hover:text-white"
                  }`}
              >
                Mentors
              </button>

              <button
                onClick={() => setActiveTab("family")}
                aria-pressed={activeTab === "family"}
                className={`px-6 md:px-8 h-full rounded-full font-semibold text-sm md:text-lg transition-all duration-300 ${activeTab === "family"
                    ? "bg-[#9E00F9] text-white shadow-lg"
                    : "bg-transparent text-purple-300 hover:text-white"
                  }`}
              >
                Family
              </button>
            </div>
          </div>
        </FadeInView>

        {/* Content based on active tab */}
        <div className="mt-12 w-screen">
          {activeTab === "organizers" && organizersGrid}
          {activeTab === "mentors" && mentorsGrid}
          {activeTab === "family" && familyGrid}
        </div>
      </div>
    </div>
  )
}
