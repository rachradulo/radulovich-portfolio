import { useEffect, useRef, useState } from 'react';
import './AutoScrollSlider.css';

function AutoScrollSlider({ images, interval = 4000, className = '' }) {
  const containerRef = useRef(null);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create duplicated images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  // Get slide width dynamically
  const getSlideWidth = () => {
    if (containerRef.current) {
      const slides = containerRef.current.querySelectorAll('.slide');
      if (slides.length > 0) {
        const slide = slides[0];
        const trackStyle = window.getComputedStyle(containerRef.current.querySelector('.slider-track'));
        const gap = parseInt(trackStyle.gap) || 5;
        return slide.offsetWidth + gap;
      }
    }
    return 300;
  };

  // Initialize scroll position to middle set
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
    }
  }, []);

  // Auto-advance to next image every interval
  useEffect(() => {
    const advanceSlide = () => {
      if (!isUserScrolling.current && containerRef.current) {
        const container = containerRef.current;
        const slideWidth = getSlideWidth();
        const singleSetWidth = container.scrollWidth / 3;

        // Smooth scroll to next slide
        const targetScroll = container.scrollLeft + slideWidth;

        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });

        // Check if we need to loop back (after animation completes)
        setTimeout(() => {
          if (container.scrollLeft >= singleSetWidth * 2 - slideWidth) {
            container.scrollLeft = singleSetWidth;
          }
        }, 600);

        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    };

    const intervalId = setInterval(advanceSlide, interval);

    return () => clearInterval(intervalId);
  }, [interval, images.length]);

  // Handle manual horizontal scroll
  const handleScroll = () => {
    isUserScrolling.current = true;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    if (containerRef.current) {
      const container = containerRef.current;
      const singleSetWidth = container.scrollWidth / 3;

      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      }
      if (container.scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth;
      }
    }

    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
    }, 3000);
  };

  // Handle wheel events - only capture horizontal scroll gestures
  const handleWheel = (e) => {
    if (containerRef.current) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaX;
        handleScroll();
      }
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
