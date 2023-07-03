import { useState, useEffect } from "react";

const animate = 'animate__animated';
const fast = 'animate__faster';
const slow = 'animate__slow';

export const toaster = `${animate} animate__slideInUp ${fast}`;
export const slideFromLeft = `${animate} animate__slideInLeft ${slow}`;
export const slideFromRight = `${animate} animate__slideInRight ${slow}`;
export const fadeUp = `${animate} animate__fadeInUp`;
export const fadeDown = `${animate} animate__fadeInDown`;
export const zoomDown = `${animate} animate__bounceInDown`;

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
