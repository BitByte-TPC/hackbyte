import YetToBeDisclosed from "@/components/YetToBeDisclosed";
import Image from "next/image";
import schedule from "@/public/schedule.png";

const Schedule = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen px-4 md:px-10 lg:px-20 2xl:px-32 pt-4 md:pt-16 pb-40">
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex justify-between">
            <div className="flex flex-col items-start gap-2">
              <p className="text-supporting-lightGray text-[3rem] md:text-[5rem] xl:text-[6rem] leading-tight">
                Run of show for<br />
                the Event
              </p>
              <p className="w-full lg:max-w-[85%] text-supporting-darkGray text-[1rem] md:text-[1.5rem]">
                Join us for days packed with coding challenges and workshops.
                Elevate your skills and collaborate with fellow hackers!
              </p>
            </div>
            <Image
              src={schedule}
              alt="Medal"
              className="w-[300px] h-[300px] hidden md:block"
            />
          </div>
          <YetToBeDisclosed />
        </div>
      </div>
    </>
  );
};

export default Schedule;
