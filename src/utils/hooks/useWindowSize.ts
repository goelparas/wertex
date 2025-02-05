import { useState, useEffect } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({
    width: 300, // default desktop width
    height: 768,
    isMobile: true,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
        isMobile: window?.innerWidth >= 300 && window?.innerWidth <= 650,
        isDesktop: window?.innerWidth >= 1024,
      });
    };
    // Call handler once to set initial state on client
    handleResize();
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
