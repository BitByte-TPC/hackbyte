import React from "react";
import Image from "next/image";
import img1 from "@/public/galleryPage/img1.webp";
import img2 from "@/public/galleryPage/img2.webp";
import img3 from "@/public/galleryPage/img3.webp";
import img4 from "@/public/galleryPage/img4.webp";
import img5 from "@/public/galleryPage/img5.webp";
import img6 from "@/public/galleryPage/img6.webp";
import img7 from "@/public/galleryPage/img7.webp";
import img8 from "@/public/galleryPage/img8.webp";
import img9 from "@/public/galleryPage/img9.webp";

const GridImage = () => {
  return (
    <div className="max-w-8xl mx-auto py-10">
          <div className="flex flex-col gap-5 md:flex-row px-4">
            <div className="flex flex-col gap-5">
              <div>
                <Image
                  src={img6}
                  alt="1"
                  className="w-full h-full rounded-xl object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div>
                <Image
                  src={img7}
                  alt="2"
                  className="w-full h-full rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img5}
                  alt="3"
                  className="w-full h-full rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <Image
                  src={img8}
                  alt="4"
                  className="w-full h-full rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img9}
                  alt="5"
                  className="w-full h-full rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img4}
                  alt="6"
                  className="w-full h-full rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <Image
                  src={img1}
                  alt="7"
                  className="w-full h-full rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img3}
                  alt="8"
                  className="w-full h-full rounded-xl object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={img2}
                  alt="9"
                  className="w-full h-full rounded-xl object-cover"
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
        className="w-full h-full rounded-xl object-cover"
        placeholder="blur"
        />
    );
};

export { GridImage, BannerImage };
