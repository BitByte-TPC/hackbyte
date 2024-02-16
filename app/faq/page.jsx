import Navbar from "@/components/Navbar";
import Image from "next/image";
import badgebundle from "@/public/badgebundle.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQ | HackByte",
};

export default function FAQ() {
  const data = [
    {
      title: "How do I register ?",
      content: "Pre-registration will be opening in January 2024",
    },
    {
      title: "How many team members do I need ?",
      content:
        "You can participate individually or in teams of 3 to 5 members. If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team.",
    },
    {
      title: "How much are the participation fees?",
      content: "Participation is absolutely free inclusive of resources.",
    },
    {
      title: "Will the Hackathon be in person or online ?",
      content: "HackByte will be conducted in complete offline/in person mode.",
    },
    {
      title: "What is the venue for HackByte 2.0 ?",
      content: "Computer Center, IIITDM Jabalpur.",
    },
    {
      title: "What are the prerequisites to participate in this hackathon ?",
      content:
        "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
    },
    {
      title:
        "Is the food and accommodation provided free of charge or are there any associated costs ?",
      content:
        "We've got you covered when it comes to food, water, and coffee – they're on us. However, any additional snacks can be purchased separately. As for accommodation, we will provide arrangements similar to those found in other hackathons, which typically involve a set of mattresses in a common hall.",
    },
    {
      title:
        "Can my friend join our team after we have already submitted the application for review ?",
      content:
        "Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team.",
    },
  ];

  return (
    <>
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          p-4 md:pt-8 md:px-0"
      >
        <Navbar />
        <div className="flex justify-between pt-16 md:pt-12 md:pl-8 xl:pl-20">
          <div className="flex flex-col items-start gap-8">
            <div className="max-w-[840px] text-[#f5f0d8] text-[4rem] md:text-[8rem] lg:text-[120px] xl:text-[160px] font-[500px] md:font-[450px] leading-[5rem] md:leading-[100%] tracking-tighter md:tracking-normal">
              Everything you need to know!
            </div>
            <div className="max-w-[700px] text-[#c3c3c3] font-['Inter'] text-xl md:text-2xl font-normal leading-[2.125rem]">
              Let us help you become even greater at what you do. Fill out the
              following form and we will get back to you in the next 24 hours.
            </div>
          </div>

          <Image
            src={badgebundle}
            alt=""
            className="lg:w-80 lg:h-[400px] xl:w-[400px] xl:h-[520px] hidden lg:block"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 md:px-8 pt-16 pb-8 md:py-24 md:pb-0 self-center">
          <div className="flex gap-5 flex-col">
            <div className="max-w-[448px] text-white text-3xl md:text-4xl font-medium leading-[44px]">
              FAQs
            </div>
            <div className="max-w-[448px]">
              <span className="text-gray-200 text-lg font-normal font-['Inter'] leading-7">
                Everything you need to know about the product and billing. Can't
                find the answer you're looking for? Please{" "}
              </span>
              <span className="text-gray-200 text-lg font-normal font-['Inter'] leading-7">
                chat to our friendly team.
              </span>
            </div>
          </div>
          <div className="max-w-[700px]">
            {data.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="py-4 md:p-8">
                  <AccordionTrigger className="max-w-[592px] text-white text-2xl font-medium font-['Clash Grotesk'] leading-7">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-[592px] text-gray-200 text-lg font-normal font-['Inter'] leading-7">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
          px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-9xl xl:text-[10rem] 
              text-white font-normal font-['Clash Grotesk'] md:leading-[8rem] 
                lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <img
            className="w-44 h-44 lg:h-60 lg:w-60"
            src="/getInTouchImage.svg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
