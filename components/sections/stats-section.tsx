import Image from "next/image";
import FadeInView from "../FadeInView";

async function StatsSection() {
  const stats = [
    {
      number: "5154",
      label: "Registrations",
      description: "5100+ registrations from across the country.",
    },
    {
      number: "425",
      label: "Participants",
      description: "400+ participants joined the offline hackathon!",
    },
    {
      number: "100+",
      label: "Volunteers",
      description: "To help you, get the best out of HackByte.",
    },
    {
      number: "105",
      label: "Projects",
      description: "Innovative submissions from various domains.",
    },
  ];

  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] max-h-[90vh] w-full overflow-visible bg-black -mb-40 max-sm:-mb-10"
      style={{
        backgroundImage:"url(/stats-bg.svg)"
      }}
    >
      <div className="w-full h-32 absolute top-[10vw] z-10">
        <Image
          src="/stats-upper-2.svg"
          alt="glass design"
          className="w-full -mt-[25%]"
          width={100}
          height={100}
        />
      </div>
      {/* <div className="w-full h-full absolute z-0 overflow-hidden">
        <Image
          src="/stats-bg.svg"
          alt="glass design"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div> */}

      <div className="relative z-20 size-full flex justify-center items-center px-4 font-kanit">
      <FadeInView delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-10 max-w-7xl w-full">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Number */}
              <div
                className="
                text-white
                text-stroke-number
                [-webkit-text-stroke:8px_#62009b]
                md:[-webkit-text-stroke:14px_#62009b]
                
                font-extrabold
                text-[32px] md:text-[81px]
                leading-none"
              >
                {stat.number}
              </div>

              {/* Label */}
              <div className="mt-2 text-[#C259FF] font-[700] text-[15px] md:text-[24px]">
                {stat.label}
              </div>

              {/* Description */}
              <p className="md:pt-5 pb-5 max-w-[137px] md:max-w-[241px] font-[700] text-[10px] md:text-[18px] text-[#9D00F7]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
    </FadeInView>
      </div>
    </section>
  );
}

export default StatsSection;
