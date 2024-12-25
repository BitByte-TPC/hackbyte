import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Train, Plane, Bus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactSection() {
    return (
        <div className="w-full text-primary-white p-6 md:p-12 lg:p-16 py-16">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex items-start justify-between pb-8 md:pb-16">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                                How can we
                                <br />
                                Help you?
                            </h1>
                            <div className="block md:hidden">
                                <Image
                                    src={"/Contact/phone.png"}
                                    alt=""
                                    height={100}
                                    width={100}
                                />
                            </div>
                        </div>

                        <p className="text-gray-400 max-w-lg">
                            Hacker Experience is what we prioritize! Have
                            questions, need assistance, or just want to connect?
                            Feel free to reach out!
                        </p>
                    </div>
                    <div className="hidden md:block mx-auto">
                        <Image
                            src={"/Contact/phone.png"}
                            alt=""
                            height={200}
                            width={200}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Phone className="w-5 h-5 text-purple-500" />
                            <h2 className="text-3xl font-semibold">Call Us</h2>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div>
                                <p>+91 98892 61112</p>
                                <p className="text-sm text-gray-400">
                                    Uttara Kamal
                                </p>
                            </div>
                            <div>
                                <p>+91 93156 74300</p>
                                <p className="text-sm text-gray-400">
                                    Akshay Rafe
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Mail className="w-5 h-5 text-purple-500" />
                            <h2 className="text-3xl font-semibold">Mail Us</h2>
                        </div>
                        <div className="space-y-1 flex flex-col">
                            <Link
                                target="_blank"
                                href={"mailto:thepeople@iiitdmj.ac.in"}
                            >
                                thepeople@iiitdmj.ac.in
                            </Link>
                            <Link
                                target="_blank"
                                href={"mailto:iiitdmj@iiitdmj.ac.in"}
                            >
                                iiitdmj@iiitdmj.ac.in
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-2 col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <MapPin className="w-5 h-5 text-purple-500" />
                            <h2 className="text-3xl font-semibold">Address</h2>
                        </div>
                        <p className="text-sm">
                            IIITDM Jabalpur, Near Dumna Airport, Jabalpur,
                            Madhya Pradesh, 482005
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">
                        Reaching IIITDM Jabalpur
                    </h2>
                    <div className="aspect-video w-full rounded-3xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4774721298!2d80.02231931544636!3d23.176386884867444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0fb6a97d%3A0x44020f94f795d69f!2sIIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1629789876543!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-transparent border-none p-4 space-y-4">
                            <div className="flex items-start gap-6 flex-col">
                                <Train className="size-12 text-red-500 bg-red-500/30 p-2 rounded-lg" />
                                <h3 className="font-semibold text-2xl text-primary-white">
                                    By Train
                                </h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Book tickets from IRCTC : The campus is{" "}
                                <b className="text-primary-white">
                                    10kms from the Railway Terminal
                                </b>{" "}
                                and auto fare is usually around{" "}
                                <b className="text-primary-white">₹200-₹250</b>.
                            </p>
                        </Card>

                        <Card className="bg-transparent border-none p-4 space-y-4">
                            <div className="flex items-start gap-6 flex-col">
                                <Plane className="size-12 text-red-500 bg-red-500/30 p-2 rounded-lg" />
                                <h3 className="font-semibold text-2xl text-primary-white">
                                    By Flight
                                </h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Daily flights from{" "}
                                <b className="text-primary-white">
                                    Delhi, Mumbai, Hyderabad, Indore and
                                    Bilaspur
                                </b>{" "}
                                . From{" "}
                                <b className="text-primary-white">Bangalore</b>,
                                connecting flights are available.
                            </p>
                        </Card>

                        <Card className="bg-transparent border-none p-4 space-y-4">
                            <div className="flex items-start gap-6 flex-col">
                                <Bus className="size-12 text-red-500 bg-red-500/30 p-2 rounded-lg" />
                                <h3 className="font-semibold text-2xl text-primary-white">
                                    By Bus
                                </h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Only suggested if you live around 8-10hrs from
                                Jabalpur.{" "}
                                <b className="text-primary-white">
                                    ISBT (Pandit Deen Dayal Bus Stand)
                                </b>{" "}
                                is around 13km from the venue, auto fare is
                                usually around{" "}
                                <b className="text-primary-white">₹400-₹450</b>.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
