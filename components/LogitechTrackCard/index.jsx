import Image from "next/image";
import leftLeaf from "@/public/schedulePage/leftLeaf.svg";
import rightLeaf from "@/public/schedulePage/rightLeaf.svg";

export default function LogitechTrackCard({
  imgSrc,
  title,
  description,
  prize,
  prizeImg,
  borderColor,
  bgColor,
}) {
  return (
    <div
      className="relative w-full flex flex-col justify-center items-center gap-6 md:gap-8 
        px-3 md:px-12 py-8 md:py-16 rounded-[8px] border-2 xl:min-h-[750px]"
      style={{
        borderColor: borderColor,
        background: bgColor,
      }}
    >
      <Image
        src={imgSrc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-medium text-[2rem] md:text-[3rem] md:leading-[4rem]">
          {title}
        </p>
        <p className="text-[#D1CAC7] text-center font-normal text-[1.25rem] md:text-[1.5rem]">
          {description}
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-center items-center gap-0">
            <Image
              src={leftLeaf}
              alt="leaf"
              className="w-12 h-12 md:w-auto md:h-auto"
            />
            <p
              className="text-white text-center font-medium text-[1.75rem] md:text-[3rem] 
              lg:text-[4.125rem]"
              style={{
                textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
              }}
            >
              Prize
            </p>
            <Image
              src={rightLeaf}
              alt="leaf"
              className="w-12 h-12 md:w-auto md:h-auto"
            />
          </div>
          <p
            className="font-medium text-[1.25rem] md:text-[1.5rem]"
            style={{
              background:
                "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {prize}
          </p>
        </div>

        <Image
          src={prizeImg}
          alt=""
          className="w-[10rem] h-[7.5rem] md:w-[12rem] md:h-[9.25rem]"
        />
      </div>
    </div>
  );
}
