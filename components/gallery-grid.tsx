"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const allImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "hack 5th-01.jpg",
  "hack 5th-02.jpg",
  "hack 5th-03.jpg",
  "hack 5th-04.jpg",
  "hack 5th-05.jpg",
  "hack 5th-06.jpg",
  "hack 5th-07.jpg",
  "hack 5th-08.jpg",
  "hack 5th-09.jpg",
  "hack 5th-10.jpg",
  "hack 5th-11.jpg",
  "hack 5th-12.jpg",
  "hack 5th-13.jpg",
  "hack 5th-14.jpg",
  "hack 5th-16.jpg",
  "hack 5th-17.jpg",
  "hack 5th-23.jpg",
  "hack 5th-24.jpg",
  "hack 5th-33.jpg",
  "hack 5th-40.jpg",
]

// Split images into 3 columns
const column1 = allImages.filter((_, i) => i % 3 === 0)
const column2 = allImages.filter((_, i) => i % 3 === 1)
const column3 = allImages.filter((_, i) => i % 3 === 2)

interface MarqueeColumnProps {
  images: string[]
  speed: number
  direction: "up" | "down"
}

function MarqueeColumn({ images, speed, direction }: MarqueeColumnProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationId: number
    let scrollPosition = direction === "down" ? 0 : scrollElement.scrollHeight / 2

    const animate = () => {
      if (!scrollElement) return

      if (!isPausedRef.current) {
        if (direction === "down") {
          scrollPosition += speed
          if (scrollPosition >= scrollElement.scrollHeight / 2) {
            scrollPosition = 0
          }
        } else {
          scrollPosition -= speed
          if (scrollPosition <= 0) {
            scrollPosition = scrollElement.scrollHeight / 2
          }
        }

        scrollElement.scrollTop = scrollPosition
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [speed, direction])

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <div
      ref={scrollRef}
      className="h-[600px] md:h-[800px] overflow-hidden relative hide-scrollbar"
      style={{ scrollbarWidth: "none" }}
      onMouseEnter={() => isPausedRef.current = true}
      onMouseLeave={() => isPausedRef.current = false}
    >
      <div className="flex flex-col gap-4">
        {duplicatedImages.map((img, idx) => (
          <div
            key={`${img}-${idx}`}
            className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-lg md:rounded-2xl border-4 border-[#3B005E] flex-shrink-0"
          >
            <Image
              src={`/Gallery/${img}`}
              alt={`Gallery image ${img}`}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function GalleryGrid() {
  return (
    <div className="w-full mx-auto pt-2">
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <MarqueeColumn images={column1} speed={0.5} direction="up" />
        <MarqueeColumn images={column2} speed={0.8} direction="down" />
        <MarqueeColumn images={column3} speed={0.6} direction="up" />
      </div>
    </div>
  )
}
