import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const SponsorCard = ({sponsor, category, sponsorimgsrc}) => {
  return (
    <>
      <div className="w-[295px] min-w-[321px]:w-[306px] xl:w-[350px] bg-[#1B1B1B] hover:bg-[#353535] rounded-lg shadow text-white ">
        <Image
          className="rounded-t-lg w-[306px] xl:w-[350px] outline-none"
          src={sponsorimgsrc}
          placeholder="blur"
          alt=""
        />
        <div className="flex justify-between items-start p-6">
          <div className="flex flex-col gap-2">
            <p className="sm:text-2xl text-xl font-[Clash Grotesk]">{sponsor}</p>
            <p className="text-[#C3C3C3] sm:text-2xl text-xl  leading-9 font-[Inter]">
              {category}
            </p>
          </div>
          <ArrowTopRightIcon className="w-6 h-6 pt-2" />
        </div>
      </div>
    </>
  );
};

export default SponsorCard;
