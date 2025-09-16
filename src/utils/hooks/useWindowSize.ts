'use client'
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [size, setSize] = useState(() => {
    if (typeof window !== 'undefined') {
      // Try multiple methods to get the most accurate width
      const width = document.documentElement.clientWidth || window.innerWidth || window.outerWidth;
      const height = document.documentElement.clientHeight || window.innerHeight || window.outerHeight;
      
      return {
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      };
    }
    
    return {
      width: 300,
      height: 768,
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = document.documentElement.clientWidth || window.innerWidth || window.outerWidth;
      const height = document.documentElement.clientHeight || window.innerHeight || window.outerHeight;
      
      setSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
