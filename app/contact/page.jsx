import { Card } from "@/components/ui/card";
import { Train, Plane, Bus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import phoneImg from "@/public/Contact/phone.png";

export const metadata = {
  title: "Contact | HackByte",
  description:
    "Connect with us at HackByte! Reach out for assistance, questions, or just to say hello. Find information on reaching IIIT Jabalpur, including travel options.",
  keywords: "contact, hackbyte, reach us, get in touch",
  openGraph: {
    title: "Contact | HackByte",
    description:
      "Connect with us at HackByte! Reach out for assistance, questions, or just to say hello. Find information on reaching IIIT Jabalpur, including travel options.",
    url: "https://hackbyte.in/contact",
    images:
      "https://res.cloudinary.com/dlsqbiwug/image/upload/v1736876616/Frame_463_zdbkgu.png",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function ContactSection() {
  return (
    <div className="w-full text-primary-white p-6 md:p-12 lg:p-20 md:py-16 pt-[32px] sm:pt-[48px]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-start justify-between pb-8 md:pb-16">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[42px] md:text-6xl lg:text-8xl font-black leading-tight">
                How can we
                <br />
                Help you?
              </h1>
              <div className="block md:hidden">
                <Image
                  src={phoneImg}
                  alt="phone"
                  height={100}
                  width={100}
                  className="hidden sm:block"
                />
              </div>
            </div>

            <p className="text-supporting-mediumGray xxs:text-lg md:text-xl font-medium max-w-lg md:max-w-xl lg:max-w-2xl xl:maw-w-3xl">
              Hacker Experience is what we prioritize! Have questions, need
              assistance, or just want to connect? Feel free to reach out!
            </p>
          </div>
          <div className="hidden md:block mx-auto">
            <Image
              src={phoneImg}
              alt="phone"
              className="md:w-[168px] lg:w-[200px] xl:w-[220px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black">Call Us</h2>
            <div className="flex flex-row gap-8 text-supporting-mediumGray font-medium">
              <div>
                <p>+91 98692 61132</p>
                <p className="text-base text-supporting-mediumGray font-medium">
                  Uttara Kamat
                </p>
              </div>
              <div>
                <p>+91 93196 74300</p>
                <p className="text-base text-supporting-mediumGray font-medium">
                  Akshay Behl
                </p>
              </div>
            </div>
          </div> */}

          <div className="space-y-2 hidden ">
            <h2 className="text-3xl md:text-4xl font-black">Mail Us</h2>
            <div className="space-y-1 flex flex-col text-supporting-mediumGray font-medium">
              <Link target="_blank" href={"mailto:hackbyte@iiitdmj.ac.in"}>
                hackbyte@iiitdmj.ac.in
              </Link>
            </div>
          </div>

          <div className="space-y-2 col-span-2 md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-black">Address</h2>
            <p className="text-base text-supporting-mediumGray font-medium">
              IIITDM Jabalpur, Near Dumna Airport,
              <br /> Jabalpur, Madhya Pradesh 482005
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:py-16 py-2">
            <Card className="bg-transparent border-none p-4 space-y-4">
              <div className="flex md:items-start items-center gap-6 md:flex-col flex-row">
                <Train className="size-12 text-red-500 bg-red-500/30 p-2 rounded-lg" />
                <h3 className="font-black text-2xl text-primary-white">
                  By Train
                </h3>
              </div>
              <p className="md:text-base text-base text-supporting-mediumGray font-medium">
                Book tickets from IRCTC : The campus is{" "}
                <b className="text-primary-white">
                  10kms from the Railway Terminal
                </b>{" "}
                and auto fare is usually around{" "}
                <b className="text-primary-white">₹200-₹250</b>.
              </p>
            </Card>

            <Card className="bg-transparent border-none p-4 space-y-4">
              <div className="flex md:items-start items-center gap-6 md:flex-col flex-row">
                <Plane className="size-12 text-red-500 bg-red-500/30 p-2 rounded-lg" />
                <h3 className="font-black text-2xl text-primary-white">
                  By Flight
                </h3>
              </div>
              <p className="md:text-base text-base text-supporting-mediumGray font-medium">
                Daily flights from{" "}
                <b className="text-primary-white">
                  Delhi, Mumbai, Hyderabad, Indore and Bilaspur
                </b>{" "}
                . From <b className="text-primary-white">Bangalore</b>,
                connecting flights are available.
              </p>
            </Card>

            <Card className="bg-transparent border-none p-4 space-y-4">
              <div className="flex md:items-start items-center gap-6 md:flex-col flex-row">
                <Bus className="size-12 text-red-500 bg-red-500/30 p-2 rounded-lg" />
                <h3 className="font-black text-2xl text-primary-white">
                  By Bus
                </h3>
              </div>
              <p className="md:text-base text-base text-supporting-mediumGray font-medium">
                Only suggested if you live around 8-10hrs from Jabalpur.{" "}
                <b className="text-primary-white">
                  ISBT (Pandit Deen Dayal Bus Stand)
                </b>{" "}
                is around 13km from the venue, auto fare is usually around{" "}
                <b className="text-primary-white">₹400-₹450</b>.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
