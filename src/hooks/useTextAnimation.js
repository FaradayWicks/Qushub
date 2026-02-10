// useTextAnimation.js
import { useEffect } from 'react';

export const useTextAnimation = (selector) => {
  useEffect(() => {
    const textLines = document.querySelectorAll(selector);

    textLines.forEach((textLine) => {
      textLine.style.opacity = '0'; // Initially hide text

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textLine.style.opacity = '1'; // Fade in text
            textLine.style.transform = 'perspective(0px) rotateX(0deg)'; // Apply perspective and rotation
            observer.unobserve(textLine); // Stop observing once animated
          }
        });
      }, { rootMargin: '0px', threshold: 0.9 });

      observer.observe(textLine);
    });
  }, [selector]);
};
