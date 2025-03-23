import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle";

interface TrackPrizeCardProps {
  index: number;
  prizeimgsrc: StaticImageData;
  prizeTitle: string;
  prize: string;
  link: string;
  prizeDescription: string;
}

const TrackPrizeCard: React.FC<TrackPrizeCardProps> = ({
  index,
  prizeimgsrc,
  prizeTitle,
  prize,
  link,
  prizeDescription,
}) => {
  
  return (
    <>
      <AnimatedTitle delay={0.2} viewport={true}>
        <Link href={link} target="_blank" rel="noreferrer" key={index} className="flex justify-center">
          <div className={`w-full font-gotham text-white ${index % 3 == 0 ? "hover:-rotate-3" : "hover:rotate-3"} hover:scale-105 transition-all ease-in-out duration-500 max-w-[350px] md:w-[310px] lg:w-[330px] xl:w-[355px]`}>
            <Image
              src={prizeimgsrc}
              className="w-full h-[96px] xl:h-[96px] rounded-[12px] outline-none object-cover"
              placeholder="blur"
              alt={prize}
            />
            <div
              className="flex justify-between items-start py-[22px] rounded-b-[20px]"
            >
              <div className="flex flex-col">
                <p className="sm:text-[24px] text-xl font-black my-[4px] sm:h-[68px]">{prizeTitle}</p>
                <p className="sm:text-[20px] text-xl font-black text-[#FF939E]">{prize}</p>
                <p
                  className="sm:text-[12px] text-xl text-[#BBBBBB] mt-2"
                >
                  {prizeDescription}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </AnimatedTitle>
    </>
  );
};

export default TrackPrizeCard;
