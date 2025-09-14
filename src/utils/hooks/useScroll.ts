import { useState, useEffect, useRef } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  lastScrollY: number;
  isScrolling: boolean;
}

export const useScroll = () => {
  const [scroll, setScroll] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    lastScrollY: 0,
    isScrolling: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScroll((prevState) => ({
        scrollY: currentScrollY,
        scrollDirection: currentScrollY > prevState.lastScrollY ? 'down' : 'up',
        lastScrollY: currentScrollY,
        isScrolling: true,
      }));

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set isScrolling to false after user stops scrolling for 150ms
      timeoutRef.current = setTimeout(() => {
        setScroll((prevState) => ({
          ...prevState,
          isScrolling: false,
        }));
      }, 5000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return scroll;
};