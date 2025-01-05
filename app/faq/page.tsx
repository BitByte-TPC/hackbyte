import Image from "next/image";
import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "@/public/Faq/question_mark.png";

const faqs = [
  {
    question: "How do I register ?",
    answer: "Pre-registration will be opening in January 2025",
  },
  {
    question: "How many team members do I need ?",
    answer:
      "You can participate individually or in teams of 2 to 4 members. If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team.",
  },
  {
    question: "How much are the participation fees?",
    answer:
      "Participation is absolutely free inclusive of food and accomodation. Isnt that great? So register ASAP!!",
  },
  {
    question: "Will the Hackathon be in person or online ?",
    answer: "HackByte will be conducted in complete offline/in-person mode.",
  },
  {
    question: "What is the venue for HackByte 3.0 ?",
    answer:
      "IIITDM Jabalpur, explore our beautiful campus while thinking about innovating some crazy thing.",
  },
  {
    question: "What are the prerequisites to participate in this hackathon ?",
    answer:
      "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
  },
  {
    question:
      "Is the food and accommodation provided free of charge or are there any associated costs ?",
    answer:
      "We've got you covered when it comes to food, water, and coffee – they're on us. However, any additional snacks can be purchased separately. As for accommodation, we will provide arrangements similar to those found in other hackathons, which typically involve a set of mattresses in a common hall.",
  },
  {
    question:
      "Can my friend join our team after we have already submitted the application for review ?",
    answer:
      "Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team.",
  },
];

export default function FAQSection() {
  return (
    <div className="min-h-screen text-primary-white p-6 md:p-12 lg:p-16 md:py-16">
      <div className="max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex">
              <h1 className="text-[42px] md:text-6xl lg:text-8xl font-black leading-tight max-w-64 md:max-w-3xl">
                Everything you need to know!
              </h1>
              <div className="w-32 h-32 md:hidden relative mx-auto">
                <Image src={faq} alt="" height={120} width={140} />
              </div>
            </div>
            <p className="text-supporting-mediumGray text-lg md:text-xl lg:text-xl xl:text-2xl font-medium md:max-w-lg lg:max-w-3xl">
              Hacker Experience is what we prioritize! Have questions, need
              assistance, or just want to connect? Feel free to reach out!
            </p>
          </div>
          <Image
            src={faq}
            alt=""
            className="hidden md:flex md:w-[200px] lg:w-[220px] lg:pb-28 xl:pb-0"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr,2fr] gap-12">
        <div className="space-y-8 animate-in duration-500 delay-300">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter animate-in duration-500">
            FAQs
          </h1>
          <div className="space-y-4 animate-in duration-500 delay-500">
            <p className="text-supporting-mediumGray text-lg">
              Everything you need to know about participating in the Hackathon.
            </p>
            <div className="text-2xl font-bold">OR</div>
            <div className="space-y-2">
              <p className="text-supporting-mediumGray">Think we missed something?</p>
              <p className="text-supporting-mediumGray">Reach out at</p>
              <a
                href="mailto:theprogclub@iiitdmj.ac.in"
                className="inline-flex items-center gap-2 text-white hover:text-supporting-mediumGray transition-colors"
              >
                <Mail className="w-5 h-5" />
                theprogclub@iiitdmj.ac.in
              </a>
            </div>
          </div>
        </div>

        <div className="animate-in fade-in duration-500 delay-500">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-800"
              >
                <AccordionTrigger className="text-lg md:text-xl xl:text-2xl text-supporting-mediumGray hover:text-white transition-colors text-left pr-4 font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg xl:text-xl text-supporting-mediumGray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
