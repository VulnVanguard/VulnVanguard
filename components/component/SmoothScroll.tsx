// components/SmoothScrolling.tsx
"use client";

import { ReactNode } from "react";
import { LenisProvider } from "@/providers/LenisProvider";
import { ScrollTrigger, gsap, useGSAP } from "@/providers/gsap";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  return <LenisProvider>{children}</LenisProvider>;
}