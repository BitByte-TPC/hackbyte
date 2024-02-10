import { ImageIcon } from "@radix-ui/react-icons";

const ImageSkeleton = () => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div
        className={`flex items-center justify-center w-56 h-56 sm:w-[30rem] lg:w-[40rem] sm:h-48 xl:w-[1075px] xl:h-[550px] bg-[#222222] rounded-xl`}
      >
        <ImageIcon className="w-10 h-10 text-[#333333]" />
      </div>
    </div>
  );
};

export default function BannerLoading() {
  return <ImageSkeleton />;
}
