'use client';

import { useEffect, useState } from 'react';

let setOpenSrc = null;

export function openLightbox(src) {
  if (setOpenSrc) setOpenSrc(src);
}

export default function Lightbox() {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setOpenSrc = setSrc;
    return () => {
      setOpenSrc = null;
    };
  }, []);

  useEffect(() => {
    if (src) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setSrc(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [src]);

  if (!src) return null;

  return (
    <div className="lightbox-overlay active" onClick={() => setSrc(null)}>
      <button className="lightbox-close" onClick={() => setSrc(null)}>
        &times;
      </button>
      <img src={src} alt="" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export function LightboxImage({ src, alt, caption, className = 'photo-grid-item' }) {
  return (
    <div
      className={className}
      onClick={() => openLightbox(src)}
      style={{ cursor: 'zoom-in' }}
    >
      <img src={src} alt={alt} loading="lazy" />
      {caption && <p className="photo-caption">{caption}</p>}
    </div>
  );
}
