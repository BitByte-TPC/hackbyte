"use client"

import Image from "next/image"
import { Mail } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How do I register?",
        answer: "Registration details will be provided here...",
    },
    {
        question: "How many team members do I need ?",
        answer: "Team member requirements will be listed here...",
    },
    {
        question: "How much are the participation fees?",
        answer: "Participation fee information will be shown here...",
    },
    {
        question: "Will the Hackathon be in person or online ?",
        answer: "Hackathon format details will be displayed here...",
    },
    {
        question: "What is the venue for HackByte 3.0 ?",
        answer: "Venue information will be listed here...",
    },
    {
        question:
            "What are the prerequisites to participate in this hackathon ?",
        answer: "Prerequisites will be shown here...",
    },
    {
        question:
            "Is the food and accommodation provided free of charge or are there any associated costs ?",
        answer: "Food and accommodation details will be provided here...",
    },
    {
        question:
            "Can my friend join our team after we have already submitted the application for review ?",
        answer: "Team modification policy will be shown here...",
    },
]

export default function FAQSection() {
    return (
        <div className="min-h-screen text-primary-white p-6 md:p-12 lg:p-16 py-16">
            <div className="max-w-7xl mx-auto mb-24 md:mb-32">
                <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <div className="flex">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                                Everything you
                                <br />
                                need to know!
                            </h1>
                            <div className="w-32 h-32 md:hidden relative mx-auto">
                                <Image
                                    src="/Faq/question_mark.png"
                                    alt=""
                                    height={120}
                                    width={140}
                                />
                            </div>
                        </div>

                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                            Hacker Experience is what we prioritize! Have
                            questions, need assistance, or just want to connect?
                            Feel free to reach out!
                        </p>
                    </div>
                    <div className="hidden md:flex justify-end animate-in duration-500 size-36 xl:size-56 relative">
                        <Image
                            src="/Faq/question_mark.png"
                            alt=""
                            height={150}
                            width={200}
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr,2fr] gap-12">
                <div className="space-y-8 animate-in duration-500 delay-300">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-in duration-500">
                        FAQS
                    </h1>
                    <div className="space-y-4 animate-in duration-500 delay-500">
                        <p className="text-gray-400 text-lg">
                            Everything you need to know about participating in
                            the Hackathon.
                        </p>
                        <div className="text-2xl font-semibold">OR</div>
                        <div className="space-y-2">
                            <p className="text-gray-400">
                                Think we missed something?
                            </p>
                            <p className="text-gray-400">Reach out at</p>
                            <a
                                href="mailto:theprogclub@iiitdmj.ac.in"
                                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
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
                                <AccordionTrigger className="text-lg text-gray-300 hover:text-white transition-colors text-left pr-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
