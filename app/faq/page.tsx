"use client";

import Image from "next/image";
import { Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FadeInView from "@/components/FadeInView";

export default function FaqPage() {
	const faqs = [
		{
			question: "How do I register ?",
			answer: "Pre-registration will begin Shortly. Stay tuned for updates!",
		},
		{
			question: "How many team members do I need?",
			answer:
				"You can participate only in teams of 3 to 4 members. If you are interested in participating in the hackathon but do not have a team, we will assist you in connecting with other individual participants to form a team.",
		},
		{
			question: "How much are the participation fees?",
			answer:
				"Participation is absolutely free inclusive of food and accomodation. Isnt that great? So register ASAP!!",
		},
		{
			question: "Will the Hackathon be in person or online ?",
			answer: "HackByte will be conducted in complete offline/in-person mode.",
		},
		{
			question: "What is the venue for HackByte 4.0 ?",
			answer:
				"IIITDM Jabalpur, explore our beautiful campus while thinking about innovating some crazy thing.",
		},
		{
			question: "What are the prerequisites to participate in this hackathon ?",
			answer:
				"No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
		},
		{
			question:
				"Is the food and accommodation provided free of charge or are there any associated costs ?",
			answer:
				"We've got you covered when it comes to food, water, and coffee – they're on us. However, any additional snacks can be purchased separately. As for accommodation, we will provide arrangements similar to those found in other hackathons, which typically involve a set of mattresses in a common hall.",
		},
		{
			question:
				"Can my friend join our team after we have already submitted the application for review ?",
			answer:
				"Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team.",
		},
		{
			question: "Can we bring a pre-built project to the hackathon?",
			answer:
				"No, participants are not allowed to bring pre-built projects to the hackathon. All work must be started from scratch after the hackathon begins to ensure fairness",
		},
		{
			question: "Do projects need to be related to the theme?",
			answer:
				"No. We want to encourage open innovation, so you're free to choose any idea you're passionate about and build something meaningful.",
		},
	];

	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<div className="relative w-full min-h-svh overflow-x-hidden">
			{/* Background (fills the screen on all sizes) */}
			<div className="absolute inset-0 -z-10">
				<Image
					src="/FAQs.svg"
					alt="FAQs background"
					fill
					priority
					sizes="100vw"
					className="object-cover object-top"
				/>
			</div>

			<FadeInView duration={0.8}>
				<div className="w-full h-50">
					<Image
						src="/heading.svg"
						alt="Heading"
						width={666}
						height={208}
						className="absolute hidden sm:block sm:top-50 top-25 w-[83%] z-10 sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[52%]"
						priority
					/>
					<Image
						src="/small_heading.svg"
						alt="Heading"
						width={666}
						height={208}
						className="sm:hidden absolute sm:top-50 top-25 w-[83%] z-10 sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[52%]"
						priority
					/>
					<Image
						src="/question marks.svg"
						alt="Question marks"
						width={266}
						height={340}
						className="absolute top-20 w-[22%] -right-2 z-10 sm:w-[25%] md:w-[23%] lg:w-[23%] xl:w-[18%] sm:right-[5%] md:right-[10%] lg:right-[10%] xl:right-[15%] m:top-30 md:top-30 lg:top-30"
						priority
					/>
				</div>
			</FadeInView>

			{/* Content (make it part of normal flow so the page has height) */}
			<div className="relative z-10 w-full pt-[44vw] sm:pt-[44vw] md:pt-[42vw] lg:pt-[42vw] xl:pt-[33vw] pb-24">
				<div className="px-6 md:px-12 lg:pl-20">
					<div className="grid grid-cols-1 lg:grid-cols-[540px_1fr] gap-16 lg:gap-0 xl:gap-60 items-start">
						<FadeInView delay={0.2}>
							<div className="flex flex-col sm:gap-4 gap-2">
								<p className="text-white text-stroke-brand-thick font-extrabold text-4xl sm:text-6xl font-kanit pb-2">
									FAQs
								</p>

								<p className="font-poppins text-white/90 sm:text-xl text-md font-medium">
									Everything you need to know about participating in the Hackathon.
								</p>

								<p className="font-poppins text-white sm:text-2xl text-xl font-bold">OR</p>

								<p className="font-poppins text-white/90 sm:text-xl text-md font-medium max-w-[20rem]">
									Think we missed something? Reach out at
								</p>

								<Link
									href="/"
									className="font-poppins flex gap-3 items-center text-white sm:text-lg text-md font-medium w-fit"
								>
									<Mail />
									<span>hackbyte@iiitdmj.ac.in</span>
								</Link>
							</div>
						</FadeInView>

						<FadeInView delay={0.1}>
							<div className="w-full max-w-4xl">
								<div className="flex flex-col">
									{faqs.map((item, idx) => {
										const open = openIndex === idx;
										return (
											<div
												key={item.question}
												className="border-b-2 border-white/65 py-9"
											>
												<button
													type="button"
													onClick={() => setOpenIndex(open ? null : idx)}
													className="w-full flex items-center justify-between gap-4 text-left"
												>
													<span className="font-poppins text-white font-semibold text-lg md:text-2xl">
														{item.question}
													</span>

													<ChevronDown
														className={`shrink-0 text-white transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
															}`}
													/>
												</button>

												<div
													className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${open
														? "grid-rows-[1fr] opacity-100 mt-3"
														: "grid-rows-[0fr] opacity-0 mt-0"
														}`}
												>
													<div className="overflow-hidden">
														<p className="font-poppins text-white/80 text-base md:text-lg">
															{item.answer}
														</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>

								{/* subtle bottom spacing like the screenshot */}
								<div className="h-6" />
							</div>
						</FadeInView>
					</div>
				</div>
			</div>
		</div>
	);
}