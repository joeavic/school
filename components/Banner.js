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
    <div className="relative w-full h-screen md:h-[700px] overflow-hidden">
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
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-6">
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      {/* Arrow navigation */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
        onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
        onClick={() => setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1)}
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  );
}