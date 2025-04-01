"use client";
import "./styles.css";
import React from "react";
import { useRef, useState } from "react";
import { ScrollTrigger, gsap, useGSAP } from "@/providers/gsap";

export const Timeline = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);
  
  const pinnedref = useRef(null); // pinned
  const stickyHeaderref = useRef(null); // sticky-header
  const progressBarContainerref = useRef(null); // progress-bar
  const progressBarref = useRef(null); // progress
  const indicesref = useRef(null); // index
  const indicesContainerref = useRef(null); // indices
  const [isProgressBarVisible, setisProgressBarVisible] = useState(false);
  const [currentActiveIndex, setcurrentActiveIndex] = useState(-1);

  useGSAP(() => {
    if (!pinnedref.current) return;

    // Fix: Get an array of card elements from the ref
    const cards = gsap.utils.toArray(".card") as HTMLElement[];
    const indices = gsap.utils.toArray(".index") as HTMLElement[];
    const cardsCount = cards.length;
    const pinnedHeight = window.innerHeight * (cardsCount + 1);
    const startRotation = [0, 5, 0, -5];
    const endRotation = [-10, -5, 10, 5];
    const progressColor = ["#ecb74c", "#7dd8cd", "#e0ff57", "#7dd8cd"];

    // Now cards is an array so forEach will work
    cards.forEach((card, index) => {
      gsap.set(card, { rotation: startRotation[index] });
    });

    function animate(newIndex: number) {
      if (newIndex === currentActiveIndex) return;
      indices.forEach((index: HTMLElement, i: number) => {
        gsap.to(index, {
          opacity: i === newIndex ? 1 : 0.5,
          duration: 0.5,
          ease: "power2.inOut",
        });
      });

      setcurrentActiveIndex(newIndex);
    }

    function showProgressAndIndices() {
      gsap.to([progressBarContainerref.current, indicesContainerref.current], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.Out",
      });

      setisProgressBarVisible(true);
    }

    function hideProgressAndIndices() {
      gsap.to([progressBarContainerref.current, indicesContainerref.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.Out",
      });

      setisProgressBarVisible(false);
      animate(-1);
    }

    ScrollTrigger.create({
      trigger: pinnedref.current,
      start: "top",
      end: `+=${pinnedHeight}`,
      pin: true,
      scrub: 0.5,
      pinSpacing: true,
      onLeave: () => {
        hideProgressAndIndices();
      },
      onEnterBack: () => {
        showProgressAndIndices();
      },
      onUpdate: (self) => {
        const progress = self.progress * (cardsCount + 1);
        const currentCardIndex = Math.floor(progress);
        if (progress <= 1) {
          gsap.to(stickyHeaderref.current, {
            opacity: 1 - progress,
            duration: 0.1,
            ease: "power2.Out",
          });
        } else {
          gsap.set(stickyHeaderref.current, {
            opacity: 0,
          });
        }

        if (progress > 1 && !isProgressBarVisible) {
          showProgressAndIndices();
        } else if (progress < 1 && isProgressBarVisible) {
          hideProgressAndIndices();
        }

        let progressHeight = 0;
        let colorindex = -1;
        if (progress > 1) {
          progressHeight = ((progress - 1) / cardsCount) * 100;
          colorindex = Math.min(Math.floor(progress - 1), cardsCount - 1);
          animate(colorindex);
          gsap.to(progressBarref.current, {
            height: `${progressHeight}%`,
            backgroundColor: progressColor[colorindex],
            duration: 0.3,
            ease: "power2.Out",
          });
        }

        cards.forEach((card, index) => {
          if (index < currentCardIndex) {
            gsap.set(card, {
              top: "50%",
              rotation: endRotation[index],
            });
          } else if (index === currentCardIndex) {
            const progressInCard = progress - currentCardIndex;
            const newTop = gsap.utils.interpolate(150, 50, progressInCard);
            const newRotation = gsap.utils.interpolate(
              startRotation[index],
              endRotation[index],
              progressInCard
            );
            gsap.set(card, {
              top: `${newTop}%`,
              rotation: newRotation,
            });
          } else {
            gsap.set(card, {
              top: "150%",
              rotation: startRotation[index],
            });
          }
        });
      },
    });
  });

  return (
    <div ref={pinnedref} className="pinned bg-gradient-to-r from-[#0a321c]/80 via-black-800/80 to-[#0a321c]-500/80">
      <div ref={stickyHeaderref} className="sticky-header">
        <h1>ROADMAP.</h1>
      </div>
      <div ref={progressBarContainerref} className="progress-bar">
        <div ref={progressBarref} className="progress"></div>
      </div>

      <div ref={indicesContainerref} className="indices">
        <div ref={indicesref} className="index" id="index-1">
          <p>April 25th</p>
          <p></p>
          <p></p>
        </div>
        <div className="index" id="index-2">
          <p>9:00 AM</p>
          <p>April 25th</p>
          <p> Registration </p>
        </div>
        <div className="index" id="index-3">
          <p>11:00 AM</p>
          <p>April 25th</p>
          <p>Inauguration & Tech Talk</p>
        </div>
        <div className="index" id="index-4">
          <p>12:00 PM</p>
          <p>April 25th</p>
          <p>Bug Finding Session 1</p>
        </div>
        <div className="index" id="index-5">
          <p>1:00 PM</p>
          <p>April 25th</p>
          <p>Lunch Break</p>
        </div>
        <div className="index" id="index-6">
          <p>2:30 PM</p>
          <p>April 25th</p>
          <p>Bug Finding Session 2</p>
        </div>
        <div className="index" id="index-7">
          <p>3:00 PM</p>
          <p>April 25th</p>
          <p>Speaker Session</p>
        </div>
      </div>

      <div className="card" id="card-1">
        <div className="card-phase">
          <p>Phase #01</p>
        </div>
        <div className="card-title">
          <p>From April 25th</p>
          <h1>
            Event <span>Initiated</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>01</h1>
        </div>
      </div>

      <div className="card" id="card-2">
        <div className="card-phase">
          <p>Phase #02</p>
        </div>
        <div className="card-title">
          <p>From April 25th</p>
          <h1>
            Event <span>Initiated</span>
          </h1>
        </div>

        <div className="card-bg">
          <h1>02</h1>
        </div>
      </div>

      <div className="card" id="card-3">
        <div className="card-phase">
          <p>Phase #03</p>
        </div>
        <div className="card-title">
          <p>From April 25th</p>
          <h1>
            Event <span>Initiated</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>03</h1>
        </div>
      </div>

      <div className="card" id="card-4">
        <div className="card-phase">
          <p>Phase #04</p>
        </div>
        <div className="card-title">
          <p>From April 25th</p>
          <h1>
            Event <span>Initiated</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>04</h1>
        </div>
      </div>

      <div className="card " id="card-5">
        <div className="card-phase">
          <p>Phase #05</p>
        </div>
        <div className="card-title">
          <p>From April 25th</p>
          <h1>
            Event <span>Initiated</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>05</h1>
        </div>
      </div>

      <div className="card .glow" id="card-6">
        <div className="card-phase">
          <p>Phase #06</p>
        </div>
        <div className="card-title">
          <p>From April 25th</p>
          <h1>
            Event <span>Initiated</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>06</h1>
        </div>
      </div>
    </div>
  );
};
