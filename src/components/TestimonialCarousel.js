'use client';

import { useState, useEffect, useRef } from 'react';

export default function TestimonialCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const go = (n) => {
    setIndex(((n % slides.length) + slides.length) % slides.length);
    restartTimer();
  };

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="testimonials-carousel">
      <div
        className="testimonial-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="testimonial-slide">
            <p className="testimonial-quote">{s.quote}</p>
            <p className="testimonial-attribution">{s.attribution}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          className="carousel-btn carousel-prev"
          aria-label="Previous"
          onClick={() => go(index - 1)}
        >
          ←
        </button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === index ? ' active' : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          className="carousel-btn carousel-next"
          aria-label="Next"
          onClick={() => go(index + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
