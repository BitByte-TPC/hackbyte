import Image from "next/image";
import { StaticImageData } from "next/image";

import galleryPageSticker from "@/public/gallerySticker.webp";
import faqsPageSticker from "@/public/faqsSticker.webp";
import humansPageSticker from "@/public/humansSticker.webp";

const redirectingData = [
  {
    title: "Gallery",
    link: "/gallery",
    image: galleryPageSticker,
  },
  {
    title: "FAQS",
    link: "/faqs",
    image: faqsPageSticker,
  },
  {
    title: "Humans",
    link: "/humans",
    image: humansPageSticker,
  },
];

interface RedirectCardsProps {
  title: string;
  link: string;
  image: StaticImageData;
}

const RedirectingCard = ({ title, link, image }: RedirectCardsProps) => {
  return (
    <a href={link}>
      <div
        className="bg-[#333333] rounded-[22px] flex flex-col gap-2 items-center justify-center
                      p-[16px] shadow-lg"
      >
        <Image src={image} alt={title} className="w-48 " />
        <div className="text-white lg:text-[40px] font-bold">{title}</div>
      </div>
    </a>
  );
};

const YetToBeDisclosed: React.FC = () => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center
                rounded-[40px] py-16 custom-border mt-4"
    >
      <div className="text-white lg:text-[64px] text-2xl page-title font-black">
        Yet to be disclosed
      </div>
      <div className="text-supporting-mediumGray text-base md:text-lg lg:text-[24px] font-medium">
        These details are not yet disclosed, so stay sharp.
      </div>
      <div className="text-white lg:text-[32px] text-xl font-bold">Meanwhile,</div>
      <div className="text-supporting-mediumGray lg:text-[24px] lg:mb-[40px] mb-4 font-medium">
        why don&apos;t you check these out!
      </div>
      <div className="flex md:flex-row flex-col gap-4 lg:gap-[44px]">
        {redirectingData.map((data) => (
          <RedirectingCard
            key={data.title}
            title={data.title}
            link={data.link}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default YetToBeDisclosed;
