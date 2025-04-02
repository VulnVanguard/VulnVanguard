
import React from "react";
import cog from "@/public/assets/cog copy.png"
import Image from "next/image";
import cylinder from "@/public/assets/cylinder copy.png"
import noodle from "@/public/assets/noodle copy.png"


export const HeroSection = () => {
  return (

    <div className="relative container mx-auto px-4 py-8 h-full flex flex-col justify-center">
      <div className="md:flex md:justify-between items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-lime-400 to-teal-500 bg-clip-text text-transparent">
            Vuln<br />VANGUARD
          </h1>
          <div className="text-white text-xl mt-4">
            {`<<`} Trust Nothing, Secure Everything {`>>`}
          </div>
          <p className="text-white text-xl mt-6 tracking-tight text-left">
          VulnVANGUARD is a 24-hour cyber security competition organized by the GeeksforGeeks SRMIST Delhi-NCR Student Chapter. It is designed for students who are interested in ethical hacking, cybersecurity, and technology. The event focuses on finding and fixing security problems in web applications, mobile applications and hardware systems. Participants will work on real-world challenges to test their skills in identifying, analysing, and solving security issues.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded">
              Apply with Unstop
            </button>
            <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded">
              Apply with Devpost
            </button>
          </div> */}
        </div>
        
        <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          {/* Main cog/star graphic */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src={cog} 
              alt="Cog/star graphic"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Cylinder graphic */}
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-16 w-24 h-24 md:w-40 md:h-40">
            <Image
              src={cylinder}
              alt="Cylinder graphic"
              className="w-full h-full object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );

};

