"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
	TwitterLogoIcon,
	LinkedInLogoIcon,
	GitHubLogoIcon,
} from "@radix-ui/react-icons";
import behanceLogo from "../../public/behanceLogo.svg";

const SocialMediaIcon = ({ Icon, href }) => (
	<a href={href} target="_blank">
		<Icon
			className="w-7 h-7 bg-[#161616] text-[#777777] transition ease-in-out delay-150 
        hover:scale-125 duration-300"
		/>
	</a>
);

const HumansCard = ({
	index,
	name,
	role,
	profilepic,
	linkedin,
	twitter,
	github,
}) => {
	const defaultGradient =
		"radial-gradient(100% at center, #363636 100%, #1A1A1A 27%)";

	return (
		<>
			<motion.div
				className="card"
				initial={{
					opacity: 0,
					x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
					y: index % 3 === 1 ? 20 : 0,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					y: 0,
					transition: {
						duration: 1,
					},
				}}
				viewport={{ once: true }}
			>
				<div
					className="flex flex-col gap-3 p-[16px] shadow text-white justify-center items-center"
					style={{ background: defaultGradient }}
				>
					<Image
						src={profilepic}
						className="w-[232px] h-[232px] outline-none object-cover rounded-[12px]"
						placeholder="blur"
						alt="Profile Picture"
					/>

					<div className="w-full flex flex-col gap-2 rounded-b-[8px] p-1">
						<p className="sm:text-xl text-lg text-white">{name}</p>
						{role && (
							<p className="font-bold text-[#BBBBBB] text-md sm:text-md leading-9">
								{role}
							</p>
						)}
						<div className="flex gap-6 py-2">
							<SocialMediaIcon href={linkedin} Icon={LinkedInLogoIcon} />
							<SocialMediaIcon href={twitter} Icon={TwitterLogoIcon} />
							{name !== "Aditya Raj" ? (
								<SocialMediaIcon href={github} Icon={GitHubLogoIcon} />
							) : (
								<a href="https://www.behance.net/adi_ux" target="_blank">
									<Image
										src={behanceLogo}
										className="w-7 h-7"
										alt="Behance Logo"
									/>
								</a>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default HumansCard;
