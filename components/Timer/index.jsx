"use client";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "2024-03-25T00:00:00";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex justify-center items-center gap-3 md:gap-6 py-3 px-10 
        border-2 border-[rgba(255,255,255,0.6)] rounded-[9.375rem]"
      style={{
        background:
          "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
      }}
    >
      <div className="flex justify-center items-start">
        <p className="text-[#FAF8ED] text-[2rem] xl:text-[4rem] font-normal">
          {days}
          <span>D</span>
        </p>
      </div>
      <div className="flex justify-center items-start">
        <p className="text-[#FAF8ED] text-[2rem] xl:text-[4rem] font-normal">
          {hours}
          <span>H</span>
        </p>
      </div>
      <div className="flex justify-center items-start">
        <p className="text-[#FAF8ED] text-[2rem] xl:text-[4rem] font-normal">
          {minutes}
          <span>M</span>
        </p>
      </div>
      <div className="flex justify-center items-start">
        <p className="text-[#FAF8ED] text-[2rem] xl:text-[4rem] font-normal">
          {seconds}
          <span>S</span>
        </p>
      </div>
    </div>
  );
}
