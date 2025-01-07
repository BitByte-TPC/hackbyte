import YetToBeDisclosed from "@/components/YetToBeDisclosed";
import Image from "next/image";
import schedule from "@/public/schedule.png";

const Schedule = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen px-4 md:px-16 lg:px-20 xl:px-28 pt-[32px] md:pt-16 xl:pt-12 pb-40">
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex justify-between items-center md:items-start">
            <div className="flex flex-col items-start gap-2">
              <div className="text-supporting-lightGray text-[36px] xs:text-[42px] lg:text-[4rem] xl:text-[6rem] leading-tight font-black">
                Run of show for
                <br />
                the Event
              </div>
              <p
                className="w-full lg:max-w-[85%] text-supporting-mediumGray
                text-lg lg:text-[1.5rem] font-medium"
              >
                Join us for days packed with coding challenges and workshops.
                Elevate your skills and collaborate with fellow hackers!
              </p>
            </div>
            <Image
              src={schedule}
              alt="schedule"
              className="lg:w-[250px] lg:h-[250px] w-32 h-32 md:w-48 md:h-48 hidden md:block"
            />
          </div>
          <YetToBeDisclosed />
        </div>
      </div>
    </>
  );
};

export default Schedule;
