import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextAnimation from "@/components/TextAnimation";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";
import "./page.css";

export const metadata = {
  title: "FAQ | HackByte",
  description: "Frequently asked questions about HackByte.",
  keywords: "FAQ, HackByte, IIITDMJ, Hackathon",
  openGraph: {
    title: "FAQ | HackByte",
    description: "Frequently asked questions about HackByte.",
    url: "https://hackbyte.in/faq",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
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
        "You can participate individually or in teams of 2 to 4 members. If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team.",
    },
    {
      title: "How much are the participation fees?",
      content:
        "Participation is absolutely free inclusive of food and accomodation. Isnt that great? So register ASAP!!",
    },
    {
      title: "Will the Hackathon be in person or online ?",
      content: "HackByte will be conducted in complete offline/in-person mode.",
    },
    {
      title: "What is the venue for HackByte 2.0 ?",
      content:
        "IIITDM Jabalpur, explore our beautiful campus while thinking about innovating some crazy thing.",
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
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          p-4 md:pb-64 lg:px-0 md:pt-24 pt-16"
      >
        <div
          className="w-full h-full flex flex-col gap-24 px-4 pt-20 
            md:px-8 xl:px-20 2xl:px-40"
        >
          <div
            className="flex flex-col justify-between items-start sm:items-center
            gap-12 md:gap-0 md:flex-row md:items-start"
          >
            <div className="flex flex-col items-start gap-8">
              <TextAnimation text="Everything you need to know!" />
              <p
                className="w-full text-[#C3C3C3] font-['Inter'] font-normal 
                  text-[1.25rem] sm:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[50rem] 
                  2xl:max-w-[55rem] md:text-[1rem] xl:text-[1.5rem]"
              >
                Hacker Experience is what we prioritize! Have questions, need
                assistance, or just want to connect? Feel free to reach out!
              </p>
            </div>
            <img
              className="w-44 h-44 md:hidden lg:block xl:h-60 xl:w-60 rotatingContainer"
              src="/getInTouchImage.svg"
              alt="Get in touch"
            />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row self-center gap-12 md:gap-16 lg:gap-24 
            pt-16 pb-8 md:px-8 xl:px-20 md:pt-24 md:pb-0"
        >
          <div className="flex flex-col gap-5">
            <div
              className="max-w-[448px] text-white text-3xl md:text-4xl 
              font-medium leading-[44px]"
            >
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
                  <AccordionTrigger
                    className="max-w-[592px] text-white text-2xl 
                    font-medium leading-7"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className="max-w-[592px] text-gray-200 text-lg 
                      font-normal font-['Inter'] leading-7"
                  >
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
