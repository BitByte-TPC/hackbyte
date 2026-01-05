import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { RedBand } from "@/components/header-red-band"
import FadeInView from "@/components/FadeInView"
import Image from "next/image"
import { ScrollingBackground } from "../../components/sections/WhyParticipate/ScrollingBackground";
import bg from "../../components/sections/WhyParticipate/assets/bg.png";

export default function Gallery() {
  return (
    <section className="w-full min-h-screen py-0 lg:py-12 relative bg-linear-to-bl from-[#4E0088] to-[#180029] overflow-hidden">
      <RedBand />

      <div className="w-full h-full top-36 z-0 px-4 pointer-events-none absolute">
        <div className="relative size-full">
          <div className="absolute left-0 top-0">
            <Image
              src="/Gallery/cracks left.svg"
              alt="HB3 Logo"
              height={200}
              width={200}
              className="h-full -translate-x-3.5"
              priority
            />
          </div>
          <div className="absolute right-0 top-0">
            <Image
              src="/Gallery/cracks right.svg"
              alt="HB3 Logo"
              height={350}
              width={350}
              className="h-full translate-x-4 -translate-y-3"
              priority
            />
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <Image
              src="/Gallery/cracks middle.svg"
              alt="HB3 Logo"
              height={350}
              width={350}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>

      <FadeInView delay={0.2}>
        <div className="z-10 w-full mt-12 lg:mt-32 px-4 md:px-20 xl:px-20">
          <div className="size-full rounded-3xl overflow-hidden">
            <GalleryGrid />
          </div>
        </div>
      </FadeInView>

      <div className="h-[100px] lg:h-[200px] w-full relative z-0">
        <div className="relative w-full h-[150%]">
        </div>
      </div>

      <FadeInView delay={0.1}>
        <div className="h-[350px] lg:h-[450px] w-full bg-gradient-to-r from-[#8A00DA] to-[#BA45E8] border-y-4 border-white z-20 -translate-y-6 relative flex items-center justify-center">
          <div className="absolute lg:top-[-140px] top-[-120px] left-1/2 -translate-x-1/2 w-full h-48">
            <Image
              src="/Gallery/our committee.svg"
              alt="Footer Ornament"
              fill
              className="w-full object-contain"
              priority
            />
          </div>
          <div className="absolute size-full -z-10">
            <ScrollingBackground 
              imageUrl={bg.src} 
              speed={40}
              direction="diagonal" 
          />
          </div>
          <div className="h-[200px] lg:h-[350px] w-full max-w-[90%] lg:max-w-2xl border-4 border-white rounded-3xl bg-black relative overflow-hidden">
            <Image
              src="/Gallery/committee.png"
              alt="Our Committee Photo"
              fill
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </FadeInView>
    </section>
  )
}
