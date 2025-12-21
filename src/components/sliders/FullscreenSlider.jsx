import { useState, useEffect, useRef } from 'react';
import './FullscreenSlider.css';

function FullscreenSlider({ images, interval = 4000, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const intervalRef = useRef(null);

  // Auto-scroll in both normal and fullscreen modes
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, interval]);

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = '';
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Handle keyboard navigation in fullscreen
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreen) return;
      if (e.key === 'Escape') closeFullscreen();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, images.length]);

  return (
    <>
      {/* Normal view */}
      <div className={`fullscreen-slider ${className}`}>
        <div className="fs-slider-container" onClick={openFullscreen}>
          <div
            className="fs-slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="fs-slide">
                <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="fs-click-hint">Click to expand</div>
        </div>

        <div className="fs-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`fs-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fs-overlay" onClick={closeFullscreen}>
          <button className="fs-close" onClick={closeFullscreen} aria-label="Close fullscreen">
            <span></span>
            <span></span>
          </button>

          <button className="fs-nav-btn fs-prev" onClick={goToPrev} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="fs-fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
            />
          </div>

          <button className="fs-nav-btn fs-next" onClick={goToNext} aria-label="Next slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="fs-fullscreen-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`fs-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default FullscreenSlider;
