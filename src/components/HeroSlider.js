'use client';

import { useState, useEffect } from 'react';

export default function HeroSlider({ images, children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-slides">
        {images.map((src, i) => (
          <div
            key={src}
            className={`hero-slide${i === index ? ' active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="hero-content">{children}</div>
    </section>
  );
}
