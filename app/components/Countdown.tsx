"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Target date: December 18, 2026
const TARGET_DATE = new Date("2026-12-18T00:00:00");

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Create target date explicitly to avoid timezone issues
      const target = new Date(2026, 11, 18, 0, 0, 0); // Month is 0-indexed, so 11 = December
      const difference = target.getTime() - now.getTime();
      
      let newTimeLeft = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        // Get date components using local time
        const nowYear = now.getFullYear();
        const nowMonth = now.getMonth();
        const nowDay = now.getDate();
        const targetYear = target.getFullYear();
        const targetMonth = target.getMonth();
        const targetDay = target.getDate();
        
        // Calculate months difference
        let months = (targetYear - nowYear) * 12 + (targetMonth - nowMonth);
        
        // Adjust if the target day hasn't been reached this month
        if (targetDay < nowDay) {
          months--;
        }
        
        // Ensure months is valid and not negative
        months = Math.max(0, months);
        
        // Calculate the date after adding months
        const monthsDate = new Date(nowYear, nowMonth + months, nowDay, 0, 0, 0);
        
        // Calculate remaining days after months
        let daysDiff = Math.floor((target.getTime() - monthsDate.getTime()) / (1000 * 60 * 60 * 24));
        
        // Ensure days is valid
        daysDiff = Math.max(0, daysDiff);
        
        // Calculate hours, minutes, seconds from the total difference
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const totalMinutes = Math.floor(difference / (1000 * 60));
        
        newTimeLeft = {
          months: months,
          days: daysDiff,
          hours: totalHours % 24,
          minutes: totalMinutes % 60,
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center z-10 relative w-full px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-doom-green text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] mb-6 sm:mb-4 font-bold uppercase drop-shadow-[0_0_10px_rgba(79,240,120,0.5)] px-2"
      >
        It All Leads To Doom
      </motion.div>
      <div className="flex gap-1 sm:gap-2 md:gap-4 justify-center items-start font-mono text-white flex-wrap">
        <TimeUnit value={timeLeft.months} label="MONTHS" />
        <span className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-none self-start pt-0">:</span>
        <TimeUnit value={timeLeft.days} label="DAYS" />
        <span className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-none self-start pt-0">:</span>
        <TimeUnit value={timeLeft.hours} label="HOURS" />
        <span className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-none self-start pt-0">:</span>
        <TimeUnit value={timeLeft.minutes} label="MINUTES" />
        <span className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-none self-start pt-0">:</span>
        <TimeUnit value={timeLeft.seconds} label="SECONDS" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  // Ensure value is a valid number, default to 0 if undefined or NaN
  const displayValue = isNaN(value) || value === undefined ? 0 : value;
  
  // Days can be 3 digits, others should be 2 digits
  const formattedValue = label === "DAYS" 
    ? String(displayValue) 
    : String(displayValue).padStart(2, "0");
  
  return (
    <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]">
      <motion.span
        key={displayValue}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-3xl sm:text-4xl md:text-7xl font-bold text-white font-mono leading-none"
      >
        {formattedValue}
      </motion.span>
      <span className="text-[10px] sm:text-xs md:text-sm tracking-wider sm:tracking-widest text-white uppercase mt-1.5 sm:mt-2 font-sans">
        {label}
      </span>
    </div>
  );
}
