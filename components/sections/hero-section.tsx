"use client";

import Image from "next/image";
import Link from "next/link";
import FadeInView from "@/components/FadeInView";

const Hero = () => {
	return (
		<div className="h-screen w-screen bg-linear-to-tr flex items-center justify-center text-white font-sans overflow-hidden">
			{/* MLH Badge */}
			<div className="absolute sm:w-33 w-20 top-0 sm:right-18 right-6 z-20 h-80">
				<FadeInView delay={0.3} yOffset={-30}>
					<a
					href="https://mlh.io/seasons/2026/events"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="MLH 2026 Events"
					>
						<Image
							src="/mlh-badge.svg"
							alt="MLH badge"
							width={132}
							height={320}
							className="object-contain object-top w-full h-full"
							priority
						/>
					</a>
				</FadeInView>
			</div>

			{/* Corner cracks - no animation (decorative) */}
			<div className="absolute aspect-video right-0 z-0 top-0 h-100 bg-pink-400/400">
				<Image
					src="/corner_cracks.svg"
					alt="Decorative corner cracks"
					fill
					className="object-contain object-right"
					priority
				/>
			</div>

			{/* Theme Section */}
			<div className={`absolute sm:top-35 top-5 sm:left-0 -left-2 z-20 h-40 font-kanit sm:scale-80 scale-70 lg:scale-100 md:scale-90 lg:left-15 md:left-5 bg-blue-700/700`}>
				<FadeInView delay={0.2}>
					<div className="bg-blue-400/400 left-0 w-full flex sm:hidden items-center justify-left gap-5 pb-6">
						<Link href="https://www.linkedin.com/company/bitbyte-tpc" className="relative w-7 h-7">
							<Image
								src="/linkdin.svg"
								alt="LinkedIn"
								fill
								className="object-contain"
								priority
							/>
						</Link>
						<Link href="https://www.instagram.com/hackbyte.tpc" className="relative w-7 h-7">
							<Image
								src="/insta.svg"
								alt="Instagram"
								fill
								className="object-contain"
								priority
							/>
						</Link>
						<Link href="https://x.com/HackbyteTPC" className="relative w-8 h-8">
							<Image
								src="/x.svg"
								alt="X"
								fill
								className="object-contain"
								priority
							/>
						</Link>
						<Link href="https://discord.com/invite/NTueHjdPn8" className="relative w-9 h-9">
							<Image
								src="/discord.svg"
								alt="Discord"
								fill
								className="object-contain"
								priority
							/>
						</Link>
					</div>
					<h2 className="text-white text-stroke-brand-thick font-extrabold text-4xl">
						Our Theme
					</h2>
					<h1 className="italic text-3xl text-[#FFF7E591] font-medium">
						Patch The Reality
					</h1>
				</FadeInView>
			</div>

			{/* Main Logo */}
			<div className="relative md:h-[105vh] sm:h-[85vh] h-[65vh] sm:top-4 -top-3 -left-5 aspect-video z-0">
				{/* <FadeInView delay={0.1} duration={0.8} yOffset={40}> */}
				<Image
					src="/Main Page Broken Effect logo.svg"
					alt="Broken effect background"
					fill
					className="object-contain"
					priority
				/>
				{/* </FadeInView> */}
			</div>

			{/* Background - no animation */}
			<div className="w-screen h-[105vh] absolute -top-2 -z-30">
				<Image
					src="/main_page_bg.svg"
					alt="Background texture"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Register Button */}
			<div className={`absolute flex bg-pink-500/500 md:-right-5 right-10 sm:bottom-32 bottom-50 font-kanit h-40 w-[27vw] z-20`}>
				<Link href="https://docs.google.com/forms/d/e/1FAIpQLSfwHsEnJUOyrFbkAuG4Zeo9Sqn6q1Gcukf6o3D5670Es4SDRQ/viewform" className={`absolute text-[#62009B] lg:w-80 md:w-70 sm:w-65 w-55 p-5 lg:right-35 md:right-28 sm:right-5 right-3 bg-[#FFEE00] md:h-16 sm:h-14 h-10 rounded-full border-[#FFD620] border-4 md:text-3xl text-2xl font-extrabold flex items-center justify-center bottom-0 hover:bg-[#FFC300B8] hover:border-[#FFD620] transition-colors duration-300 cursor-pointer z-20`}>
					REGISTER NOW
				</Link>

				<div className="absolute h-full lg:w-30 top-4 sm:top-0 md:w-25 sm:w-20 w-15 lg:right-10 sm:-right-10 md:right-10 -right-8">
					<Image
						src="/exclamation_marks.svg"
						alt="Exclamation marks decoration"
						fill
						className="object-contain"
						priority
					/>
				</div>
			</div>

			{/* Date & Location */}
			<div className={`absolute text-3xl font-kanit bg-pink-400/300 bottom-20 sm:bottom-35 lg:scale-100 sm:-left-8 md:-left-3 sm:scale-70 lg:left-10 md:scale-80 scale-50 -left-17 text-black`}>
				<FadeInView delay={0.3} yOffset={40}>
					<div className="text-white text-stroke-brand-thick font-extrabold text-5xl pb-3">When:</div>
					<time dateTime="2026-04-03" className="text-[#62009B] text-stroke-white-thick font-extrabold text-5xl">3-5 April, 2026</time>
					<div className="flex gap-3">
						<div className="text-white text-stroke-brand-thick font-extrabold text-5xl">@</div>
						<address className="text-[#62009B] flex items-end text-stroke-white-medium font-extrabold text-3xl not-italic">
							IIITDM Jabalpur
						</address>
					</div>
				</FadeInView>
			</div>

			{/* Bottom Bar */}
			<div className="absolute h-20 w-screen items-center justify-around bg-pink-400/400 bottom-0 flex z-20">

				<div className="bg-blue-400/400 left-0 absolute w-50 lg:w-60 h-[50%] sm:flex items-center justify-around pl-5 hidden">
					<Link href="https://www.linkedin.com/company/bitbyte-tpc/posts/?feedView=all" className="relative w-6 h-6">
						<Image
							src="/linkdin.svg"
							alt="LinkedIn"
							fill
							className="object-contain"
							priority
						/>
					</Link>
					<Link href="https://www.instagram.com/hackbyte.tpc/" className="relative w-6 h-6">
						<Image
							src="/insta.svg"
							alt="Instagram"
							fill
							className="object-contain"
							priority
						/>
					</Link>
					<Link href="https://x.com/HackbyteTPC" className="relative w-7 h-7">
						<Image
							src="/x.svg"
							alt="X"
							fill
							className="object-contain"
							priority
						/>
					</Link>
					<Link href="https://discord.com/invite/NTueHjdPn8" className="relative w-8 h-8">
						<Image
							src="/discord.svg"
							alt="Discord"
							fill
							className="object-contain"
							priority
						/>
					</Link>
				</div>


				<div className="absolute lg:w-[29vw] md:w-[42vw] sm:w-[53vw] w-[83vw] h-full right-10">
					<Image
						src="/tpc_and_iiit_logo.svg"
						alt="TPC and IIITDM Jabalpur logos"
						fill
						className="object-contain object-right"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
