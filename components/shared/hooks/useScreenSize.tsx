"use client";

import { useEffect, useState } from "react";

const BREAKPOINTS = {
  mobile: 640,
  desktop: 1024,
};

export function useScreenSize() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth(); // Set initial width

    let timeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(updateWidth, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width < BREAKPOINTS.mobile;
  const isPad =
    width >= BREAKPOINTS.mobile &&
    width < BREAKPOINTS.desktop;
  const isDesktop = width >= BREAKPOINTS.desktop;

  return {
    width,
    isMobile,
    isPad,
    isDesktop,
  };
}