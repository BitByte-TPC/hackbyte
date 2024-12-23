import Image from "next/image";

import img1 from "@/public/ImageGallery/img1.webp";
import img2 from "@/public/ImageGallery/img2.webp"; 
import img3 from "@/public/ImageGallery/img3.webp";
import img4 from "@/public/ImageGallery/img4.webp";
import img5 from "@/public/ImageGallery/img5.webp";
import img6 from "@/public/ImageGallery/img6.webp";
import img7 from "@/public/ImageGallery/img7.webp";
import img8 from "@/public/ImageGallery/img8.webp";
import img9 from "@/public/ImageGallery/img9.webp";

const GridImage = () => {
  return (
    <div className="max-w-8xl mx-auto py-16">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-5 items-center">
          <div>
            <Image
              src={img6}
              alt="1"
              className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px] rounded-xl object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div>
            <Image
              src={img7}
              alt="2"
              className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
          <div>
            <Image
              src={img4}
              alt="3"
              className="xl:w-[420px] xl:h-[530px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div>
            <Image
              src={img8}
              alt="4"
              className="xl:w-[420px] xl:h-[520px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div>
            <Image
              src={img9}
              alt="5"
              className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
          <div>
            <Image
              src={img5}
              alt="6"
              className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div>
            <Image
              src={img1}
              alt="7"
              className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div>
            <Image
              src={img2}
              alt="8"
              className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px] rounded-xl object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div>
            <Image
              src={img3}
              alt="9"
              className="xl:w-[420px] xl:h-[540px] lg:w-[320px] w-[320px] h-[320px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BannerImage = ({ imgsrc }) => {
  return (
    <Image
      src={imgsrc}
      alt="Banner"
      className="xl:w-[1080px] xl:h-[470px] lg:w-[880px] lg:h-[380px] md:w-[672px] md:h-[288px] w-[350px] h-[150px] rounded-xl object-cover"
      placeholder="blur"
      quality={100}
    />
  );
};

export { GridImage, BannerImage };