import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

import leftLeaf from "@/public/schedulePage/leftLeaf.svg";
import rightLeaf from "@/public/schedulePage/rightLeaf.svg";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Schedule | HackByte",
  description:
    "Check out the schedule for HackByte! Stay updated with the timeline of events and activities happening during IIIT Jabalpur's hackathon.",
  keywords:
    "Hackathon schedule, Timeline, Events, IIITDMJ, Hackbyte, Coding, Programming, Tech",
  openGraph: {
    title: "Schedule | HackByte",
    description:
      "Check out the schedule for HackByte! Stay updated with the timeline of events and activities happening during IIIT Jabalpur's hackathon.",
    url: "https://hackbyte.in/schedule",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Schedule() {
  const day1 = [
    {
      event: "Check in",
      time: "2:30 PM - 5:00 PM",
      duration: "150mins",
    },
    {
      event: "Opening Ceremony",
      time: "5:15 PM - 6:30 PM",
      duration: "75mins",
    },
    {
      event: "Logitech Keynote",
      time: "6:00 PM - 6:30 PM",
      duration: "30mins",
    },
    {
      event: "Hacking Begins",
      time: "7:00 PM",
      duration: "NA",
    },
    {
      event: "Dinner",
      time: "9:30 PM - 10:30 PM",
      duration: "60mins",
    },
  ];

  const day2 = [
    {
      event: "Logitech Workshop",
      time: "12:00 AM - 1:00 AM",
      duration: "60mins",
    },
    {
      event: "Mentorship Round 1",
      time: "1:30AM",
      duration: "NA",
    },
    {
      event: "Checkpoint 1/4",
      time: "2:00 AM",
      duration: "NA",
    },
    {
      event: "Logitech Event-Blind Type and Postman Trivia",
      time: "2:00 AM - 3:00 AM",
      duration: "60mins",
    },
    {
      event: "Midnight Snack",
      time: "4:00 AM",
      duration: "NA",
    },
    {
      event: "Breakfast",
      time: "7:30 AM - 8:30 AM",
      duration: "60mins",
    },
    {
      event: "Virtual Protocol Session",
      time: "9:15 AM - 9:45 AM",
      duration: "30mins",
    },
    {
      event: "GitHub Copilot by Sagar",
      time: "10:15 AM - 11:00 AM",
      duration: "45mins",
    },
    {
      event: "Postman Trivia and Logitech Event-Blind Type",
      time: "11:00 AM - 12:00 PM",
      duration: "60mins",
    },
    {
      event: "Lunch",
      time: "12:00 PM - 1:00 PM",
      duration: "60mins",
    },
    {
      event: "Checkpoint 2/4",
      time: "2:00 PM",
      duration: "NA",
    },
    {
      event: "Judging Round 1",
      time: "2:00 PM - 4:00 PM",
      duration: "120mins",
    },
    {
      event: "Codespaces session by Sanskriti",
      time: "4:00 PM - 5:30 PM",
      duration: "90mins",
    },
    {
      event: "Dinner",
      time: "7:00 PM - 8:15 PM",
      duration: "75mins",
    },
    {
      event: "Checkpoint 3/4",
      time: "10:00 PM",
      duration: "NA",
    },
  ];

  const day3 = [
    {
      event: "Postman session by Aanchal",
      time: "12:00 AM - 1:00 AM",
      duration: "60mins",
    },
    {
      event: "Menorship Round 2",
      time: "1:00 AM",
      duration: "NA",
    },
    {
      event: "Games",
      time: "2:00 AM - 3:00 AM",
      duration: "60mins",
    },
    {
      event: "Checkpoint 4/4",
      time: "3:00 AM",
      duration: "NA",
    },
    {
      event: "Midnight Snack",
      time: "3:30 AM",
      duration: "NA",
    },
    {
      event: "Soft Deadline",
      time: "5:30 AM",
      duration: "NA",
    },
    {
      event: "Hard Deadline",
      time: "7:00 AM",
      duration: "NA",
    },
    {
      event: "Breakfast",
      time: "7:30 AM - 8:30 AM",
      duration: "60mins",
    },
    {
      event: "Judging Round 2",
      time: "9:00 AM",
      duration: "NA",
    },
    {
      event: "Lunch",
      time: "12:00 PM - 1:10 PM",
      duration: "70mins",
    },
    {
      event: "Closing Ceremony",
      time: "2:15 PM",
      duration: "NA",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 2xl:px-48 py-40"
      >
        <div className="w-full flex flex-col gap-6 xl:gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#F5F0D8] font-normal text-[2.25rem] md:text-[5rem]">
              Run of Show
            </p>
            <p
              className="w-full xl:max-w-[80%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              Join us for a day packed with coding challenges, workshops, and
              networking. Elevate your skills and collaborate with fellow
              hackers!
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 
            xl:grid-cols-3 pt-8 md:pt-16"
        >
          {/* Day 1 */}
          <Dialog>
            <DialogTrigger>
              <div
                className="flex flex-col justify-start items-center h-[300px] md:h-[400px] 
                  gap-6 md:gap-8 px-4 py-8 md:px-8 md:py-16 cursor-pointer rounded-[8px] 
                  border border-[#E5FFF1] hover:scale-[1.01] transition-transform 
                  duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={leftLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                    <p
                      className="text-white text-center font-medium text-[3rem] 
                        lg:text-[4.125rem]"
                      style={{
                        textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
                      }}
                    >
                      Day 1
                    </p>
                    <Image
                      src={rightLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                  </div>
                  <p
                    className="font-medium text-[1rem] md:text-[1.5rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Ideate and finalize your project
                  </p>
                </div>

                <p
                  className="text-[#D1CAC7] font-[Inter] text-center font-normal 
                    text-[1rem] md:text[1.125rem]"
                >
                  Meet and network with fellow hackers, shortlist the techstack
                  your team will be working on
                </p>
              </div>
            </DialogTrigger>

            <DialogContent
              className="max-w-[90%] lg:max-w-[800px] py-6 md:py-12 px-0 md:px-[4.5rem] 
                border border-[#E5F1FF] backdrop:filter backdrop-blur-[32px]"
              style={{
                borderRadius: "8px",
                background:
                  "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
              }}
            >
              <DialogHeader>
                <DialogTitle
                  className="text-[#F5F0D8] text-center font-normal text-[2.25rem]
                    md:text-[3rem]"
                >
                  Day 1 Timeline
                </DialogTitle>
                <DialogDescription className="text-white">
                  <ScrollArea className="h-[500px] lg:h-[350px] w-full overflow-auto">
                    <Table>
                      <TableHeader className="bg-[#0275F6]">
                        <TableRow className="text-[1rem] md:text-[1.5rem] font-medium">
                          <TableHead>Event</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {day1.map((event, index) => (
                          <TableRow
                            key={index}
                            className="text-[1rem] md:text-[1.125rem] font-normal"
                          >
                            <TableCell className="text-left">
                              {event.event}
                            </TableCell>
                            <TableCell className="text-left">
                              {event.time}
                            </TableCell>
                            <TableCell>{event.duration}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Day 2 */}
          <Dialog>
            <DialogTrigger>
              <div
                className="flex flex-col justify-start items-center h-[300px] md:h-[400px] 
                  gap-6 md:gap-8 px-4 py-8 md:px-8 md:py-16 cursor-pointer rounded-[8px] 
                  border border-[#E5FFF1] hover:scale-[1.01] transition-transform 
                  duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 255, 183, 0.10) 0%, rgba(109, 217, 156, 0.02) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={leftLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                    <p
                      className="text-white text-center font-medium text-[3rem] 
                        lg:text-[4.125rem]"
                      style={{
                        textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
                      }}
                    >
                      Day 2
                    </p>
                    <Image
                      src={rightLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                  </div>
                  <p
                    className="font-medium text-[1rem] md:text-[1.5rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Coffee, mini events and yes, the MVP
                  </p>
                </div>

                <p
                  className="text-[#D1CAC7] font-[Inter] text-center font-normal 
                    text-[1rem] md:text[1.125rem]"
                >
                  Seek help from mentors to make an MVP, along with some really
                  cool workshop sessions 👀
                </p>
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-w-[90%] lg:max-w-[800px] py-6 md:py-12 px-0 md:px-[4.5rem] 
                rounded-[8px] border border-[#E5FFF1] backdrop:filter backdrop-blur-[32px]"
              style={{
                borderRadius: "8px",
                background:
                  "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 255, 183, 0.10) 0%, rgba(109, 217, 156, 0.02) 100%)",
              }}
            >
              <DialogHeader>
                <DialogTitle
                  className="text-[#F5F0D8] text-center font-normal text-[2.25rem]
                    md:text-[3rem]"
                >
                  Day 2 Timeline
                </DialogTitle>
                <DialogDescription className="text-white">
                  <ScrollArea className="h-[500px] lg:h-[350px] w-full overflow-auto">
                    <Table>
                      <TableHeader className="bg-[#1FD26C]">
                        <TableRow className="text-[1rem] md:text-[1.5rem] font-medium">
                          <TableHead>Event</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {day2.map((event, index) => (
                          <TableRow
                            key={index}
                            className="text-[1rem] md:text-[1.125rem] font-normal"
                          >
                            <TableCell className="text-left">
                              {event.event}
                            </TableCell>
                            <TableCell className="text-left">
                              {event.time}
                            </TableCell>
                            <TableCell>{event.duration}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Day 3 */}
          <Dialog>
            <DialogTrigger>
              <div
                className="flex flex-col justify-start items-center h-[300px] md:h-[400px] 
                  gap-6 md:gap-8 px-4 py-8 md:px-8 md:py-16 cursor-pointer rounded-[8px] 
                  border border-[#FFFAEF] hover:scale-[1.01] transition-transform 
                  duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(129.97% 124.9% at 0% 6.52%, #38351C 0%, rgba(56, 53, 28, 0.17) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={leftLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                    <p
                      className="text-white text-center font-medium text-[3rem] 
                        lg:text-[4.125rem]"
                      style={{
                        textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
                      }}
                    >
                      Day 3
                    </p>
                    <Image
                      src={rightLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                  </div>
                  <p
                    className="font-medium text-[1rem] md:text-[1.5rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    The Final Sprint
                  </p>
                </div>

                <p
                  className="text-[#D1CAC7] font-[Inter] text-center font-normal 
                    text-[1rem] md:text[1.125rem]"
                >
                  Improve upon the MVP, polish your elevator pitch and submit
                  your project on Devfolio with documentation
                </p>
              </div>
            </DialogTrigger>

            <DialogContent
              className="max-w-[90%] lg:max-w-[800px] py-6 md:py-12 px-0 md:px-[4.5rem] 
                rounded-[8px] border border-[#FFFAEF] backdrop:filter backdrop-blur-[32px]"
              style={{
                borderRadius: "8px",
                background:
                  "radial-gradient(129.97% 124.9% at 0% 6.52%, #38351C 0%, rgba(56, 53, 28, 0.17) 100%)",
              }}
            >
              <DialogHeader>
                <DialogTitle
                  className="text-[#F5F0D8] text-center font-normal text-[2.25rem]
                    md:text-[3rem]"
                >
                  Day 3 Timeline
                </DialogTitle>
                <DialogDescription className="text-white">
                  <ScrollArea className="h-[500px] lg:h-[350px] w-full overflow-auto">
                    <Table>
                      <TableHeader className="bg-[#F2D23B]">
                        <TableRow className="text-[1rem] md:text-[1.5rem] font-medium">
                          <TableHead>Event</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {day3.map((event, index) => (
                          <TableRow
                            key={index}
                            className="text-[1rem] md:text-[1.125rem] font-normal"
                          >
                            <TableCell className="text-left">
                              {event.event}
                            </TableCell>
                            <TableCell className="text-left">
                              {event.time}
                            </TableCell>
                            <TableCell>{event.duration}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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
