// components/Banner.js
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Banner() {
  const slides = [
    {
      id: 1,
      image: '/images/banner1.jpg',
      alt: 'School Building',
    },
    {
      id: 2,
      image: '/images/banner2.jpg',
      alt: 'School Activities',
    },
    {
      id: 3,
      image: '/images/banner3.jpg',
      alt: 'School Events',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide change
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}