"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      /* FIX 1: Reduced duration to 0.7s for a snappier, less floaty scroll feel */
      duration: 0.7,           
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: "vertical", 
      gestureOrientation: "vertical",
      smoothWheel: true,       
      wheelMultiplier: 1,      
      touchMultiplier: 0,      
      infinite: false,
      /* FIX 2: Prevents Lenis from fighting with your onClick handler hashes,
         instantly curing the navigation double-click bug. */
      anchors: false, 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}