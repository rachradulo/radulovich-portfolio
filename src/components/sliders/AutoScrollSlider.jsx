import { useEffect, useRef } from 'react';
import './AutoScrollSlider.css';

function AutoScrollSlider({ images, interval = 5000, className = '' }) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Create duplicated images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  // Initialize scroll position to middle set
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      // Start at the middle set of images
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
    }
  }, []);

  // Continuous smooth scroll animation
  useEffect(() => {
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (containerRef.current && !isUserScrolling.current) {
        const container = containerRef.current;
        const singleSetWidth = container.scrollWidth / 3;

        container.scrollLeft += scrollSpeed;

        // When we've scrolled past the second set, jump back to first set
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle manual horizontal scroll
  const handleScroll = () => {
    isUserScrolling.current = true;

    // Clear existing timeout
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    // Check for loop reset during manual scroll
    if (containerRef.current) {
      const container = containerRef.current;
      const singleSetWidth = container.scrollWidth / 3;

      // If scrolled to end, jump to middle
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      }
      // If scrolled to beginning, jump to middle
      if (container.scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth;
      }
    }

    // Resume auto-scroll after 3 seconds of no scrolling
    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
    }, 3000);
  };

  // Handle wheel events - only capture horizontal scroll gestures
  const handleWheel = (e) => {
    if (containerRef.current) {
      // Only handle horizontal scroll gestures (trackpad swipe left/right)
      // Let vertical scrolling pass through to the page
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaX;
        handleScroll();
      }
      // Vertical scrolling (deltaY dominant) passes through naturally
    }
  };

  return (
    <div className={`auto-scroll-slider ${className}`}>
      <div
        ref={containerRef}
        className="slider-container"
        onScroll={handleScroll}
        onWheel={handleWheel}
      >
        <div className="slider-track">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="slide">
              <img src={image.src} alt={image.alt || `Slide ${(index % images.length) + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AutoScrollSlider;
