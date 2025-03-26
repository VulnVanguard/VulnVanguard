"use client"; 
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className=" space-x-4 ">
        <span className=" mr-1 ">{days} Days</span>
        <span>{hours} Hours</span>
        <span>{minutes} Minutes</span>
        <span>{seconds} Seconds</span>
      </div>
    );
  }
};

export default function CountDown() {
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    const d = new Date("April 25, 2025 09:00:00.000").getTime();
    setTargetDate(d);
  }, []);

  if (!targetDate) return null; 

  return <Countdown date={targetDate} renderer={renderer} />;
}
