"use client";

import Image from "next/image";
import { useState } from "react";
import FadeInView from "@/components/FadeInView";

interface Event {
  time: string;
  endTime?: string;
  title: string;
  venue: string;
  type: "Internal" | "Public" | "Everyone";
  notes?: string;
}

interface DaySchedule {
  date: string;
  day: string;
  events: Event[];
}

// Parse "2:30 PM" -> minutes since midnight
function parseTime(t: string): number {
  const [rawTime, period] = t.split(" ");
  const [h, m] = rawTime.split(":").map(Number);
  let hh = h;
  if (period === "PM" && hh !== 12) hh += 12;
  if (period === "AM" && hh === 12) hh = 0;
  return hh * 60 + m;
}

// Duration in minutes between two time strings, wrapping through midnight
function getDuration(start: string, end: string): number {
  const s = parseTime(start);
  const e = parseTime(end);
  return e >= s ? e - s : 24 * 60 - s + e;
}

export default function TimelinePage() {
  const [selectedDay, setSelectedDay] = useState(0);

  const schedule: DaySchedule[] = [
    {
      date: "03 April, 2026",
      day: "Friday",
      events: [
        {
          time: "2:30 PM",
          endTime: "5:00 PM",
          title: "Entry Begins",
          venue: "Main Gate",
          type: "Public",
        },
        {
          time: "2:30 PM",
          endTime: "5:30 PM",
          title: "Registration and Reporting",
          venue: "Front of LHTC",
          type: "Public",
        },
        {
          time: "5:00 PM",
          endTime: "6:45 PM",
          title: "Inauguration Ceremony",
          venue: "Auditorium, LHTC",
          type: "Everyone",
        },
        {
          time: "6:45 PM",
          endTime: "7:00 PM",
          title: "Participants Move to Venue and Settle",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "7:00 PM",
          title: "Hacking Begins",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "9:00 PM",
          endTime: "10:00 PM",
          title: "Dinner",
          venue: "Mess",
          type: "Everyone",
        },
      ],
    },
    {
      date: "04 April, 2026",
      day: "Saturday",
      events: [
        {
          time: "12:00 AM",
          endTime: "1:30 AM",
          title: "Mentorship Round 1",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "1:45 AM",
          endTime: "2:30 AM",
          title: "Fun Event with Prizes!",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "2:45 AM",
          title: "Midnight Snack",
          venue: "LHTC",
          type: "Public",
        },
        {
          time: "4:30 AM",
          title: "Checkpoint 1 / 4",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "7:30 AM",
          endTime: "8:30 AM",
          title: "Breakfast Break",
          venue: "Mess",
          type: "Everyone",
        },
        {
          time: "10:30 AM",
          endTime: "11:30 AM",
          title: "Fireside Chat",
          venue: "L104/L105",
          type: "Everyone",
        },
        {
          time: "12:00 PM",
          endTime: "1:00 PM",
          title: "Lunch Break",
          venue: "Mess",
          type: "Everyone",
        },
        {
          time: "2:00 PM",
          title: "Checkpoint 2 / 4",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "2:00 PM",
          endTime: "4:00 PM",
          title: "Judging Round 1",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "4:45 PM",
          title: "Evening Snacks",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "6:00 PM",
          endTime: "8:00 PM",
          title: "GitHub + MLH Workshop",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "9:00 PM",
          endTime: "10:00 PM",
          title: "Dinner Break",
          venue: "Mess",
          type: "Everyone",
        },
        {
          time: "10:30 PM",
          title: "Checkpoint 3 / 4",
          venue: "L104/L105",
          type: "Public",
        },
      ],
    },
    {
      date: "05 April, 2026",
      day: "Sunday",
      events: [
        {
          time: "12:00 AM",
          endTime: "1:30 AM",
          title: "Mentorship Round 2",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "1:45 AM",
          endTime: "2:30 AM",
          title: "Fun Event with Prizes!",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "2:45 AM",
          title: "Midnight Snack",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "4:00 AM",
          title: "Checkpoint 4 / 4",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "6:30 AM",
          title: "Soft Deadline",
          venue: "Online",
          type: "Public",
        },
        {
          time: "7:30 AM",
          title: "Hard Deadline — Coding Ends",
          venue: "Online",
          type: "Public",
        },
        {
          time: "7:30 AM",
          endTime: "8:30 AM",
          title: "Breakfast Break",
          venue: "Mess",
          type: "Everyone",
        },
        {
          time: "9:30 AM",
          title: "Judging Round 2",
          venue: "L104/L105",
          type: "Public",
        },
        {
          time: "12:00 PM",
          endTime: "1:00 PM",
          title: "Lunch Break",
          venue: "Mess",
          type: "Everyone",
        },
        {
          time: "2:30 PM",
          endTime: "4:00 PM",
          title: "Closing Ceremony & Prize Distribution",
          venue: "Auditorium, LHTC",
          type: "Everyone",
        },
      ],
    },
  ];

  const visibleEvents = schedule[selectedDay].events.filter(
    (e) => e.type === "Public" || e.type === "Everyone",
  );

  // Max duration across all events with an endTime, used to scale the bars
  const maxDuration = Math.max(
    ...visibleEvents
      .filter((e) => e.endTime)
      .map((e) => getDuration(e.time, e.endTime!)),
    1,
  );

  const getAccent = (type: Event["type"]) => {
    if (type === "Everyone")
      return {
        dot: "bg-pink-400",
        dotGlow: "shadow-pink-500/40",
        bar: "bg-gradient-to-r from-pink-400/70 to-pink-400/10",
        barBorder: "border-pink-400/20",
        time: "text-pink-300",
        label: "text-pink-400/70",
      };
    return {
      dot: "bg-violet-400",
      dotGlow: "shadow-violet-500/40",
      bar: "bg-gradient-to-r from-violet-400/70 to-violet-400/10",
      barBorder: "border-violet-400/20",
      time: "text-violet-300",
      label: "text-violet-400/70",
    };
  };

  return (
    // Dimmed the radial glow: was #A823DC at 0%, now #7B1AA8 at 0% and stops at 55% instead of 70%
    <div className="w-screen min-h-svh overflow-x-hidden bg-[url('/bg%20texture%20prizes.svg'),radial-gradient(circle_at_center,#7B1AA8_0%,#2A0045_55%,#160028_100%)]">
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-[30%] h-auto z-30 pointer-events-none">
        <Image
          src="/corner_cracks.svg"
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto object-cover object-top"
          priority
        />
      </div>
      <div className="absolute top-0 -left-8 w-[30%] rotate-270 h-auto z-30 pointer-events-none">
        <Image
          src="/corner_cracks.svg"
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto object-cover object-top"
          priority
        />
      </div>

      {/* Hero */}
      <div className="pt-[20vh] pb-10 flex flex-col items-center justify-center relative z-20 px-4">
        <FadeInView duration={0.7}>
          <h1 className="font-kanit text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white text-center tracking-tight">
            SCHEDULE
          </h1>
          <p className="text-center text-white/50 font-poppins text-base sm:text-lg mt-3 tracking-widest uppercase">
            HackByte 4.0 &nbsp;·&nbsp; April 3–5, 2026
          </p>
        </FadeInView>
      </div>

      {/* Day Selector */}
      <div className="relative z-20 flex justify-center px-4 pb-14">
        <FadeInView duration={0.7} delay={0.1}>
          <div className="inline-flex bg-white/5 border border-white/10 rounded-2xl p-1.5 gap-1 backdrop-blur-md">
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-5 sm:px-8 py-3 rounded-xl font-kanit font-bold transition-all duration-300 text-center ${
                  selectedDay === index
                    ? "bg-white text-[#4E0088] shadow-lg shadow-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-widest mb-0.5 ${
                    selectedDay === index
                      ? "text-[#4E0088]/70"
                      : "text-white/30"
                  }`}
                >
                  {day.day}
                </div>
                <div className="text-sm sm:text-base font-extrabold whitespace-nowrap">
                  {day.date.split(",")[0]}
                  <span
                    className={`max-sm:hidden ml-1 text-xs font-normal ${
                      selectedDay === index
                        ? "text-[#4E0088]/60"
                        : "text-white/30"
                    }`}
                  >
                    2026
                  </span>
                </div>
              </button>
            ))}
          </div>
        </FadeInView>
      </div>

      {/* Timeline */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 sm:px-8 pb-32">
        <FadeInView duration={0.6} delay={0.15}>
          <div className="relative">
            {/* Spine */}
            <div className="absolute left-1.75 top-2 bottom-0 w-px bg-linear-to-b from-white/20 via-white/8 to-transparent" />

            <div className="space-y-0">
              {visibleEvents.map((event, index) => {
                const accent = getAccent(event.type);
                const isLast = index === visibleEvents.length - 1;
                const duration = event.endTime
                  ? getDuration(event.time, event.endTime)
                  : null;
                // Scale: max bar is 40% of the right column width
                const TOTAL_SEGMENTS = 5;
                const filledSegments = duration
                  ? Math.max(
                      1,
                      Math.round((duration / maxDuration) * TOTAL_SEGMENTS),
                    )
                  : 0;
                const durationLabel =
                  duration !== null
                    ? duration >= 60
                      ? `${Math.floor(duration / 60)}h${duration % 60 > 0 ? ` ${duration % 60}m` : ""}`
                      : `${duration}m`
                    : null;

                return (
                  <FadeInView key={index} delay={0.04 * index} duration={0.5}>
                    <div
                      className={`relative flex gap-5 ${isLast ? "pb-0" : "pb-9"}`}
                    >
                      {/* Dot */}
                      <div className="shrink-0 w-3.75 flex flex-col items-start pt-1.25">
                        <div
                          className={`w-3.25 h-3.25 rounded-full ${accent.dot} shadow-lg ${accent.dotGlow} ring-[3px] ring-white/5 z-10`}
                        />
                      </div>

                      {/* Card + duration bar row */}
                      <div className="flex-1 flex items-start gap-3 min-w-0">
                        {/* Card */}
                        <div className="flex-1 min-w-0 bg-white/4 border border-white/8 hover:border-white/[0.14] hover:bg-white/6 rounded-2xl px-5 py-4 transition-all duration-300 overflow-hidden">
                          <div className="flex items-stretch gap-4">
                            {/* Left: text content */}
                            <div className="flex-1 min-w-0">
                              {/* Time */}
                              <div
                                className={`font-kanit font-bold text-sm mb-1 text-nowrap ${accent.time}`}
                              >
                                {event.time}
                                {event.endTime && (
                                  <span className="font-normal text-white/25 ml-1 text-nowrap">
                                    → {event.endTime}
                                  </span>
                                )}
                              </div>

                              {/* Title */}
                              <div className="font-kanit text-white font-semibold text-base sm:text-[17px] leading-snug">
                                {event.title}
                              </div>

                              {/* Venue */}
                              {event.venue && (
                                <div className="flex items-center gap-1.5 mt-2">
                                  <svg
                                    className="w-3 h-3 text-white/25 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-white/35 text-xs font-poppins truncate">
                                    {event.venue}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Bottom-right: horizontal charging bar segments */}
                            <div className="flex flex-col justify-end items-end shrink-0 gap-1">
                              {durationLabel && (
                                <span
                                  className={`text-sm sm:text font-poppins font-semibold ${accent.label}`}
                                >
                                  {durationLabel}
                                </span>
                              )}
                              <div className="flex flex-row items-center gap-0.75">
                                {Array.from({ length: TOTAL_SEGMENTS }).map(
                                  (_, si) => {
                                    const filled = si < filledSegments;
                                    return (
                                      <div
                                        key={si}
                                        className={`h-4 rounded-sm transition-all duration-300 ${
                                          filled
                                            ? `${accent.dot} opacity-90`
                                            : "bg-white/10"
                                        }`}
                                        style={{ width: `${8 + si * 5}px` }}
                                      />
                                    );
                                  },
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </FadeInView>
      </div>
    </div>
  );
}
