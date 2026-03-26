
"use client"

import Image from "next/image"
import { useState } from "react"
import FadeInView from "@/components/FadeInView"

export default function PrizesPage() {
	const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

	const toggleCard = (index: number) => {
		setExpandedCards(prev => ({
			...prev,
			[index]: !prev[index]
		}))
	}

	const sponsorData = [
		{
			name: "ArmorIQ",
			logo: "/armoriq.png",
			title: "Best AI Safety / Guardrails Project",
			prize: "$109",
			description: "Autonomous agents have moved beyond chat. Build agents that operate within clearly enforced intent boundaries using ArmorClaw...",
			fullDescription: `Autonomous agents have moved beyond chat. With OpenClaw, they can operate directly inside systems executing commands, modifying files, interacting with applications, and completing multi-step workflows independently.

At HackByte we plan to push this one step further. Not just building capable agents but building agents that operate within clearly enforced intent boundaries.

Participants will:
• Design a structured intent model
• Implement policy-based runtime enforcement using ArmorClaw
• Architect a clean separation between reasoning and execution
• Demonstrate at least one allowed action and one deterministically blocked action
• Log and explain enforcement decisions with clarity

Real execution. Real enforcement. Real accountability.

From developer copilots to system automation agents to domain-specific assistants, the focus will remain the same, capability with control.

Claw enables autonomy. Shield enforces trust. At HackByte, we plan to build both.

Follow ArmorIQ on instagram @armoriq.ai and join their discord server.`
		},
		{
			name: "SpacetimeDB",
			logo: "/spacetimedb.png",
			title: "Best Real-time App / Game Backend",
			prize: "$150",
			description: "SpacetimeDB is a real-time backend framework and database for apps and games. LLMs go much further with SpacetimeDB...",
			fullDescription: `SpacetimeDB is a real-time backend framework and database for apps and games. LLMs go much further with SpacetimeDB because it handles all the persistence, logic, deployment, and real-time sync in a single cohesive backend.`
		},
		{
			name: "Superplane",
			logo: "/superplane.png",
			title: "Best DevOps / AI Infra Project",
			prize: "$150",
			description: "Superplane is an AI-native DevOps control plane built for modern teams. It unifies workflows, deployments, and infrastructure...",
			fullDescription: `Superplane is an AI-native DevOps control plane built for modern teams. It unifies workflows, deployments, infrastructure, and incidents into one system. Enables developers and AI agents to collaborate, automate operations, and ship faster without fragmented tools.

Simplify your stack. Build and scale with confidence.`
		},
		{
			name: "Google Gemini",
			logo: "/gemini.png",
			title: "Best Use of Gemini API",
			prize: "Google Swag Kits",
			description: "It's time to push the boundaries of what's possible with AI using Google Gemini. Check out the Gemini API to build AI-powered apps...",
			fullDescription: `It's time to push the boundaries of what's possible with AI using Google Gemini. Check out the Gemini API to build AI-powered apps that make your friends say WHOA. So, what can Gemini do for your hackathon project?

Understand language like a human and build a chatbot that gives personalized advice

Analyze info like a supercomputer and create an app that summarizes complex research papers

Generate creative content like code, scripts, music, and more

Think of the possibilities… what will you build with the Google Gemini API this weekend?`,
			link: "https://mlh.link/gemini-quickstart"
		},
		{
			name: "MongoDB Atlas",
			logo: "/mongodb.png",
			title: "Best Use of MongoDB Atlas",
			prize: "IoT Starter Kit",
			description: "MongoDB Atlas takes the leading modern database and makes it accessible in the cloud! Get started with a $50 credit for students...",
			fullDescription: `MongoDB Atlas takes the leading modern database and makes it accessible in the cloud! Get started with a $50 credit for students (https://mlh.link/mongodb) or sign up for the Atlas free forever tier (https://mlh.link/mongodb-free) (no credit card required). Along with a suite of services and functionalities, you'll have everything you need to manage all of your data, and you can get a headstart with free resources from MongoDB University (https://mlh.link/mongodb-university)! Build a hack using MongoDB Atlas for a chance to win a M5Stack IoT Kit for you and each member of your team.`,
			link: "https://mlh.link/mongodb"
		},
		{
			name: "ElevenLabs",
			logo: "/elevenlabs.png",
			title: "Best Use of ElevenLabs",
			prize: "Beats Earbuds",
			description: "Deploy natural, human-sounding audio with ElevenLabs. Create realistic, dynamic, and emotionally expressive voices for any project...",
			fullDescription: `Deploy natural, human-sounding audio with ElevenLabs. Create realistic, dynamic, and emotionally expressive voices for any project, from interactive AI companions to narrated stories and voice-enabled apps. ElevenLabs will empower you to build rich, immersive experiences without the need for actors or complex audio production, using simply the power of AI.

Integrate fully autonomous audio experiences into your hack with ElevenLabs and give your project a voice, along with giving your team the chance to win some wireless earbuds!

Look for a coupon code in your emails`,
			link: "https://mlh.link/elevenlabs"
		},
		{
			name: "Vultr",
			logo: "/vultr.png",
			title: "Best Use of Vultr",
			prize: "Portable Projectors",
			description: "Vultr empowers hackers to bring their high-performance projects to life instantly; providing everything from speed of one-click deployment...",
			fullDescription: `Vultr empowers hackers to bring their high-performance projects to life instantly; providing everything from the speed of one-click deployment and scalable cloud compute, to specialized Vultr Cloud GPUs that can power AI-driven applications. We want you to push the limits of what can be built when infrastructure is no longer the bottleneck!

Sign up for a Vultr account today and claim your free cloud credits! Take your next hack to the cloud with Vultr for a chance to win some awesome portable screens for you and your team!`,
			link: "https://mlh.link/vultr"
		},
		{
			name: "Solana",
			logo: "/solana.png",
			title: "Best Use of Solana",
			prize: "Ledger Nano S Plus",
			description: "The world of development is evolving fast and Solana is leading the charge with a network built to handle all of your infrastructure needs...",
			fullDescription: `The world of development is evolving fast and Solana is leading the charge with a network built to handle all of your infrastructure needs. Forget high fees and slow confirmations, it's time to build applications that are fast, efficient, and scalable.

Harness Solana's core advantages like blazing fast execution and near-zero transaction costs to make your hackathon ideas become real world projects. With Solana, the possibilities are endless.

Create a game, social app, or consumer product that relies on instant, high-frequency transactions.

Design a sophisticated trading, lending, or decentralized exchange (DEX).

Build a prototype for supply chain, identity, or payments that can handle massive, real-world volume.

Show us how you can innovate with Solana for a chance to win some cool prizes for you and each member of your team!`,
			link: "https://mlh.link/solana"
		}
	]

	return (
		<div className="w-screen min-h-svh overflow-x-hidden">
			<div className="-z-10 sm:h-[95vh] h-[45vh] w-screen relative overflow-hidden">
				<Image
					src="/sponsers_bg.svg"
					alt=""
					fill
					priority
					className="object-cover object-top"
					sizes="100vw"
				/>

				<div className="absolute inset-0 flex sm:flex-row w-screen flex-col items-center sm:justify-between justify-center lg:px-0 xl:gap-40 z-20">
					<div className="w-[98%] sm:self-center self-start sm:w-[70%] md:w-[70%] lg:w-[60%] xl:w-[60%] z-20">
						<FadeInView delay={0.2}>
							<Image
								src="/prizes_page_heading.svg"
								alt="Prizes for the winners"
								width={574}
								height={158}
								className="w-full h-auto object-contain object-center hidden sm:block"
								priority
							/>
							<Image
								src="/PRIZES FOR THE WINNERS mobile.svg"
								alt="Prizes for the winners"
								width={574}
								height={158}
								className="w-full h-auto object-contain object-center sm:hidden block"
								priority
							/>
						</FadeInView>
					</div>

					<div className="w-[35%] sm:block hidden sm:self-center self-end sm:w-[30%] md:w-[25%] lg:w-[25%] xl:w-[10%]sm:mr-40 md:mr-15 lg:mr-30 xl:mr-40">
						<Image
							src="/hb4 logo sponserspage.svg"
							alt="HackByte 4.0 logo"
							width={250}
							height={250}
							className="w-full h-auto object-contain object-center"
							priority
						/>
					</div>
				</div>
			</div>

			<div className="min-h-screen w-screen bg-[url('/bg%20texture%20prizes.svg'),radial-gradient(circle_at_center,_#A823DC_0%,_#3F0063_70%)] bg-cover bg-center bg-no-repeat relative flex flex-col items-center pt-[22vw] sm:pt-25 md:pt-30 lg:pt-40 xl:pt-56 pb-30">
				<Image
					src="/MLH PINS.svg"
					alt="MLH pins"
					className="w-[56vw]  sm:w-70 md:w-90 lg:w-120 xl:w-130 right-[10vw] z-20 top-[11vw] absolute object-cover object-top"
					width={100}
					height={100}
					loading="lazy"
				/>

				<div className="w-full h-32 absolute z-10 bg-amber-300/300 -top-[14.9vw]">
					<Image
						src="/stats-upper-2.svg"
						alt="Decorative glass design"
						className="w-full object-cover object-top"
						width={100}
						height={100}
						loading="lazy"
					/>
				</div>

				<div className="w-full flex flex-col items-start justify-start z-20">
					<Image
						src="/first prize.svg"
						alt="First prize banner"
						className="w-full object-cover object-top sm:block hidden"
						width={846}
						height={197}
						loading="lazy"
					/>
					<Image
						src="/first prize mobile.svg"
						alt="First prize banner"
						className="w-full object-cover object-top sm:hidden block"
						width={846}
						height={197}
						loading="lazy"
					/>
					<Image
						src="/2nd prize.svg"
						alt="Second prize banner"
						className="w-full object-cover object-top -mt-[10vw] sm:-mt-40 md:-mt-60 lg:-mt-65 xl:-mt-80 hidden sm:block"
						width={846}
						height={7}
						loading="lazy"
					/>
					<Image
						src="/second and third prize.svg"
						alt="Second and third prize banner"
						className="w-full object-cover object-top -mt-[35vw] sm:-mt-40 md:-mt-60 lg:-mt-65 xl:-mt-80 sm:hidden block"
						width={846}
						height={7}
						loading="lazy"
					/>

					<Image
						src="/girls team and 1st time hackers mobile.svg"
						alt="Girls team and first-time hackers prize banner"
						className="w-[90vw] object-cover object-top ml-[10vw] -mt-[10vw] sm:hidden block"
						width={846}
						height={7}
						loading="lazy"
					/>
					<Image
						src="/girls team and first time.svg"
						alt="Girls team and first-time hackers prize banner"
						className="w-full object-cover object-top ml-10 -mt-15 hidden sm:block"
						width={846}
						height={7}
						loading="lazy"
					/>
				</div>

				{/* Sponsor Tracks Section */}
				<div className="w-full mt-20 sm:mt-32 pb-20">
					<div className="w-full mb-16">
						<FadeInView delay={0.2}>
							<div className="w-[98%] sm:w-[70%] md:w-[70%] lg:w-[60%] xl:w-[60%]">
								<Image
									src="/sponsor_heading.svg"
									alt="Sponsored Tracks"
									width={574}
									height={158}
									className="w-full h-auto object-contain object-left"
									priority
								/>
							</div>
						</FadeInView>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
						{sponsorData.map((sponsor, index) => (
							<FadeInView key={sponsor.name} delay={0.3 + index * 0.1}>
								<div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:scale-[1.02] hover:border-purple-400/30 hover:bg-white/10 transition-all duration-300 ease-out">
									<div className="w-full mb-6 bg-white rounded-lg h-24">
										<Image
											src={sponsor.logo}
											alt={sponsor.name}
											width={120}
											height={96}
											className="w-full h-full object-contain rounded-lg"
										/>
									</div>
									
									<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">
										{sponsor.title}
									</h3>
									
									<div className="text-2xl font-bold text-purple-300 mb-4 text-center">
										{sponsor.prize}
									</div>
									
									<div className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
										{expandedCards[index] ? (
											<div className="whitespace-pre-line">
												{sponsor.fullDescription}
											</div>
										) : (
											<p>{sponsor.description}</p>
										)}
									</div>
									
									<div className="flex flex-col gap-2">
										<button 
											onClick={() => toggleCard(index)}
											className="text-purple-400 hover:text-purple-300 text-sm font-medium underline underline-offset-2 transition-colors self-start"
										>
											{expandedCards[index] ? 'Read less' : 'Read more'}
										</button>
										
										{sponsor.link && (
											<a
												href={sponsor.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-400 hover:text-blue-300 text-sm font-medium underline underline-offset-2 transition-colors self-start"
											>
												Get Started →
											</a>
										)}
									</div>
								</div>
							</FadeInView>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
