"use client";

import { useEffect } from "react";
import MentorCard from "./mentorCard";
import FaqSection from "./FaqSection";
import Countdown from "./CountDown";
import JudgeCard from "./judgeCard";
import Perks from "@/components/component/Perks";
import React from "react";
import { Timeline } from "./Timeline/Timeline";
import { SponsorSection } from "./SponsorSection";
import { HeroSection } from "./HeroSection/HeroSection";

export function Component() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className=" bg-gradient-to-r from-[#0a321c]/80 via-black-800/80 to-[#0a321c]-500 overflow-x-hidden ">
        <section className=" h-screen flex justify-center items-center ">
          <HeroSection />

          <div className="max-[450px]:hidden font-bold text-4xl absolute bottom-[100px] w-10/12 mx-auto flex items-center justify-center text-white">
            <Countdown />
          </div>
        </section>
        <section
          id="Prizes"
          className="py-12 md:py-16 xl:py-24 overflow-x-hidden"
        >
          <div className="w-11/12 md:w-10/12 mx-auto flex flex-col flex-wrap max-[1300px]:justify-center items-center justify-evenly xl:gap-10">
            <img
              src="/perk_rotate.webp"
              alt="rotate"
              className="absolute -z-2 !max-w-8/12 max-[450px]:!max-w-[300px] max-[450px]:w-10/12 opacity-70 animate-[spin_100s_linear_infinite]"
              loading="lazy"
            />
            <div className="max-[450px]:w-11/12 flex text-center justify-center items-center space-y-4 z-10">
              <div className="max-[450px]:w-11/12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Prizes that can be yours!
                </h2>
                <p className="max-w-[600px]  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Win a variety of prizes, ranging from tracks, rookies to
                  overall bests! Showcase your skills and win them all!
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center flex-col gap-4 z-10">
              <p className="text-3xl font-bold col-span-2">Cash Prizes</p>
              <div className="flex flex-col gap-4 flex-wrap items-center justify-center">
                <div className="flex gap-4 flex-col items-center justify-center">
                  <img
                    src="/podium.webp"
                    alt="Prizes"
                    className="max-[450px]:w-11/12 w-1/2"
                    loading="lazy"
                  />
                  {/* <ul className="text-3xl gap-2 display flex flex-col list-none"> */}
                  {/* <p className="text-3xl">Cash Prizes worth 50K!</p> */}
                  {/* <p className="text-xl">and</p> */}
                  {/* </ul> */}
                  {/* <span className="text-lg text-center text-gray-500/70 dark:text-gray-400/70">
                    To be released by 14th of April!
                  </span> */}
                  <span className="text-sm text-left">
                    <strong>T&C Applied</strong> * Including all Cash and
                    Coupons.
                  </span>
                </div>
              </div>
              <p className="text-3xl font-bold col-span-2">In Kind Prizes</p>
              <div className="flex flex-col gap-4 flex-wrap items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-bl-[25%] rounded-tr-[25%] h-[150px]">
                  <img
                    alt="GeeksforGeeks"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    src="/sponsors/gfg.png"
                    loading="lazy"
                    width="250"
                  />
                  <div className="flex flex-col gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">GeeksforGeeks</h3>
                    <p className="text-sm text-black/90">
                      Exciting Merch & Coupons
                    </p>
                  </div>
                </div>
                {/* <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-br-[25%] rounded-tl-[25%]  h-[150px]">
                  <img
                    alt="Polygon"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    src="https://assets.devfolio.co/hackathons/28bbd4f275b046f5b35698b9727eb71e/sponsors/5c7d24df013b4aa7911141b599ed0d23/348.png"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Polygon</h3>
                    <p className="text-sm text-black/90">
                      Track Prize worth - $200
                    </p>
                  </div>
                </div> */}
              </div>
              <p className="text-3xl font-bold col-span-2">Track Prizes</p>
              <div className="flex gap-4 flex-wrap items-center justify-center">
                {/* <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-br-[25%] rounded-tl-[25%]  h-[150px]">
                  <img
                    alt="Polygon"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    src="https://assets.devfolio.co/hackathons/28bbd4f275b046f5b35698b9727eb71e/sponsors/5c7d24df013b4aa7911141b599ed0d23/348.png"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Polygon</h3>
                    <p className="text-sm text-black/90">Prize worth - $200</p>
                  </div>
                </div> */}
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-bl-[25%] rounded-tr-[25%]  h-[150px]">
                  <img
                    src="https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    alt="ETHIndia"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Microsoft</h3>
                    <p className="text-sm text-black/90">Prize worth - $100</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-tl-[25%] rounded-br-[25%]  h-[150px]">
                  <img
                    src="/sponsors/aptos.webp"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    alt="Aptos"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Aptos</h3>
                    <p className="text-sm text-black/90">Prize worth - $1000</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-tr-[25%] rounded-bl-[25%]  h-[150px]">
                  <img
                    src="/sponsors/quillaudits.webp"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    alt="Aptos"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Quill Audits</h3>
                    <p className="text-sm text-black/90">Grant worth - $2000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Roadmap" className="bg-black relative h-full w-full">
          <Timeline />
        </section>
        <section id="Perks" className=" py-16 md:py-16 xl:py-24">
          <div className="w-11/12 md:w-10/12 mx-auto grid gap-6 lg:grid-cols-2 xl:gap-10">
            <div className="flex flex-col justify-center items-center space-y-4">
              <img
                src="/perk_rotate.webp"
                alt="rotate"
                className="!max-w-[400px] max-[450px]:!max-w-[300px] max-[450px]:w-10/12 opacity-70 animate-[spin_10s_linear_infinite]"
                loading="lazy"
              />
              <div className="max-[450px]:w-11/12 max-[450px]:text-center absolute">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Perks!
                </h2>
                <p className="max-w-[600px] text-gray-500/70 dark:text-gray-400/70">
                  Fueling Innovation: Unlimited snacks, and boundless creativity
                  - just a taste of the perks at our hackathon!
                </p>
              </div>
            </div>
            <Perks />
          </div>
        </section>
        <section
          id="Sponsors"
          className="  overflow-x-hidden  h-[200px] md:h-[400px] md:py-4"
        >
          <div className=" relative   w-11/12 md:w-10/12 mx-auto grid gap-6 text-center md:px-6 ">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                Our Sponsors
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us in our mission to innovate and inspire. Together, we can
                make a difference!
              </p>
            </div>
          </div>
          <SponsorSection />
        </section>
        {/* // -----------------JUDGES SECTION BELOW ----------------------- */}
        {/* < section className="bg-gray-900 py-12 md:py-16 xl:py-24 overflow-x-hidden" >
          <div className="w-11/12 md:w-10/12 mx-auto  grid gap-6 px-4 items-center justify-center text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                Judges
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Engage judges succinctly, demonstrating understanding and
                significance of work. Utilize feedback to strengthen
                presentations, leaving a lasting impression.
              </p>
            </div>
            <JudgeCard />
          </div>
        </section > */}
        {/* //---------------------------------- */}
        {/* < section className="bg-gray-900 py-12 md:py-16 xl:py-24" >
          <div className="w-11/12 md:w-10/12 mx-auto  grid gap-6 px-4 items-center justify-center text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                Mentors
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate closely with mentors, refining ideas with clarity and
                brevity. Benefit from their expertise to enhance proposals
                effectively.
              </p>
            </div>
            <MentorCard />
          </div>
        </section > */}

        {/* <section className=" py-12 md:py-16 xl:py-24">
        <div className="w-11/12 md:w-10/12 mx-auto gap-6 xl:gap-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Team</h2>
          <div>
          </div>
          <div>
          </div>
        </div>
      </section > */}
        <section className="py-8 md:py-12 xl:py-16 overflow-x-hidden">
          <FaqSection />
          <div className="w-11/12 md:10/12 mx-auto grid gap-6 lg:grid-cols-2 xl:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="max-w-[600px] text-gray-500/70 dark:text-gray-400/70">
                Have questions about the hackathon? Reach out to our team, and
                we&apos;ll be happy to help.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold">Email</span>
                <a href="mailto:info@hackinnovate.tech">
                  <span className="text-sm text-gray-500/70 dark:text-gray-400/70">
                    vulnvanguardsrmist@gmail.com
                  </span>
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold">Phone</span>
                <a href="tel:+91 9835124760">
                  <span className="text-sm text-gray-500/70 dark:text-gray-400/70">
                    +91 9835124760
                  </span>
                </a>
                <a href="tel:+91 7478319111">
                  <span className="text-sm text-gray-500/70 dark:text-gray-400/70">
                    +91 7478319111
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
