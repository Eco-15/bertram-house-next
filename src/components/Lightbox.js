'use client';

import { useEffect, useState, useCallback } from 'react';

let openFn = null;

// openLightbox(src) — single image (backward compatible)
// openLightbox(src, gallery) — gallery is [{ src, alt, caption }], enables prev/next
export function openLightbox(src, gallery) {
  if (openFn) openFn(src, gallery);
}

export default function Lightbox() {
  const [gallery, setGallery] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    openFn = (src, g) => {
      if (g && g.length) {
        const i = g.findIndex((item) => item.src === src);
        setGallery(g);
        setIndex(i < 0 ? 0 : i);
      } else {
        setGallery([{ src, alt: '', caption: '' }]);
        setIndex(0);
      }
    };
    return () => {
      openFn = null;
    };
  }, []);

  const close = useCallback(() => setGallery(null), []);
  const prev = useCallback(
    () => setGallery((g) => g && (setIndex((i) => (i - 1 + g.length) % g.length), g)),
    []
  );
  const next = useCallback(
    () => setGallery((g) => g && (setIndex((i) => (i + 1) % g.length), g)),
    []
  );

  useEffect(() => {
    if (gallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [gallery, close, prev, next]);

  if (!gallery) return null;
  const current = gallery[index];
  const hasMultiple = gallery.length > 1;

  return (
    <div className="lightbox-overlay active" onClick={close}>
      <button className="lightbox-close" onClick={close} aria-label="Close">
        &times;
      </button>

      {hasMultiple && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous photo"
        >
          &#8249;
        </button>
      )}

      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={current.src} alt={current.alt || ''} />
        {(current.caption || hasMultiple) && (
          <figcaption className="lightbox-caption">
            {current.caption}
            {hasMultiple && (
              <span className="lightbox-counter">
                {current.caption ? ' · ' : ''}
                {index + 1} / {gallery.length}
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {hasMultiple && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next photo"
        >
          &#8250;
        </button>
      )}
    </div>
  );
}

export function LightboxImage({ src, alt, caption, gallery, className = 'photo-grid-item' }) {
  return (
    <div
      className={className}
      onClick={() => openLightbox(src, gallery)}
      style={{ cursor: 'zoom-in' }}
    >
      <img src={src} alt={alt} loading="lazy" />
      {caption && <p className="photo-caption">{caption}</p>}
    </div>
  );
}
