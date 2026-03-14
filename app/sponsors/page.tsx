"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"
import FadeInView from "@/components/FadeInView"

// Sponsor data
const title_sponsors = [
	{
		name: "WebDock.io",
		logo: "/webdock.png",
		description: "Webdock.io is revolutionizing VPS hosting with a faster, more affordable, and developer-friendly platform. Built from the ground up, Webdock offers a powerful yet simple hosting experience with a custom control panel, predictable billing, and blazing-fast performance.",
		site: "https://webdock.io/en",
	}
]

const sponsors = [
	{
		name: "GitHub",
		category: "Gold Sponsor",
		sponsorimgsrc: "/github.png",
		site: "https://github.com/",
		stickerimgsrc: "gold_sponser.svg",
	},
	{
		name: "Logitech",
		category: "Gold Sponsor",
		sponsorimgsrc: "/logitech.png",
		site: "https://www.logitech.com/",
		stickerimgsrc: "gold_sponser.svg",
	},
	{
		name: "SpacetimeDB",
		category: "Silver Sponsor",
		sponsorimgsrc: "/spacetimedb.png",
		site: "https://spacetimedb.com/",
		stickerimgsrc: "silver_sponser.svg",
	},
	{
		name: "ArmorIQ",
		category: "Silver Sponsor",
		sponsorimgsrc: "/armoriq.png",
		site: "https://armoriq.ai/",
		stickerimgsrc: "silver_sponser.svg",
	},
	{
		name: "Rovo",
		category: "Silver Sponsor",
		sponsorimgsrc: "/rovo.png",
		site: "https://rovo-app.com/",
		stickerimgsrc: "silver_sponser.svg",
	},
	{
		name: "Insforge",
		category: "Silver Sponsor",
		sponsorimgsrc: "/insforge.png",
		site: "https://insforge.dev/",
		stickerimgsrc: "silver_sponser.svg",
	},
	{
		name: "AI Square",
		category: "Silver Sponsor",
		sponsorimgsrc: "/aisquare.png",
		site: "https://aisquare.studio/",
		stickerimgsrc: "silver_sponser.svg",
	},
	// {
	// 	name: "Aasthi",
	// 	category: "Bronze Sponsor",
	// 	sponsorimgsrc: "/aasthi.png",
	// 	site: "https://aasthi.com/",
	// 	stickerimgsrc: "bronze_sponser.svg",
	// },
	{
		name: "Daluram",
		category: "Food Sponsor",
		sponsorimgsrc: "/daluram.png",
		site: "https://daluram.com/",
		stickerimgsrc: "bronze_sponser.svg",
	},
	{
		name: "Haji Basheer",
		category: "Food Sponsor",
		sponsorimgsrc: "/basheer.png",
		site: "https://hajibasheer.com/",
		stickerimgsrc: "bronze_sponser.svg",
	},
]

const inKindSponsors = [
	{
		name: "CodeCrafters",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/codecrafters.jpg",
		site: "https://codecrafters.io/",
		stickerimgsrc: "track_sponser.svg",
	},
	{
		name: "The Dev Army",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/thedevarmy.png",
		site: "https://thedevarmy.com/",
		stickerimgsrc: "track_sponser.svg",
	},
	{
		name: "Balsamiq",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/balsamiq.png",
		site: "https://balsamiq.com",
		stickerimgsrc: "track_sponser.svg",
	},
	{
		name: "Wolfram",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/wolfram.webp",
		site: "https://www.wolfram.com/wolfram-one/",
		stickerimgsrc: "track_sponser.svg",
	},
	{
		name: "Commudle",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/commudle.png",
		site: "https://commudle.com/",
		stickerimgsrc: "track_sponser.svg",
	},
	{
		name: "Hyperbeam",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/hyperbeam.png",
		site: "https://hyperbeam.com/",
		stickerimgsrc: "track_sponser.svg",
	},
	{
		name: "TechLeads",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/techleads.jpg",
		site: "https://www.linkedin.com/company/officialtechleads/",
		stickerimgsrc: "track_sponser.svg",
	},
	{
		name: "Keploy",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/keploy.png",
		site: "https://keploy.io/",
		stickerimgsrc: "track_sponser.svg",
	},
	{
		name: "Appwrite",
		category: "In Kind Sponsor",
		sponsorimgsrc: "/appwrite.png",
		site: "https://appwrite.io/",
		stickerimgsrc: "track_sponser.svg",
	},
]

// Memoized components to prevent unnecessary re-renders
const TitleSponsorCard = ({ name, logo, description, site }: { name: string; logo: string; description: string; site: string }) => {
	return (
		<FadeInView>
			<Link href={site} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-130 sm:scale-100 md:scale-100 scale-65 transition-transform hover:scale-105">
				<div className="h-66 bg-white w-[90%] flex items-center justify-center rounded-2xl">
					<Image
						src={logo}
						alt={`${name} logo`}
						width={200}
						height={100}
						className="w-full h-auto rounded-2xl object-contain object-center"
						loading="lazy"
					/>
				</div>

				<div className="bg-gradient-to-b border-12 rounded-2xl border-white from-[#9E00F9] to-[#7B00C7] px-14 pt-8 pb-10 flex flex-col font-kanit items-center text-center -mt-2">
					<h3 className="text-6xl font-extrabold text-white mb-3 text-stroke-black-thick">
						{name}
					</h3>
					<p className="text-white/90 text-lg leading-tight">
						{description}
					</p>
				</div>

				<div className="w-[105%] relative -mt-10">
					<Image
						src="/title sponser.svg"
						alt="Title Sponsor"
						width={500}
						height={100}
						className="w-full h-auto object-contain object-center"
						loading="lazy"
					/>
				</div>
			</Link>
		</FadeInView>
	)
}

