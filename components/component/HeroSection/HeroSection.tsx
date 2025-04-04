import React from "react";
import cog from "@/public/assets/cog copy.png";
import Image from "next/image";
import cylinder from "@/public/assets/cylinder copy.png";
import noodle from "@/public/assets/noodle copy.png";
import hero from "@/public/hero.png";
import star from "@/public/assets/star copy.png";
import { motion } from "motion/react";
import localFont from "next/font/local";
const geistMono = localFont({
  src: "../../../public/fonts/GeistMonoVF.woff",
  weight: "800",
});
export const HeroSection = () => {
  return (
    <div className="relative w-full ">
      {/* Hero image centered */}
      <div
        className={`relative flex flex-col justify-center items-center ${geistMono.className}`}
      >
        <Image
          src={hero}
          alt="hero"
          width={1200}
          height={500}
          className="z-10 relative bottom-[250px] sm:bottom-[50px]"
        />

      </div>

      <motion.img
        src={cog.src}
        alt="cog"
        className="absolute 
    top-[200px] right-[63px]
    w-[250px] h-[250px]
    sm:top-[100px] sm:right-[70px]
    sm:w-[300px] sm:h-[300px]
    md:top-[120px] md:right-[80px]
    md:w-[400px] md:h-[400px]
    lg:top-[150px] lg:right-[100px]
    lg:w-[500px] lg:h-[500px]"
        animate={{
          translateY: [-30, 30],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "easeInOut",
        }}
      />
      <Image
        src={cylinder}
        alt="cylinder"
        width={200}
        height={200}
        className="absolute top-[100px] right-[642px] "
      />
      <Image
        src={noodle}
        alt="noodle"
        height={200}
        width={200}
        className="absolute right-[174px] bottom-[50px] rotate-[35deg] z-10 hidden sm:block "
      />
      <motion.img
        src={star.src}
        alt="star"
        height={200}
        width={200}
        className="absolute hidden sm:block bottom-[200px] left-[100px]"
        animate={{
          translateY: [-30, 30],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
        }}
      />
    </div>
  );
};
