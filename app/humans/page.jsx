import HumansCard from "@/components/HumansCard";
import bhavik from "@/public/humansPage/bhavik.jpg";
import vansh_mittal from "@/public/humansPage/vansh_mittal.jpeg";
import aditya from "@/public/humansPage/aditya.jpg";
import aditya_raj from "@/public/humansPage/aditya_raj.webp";
import aryan_pandey from "@/public/humansPage/aryan_pandey.jpg";
import deepanshu from "@/public/humansPage/deepanshu.jpg";
import sambhav from "@/public/humansPage/sambhav.jpg";
import varun from "@/public/humansPage/varun.jpg";
import divyansh from "@/public/humansPage/divyansh.jpg";
import manoj from "@/public/humansPage/manoj.jpg";
import tushir from "@/public/humansPage/tushir.jpg";
import eshaan from "@/public/humansPage/eshaan.jpg";
import prajwal_rayal from "@/public/humansPage/prajwal_rayal.png";
import nitya from "@/public/humansPage/nitya.png";
import prajjwal_k from "@/public/humansPage/prajjwal_k.webp";
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
      Name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
    },
    {
      Name: "Vansh Mittal",
      role: "Website Lead",
      profilepic: vansh_mittal,
      linkedin: "https://www.linkedin.com/in/vansh-mittal-21869922a/",
      twitter: "https://twitter.com/mittalvansh_11",
      github: "https://github.com/mittalvansh",
    },
    {
      Name: "Aditya Raj",
      role: "Design Lead",
      profilepic: aditya_raj,
      linkedin: "https://www.linkedin.com/in/contactadityaraj/",
      twitter: "#",
      github: "#",
    },
    // {
    //   Name: "Priyansh Mehta",
    //   role: "Sponsor Lead",
    //   profilepic: priyansh_mehta,
    // linkedin: "https://www.linkedin.com/in/bhavik-agrawal-iiitdmj/",
    // twitter: "https://twitter.com/HackbyteTPC",
    // github: "https://discord.gg/NTueHjdPn8",
    // },
    {
      Name: "Deepanshu Singh",
      role: "PR & Marketing Lead",
      profilepic: deepanshu,
      linkedin: "https://www.linkedin.com/in/sdeepanshu17/",
      twitter: "https://twitter.com/sdeepanshu17",
      github: "#",
    },
    // {
    //   Name: "Aman Shrivastava",
    //   role: "Finance Lead",
    //   profilepic: aman_shrivastava,
    // linkedin: "https://in.linkedin.com/in/aman-srivastava-16726822a",
    // twitter: "#",
    // github: "#",
    //},
    {
      Name: "Sambhav Gupta",
      role: "Speaker & Workshop Lead",
      profilepic: sambhav,
      linkedin: "https://www.linkedin.com/in/sambhavgupta0705",
      twitter: "https://x.com/sambhavgupta75",
      github: "https://github.com/sambhavgupta0705",
    },
    {
      Name: "Varun Singh",
      role: "Registrations Lead",
      profilepic: varun,
      linkedin: "https://www.linkedin.com/in/varun-singh-018242224/",
      twitter: "#",
      github: "https://github.com/varun7singh",
    },
    {
      Name: "Divyansh Tripathi",
      role: "Operations Lead",
      profilepic: divyansh,
      linkedin: "https://www.linkedin.com/in/tdivyansh/",
      twitter: "https://twitter.com/theoden42",
      github: "#",
    },
    {
      Name: "Aryan Pandey",
      role: "Organizer",
      profilepic: aryan_pandey,
      linkedin: "https://linkedin.com/in/aryan1113",
      twitter: "https://twitter.com/aisehiaryan",
      github: "#",
    },
    {
      Name: "Prajjwal Kapoor",
      role: "Organizer",
      profilepic: prajjwal_k,
      linkedin: "https://www.linkedin.com/in/prajjwal-kapoor/",
      twitter: "#",
      github: "#",
    },
    // {
    //   Name: "Samyak Bhargava",
    //   role: "Organizer",
    //   profilepic: samyak,
    // linkedin: "https://www.linkedin.com/in/sammybh6/",
    // twitter: "",
    // github: "#",
    // },
    // {
    //   Name: "Ashwarya Saxena",
    //   role: "Organizer",
    //   profilepic: ashwarya,
    // linkedin: "https://www.linkedin.com/in/aishwarya-saxena-05713618b/",
    // twitter: "#",
    // github: "#",
    //},
    {
      Name: "Nitya Tiwari",
      role: "Organizer",
      profilepic: nitya,
      linkedin: "https://www.linkedin.com/in/nitya-tiwari-960797229/",
      twitter: "https://twitter.com/nityatiwariii",
      github: "#",
    },
    {
      Name: "Manoj Panjwani",
      role: "Organizer",
      profilepic: manoj,
      linkedin:
        "https://www.linkedin.com/in/manojpanjwani03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      github: "#",
    },
    {
      Name: "Tushir Sahu",
      role: "Organizer",
      profilepic: tushir,
      linkedin: "https://www.linkedin.com/in/tushir-sahu-b95549205/",
      twitter: "#",
      github: "#",
    },
    {
      Name: "Prajwal Rayal",
      role: "Organizer",
      profilepic: prajwal_rayal,
      linkedin: "http://linkedin.com/in/prajwal-rayal",
      twitter: "https://twitter.com/rayalprajwal",
      github: "#",
    },
    {
      Name: "Eshaan Modi",
      role: "Organizer",
      profilepic: eshaan,
      linkedin:
        "https://www.linkedin.com/in/eshaan-modi-a9a602253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      github: "#",
    },
    {
      Name: "Aditya Kumar Gupta",
      role: "Organizer",
      profilepic: aditya,
      linkedin: "http://linkedin.com/in/aditya-kgupta",
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
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full border border-[#D1CAC7] px-4 py-1 mb-3">
            <p
              className="w-full text-[#C3C3C3] font-[Inter] 
                  text-center font-normal text-[1.25rem] tracking-[0.0625rem]"
            >
              THE TEAM
            </p>
          </div>
          <p className="text-[#F5F0D8] text-center text-[2.5rem] font-normal md:text-[4rem] xl:text-[5rem] xl:leading-[6.25rem] xl:tracking-[-0.1rem] mb-6">
            Meet the humans of
            <br /> Hackbyte 2.0
          </p>
          <p
            className="w-full lg:max-w-[80%] text-[#F5F0D8] font-[Inter] 
                  text-center font-normal text-[1.25rem] "
          >
            We’re a small team that loves to create great experiences and make
            meaningful connections between builders and customers. Join our
            remote ream!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10 pt-20">
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
