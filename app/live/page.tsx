"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import FadeInView from "@/components/FadeInView";

interface EventData {
  time: string;
  endTime?: string;
  title: string;
  venue: string;
  type: "Internal" | "Public" | "Everyone";
  dateObj: Date;
}

// Fixed timeline data mapped to actual Date objects for accurate tracking
const flattenedEvents: EventData[] = [
  { time: "2:30 PM", endTime: "5:00 PM", title: "Entry Begins", venue: "Main Gate", type: "Public" as const, dateObj: new Date("2026-04-03T14:30:00") },
  { time: "2:30 PM", endTime: "5:30 PM", title: "Registration and Reporting", venue: "Front of LHTC", type: "Public" as const, dateObj: new Date("2026-04-03T14:30:00") },
  { time: "5:00 PM", endTime: "6:45 PM", title: "Inauguration Ceremony", venue: "Auditorium, LHTC", type: "Everyone" as const, dateObj: new Date("2026-04-03T17:00:00") },
  { time: "6:45 PM", endTime: "7:00 PM", title: "Participants Move to Venue", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-03T18:45:00") },
  { time: "7:00 PM", title: "Hacking Begins", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-03T19:00:00") },
  { time: "9:00 PM", endTime: "10:00 PM", title: "Dinner", venue: "Mess", type: "Everyone" as const, dateObj: new Date("2026-04-03T21:00:00") },
  
  { time: "12:00 AM", endTime: "1:30 AM", title: "Mentorship Round 1", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-04T00:00:00") },
  { time: "1:45 AM", endTime: "2:30 AM", title: "Fun Event with Prizes!", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-04T01:45:00") },
  { time: "2:45 AM", title: "Midnight Snack", venue: "LHTC", type: "Public" as const, dateObj: new Date("2026-04-04T02:45:00") },
  { time: "4:30 AM", title: "Checkpoint 1 / 3", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-04T04:30:00") },
  { time: "7:30 AM", endTime: "8:30 AM", title: "Breakfast Break", venue: "Mess", type: "Everyone" as const, dateObj: new Date("2026-04-04T07:30:00") },
  { time: "10:30 AM", endTime: "11:30 AM", title: "Fireside Chat", venue: "L104/L105", type: "Everyone" as const, dateObj: new Date("2026-04-04T10:30:00") },
  { time: "12:00 PM", endTime: "1:00 PM", title: "Lunch Break", venue: "Mess", type: "Everyone" as const, dateObj: new Date("2026-04-04T12:00:00") },
  { time: "2:00 PM", title: "Checkpoint 2 / 3", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-04T14:00:00") },
  { time: "2:00 PM", endTime: "4:00 PM", title: "Judging Round 1", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-04T14:00:00") },
  { time: "4:45 PM", title: "Evening Snacks", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-04T16:45:00") },
  { time: "6:00 PM", endTime: "8:00 PM", title: "GitHub + MLH Workshop", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-04T18:00:00") },
  { time: "9:00 PM", endTime: "10:00 PM", title: "Dinner Break", venue: "Mess", type: "Everyone" as const, dateObj: new Date("2026-04-04T21:00:00") },

  { time: "12:00 AM", endTime: "1:30 AM", title: "Mentorship Round 2", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-05T00:00:00") },
  { time: "1:45 AM", endTime: "2:30 AM", title: "Fun Event with Prizes!", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-05T01:45:00") },
  { time: "2:45 AM", title: "Midnight Snack", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-05T02:45:00") },
  { time: "4:00 AM", title: "Checkpoint 3 / 3", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-05T04:00:00") },
  { time: "6:00 AM", title: "Soft Deadline", venue: "Online", type: "Public" as const, dateObj: new Date("2026-04-05T06:00:00") },
  { time: "7:00 AM", title: "Hard Deadline — Coding Ends", venue: "Online", type: "Public" as const, dateObj: new Date("2026-04-05T07:00:00") },
  { time: "7:30 AM", endTime: "8:30 AM", title: "Breakfast Break", venue: "Mess", type: "Everyone" as const, dateObj: new Date("2026-04-05T07:30:00") },
  { time: "9:30 AM", title: "Judging Round 2", venue: "L104/L105", type: "Public" as const, dateObj: new Date("2026-04-05T09:30:00") },
  { time: "12:00 PM", endTime: "1:00 PM", title: "Lunch Break", venue: "Mess", type: "Everyone" as const, dateObj: new Date("2026-04-05T12:00:00") },
  { time: "2:30 PM", endTime: "4:00 PM", title: "Closing Ceremony", venue: "Auditorium, LHTC", type: "Everyone" as const, dateObj: new Date("2026-04-05T14:30:00") },
]; // sorted chronologically

const HACKATHON_START = new Date("2026-04-03T19:00:00");
const HACKATHON_END = new Date("2026-04-05T07:00:00");

// --- TIME MACHINE FOR TESTING ---
// Change this value to simulate jumping forward in time (in milliseconds)
// e.g., To jump ahead to April 3rd at 7:00 PM: new Date("2026-04-03T19:00:00").getTime() - Date.now()
const TEST_OFFSET_MS = 0; 
// --------------------------------

function formatTimeLeft(ms: number) {
  if (ms <= 0) return "00 : 00 : 00";
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const mins = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((ms % (1000 * 60)) / 1000);
  return `${hours.toString().padStart(2, "0")} : ${mins.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`;
}

export default function LiveProjectorPage() {
  const [now, setNow] = useState(new Date(Date.now() + TEST_OFFSET_MS));

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date(Date.now() + TEST_OFFSET_MS)), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeLeftToHack = HACKATHON_END.getTime() - now.getTime();
  const hackIsOver = timeLeftToHack <= 0;

  const timeElapsed = now.getTime() - HACKATHON_START.getTime();
  const hasHackingStarted = timeElapsed > 0;

  // Find next event
  const nextEventIndex = flattenedEvents.findIndex(e => e.dateObj.getTime() > now.getTime());
  const nextEvent = nextEventIndex !== -1 ? flattenedEvents[nextEventIndex] : null;
  const timeToNextEvent = nextEvent ? nextEvent.dateObj.getTime() - now.getTime() : 0;

  // Find current event
  // Automatically gets the event right before the 'next' event, or the last event if all are passed
  const currentEvent = nextEventIndex > 0 
    ? flattenedEvents[nextEventIndex - 1] 
    : nextEventIndex === -1 
      ? flattenedEvents[flattenedEvents.length - 1] 
      : null;

  return (
    <div className="w-screen h-screen overflow-hidden bg-[url('/bg%20texture%20prizes.svg'),radial-gradient(circle_at_center,#7B1AA8_0%,#2A0045_55%,#160028_100%)] flex flex-col justify-center items-center relative text-white selection:bg-pink-500/30">
      
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-[40%] h-auto z-10 pointer-events-none opacity-50">
        <Image src="/corner_cracks.svg" alt="" width={1920} height={400} className="w-full h-auto object-cover object-top" priority />
      </div>
      <div className="absolute top-0 -left-8 w-[40%] rotate-270 h-auto z-10 pointer-events-none opacity-50">
        <Image src="/corner_cracks.svg" alt="" width={1920} height={400} className="w-full h-auto object-cover object-top" priority />
      </div>

      {/* Main Page Assets */}
      <div className="absolute top-0 sm:right-18 right-6 z-20 h-40 sm:h-60 md:h-80 w-16 sm:w-24 md:w-32">
        <Image
          src="/mlh-badge.svg"
          alt="MLH badge"
          fill
          className="object-contain object-top"
          priority
        />
      </div>
      
      <div className="absolute w-full h-[105vh] top-0 left-0 -z-10 pointer-events-none opacity-40 mix-blend-screen">
        <Image
          src="/Main Page Broken Effect logo.svg"
          alt="Broken effect background hover"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-6 z-20 flex justify-center w-full pointer-events-none">
         <div className="relative h-12 w-48 sm:h-16 sm:w-64 md:h-20 md:w-80 opacity-70">
           <Image
             src="/tpc_and_iiit_logo.svg"
             alt="TPC and IIITDM Jabalpur logos"
             fill
             className="object-contain"
             priority
           />
         </div>
      </div>

      <FadeInView duration={1} className="w-full h-full flex flex-col items-center justify-center p-8 z-20 gap-8">
        
        {/* Top: Branding or Title */}
        <div className="absolute top-12 flex flex-col items-center gap-2 w-full max-w-lg px-8">
           <h1 className="font-kanit text-4xl font-extrabold tracking-widest text-[#E3A3FF] uppercase whitespace-nowrap">HackByte 4.0 // Live</h1>
           <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E3A3FF]/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[95vw] xl:max-w-[1400px] items-stretch mt-12 overflow-hidden flex-1 max-h-min">
            
          {/* Main Countdown (Time left) - Spans 2 columns horizontally */}
          <div className="md:col-span-2 flex flex-col items-center justify-center bg-white/5 border border-white/10 py-12 px-6 sm:p-14 rounded-[2.5rem] backdrop-blur-md shadow-2xl shadow-purple-900/50 min-w-0 w-full overflow-hidden">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins text-pink-300 font-semibold mb-6 uppercase tracking-[0.2em] opacity-80 whitespace-nowrap truncate max-w-full">
              {hackIsOver ? "Hacking Concluded" : "Time Remaining"}
            </h2>
            <div className="w-full flex justify-center">
              <div className="font-kanit text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] leading-none font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] tabular-nums whitespace-nowrap truncate text-center">
                {!hackIsOver ? formatTimeLeft(timeLeftToHack) : "00 : 00 : 00"}
              </div>
            </div>
          </div>

          {/* Next Event - Spans 2 rows vertically on large screens */}
          <div className="md:col-span-1 lg:row-span-2 flex flex-col justify-center bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group w-full min-w-0">
            {nextEvent ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent opacity-50"></div>
                <div className="relative z-10 flex flex-col h-full justify-center min-w-0">
                  <h3 className="text-lg sm:text-xl font-poppins uppercase tracking-[0.2em] text-violet-300 font-semibold mb-6 whitespace-nowrap">
                    Up Next
                  </h3>
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-kanit font-extrabold text-white mb-6 leading-tight whitespace-nowrap truncate max-w-full">
                    {nextEvent.title}
                  </div>
                  <div className="flex flex-col gap-4 text-lg sm:text-xl lg:text-2xl font-poppins text-white/70 min-w-0">
                    <div className="flex items-center gap-3 whitespace-nowrap truncate max-w-full">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold truncate">{nextEvent.time}</span>
                      <span className="text-white/40 shrink-0">
                        {timeToNextEvent > 0 && `(in ${Math.max(1, Math.round(timeToNextEvent / 3600000))} hours)`}
                      </span>
                    </div>
                    {nextEvent.venue && (
                      <div className="flex items-center gap-3 whitespace-nowrap truncate max-w-full">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="truncate">{nextEvent.venue}</span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <h3 className="text-2xl sm:text-3xl font-kanit font-bold text-white/50 text-center">
                  All Events Concluded
                </h3>
              </div>
            )}
          </div>

          {/* Time Elapsed Box */}
          <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md shadow-2xl shadow-pink-900/20 w-full min-w-0 overflow-hidden relative">
            <span className="text-xs sm:text-sm lg:text-base font-poppins text-white/40 uppercase tracking-[0.2em] mb-2 truncate whitespace-nowrap">
              Time Elapsed
            </span>
            <span className={`font-kanit text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/80 tabular-nums whitespace-nowrap truncate ${!hasHackingStarted && !hackIsOver ? "opacity-40" : ""}`}>
              {hasHackingStarted && !hackIsOver ? formatTimeLeft(timeElapsed) : "00 : 00 : 00"}
            </span>
            {!hasHackingStarted && !hackIsOver && (
              <span className="mt-4 text-[10px] sm:text-xs font-poppins text-pink-400/80 bg-pink-500/10 border border-pink-500/20 px-3 py-1.5 rounded-full whitespace-nowrap truncate max-w-full text-center">
                Starts at Hacking Period
              </span>
            )}
          </div>
            
          {/* Current Event Box */}
          <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md shadow-2xl shadow-indigo-900/20 w-full min-w-0 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50"></div>
            <span className="text-xs sm:text-sm lg:text-base font-poppins text-indigo-300/80 uppercase tracking-[0.2em] mb-3 truncate whitespace-nowrap relative z-10">
              Current Event
            </span>
            {currentEvent ? (
              <div className="flex flex-col items-center min-w-0 relative z-10 w-full text-center">
                <span className="font-kanit text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 whitespace-nowrap truncate max-w-full mb-2">
                  {currentEvent.title}
                </span>
                {currentEvent.venue && (
                  <div className="flex items-center gap-2 text-white/50 text-sm sm:text-base lg:text-lg whitespace-nowrap truncate max-w-full">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{currentEvent.venue}</span>
                  </div>
                )}
              </div>
            ) : (
              <span className="font-kanit text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/40 whitespace-nowrap truncate relative z-10">
                {nextEventIndex === 0 ? "Hackathon Starting Soon" : "All Events Concluded"}
              </span>
            )}
          </div>

        </div>
      </FadeInView>
    </div>
  );
}
