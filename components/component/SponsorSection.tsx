import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "@/providers/gsap";

const SPONSORS = [
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  { id: 1, name: "Microsoft", image: "/sponsors/microsoft.png", url: "https://microsoft.com" },
  
];

export const SponsorSection = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Animate the marquee
  useEffect(() => {
    if (!trackRef.current) return;

    const distance = trackRef.current.scrollWidth / 2;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
      paused: isHovered,
    });

    tl.to(trackRef.current, {
      x: -distance,
      duration: 30,
    });

    return () => {
      tl.kill();
    };
  }, [isHovered]);

  // Render sponsors twice for seamless loop
  const sponsorsToRender = [...SPONSORS, ...SPONSORS];

  return (
    <section className="py-12 ">
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          className="flex whitespace-nowrap w-max"
        >
          {sponsorsToRender.map((sponsor, index) => (
            <a
              key={`${sponsor.id}-${index}`}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 transition-transform hover:scale-110 flex items-center justify-center"
              aria-label={`Visit ${sponsor.name}`}
            >
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={450}
                height={200}
                className="h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
