"use client";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const deadline = "2024-03-28T00:00:00";

  useEffect(() => {
    const updateTimeLeft = () => {
      const time = Date.parse(deadline) - new Date().getTime();
      if (time < 0) {
        // Stop the countdown once the deadline has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const seconds = Math.floor((time / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimeLeft, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [deadline]);

  // Destructure timeLeft for easier use in the JSX
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div
      className="flex justify-center items-center gap-3 md:gap-4 lg:gap-6 py-3 px-3 
        md:px-8 lg:px-10 border-2 border-[rgba(255,255,255,0.6)] rounded-[9.375rem] 
        h-12 bg-[#363636]"
    >
      {[
        { value: days, label: "D" },
        { value: hours, label: "H" },
        { value: minutes, label: "M" },
        { value: seconds, label: "S" },
      ].map((item, index) => (
        <div key={index} className="flex justify-center items-start">
          <p
            className="text-[#FAF8ED] text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] 
              font-normal"
          >
            {item.value}
            <span>{item.label}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
