'use client'
import { useState, useEffect } from "react";

// Static default that is the same on server AND client initial render
const DEFAULT_SIZE = {
  width: 0,
  height: 0,
  isMobile: true,
  isDesktop: false,
};

export function useWindowSize() {
  const [size, setSize] = useState(DEFAULT_SIZE);

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth || window.innerWidth || window.outerWidth;
      const height = document.documentElement.clientHeight || window.innerHeight || window.outerHeight;

      setSize({
        width,
        height,
        isMobile: width < 1024,
        isDesktop: width >= 1024,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
