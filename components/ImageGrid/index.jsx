import Image from "next/image";

import img1 from "@/public/galleryPage/img1.webp";
import img2 from "@/public/galleryPage/img2.webp";
import img3 from "@/public/galleryPage/img3.webp";
import img4 from "@/public/galleryPage/img4.webp";
import img5 from "@/public/galleryPage/img5.jpg";
import img6 from "@/public/galleryPage/img6.webp";
import img7 from "@/public/galleryPage/img7.webp";
import img8 from "@/public/galleryPage/img8.jpg";
import img9 from "@/public/galleryPage/img9.jpg";

const GridImage = () => {
  return (
    <div className="max-w-8xl mx-auto py-16">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-5">
          <div>
            <Image
              src={img6}
              alt="1"
              className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[280px] h-[200px] rounded-xl object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div>
            <Image
              src={img7}
              alt="2"
              className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[280px] h-[200px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
          <div>
            <Image
              src={img5}
              alt="3"
              className="xl:w-[420px] xl:h-[530px] lg:w-[320px] w-[280px] h-[320px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <Image
              src={img8}
              alt="4"
              className="xl:w-[420px] xl:h-[520px] lg:w-[320px] w-[280px] h-[320px] rounded-xl object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div>
            <Image
              src={img9}
              alt="5"
              className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[280px] h-[200px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
          <div>
            <Image
              src={img4}
              alt="6"
              className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[280px] h-[200px] rounded-xl object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <Image
              src={img1}
              alt="7"
              className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[280px] h-[200px] rounded-xl object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div>
            <Image
              src={img3}
              alt="8"
              className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[280px] h-[200px] rounded-xl object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div>
            <Image
              src={img2}
              alt="9"
              className="xl:w-[420px] xl:h-[540px] lg:w-[320px] w-[280px] h-[320px] rounded-xl object-cover"
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
      className="xl:w-[1080px] xl:h-[470px] lg:w-[880px] lg:h-[380px] md:w-[672px] md:h-[288px] w-[290px] h-[125px] rounded-xl object-cover"
      placeholder="blur"
      quality={100}
    />
  );
};

export { GridImage, BannerImage };
