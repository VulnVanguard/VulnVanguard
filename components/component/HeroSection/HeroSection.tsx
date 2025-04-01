import React, { useEffect, useRef } from "react";
import Image from "next/image";
import cog from "@/public/assets/cog copy.png";
import cylinder from "@/public/assets/cylinder copy.png";
import noodle from "@/public/assets/noodle copy.png";
import gsap from "gsap";

export const HeroSection = () => {
  const cogRef = useRef(null);
  const cylinderRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const noodleTopRef = useRef(null);

  useEffect(() => {
    
    const timeline = gsap.timeline();
    
    gsap.to(cogRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    });
    
    gsap.to(cylinderRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    gsap.to(noodleTopRef.current, {
      rotation: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    timeline.from(buttonContainerRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
      ease: "back.out"
    });
    
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-496 h-496 md:w-128 md:h-128 z-0">
        <img 
          src="/hero.png" 
          alt="VulnVANGUARD Logo Background"
          className="w-full h-full object-contain opacity-90"
        />
      </div>
     
      <div className="container mx-auto px-4 py-8 min-h-screen relative z-10">
       
        <div 
          className="absolute top-24 left-8 w-32 h-32 md:w-40 md:h-40 z-20" 
          ref={cylinderRef}
        >
          <Image
            src={cylinder}
            alt="Cylinder graphic"
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div 
          className="absolute top-8 right-8 w-32 h-32 md:w-40 md:h-40 z-20" 
          ref={noodleTopRef}
        >
          <Image
            src={noodle}
            alt="Noodle graphic"
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div 
          className="absolute bottom-8 right-8 w-48 h-48 md:w-64 md:h-64 z-20" 
          ref={cogRef}
        >
          <Image
            src={cog}
            alt="Cog/star graphic"
            width={256}
            height={256}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div 
          className="absolute bottom-8 left-8 flex flex-col gap-4 z-30" 
          ref={buttonContainerRef}
        >
          <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded transition-colors duration-300">
            Apply with Unstop
          </button>
          <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded transition-colors duration-300">
            Apply with Devpost
          </button>
        </div>
      </div>
    </div>
  );
};
