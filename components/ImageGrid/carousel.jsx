"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

const ClientCarousel = ({ images, className, duration = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState("right")
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const newDirection = Math.random() > 0.5 ? "right" : "left"
      setDirection(newDirection)
      setIsTransitioning(true)

      if (newDirection === "right") {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      }

      setTimeout(() => setIsTransitioning(false), 500)
    }, duration)

    return () => clearInterval(interval)
  }, [images.length, duration])

  const getSlideStyles = () => {
    if (!isTransitioning) return "translate-x-0"
    return direction === "right" ? "animate-slide-right" : "animate-slide-left"
  }

  return (
    <div className="relative group">
      <div className={`relative overflow-hidden rounded-xl ${className}`}>
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`Carousel ${currentIndex + 1}`}
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${getSlideStyles()}`}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export { ClientCarousel }
