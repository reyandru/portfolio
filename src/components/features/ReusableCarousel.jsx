import React, { useState } from 'react';
import '../../styles/reusable_carousel.css'; 

const Carousel = ({ items, showIndicators = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="prev-button button_slider" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-item-wrapper">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : 'inactive'}`}
            >
              {item}
            </div>
          ))}
        </div>

        <button className="next-button button_slider" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {showIndicators && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
