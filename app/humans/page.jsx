import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";

// Organizers
import priyansh from "@/public/humansPage/priyansh.jpg";
import bhavik from "@/public/humansPage/bhavik.jpg";
import samyak from "@/public/humansPage/samyak.jpeg";
import divyansh from "@/public/humansPage/divyansh.jpeg";
import vansh from "@/public/humansPage/vansh.jpeg";
import aditya from "@/public/humansPage/aditya.jpg";
import varun from "@/public/humansPage/varun.jpg";
import deepanshu from "@/public/humansPage/deepanshu.jpg";
import sambhav from "@/public/humansPage/sambhav.jpg";
import tushir from "@/public/humansPage/tushir.jpeg";
import aman from "@/public/humansPage/aman.jpeg";
import aish from "@/public/humansPage/aish.jpg";
import prajjwal from "@/public/humansPage/prajjwal.jpg";
import aryan from "@/public/humansPage/aryan.jpg";
import prajwal from "@/public/humansPage/prajwal.jpg";
import manoj from "@/public/humansPage/manoj.jpeg";
import nitya from "@/public/humansPage/nitya.jpg";

// Mentors
import aanchal from "@/public/humansPage/aanchal.jpeg";
import khushi from "@/public/humansPage/khushi.jpg";
import manan from "@/public/humansPage/manan.jpg";
import priyansh_garg from "@/public/humansPage/priyansh_garg.jpeg";
import akshat from "@/public/humansPage/akshat.jpg";
import sanskriti from "@/public/humansPage/sanskriti.jpg";
import yashika from "@/public/humansPage/yashika.jpeg";
import sagar from "@/public/humansPage/sagar.jpg";
import siddhant from "@/public/humansPage/siddhant.jpeg";
import vedant from "@/public/humansPage/vedant.jpeg";
import ashu from "@/public/humansPage/ashu.jpg";
import ashish from "@/public/humansPage/ashish.jpg";
import gautam from "@/public/humansPage/gautam.jpg";
import chaitanya from "@/public/humansPage/chaitanaya.jpg";

