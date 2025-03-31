"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import Wifi from "../../lib/wired-lineal-64-wifi.json";
import Kimono from "../../lib/wired-lineal-1788-kimono.json";
import Fries from "../../lib/wired-outline-567-french-fries-chips.json";
import Animation1 from "../../lib/1.json";

export default function Perks() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const styling = {
    height: 120,
    width: 120,
  };

  return (
    <div className="flex flex-wrap text-center gap-10 justify-center items-center font-bold select-none">
      {isClient && (
        <>
          <div>
            <Lottie animationData={Wifi} style={styling} />
            <p>Good Connectivity</p>
          </div>
          <div>
            <Lottie animationData={Fries} style={styling} />
            <p>Free Food</p>
          </div>
          <div>
            <Lottie animationData={Kimono} style={styling} />
            <p>Swags & Merch</p>
          </div>
          <div>
            <Lottie animationData={Animation1} style={styling} />
            <p>Mentorships</p>
          </div>
        </>
      )}
    </div>
  );
}
