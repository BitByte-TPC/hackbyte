import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import leftLeaf from "@/public/schedulePage/leftLeaf.svg";
import rightLeaf from "@/public/schedulePage/rightLeaf.svg";

export default function LogitechTrackCard({
  imgSrc,
  title,
  description,
  modalDescription,
  prize,
  prizeImg,
  borderColor,
  bgColor,
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="relative overflow-hidden cursor-pointer min-h-[15rem] lg:min-h-[20rem] 
            flex flex-col justify-end items-start gap-16 p-8 rounded-[8px] border-2"
          style={{
            borderColor: borderColor,
            background: bgColor,
          }}
        >
          <Image src={imgSrc} alt="" className="absolute top-0 right-0" />
          <p className="text-white font-medium text-[2rem]">{title}</p>
          <p className="text-[#D1CAC7] text-left font-normal text-[1.5rem]">
            {description}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-[90%] lg:max-w-[800px] py-6 md:py-12 px-0 md:px-[4.5rem] 
          border backdrop:filter backdrop-blur-[32px]"
        style={{
          borderRadius: "8px",
          borderColor: borderColor,
          background: bgColor,
        }}
      >
        <DialogHeader>
          <DialogTitle
            className="text-[#F5F0D8] text-center font-normal text-[2.25rem]
              md:text-[3rem]"
          >
            {title}
          </DialogTitle>
          <DialogDescription className="w-full flex flex-col items-center px-4 gap-6 md:gap-8">
            <p
              className="text-[#D1CAC7] text-center font-normal text-[1.125rem] 
                md:text-[1.5rem] leading-6"
            >
              {modalDescription}
            </p>

            <div className="flex flex-col items-center gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-2">
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
                className="w-[10rem] h-[7.5rem] md:w-[15rem] md:h-[11.25rem]"
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
