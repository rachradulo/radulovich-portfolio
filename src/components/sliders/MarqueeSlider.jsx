import './MarqueeSlider.css';

function MarqueeSlider({ images, speed = 30, className = '' }) {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className={`marquee-slider ${className}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className="marquee-slide">
            <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeSlider;
