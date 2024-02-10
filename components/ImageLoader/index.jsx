import { ImageIcon } from "@radix-ui/react-icons";

const ImageSkeleton = ({ height }) => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div
        className={`flex items-center justify-center w-56 h-56 sm:w-48 sm:h-48 lg:w-60 lg:h-60 xl:h-[${
          height ? 550 : 250
        }px] xl:w-[420px]  bg-[#222222] rounded`}
      >
        <ImageIcon className="w-10 h-10 text-[#333333]" />
      </div>
    </div>
  );
};

export default function ImageLoading() {
  return (
    <div className="max-w-8xl mx-auto py-10">
      <div className="flex flex-col gap-5 md:flex-row px-4">
        <div className="flex flex-col gap-5">
          <ImageSkeleton height={false} />
          <ImageSkeleton height={false} />
          <ImageSkeleton height={550} />
        </div>

        <div className="flex flex-col gap-5">
          <ImageSkeleton height={550} />
          <ImageSkeleton height={false} />
          <ImageSkeleton height={false} />
        </div>

        <div className="flex flex-col gap-5">
          <ImageSkeleton height={false} />
          <ImageSkeleton height={false} />
          <ImageSkeleton height={550} />
        </div>
      </div>
    </div>
  );
}