import FooterAnimation from "@/components/FooterAnimation";
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
  const organizerData = [
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Priyansh Mehta",
      role: "Organizer",
      profilepic: priyansh,
      linkedin: "https://www.linkedin.com/in/Priyansh61/",
      twitter: "https://twitter.com/Priyansh_61",
      github: "https://github.com/Priyansh61",
    },
    {
      name: "Divyansh Tripathi",
      role: "Organizer",
      profilepic: divyansh,
      linkedin: "https://www.linkedin.com/in/tdivyansh/",
      twitter: "https://twitter.com/theoden42",
      github: "https://github.com/theoden42",
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
      profilepic: aditya,
      linkedin: "https://www.linkedin.com/in/contactadityaraj/",
      twitter: "#",
      github: "#",
    },
    {
      name: "Varun Singh",
      role: "Organizer",
      profilepic: varun,
      linkedin: "https://www.linkedin.com/in/varun-singh-018242224/",
      twitter: "#",
      github: "https://github.com/varun7singh",
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
      name: "Tushir Sahu",
      role: "Organizer",
      profilepic: tushir,
      linkedin: "https://www.linkedin.com/in/tushir-sahu-b95549205/",
      twitter: "https://twitter.com/Tushir_Sahu",
      github: "https://github.com/TushirSahu",
    },
    {
      name: "Aman Srivastava",
      role: "Organizer",
      profilepic: aman,
      linkedin: "https://www.linkedin.com/in/aman-srivastava-16726822a/",
      twitter: "#",
      github: "#",
    },
    {
      name: "Aishwarya Saxena",
      role: "Organizer",
      profilepic: aish,
      linkedin: "https://www.linkedin.com/in/aishwarya-saxena-05713618b/",
      twitter: "#",
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
      name: "Aryan Pandey",
      role: "Organizer",
      profilepic: aryan,
      linkedin: "https://linkedin.com/in/aryan1113",
      twitter: "https://twitter.com/aisehiaryan",
      github: "https://github.com/aryan1113",
    },
    {
      name: "Prajwal Rayal",
      role: "Organizer",
      profilepic: prajwal,
      linkedin: "http://linkedin.com/in/prajwal-rayal",
      twitter: "https://twitter.com/rayalprajwal",
      github: "https://github.com/PrajwalRayal",
    },
    {
      name: "Manoj Panjwani",
      role: "Organizer",
      profilepic: manoj,
      linkedin: "https://www.linkedin.com/in/manojpanjwani03/",
      twitter: "#",
      github: "#",
    },
    {
      name: "Nitya Tiwari",
      role: "Organizer",
      profilepic: nitya,
      linkedin: "https://www.linkedin.com/in/nitya-tiwari-960797229/",
      twitter: "https://twitter.com/nityatiwariii",
      github: "#",
    },
  ];

  const mentorData = [
    {
      name: "Aanchal Mishra",
      profilepic: aanchal,
      linkedin: "https://www.linkedin.com/in/mishra-aanchal/",
      twitter: "https://twitter.com/Aanchalmishra__",
      github: "https://github.com/mishra-aanchal",
    },
    {
      name: "Khushi Trivedi",
      profilepic: khushi,
      linkedin: "https://www.linkedin.com/in/trivedi-khushi/",
      twitter: "https://twitter.com/KhushiT113/",
      github: "https://github.com/trivedi-khushi",
    },
    {
      name: "Manan Jethwani",
      profilepic: manan,
      linkedin: "https://www.linkedin.com/in/manan-jethwani/",
      twitter: "https://twitter.com/manan_jethwani",
      github: "https://github.com/mananjethwani",
    },
    {
      name: "Priyansh Garg",
      profilepic: priyansh_garg,
      linkedin: "https://www.linkedin.com/in/priyansh3133/",
      twitter: "https://twitter.com/priyansh3133",
      github: "https://github.com/garg3133",
    },
    {
      name: "Akshat Virmani",
      profilepic: akshat,
      linkedin: "https://www.linkedin.com/in/akshatvirmani/",
      twitter: "https://twitter.com/VirmaniAkshat",
      github: "https://github.com/akshatvirmani",
    },
    {
      name: "Sanskriti Harmukh",
      profilepic: sanskriti,
      linkedin: "https://www.linkedin.com/in/sanskriti-harmukh/",
      twitter: "https://x.com/Senzkriti",
      github: "https://github.com/SanskritiHarmukh",
    },
    {
      name: "Yashika Jotwani",
      profilepic: yashika,
      linkedin: "https://www.linkedin.com/in/yashika-jotwani-03a0061b7",
      twitter: "https://twitter.com/yashika_jotwani",
      github: "https://github.com/yashikajotwani12",
    },
    {
      name: "Sagar Uprety",
      profilepic: sagar,
      linkedin: "https://www.linkedin.com/in/sagar-uprety/",
      twitter: "https://twitter.com/SagarUprety9",
      github: "https://github.com/sagar-uprety",
    },
    {
      name: "Siddhant Khare",
      profilepic: siddhant,
      linkedin: "https://www.linkedin.com/in/siddhantkhare24/",
      twitter: "https://twitter.com/Siddhant_K_code",
      github: "https://github.com/Siddhant-K-code",
    },
    {
      name: "Vedant Jain",
      profilepic: vedant,
      linkedin: "https://www.linkedin.com/in/vedant-jain-781006145",
      twitter: "https://twitter.com/vedantj_03",
      github: "https://vedant-jain03.github.io/portfolio/",
    },
    {
      name: "Ashu Kumar",
      profilepic: ashu,
      linkedin: "https://www.linkedin.com/in/ashu-kr/",
      twitter: "https://twitter.com/AshuKr40",
      github: "https://github.com/Ashu-kumar40",
    },
    {
      name: "Ashish Chanchal",
      profilepic: ashish,
      linkedin: "https://www.linkedin.com/in/ashishchanchal",
      twitter: "https://x.com/_ashishchanchal",
      github: "https://github.com/Ashish-chanchal",
    },
    {
      name: "Gautam Manak",
      profilepic: gautam,
      linkedin: "https://www.linkedin.com/in/gautammanak1/",
      twitter: "https://twitter.com/gautammanak02",
      github: "https://github.com/GAUTAMMANAK1",
    },
    {
      name: "Chaitanya Rai",
      profilepic: chaitanya,
      linkedin: "https://www.linkedin.com/in/chaitanya-rai/",
      twitter: "https://twitter.com/Chaitanyarai19",
      github: "https://github.com/chaitanyarai19/",
    },
  ];

  return (
    <>
      <Navbar />
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
                md:text-[4rem] xl:text-[5rem] md:leading-[4.5rem] xl:leading-[5.25rem]"
            >
              Meet the humans of
              <br /> Hackbyte 2.0
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="Mentors"
          className="flex flex-col justify-center items-center text-white mt-4 md:mt-12"
        >
          <TabsList className="mb-8 md:mb-16 w-[19rem] min-w-[321px]:w-80 sm:w-[488px]">
            <TabsTrigger
              value="Mentors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              Mentors
            </TabsTrigger>
            <TabsTrigger
              value="Organizers"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              Organizers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Mentors">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {mentorData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Organizers">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {organizerData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
            tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
