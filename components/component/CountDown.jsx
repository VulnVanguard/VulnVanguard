import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
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
  const d = new Date("April 24, 2025 09:00:00.000");
  let ms = d.getTime();
  ms -= Date.now();
  return <Countdown date={Date.now() + ms} renderer={renderer} />;
}
