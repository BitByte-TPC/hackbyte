'use client'

import React, { useEffect, useState } from 'react';

const RollingNumber = ({ number, label }) => {
  const [mounted, setMounted] = useState(false);
  const digits = number.toString().padStart(2, '0').split('');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center mx-2">
      <div className="flex">
        {digits.map((digit, index) => (
          <div key={index} className="w-3 h-6 md:w-8 md:h-16 relative overflow-hidden shadow-md mx-0.5">
            <div
              className={`absolute w-full transition-transform duration-500 ease-in-out ${mounted ? '' : 'transform-none'}`}
              style={mounted ? { transform: `translateY(-${parseInt(digit) * 10}%)` } : undefined}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <div
                  key={n}
                  className="w-full h-6 md:h-16 flex items-center justify-center text-xl md:text-5xl sm:text-3xl text-white"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-sm md:text-lg font-semibold text-gray-200">{label}</div>
    </div>
  );
};

export default RollingNumber;

