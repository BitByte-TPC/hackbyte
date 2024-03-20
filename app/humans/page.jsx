import HumansCard from "@/components/HumansCard";

import bhavik from "@/public/humansPage/bhavik.jpg";
import vansh from "@/public/humansPage/vansh.jpeg";
import aditya_raj from "@/public/humansPage/aditya_raj.webp";
import aryan from "@/public/humansPage/aryan.jpg";
import deepanshu from "@/public/humansPage/deepanshu.jpg";
import sambhav from "@/public/humansPage/sambhav.jpg";
import varun from "@/public/humansPage/varun.jpg";
import manoj from "@/public/humansPage/manoj.jpg";
import eshaan from "@/public/humansPage/eshaan.jpg";
import prajwal from "@/public/humansPage/prajwal.png";
import nitya from "@/public/humansPage/nitya.png";
import prajjwal from "@/public/humansPage/prajjwal.webp";

import CircleAnimation from "@/components/CircleAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Humans | HackByte",
  description:
    "Meet the team behind HackByte 2.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
  keywords:
    "Humans, Team, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech",
  openGraph: {
    title: "Humans | HackByte",
    description:
      "Meet the team behind HackByte 2.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
    url: "https://hackbyte.in/humans",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Team() {
  const HumansData = [
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
    },
    {
      name: "Vansh Mittal",
      role: "Web Lead",
      profilepic: vansh,
      linkedin: "https://www.linkedin.com/in/vansh-mittal-21869922a/",
      twitter: "https://twitter.com/mittalvansh_11",
      github: "https://github.com/mittalvansh",
    },
    {
      name: "Aditya Raj",
      role: "Design Lead",
      profilepic: aditya_raj,
      linkedin: "https://www.linkedin.com/in/contactadityaraj/",
      twitter: "#",
      github: "#",
    },
    {
      name: "Deepanshu Singh",
      role: "PR & Marketing Lead",
      profilepic: deepanshu,
      linkedin: "https://www.linkedin.com/in/sdeepanshu17/",
      twitter: "https://twitter.com/sdeepanshu17",
      github: "#",
    },
    {
      name: "Sambhav Gupta",
      role: "Speaker & Workshop Lead",
      profilepic: sambhav,
      linkedin: "https://www.linkedin.com/in/sambhavgupta0705",
      twitter: "https://x.com/sambhavgupta75",
      github: "https://github.com/sambhavgupta0705",
    },
    {
      name: "Varun Singh",
      role: "Registrations Lead",
      profilepic: varun,
      linkedin: "https://www.linkedin.com/in/varun-singh-018242224/",
      twitter: "#",
      github: "https://github.com/varun7singh",
    },
    {
      name: "Aryan Pandey",
      role: "Organizer",
      profilepic: aryan,
      linkedin: "https://linkedin.com/in/aryan1113",
      twitter: "https://twitter.com/aisehiaryan",
      github: "#",
    },
    {
      name: "Prajjwal Kapoor",
      role: "Organizer",
      profilepic: prajjwal,
      linkedin: "https://www.linkedin.com/in/prajjwal-kapoor/",
      twitter: "https://twitter.com/the_prajjwal",
      github: "https://github.com/prajjwalkapoor",
    },
    {
      name: "Nitya Tiwari",
      role: "Organizer",
      profilepic: nitya,
      linkedin: "https://www.linkedin.com/in/nitya-tiwari-960797229/",
      twitter: "https://twitter.com/nityatiwariii",
      github: "#",
    },
    {
      name: "Manoj Panjwani",
      role: "Organizer",
      profilepic: manoj,
      linkedin:
        "https://www.linkedin.com/in/manojpanjwani03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      github: "#",
    },
    {
      name: "Prajwal Rayal",
      role: "Organizer",
      profilepic: prajwal,
      linkedin: "http://linkedin.com/in/prajwal-rayal",
      twitter: "https://twitter.com/rayalprajwal",
      github: "#",
    },
    {
      name: "Eshaan Modi",
      role: "Organizer",
      profilepic: eshaan,
      linkedin: "https://www.linkedin.com/in/eshaan-modi-a9a602253/",
      twitter: "#",
      github: "#",
    },
  ];
  return (
    <>
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 xl:px-10 2xl:px-48 py-40"
      >
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <div
              className="w-fit rounded-full 
                border border-[#D1CAC7] px-4 py-1 mb-3"
            >
              <p
                className="w-full text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] tracking-[0.0625rem]"
              >
                THE TEAM
              </p>
            </div>
            <p
              className="text-[#F5F0D8] text-center text-[2.5rem] font-normal 
                md:text-[4rem] xl:text-[5rem] xl:leading-[6.25rem] xl:tracking-[-0.1rem]"
            >
              Meet the humans of
              <br /> Hackbyte 2.0
            </p>
          </div>
          <p
            className="w-full lg:max-w-[80%] text-[#F5F0D8] font-[Inter] 
              text-center font-normal text-[1.25rem] "
          >
            We're a small team that loves to create great experiences and make
            meaningful connections between builders and customers. Join our
            remote ream!
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            place-content-center place-items-center gap-10 pt-20"
        >
          {HumansData.map((human, index) => (
            <HumansCard key={index} index={index} {...human} />
          ))}
        </div>
      </div>
      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal font-['Clash Grotesk'] md:leading-[8rem] 
              lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <CircleAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
