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

export default function TimelinePage() {
	const [selectedDay, setSelectedDay] = useState(0);

	const schedule: DaySchedule[] = [
		{
			date: "03 April, 2026",
			day: "Friday",
			events: [
				{
					time: "1:00 PM",
					endTime: "2:30 PM",
					title: "Help desk setup",
					venue: "Main Gate",
					type: "Internal",
					notes: "Check power, WiFi, mic availability, projector, cloak",
				},
				{
					time: "1:00 PM",
					endTime: "2:30 PM",
					title: "Auditorium setup, cloak rooms",
					venue: "Auditorium, LHTC",
					type: "Internal",
					notes: "Room Setup and Amenities Check",
				},
				{
					time: "2:30 PM",
					endTime: "5:00 PM",
					title: "Entry begins",
					venue: "Main Gate",
					type: "Public",
					notes: "Verification of identity and distribution of Id cards and food passes",
				},
				{
					time: "2:30 PM",
					endTime: "5:30 PM",
					title: "Registration and Reporting",
					venue: "Front of LHTC",
					type: "Public",
					notes: "Ensure smooth entry of participants and guests",
				},
				{
					time: "3:30 PM",
					endTime: "4:30 PM",
					title: "Dignitaries and chief guest welcome and accomodating their arrival",
					venue: "VH",
					type: "Internal",
					notes: "Faculty taking care of chief guest should be informed beforehand",
				},
				{
					time: "4:00 PM",
					endTime: "4:30 PM",
					title: "Venue setup for opening ceremony",
					venue: "Auditorium, LHTC",
					type: "Internal",
					notes: "Mic arrangements, Projector setup, Emcees should be present",
				},
				{
					time: "4:45 PM",
					endTime: "5:00 PM",
					title: "Setting the audience at the venue for session",
					venue: "Auditorium, LHTC",
					type: "Public",
					notes: "Give first preference to visiting participants",
				},
				{
					time: "4:50 PM",
					endTime: "5:00 PM",
					title: "Escorting dignitaries for the opening ceremony",
					venue: "VH",
					type: "Internal",
				},
				{
					time: "5:00 PM",
					endTime: "5:45 PM",
					title: "Inauguration Ceremony",
					venue: "Auditorium, LHTC",
					type: "Everyone",
					notes: "Invite all the authorities and title and gold sponsors to the stage",
				},
				{
					time: "5:30 PM",
					endTime: "6:15 PM",
					title: "Final check at hackathon venue",
					venue: "L104/L105",
					type: "Internal",
					notes: "Check the seating arrangement, technical setup and all other required things",
				},
				{
					time: "5:45 PM",
					endTime: "6:15 PM",
					title: "Introducing the flow of the 3-day event + Revealing problem statements",
					venue: "Auditorium, LHTC",
					type: "Everyone",
					notes: "Introduce all the events and the corrosponding rewards for the winners",
				},
				{
					time: "6:15 PM",
					endTime: "6:30 PM",
					title: "Rules and regulations explained",
					venue: "Auditorium, LHTC",
					type: "Everyone",
					notes: "Brief the audience about rules and regulations, judgement criteria",
				},
				{
					time: "6:30 PM",
					endTime: "6:45 PM",
					title: "Declaring Hackbyte 4.0 open + Vote of thanks",
					venue: "Auditorium, LHTC",
					type: "Everyone",
					notes: "Invite the chief guest to declare the fest open",
				},
				{
					time: "6:45 PM",
					endTime: "7:00 PM",
					title: "Participants move to L104/L105 and settle",
					venue: "Auditorium, LHTC",
					type: "Public",
					notes: "Explain the theme and sponsor tracks",
				},
				{
					time: "7:00 PM",
					endTime: "9:30 PM",
					title: "Hacking Begins",
					venue: "Auditorium, LHTC",
					type: "Public",
				},
				{
					time: "8:00 PM",
					endTime: "8:45 PM",
					title: "Assignment of Judges and Briefing",
					venue: "Auditorium, LHTC",
					type: "Internal",
					notes: "Assign mentors and guides who would be helping",
				},
				{
					time: "8:30 PM",
					endTime: "9:00 PM",
					title: "Dinner Arrangements",
					venue: "Mess",
					type: "Internal",
					notes: "Make announcements, guide the participants towards the mess for dinner",
				},
				{
					time: "9:00 PM",
					endTime: "10:00 PM",
					title: "Dinner",
					venue: "Mess",
					type: "Everyone",
					notes: "Keep in mind the dinner arrangements of guests",
				},
				{
					time: "10:00 PM",
					endTime: "12:00 AM",
					title: "HACKING",
					venue: "L104/L105",
					type: "Public",
					notes: "Check the list of participants, Verify their final entry",
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
					notes: "Special interaction with mentors to channel projects",
				},
				{
					time: "1:45 AM",
					endTime: "2:30 AM",
					title: "SLOT 1 - MINI EVENT",
					venue: "L104/L105",
					type: "Public",
				},
				{
					time: "2:45 AM",
					title: "Midnight Snack",
					venue: "LHTC",
					type: "Public",
					notes: "Keep in mind the snacking arrangements of guests",
				},
				{
					time: "2:45 AM",
					endTime: "4:00 AM",
					title: "HACKING",
					venue: "L104/L105",
					type: "Public",
				},
				{
					time: "4:30 AM",
					title: "Checkpoint 1/4",
					venue: "L104/L105",
					type: "Public",
					notes: "Submit github repo link, project name",
				},
				{
					time: "4:30 AM",
					endTime: "7:30 AM",
					title: "HACKING",
					venue: "L104/L105",
					type: "Public",
				},
				{
					time: "7:00 AM",
					endTime: "7:30 AM",
					title: "Breakfast arrangements",
					venue: "Mess",
					type: "Internal",
					notes: "Make announcements, guide the participants towards the mess for breakfast",
				},
				{
					time: "7:30 AM",
					endTime: "8:30 AM",
					title: "Breakfast break",
					venue: "Mess",
					type: "Everyone",
					notes: "Keep in mind the breakfast arrangements of guests",
				},
				{
					time: "9:00 AM",
					endTime: "10:00 AM",
					title: "SLOT 2 - MLH workshop",
					venue: "L104/L105",
					type: "Everyone",
					notes: "Ensure orderly dispersal at the end",
				},
				{
					time: "10:00 AM",
					endTime: "12:00 PM",
					title: "HACKING",
					venue: "L104/L105",
					type: "Public",
				},
				{
					time: "11:30 AM",
					endTime: "12:00 PM",
					title: "Lunch arrangements, Food stall arrangements",
					venue: "Mess, OAT",
					type: "Internal",
					notes: "Make announcements, guide the participants towards the mess for lunch",
				},
				{
					time: "12:00 PM",
					endTime: "1:00 PM",
					title: "Lunch Break",
					venue: "Mess",
					type: "Everyone",
					notes: "Keep in mind the lunch arrangements of guests",
				},
				{
					time: "2:00 PM",
					title: "Checkpoint 2/4",
					venue: "L104/L105",
					type: "Public",
					notes: "Create readme, techstack. Have a concrete idea",
				},
				{
					time: "2:00 PM",
					endTime: "4:00 PM",
					title: "Judging Round 1",
					venue: "L104/L105",
					type: "Public",
					notes: "Only understand team's vision & progress",
				},
				{
					time: "4:15 PM",
					title: "Photo session",
					venue: "",
					type: "Internal",
				},
				{
					time: "4:45 PM",
					title: "Evening snacks",
					venue: "",
					type: "Public",
					notes: "Make announcements for snacks and queue up participants for orderly collection",
				},
				{
					time: "6:00 PM",
					endTime: "8:00 PM",
					title: "SLOT 3 - Github Workshop",
					venue: "L104/L105",
					type: "Public",
					notes: "Check mic and required resources(1 hour each hall)",
				},
				{
					time: "7:30 PM",
					endTime: "8:00 PM",
					title: "Dinner arrangements",
					venue: "Mess",
					type: "Internal",
					notes: "Make announcements, guide the participants towards the mess for dinner",
				},
				{
					time: "9:00 PM",
					endTime: "10:00 PM",
					title: "Dinner Break",
					venue: "Mess",
					type: "Everyone",
					notes: "Keep in mind the dinner arrangements of guests",
				},
				{
					time: "10:30 PM",
					title: "Checkpoint 3/4",
					venue: "L104/L105",
					type: "Public",
					notes: "Select what sponsor tracks the project is applying for",
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
					notes: "Mentors will check the progress on the proposed idea by the teams",
				},
				{
					time: "1:45 AM",
					endTime: "2:30 AM",
					title: "SLOT 4 - MINI EVENT",
					venue: "L104/L105",
					type: "Public",
				},
				{
					time: "2:45 AM",
					title: "Midnight Snack",
					venue: "L104/L105",
					type: "Public",
					notes: "Make announcements for snacks and queue up participants for orderly collection",
				},
				{
					time: "4:00 AM",
					title: "Checkpoint 4/4",
					venue: "L104/L105",
					type: "Public",
					notes: "Participants are required to push their code in Github, gear up for the final submission",
				},
				{
					time: "6:30 AM",
					title: "Soft Deadline",
					venue: "",
					type: "Public",
					notes: "Submit project, can still edit project details, push commits",
				},
				{
					time: "7:00 AM",
					endTime: "7:30 AM",
					title: "Breakfast Arrangements",
					venue: "Mess",
					type: "Internal",
					notes: "Make announcements, guide the participants and guests for the same",
				},
				{
					time: "7:30 AM",
					title: "Hard Deadline",
					venue: "",
					type: "Public",
					notes: "Coding Period ends. Ensure that no team makes any commits/prs in github repo",
				},
				{
					time: "7:30 AM",
					endTime: "8:30 AM",
					title: "Breakfast break",
					venue: "Mess",
					type: "Everyone",
					notes: "Keep in mind the breakfast arrangements of guests",
				},
				{
					time: "8:30 AM",
					title: "Cleaning",
					venue: "",
					type: "Internal",
					notes: "Clean audi and setup for closing ceremony",
				},
				{
					time: "9:30 AM",
					title: "Judging Round 2",
					venue: "",
					type: "Public",
					notes: "Judges will one by one view every team's project and decide the winners",
				},
				{
					time: "11:30 AM",
					endTime: "12:00 PM",
					title: "Lunch arrangements",
					venue: "Mess",
					type: "Internal",
					notes: "Make announcements for Lunch and guide the participants and guests for the same",
				},
				{
					time: "12:00 PM",
					title: "Judging",
					venue: "",
					type: "Internal",
					notes: "Finalise top 10 teams",
				},
				{
					time: "12:00 PM",
					endTime: "1:00 PM",
					title: "Lunch Break",
					venue: "Mess",
					type: "Everyone",
					notes: "Keep in mind the lunch arrangements of guests",
				},
				{
					time: "1:00 PM",
					title: "Judging",
					venue: "",
					type: "Internal",
					notes: "Finalise all winners across all tracks",
				},
				{
					time: "1:00 PM",
					endTime: "2:00 PM",
					title: "IceBreaker Event",
					venue: "Auditorium, LHTC",
					type: "Public",
					notes: "Just try to keep the rest of the audience engaged to not feel bored",
				},
				{
					time: "2:30 PM",
					endTime: "4:00 PM",
					title: "Closing Ceremony + Result Declaration",
					venue: "Auditorium, LHTC",
					type: "Everyone",
					notes: "Invite father reps on stage, distribute token of appreciation. Announce overall prizes. Sponsors distribute prizes",
				},
			],
		},
	];

	return (
    <div className="w-screen min-h-svh overflow-x-hidden bg-[#3F0063] relative">
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

      {/* Hero Section with Background */}
      <div className="mt-[20vh] sm:h-[20vh] w-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[#3F0063]"></div>

        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <FadeInView duration={0.8}>
            <div className="text-center">
              <h1 className="font-kanit text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                TIMELINE
              </h1>
              <p className="text-lg sm:text-xl text-white/80 font-poppins">
                HackByte 4.0 Schedule • April 3-5, 2026
              </p>
            </div>
          </FadeInView>
        </div>
      </div>

      {/* Main Content Section with Textured Background */}
      <div className="min-h-screen w-screen bg-[url('/bg%20texture%20prizes.svg'),radial-gradient(circle_at_center,#A823DC_0%,#3F0063_70%)] bg-cover bg-center bg-no-repeat relative pt-20 sm:pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <FadeInView duration={0.8}>
            {/* Day selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 sm:mb-16">
              {schedule.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`px-6 sm:px-8 py-4 rounded-2xl font-kanit text-base sm:text-lg font-bold transition-all duration-300 shadow-lg ${
                    selectedDay === index
                      ? "bg-white text-[#4E0088] scale-105 shadow-white/20"
                      : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/20"
                  }`}
                >
                  <div className="text-xs sm:text-sm opacity-80 uppercase tracking-wide">
                    {day.day}
                  </div>
                  <div className="text-base sm:text-xl font-extrabold mt-1">
                    {day.date}
                  </div>
                </button>
              ))}
            </div>

            {/* Events Timeline */}
            <div className="max-w-5xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                {schedule[selectedDay].events.map((event, index) => {
					if(event.type !== "Public") {
						return null; // Skip non-public events
					} else {
						return (
						<FadeInView key={index} delay={0.03 * index}>
							<div
							className={`relative backdrop-blur-lg rounded-2xl p-5 sm:p-6 border-2 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl ${
								event.type === "Public"
								? "bg-blue-600/20 border-blue-400/40 hover:border-blue-400/60 hover:bg-blue-600/25"
								: event.type === "Internal"
									? "bg-purple-600/20 border-purple-400/40 hover:border-purple-400/60 hover:bg-purple-600/25"
									: "bg-pink-600/20 border-pink-400/40 hover:border-pink-400/60 hover:bg-pink-600/25"
							}`}
							>
							{/* Type Badge */}
							<div className="absolute -top-3 right-4 sm:right-6">
								<span
								className={`px-3 sm:px-4 py-1 rounded-full text-xs font-bold shadow-lg ${
									event.type === "Public"
									? "bg-blue-500 text-white"
									: event.type === "Internal"
										? "bg-purple-500 text-white"
										: "bg-pink-500 text-white"
								}`}
								>
								{event.type}
								</span>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								{/* Time */}
								<div className="shrink-0 sm:w-40">
								<div className="font-kanit text-2xl sm:text-3xl font-bold text-white">
									{event.time}
								</div>
								{event.endTime && (
									<div className="text-white/70 text-sm font-poppins mt-1">
									to {event.endTime}
									</div>
								)}
								</div>

								{/* Event Details */}
								<div className="flex-1">
								<h3 className="font-kanit text-lg sm:text-xl font-bold text-white mb-2">
									{event.title}
								</h3>
								<div className="flex flex-wrap gap-3 mb-2">
									<span className="inline-flex items-center text-sm font-poppins text-white/90 bg-white/10 px-3 py-1 rounded-full">
									<svg
										className="w-4 h-4 mr-1.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
										fillRule="evenodd"
										d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
										clipRule="evenodd"
										/>
									</svg>
									{event.venue}
									</span>
								</div>
								{event.notes && (
									<p className="text-white/80 text-sm sm:text-base font-poppins mt-3 leading-relaxed">
									{event.notes}
									</p>
								)}
								</div>
							</div>
							</div>
						</FadeInView>
						)
					}
				})}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </div>
  )
}
