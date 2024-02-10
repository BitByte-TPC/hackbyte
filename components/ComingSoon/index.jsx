import Image from "next/image";
import comingSoonImg from "@/public/comingSoon.svg";

export default function ComingSoon() {
  return (
    <div className="pt-12 lg:pt-16">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[#FAF8ED] text-[2.5rem] lg:text-[6rem] font-medium">
          Coming Soon
        </h1>
        <p
          className="w-full text-[#999999] text-[1.25rem] text-center 
            pt-4 lg:pt-2 lg:w-[60%] lg:text-[1.5rem]"
        >
          We're diligently working behind the scenes to bring you a fresh and
          enhanced website experience. Stay tuned for the big reveal! Our
          updated site will be live before you know it!
        </p>

        <Image src={comingSoonImg} alt="" priority className="pt-12" />
      </div>
    </div>
  );
}
