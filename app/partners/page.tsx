import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import SponsorCard from "@/components/SponsorCard";
import hackbyte2Logo from "@/public/ImageGallery/HB2Logo.svg";

// Sponsors
import mlh from "@/public/partnersPage/mlh.webp";
import github from "@/public/partnersPage/github.jpg";
import postman from "@/public/partnersPage/postman.jpg";
import bobble from "@/public/partnersPage/bobble.webp";
import godspeed from "@/public/partnersPage/godSpeed.jpg";
import devfolio from "@/public/partnersPage/devfolio.webp";
import virtualProtocol from "@/public/partnersPage/virtualProtocol.jpg";
import nextgen from "@/public/partnersPage/nextgen.jpg";
import auth0 from "@/public/partnersPage/auth0.webp";
import taipy from "@/public/partnersPage/taipy.jpg";
import godaddy from "@/public/partnersPage/godaddy.webp";
// In Kind Sponsors
import balsamiq from "@/public/partnersPage/balsamiq.webp";
import edubard from "@/public/partnersPage/edubard.webp";
import wolfram from "@/public/partnersPage/wolfram.webp";
import mongodb from "@/public/partnersPage/mongodb.webp";
import finlatics from "@/public/partnersPage/finlatics.webp";
import jdoodle from "@/public/partnersPage/jdoodle.png";

export const metadata = {
	title: "Partners | HackByte",
	description:
		"Explore the invaluable support from our esteemed sponsors and partners at HackByte - the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
	keywords:
		"Sponsors, Partners, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Collaboration, Innovation, Community Support, Technology Events",
	openGraph: {
		title: "Partners | HackByte",
		description:
			"Explore the invaluable support from our esteemed sponsors and partners at HackByte - the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
		url: "https://hackbyte.in/partners",
		images:
			"https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
		siteName: "HackByte - IIITDMJ Hackathon",
		type: "website",
		locale: "en_US",
	},
};

const normalSponsorsData = [
	{
		sponsor: "MLH",
		category: "Platform Partner",
		sponsorimgsrc: mlh,
		site: "https://mlh.io",
	},
	{
		sponsor: "GitHub",
		category: "Gold Sponsor",
		sponsorimgsrc: github,
		site: "https://gh.io/hackbyte2",
	},
	{
		sponsor: "Postman",
		category: "Gold Sponsor",
		sponsorimgsrc: postman,
		site: "https://community.postman.com",
	},
	{
		sponsor: "Bobble Fan Store",
		category: "Merch Partner",
		sponsorimgsrc: bobble,
		site: "https://fanstore.bobble.ai",
	},
	{
		sponsor: "Godspeed Systems",
		category: "Silver Sponsor",
		sponsorimgsrc: godspeed,
		site: "https://godspeed.systems",
	},
	{
		sponsor: "Devfolio",
		category: "Platform Partner",
		sponsorimgsrc: devfolio,
		site: "https://devfolio.co",
	},
	{
		sponsor: "Virtual Protocol",
		category: "Bronze Sponsor",
		sponsorimgsrc: virtualProtocol,
		site: "https://www.virtuals.io/",
	},
	{
		sponsor: "NextGen",
		category: "Bronze Sponsor",
		sponsorimgsrc: nextgen,
		site: "https://nextgenglobalhub.github.io/opensourcecohort/",
	},
	{
		sponsor: "Auth0",
		category: "Track Sponsor",
		sponsorimgsrc: auth0,
		site: "http://hackp.ac/auth0",
	},
	{
		sponsor: "Taipy",
		category: "Track Sponsor",
		sponsorimgsrc: taipy,
		site: "https://hackp.ac/taipy-gettingstarted",
	},
	{
		sponsor: "Go Daddy Registry",
		category: "Track Sponsor",
		sponsorimgsrc: godaddy,
		site: "http://hackp.ac/godaddyregistry",
	},
];

const inKindSponsorsData = [
	{
		sponsor: "Edubard",
		category: "Media Partner",
		sponsorimgsrc: edubard,
		site: "https://edubard.in",
	},
	{
		sponsor: "Balsamiq",
		category: "Community Sponsor",
		sponsorimgsrc: balsamiq,
		site: "https://balsamiq.com",
	},
	{
		sponsor: "Wolfram",
		category: "Community Sponsor",
		sponsorimgsrc: wolfram,
		site: "https://www.wolfram.com/wolfram-one/",
	},
	{
		sponsor: "MongoDB",
		category: "Community Sponsor",
		sponsorimgsrc: mongodb,
		site: "https://www.mongodb.com/",
	},
	{
		sponsor: "Finlatics",
		category: "Community Sponsor",
		sponsorimgsrc: finlatics,
		site: "https://www.finlatics.com/",
	},
	{
		sponsor: "JDoodle",
		category: "Community Sponsor",
		sponsorimgsrc: jdoodle,
		site: "https://www.jdoodle.com/?utm_source=Event+Website&utm_medium=Event+Sponsorship&utm_campaign=HackByte+Sponsorship+2024&utm_id=HackByte+2.0",
	},
];

const PartnersPage = () => {
	return (
		<>
			<div
				className="flex flex-col min-h-screen lg:gap-[20px] 2xl:gap-[88px]
          lg:pl-[154px] lg:pr-[70px] lg:pb-[92px] pt-[48px]"
			>
				<div className="flex gap-[40px]">
					<div>
						<h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl xl:text-[80px] xl:leading-[6rem] mb-5">
							Past Partners
							<br /> who Supported
						</h1>
						<p className="text-[#BBBBBB] font-medium md:text-2xl text-lg">
							We are proud to collaborate with visionary organizations that
							share our passion for innovation and technology.
						</p>
					</div>
					<Image
						src={hackbyte2Logo}
						className="mt-[-80px]"
						alt="HackByte 2.0 Logo"
					/>
				</div>

				<Tabs
					defaultValue="Sponsors"
					className="flex flex-col justify-center mt-4 md:mt-12"
				>
					<TabsList className="bg-transparent mb-5 md:mb-11 flex justify-start ">
						<TabsTrigger
							value="Sponsors"
							className="sm:text-xl text-md min-[300px]:text-lg font-bold text-[#BBBBBB]
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
						>
							Sponsors
						</TabsTrigger>
						<TabsTrigger
							value="In Kind Sponsors"
							className="sm:text-xl text-md min-[300px]:text-lg font-bold text-[#BBBBBB]
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
						>
							In Kind Sponsors
						</TabsTrigger>
					</TabsList>
					<TabsContent value="Sponsors">
						<div
							className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-8 lg:gap-[44px]"
						>
							{normalSponsorsData.map((sponsor, index) => {
								return <SponsorCard key={index} index={index} {...sponsor} />;
							})}
						</div>
					</TabsContent>
					<TabsContent value="In Kind Sponsors">
						<div
							className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-8 lg:gap-[44px]"
						>
							{inKindSponsorsData.map((sponsor, index) => {
								return <SponsorCard key={index} index={index} {...sponsor} />;
							})}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
};

export default PartnersPage;
