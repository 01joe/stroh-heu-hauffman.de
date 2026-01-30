import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import slider1 from '../assets/slider-heufeld.jpg';
import slider2 from '../assets/slider-maisernte.jpg';
import slider3 from '../assets/slider-holzhackschnitzel.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: slider1, title: 'Herzlich Willkommen', subtitle: 'bei der Franz Kolb GmbH & Co. KG' },
    { image: slider2, title: 'Herzlich Willkommen', subtitle: 'bei der Franz Kolb GmbH & Co. KG' },
    { image: slider3, title: 'Herzlich Willkommen', subtitle: 'bei der Franz Kolb GmbH & Co. KG' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-4xl md:text-6xl font-sans font-normal drop-shadow-lg mb-2">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl font-sans drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 border-2 border-white text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 border-2 border-white text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;