const SponsorCard = ({ name, sponsorimgsrc, category, site, stickerimgsrc }: { name: string; sponsorimgsrc: string; category: string; site: string; stickerimgsrc: string }) => {
	return (
		<FadeInView delay={0.1}>
			<Link
				href={site}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col items-center w-80 transition-transform hover:scale-105"
			>
				<div className="h-64 md:h-64 bg-white w-[90%] flex items-center justify-center rounded-2xl">
					<Image
						src={sponsorimgsrc}
						alt={`${name} logo`}
						width={200}
						height={100}
						className="object-contain max-h-full"
						loading="lazy"
					/>
				</div>

				<div className="w-[101%] relative -mt-10">
					<Image
						src={stickerimgsrc}
						alt={`${category} badge`}
						width={500}
						height={100}
						className="w-full h-auto object-contain object-center"
						loading="lazy"
					/>
					<div className="top-0 absolute flex flex-col justify-center px-10 h-full w-full">
						<p className="font-kanit text-3xl font-bold">
							{name}
						</p>
						<p className="text-white/80 font-bold text-xl">
							{category}
						</p>
					</div>
				</div>
			</Link>
		</FadeInView>
	)
}

export default function SponsorsPage() {
	const [activeTab, setActiveTab] = useState<"sponsors" | "inkind">("sponsors")

	// Memoize sponsor grids to avoid recalculation
	const sponsorGrid = useMemo(() => (
		<div className="flex gap-20 flex-col">
			<div className="flex items-center justify-center -mt-20 sm:mt-15 w-screen md:flex-col flex-col lg:flex-col md:gap-20 xl:gap-0 -gap-30 xl:flex-row md:px-90 lg:px-18 xl:px-35 px-0">
				{title_sponsors.map((sponsor) => (
					<TitleSponsorCard
						key={sponsor.name}
						{...sponsor}
					/>
				))}
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-20 place-items-center xl:px-15">
				{sponsors.map((sponsor) => (
					<SponsorCard
						key={sponsor.name}
						{...sponsor}
					/>
				))}
			</div>
		</div>
	), [])

	const inKindGrid = useMemo(() => (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-20 place-items-center xl:px-15">
			{inKindSponsors.map((sponsor) => (
				<SponsorCard
					key={sponsor.name}
					{...sponsor}
				/>
			))}
		</div>
	), [])

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
				<div className="absolute inset-0 flex sm:flex-row w-screen flex-col items-center sm:justify-between justify-center lg:px-0 xl:gap-40 z-20">
					{/* Left side - Past Partners text */}
					<div className="w-[90%] sm:self-center self-start sm:w-[70%] md:w-[70%] lg:w-[60%] xl:w-[60%] z-20">
						<FadeInView delay={0.2}>
							<Image
								src="/Past Partners who Supported.svg"
								alt="Past Partners who Supported"
								width={574}
								height={158}
								className="w-full h-auto object-contain object-center"
								priority
							/>
						</FadeInView>
					</div>

					{/* Right side - HB4 Logo */}
					<div className="w-[35%] sm:block hidden sm:self-center self-end sm:w-[30%] md:w-[25%] lg:w-[25%] xl:w-[10%]sm:mr-40 md:mr-15 lg:mr-30 xl:mr-40">
						<Image
							src="/hb4 logo sponserspage.svg"
							alt="HackByte 4.0 Logo"
							width={250}
							height={250}
							className="w-full h-auto object-contain object-center"
							priority
						/>
					</div>
				</div>
			</div>

			<div className="min-h-screen w-screen bg-gradient-to-b from-black relative to-[#34085B] flex flex-col items-center pt-16 pb-30">
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

				<div className="w-full flex items-start justify-start sm:pt-50 pt-15 z-20 px-8 md:px-40">
					<div className="flex items-center bg-[#3D1A5C] rounded-full border border-purple-700/50 h-10">
						<button
							onClick={() => setActiveTab("sponsors")}
							aria-pressed={activeTab === "sponsors"}
							className={`px-6 md:px-8 h-full rounded-full font-semibold text-sm md:text-lg transition-all duration-300 ${activeTab === "sponsors"
								? "bg-[#9E00F9] text-white shadow-lg"
								: "bg-transparent text-purple-300 hover:text-white"
								}`}
						>
							Sponsors
						</button>
						<button
							onClick={() => setActiveTab("inkind")}
							aria-pressed={activeTab === "inkind"}
							className={`px-6 md:px-8 h-full rounded-full font-semibold text-sm md:text-lg transition-all duration-300 ${activeTab === "inkind"
								? "bg-[#9E00F9] text-white shadow-lg"
								: "bg-transparent text-purple-300 hover:text-white"
								}`}
						>
							In Kind Sponsors
						</button>
					</div>
				</div>

				{/* Content based on active tab */}
				<div className="mt-12 w-screen">
					{activeTab === "sponsors" ? sponsorGrid : inKindGrid}
				</div>
			</div>
		</div>
	)
}
