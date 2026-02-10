import { useEffect } from 'react';

const useSVGDrawingAnimation = (firstElementId, secondElementId) => {
  useEffect(() => {
    function calculateSVGDrawing() {
      const firstElement = document.getElementById(firstElementId);
      const secondElement = document.getElementById(secondElementId);
      
      // Get the height of the first element
      const firstElementHeight = firstElement.offsetHeight;
      
      // Get the length of the SVG path (assuming it's the second element)
      const length = secondElement.getTotalLength();

      // The start position of the drawing
      secondElement.style.strokeDasharray = length;
      secondElement.style.strokeDashoffset = 0; // Start from 0

      function updateDrawing() {
        const scrollPercent = (window.scrollY + window.innerHeight / 3 - firstElement.offsetTop) / firstElementHeight;

        // Ensure scrollPercent is within range [0, 1]
        const normalizedScrollPercent = Math.min(Math.max(scrollPercent, 0), 1);

        // Calculate the draw length based on scroll percentage
        const draw = length * normalizedScrollPercent;

        // Update the strokeDashoffset
        secondElement.style.strokeDashoffset = length - draw;
      }

      // Add event listener for scrolling
      window.addEventListener("scroll", updateDrawing);

      // Call updateDrawing initially to set the initial state
      updateDrawing();

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener("scroll", updateDrawing);
      };
    }

    calculateSVGDrawing();
  }, [firstElementId, secondElementId]);
};

export default useSVGDrawingAnimation;
