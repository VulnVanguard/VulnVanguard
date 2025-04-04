"use client";
import "./styles.css";
import React from "react";
import { useRef, useState } from "react";
import { ScrollTrigger, gsap, useGSAP } from "@/providers/gsap";

export const Timeline = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);

  const pinnedref = useRef(null);
  const stickyHeaderref = useRef(null);
  const progressBarContainerref = useRef(null);
  const progressBarref = useRef(null);
  const indicesref = useRef(null);
  const indicesContainerref = useRef(null);
  const [isProgressBarVisible, setisProgressBarVisible] = useState(false);
  const [currentActiveIndex, setcurrentActiveIndex] = useState(-1);

  useGSAP(() => {
    if (!pinnedref.current) return;

    const cards = gsap.utils.toArray(".card") as HTMLElement[];
    const indices = gsap.utils.toArray(".index") as HTMLElement[];
    const cardsCount = cards.length;
    const pinnedHeight = window.innerHeight * (cardsCount + 1);
    const startRotation = [0, 5, 0, -5, 3, -3, 2, -2, 1];
    const endRotation = [-10, -5, 10, 5, -8, 8, -6, 6, -4];
    const progressColor = [
      "#ecb74c",
      "#7dd8cd",
      "#e0ff57",
      "#7dd8cd",
      "#ff6b6b",
      "#4ecdc4",
      "#45b7d1",
      "#96c93d",
      "#f7d794",
    ];

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

        const paragraphs = index.querySelectorAll("p");

        // Apply or remove strikethrough based on whether this index is before or equal to the active one
        paragraphs.forEach((p) => {
          gsap.to(p, {
            textDecoration: i <= newIndex ? "line-through" : "none",
            duration: 0.5,
            ease: "power2.inOut",
          });
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
      onLeave: () => hideProgressAndIndices(),
      onEnterBack: () => showProgressAndIndices(),
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
          gsap.set(stickyHeaderref.current, { opacity: 0 });
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
    <div
      ref={pinnedref}
      className="pinned bg-gradient-to-r from-[#0a321c]/80 via-black-800/80 to-[#0a321c]-500/80"
    >
      <div ref={stickyHeaderref} className="sticky-header">
        <h1>ROADMAP.</h1>
      </div>
      <div ref={progressBarContainerref} className="progress-bar">
        <div ref={progressBarref} className="progress"></div>
      </div>

      <div ref={indicesContainerref} className="indices">
        <div ref={indicesref} className="index" id="index-1">
          <p>April 25th</p>
          <p>11:00 AM</p>
          <p>Inauguration</p>
        </div>
        <div className="index" id="index-2">
          <p>12:30 PM</p>
          <p>April 25th</p>
          <p>Bug Hunt</p>
        </div>
        <div className="index" id="index-3">
          <p>3:30 PM</p>
          <p>April 25th</p>
          <p>Speaker Session</p>
        </div>
        <div className="index" id="index-4">
          <p>7:00 PM</p>
          <p>April 25th</p>
          <p>Debug Dive</p>
        </div>
        <div className="index" id="index-5">
          <p>11:00 PM</p>
          <p>April 25th</p>
          <p>Guidance Gate</p>
        </div>
        <div className="index" id="index-6">
          <p>3:00 AM</p>
          <p>April 26th</p>
          <p>Fun Fiesta</p>
        </div>
        <div className="index" id="index-7">
          <p>8:00 AM</p>
          <p>April 26th</p>
          <p>Shortlist Strike</p>
        </div>
        <div className="index" id="index-8">
          <p>12:00 PM</p>
          <p>April 26th</p>
          <p>Final Forge</p>
        </div>
        <div className="index" id="index-9">
          <p>2:30 PM</p>
          <p>April 26th</p>
          <p>VulnVANGUARD Champions</p>
        </div>
      </div>

      <div className="card" id="card-1">
        <div className="card-phase">
          <p>Phase #01</p>
        </div>
        <div className="card-title">
          <p>April 25th, 11:00 AM</p>
          <h1>
            Inauguration by <span>Varun Singla</span>
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
          <p>April 25th, 12:30 PM</p>
          <h1>
            Bug <span>Hunt</span>
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
          <p>April 25th, 3:30 PM</p>
          <h1>
            Speaker <span>Session</span>
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
          <p>April 25th, 7:00 PM</p>
          <h1>
            Debug <span>Dive</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>04</h1>
        </div>
      </div>

      <div className="card" id="card-5">
        <div className="card-phase">
          <p>Phase #05</p>
        </div>
        <div className="card-title">
          <p>April 25th, 11:00 PM</p>
          <h1>
            Guidance <span>Gate</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>05</h1>
        </div>
      </div>

      <div className="card" id="card-6">
        <div className="card-phase">
          <p>Phase #06</p>
        </div>
        <div className="card-title">
          <p>April 26th, 3:00 AM</p>
          <h1>
            Fun <span>Fiesta</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>06</h1>
        </div>
      </div>

      <div className="card" id="card-7">
        <div className="card-phase">
          <p>Phase #07</p>
        </div>
        <div className="card-title">
          <p>April 26th, 8:00 AM</p>
          <h1>
            Shortlist <span>Strike</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>07</h1>
        </div>
      </div>

      <div className="card" id="card-8">
        <div className="card-phase">
          <p>Phase #08</p>
        </div>
        <div className="card-title">
          <p>April 26th, 12:00 PM</p>
          <h1>
            Final <span>Forge</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>08</h1>
        </div>
      </div>

      <div className="card glow" id="card-9">
        <div className="card-phase">
          <p>Phase #09</p>
        </div>
        <div className="card-title">
          <p>April 26th, 2:30 PM</p>
          <h1>
            VulnVANGUARD <span>Champions</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>09</h1>
        </div>
      </div>
    </div>
  );
};
