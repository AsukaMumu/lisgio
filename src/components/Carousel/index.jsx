// 轮播组件

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Carousel/index.scss';

const Carousel = ({ slides, interval = 5000, showControls = true, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`carousel ${className}`}>
      {showControls && (
        <button className="carousel-button prev" onClick={handlePrev}>
          &#10094;
        </button>
      )}
      <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-text">
              <h2>{slide.text1}</h2>
              <span>———</span>
              <h6>{slide.text2}</h6>
            </div>
          </div>
        ))}
      </div>
      {showControls && (
        <button className="carousel-button next" onClick={handleNext}>
          &#10095;
        </button>
      )}
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text1: PropTypes.string.isRequired,
      text2: PropTypes.string.isRequired,
    })
  ).isRequired,
  interval: PropTypes.number,
  showControls: PropTypes.bool,
  className: PropTypes.string,
};

export default Carousel;
