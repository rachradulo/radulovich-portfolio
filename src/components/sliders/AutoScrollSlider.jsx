import { useState, useEffect, useRef } from 'react';
import './AutoScrollSlider.css';

function AutoScrollSlider({ images, interval = 5000, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isUserScrolling.current) {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }
      }, interval);
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [images.length, interval]);

  // Sync scroll position with currentIndex
  useEffect(() => {
    if (containerRef.current && !isUserScrolling.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;
      const maxScroll = scrollWidth - containerWidth;
      const targetScroll = (currentIndex / (images.length - 1)) * maxScroll;

      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, images.length]);

  // Handle manual horizontal scroll
  const handleScroll = () => {
    isUserScrolling.current = true;

    // Clear existing timeout
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    // Resume auto-scroll after 3 seconds of no scrolling
    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;

      // Update currentIndex based on scroll position
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const scrollWidth = containerRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        const maxScroll = scrollWidth - containerWidth;
        const newIndex = Math.round((scrollLeft / maxScroll) * (images.length - 1));
        setCurrentIndex(Math.max(0, Math.min(newIndex, images.length - 1)));
      }
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
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="slider-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              isUserScrolling.current = false;
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoScrollSlider;
