'use client'

import React from 'react';
import { motion } from 'framer-motion';
import RollingNumber from './RollingNumber';

import { useState, useEffect } from 'react';

const useCountdown = (targetDate) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return timeLeft;
};



const CountdownTimer = ({ targetDate }) => {
  const timeLeft = useCountdown(targetDate);

  if (Object.keys(timeLeft).length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white"
      >
        Countdown finished!
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center items-center"
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <RollingNumber key={unit} number={value} label={unit.charAt(0).toUpperCase() + unit.slice(1)} />
      ))}
    </motion.div>
  );
};

export default CountdownTimer;

