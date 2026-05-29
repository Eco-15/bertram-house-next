'use client';

import { useState, useEffect, useCallback } from 'react';

const TAG_COLORS = {
  both: { className: 'tag-both', color: 'var(--navy)', label: 'Both Locations' },
  salem: { className: 'tag-salem', color: 'var(--burgundy)', label: 'John Bertram House — Salem' },
  swampscott: { className: 'tag-swampscott', color: 'var(--teal)', label: 'John Bertram House — Swampscott' },
};

export default function TestimonialsGrid({ items }) {
  // null = show everything. Salem/Swampscott filters also include "both"-tagged
  // testimonials, since those apply to each location.
  const [filter, setFilter] = useState(null);
  const [active, setActive] = useState(null); // index into `filtered` for the modal

  const filtered = items.filter(
    (i) => filter === null || i.location === filter || i.location === 'both',
  );

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [active, close, prev, next]);

  const toggle = (id) => setFilter((f) => (f === id ? null : id));

  const activeItem = active === null ? null : filtered[active];
  const activeCfg = activeItem ? TAG_COLORS[activeItem.location] : null;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
        <div>
          <p className="eyebrow" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--navy)', marginBottom: '8px' }}>All Testimonials</p>
          <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222' }}>What People Are Saying</h2>
        </div>
        <div className="filter-bar">
          {[
            { id: 'salem', label: 'Salem' },
            { id: 'swampscott', label: 'Swampscott' },
          ].map((f) => (
            <button
              key={f.id}
              className={`filter-btn${filter === f.id ? ' active' : ''}`}
              data-filter={f.id}
              onClick={() => toggle(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="testimonials-masonry" id="testimonialsGrid">
        {filtered.map((t, i) => {
          const cfg = TAG_COLORS[t.location];
          return (
            <button
              key={`${t.attribution}-${i}`}
              type="button"
              className="testimonial-card fade-in visible"
              data-location={t.location}
              onClick={() => setActive(i)}
              aria-label="Enlarge testimonial"
            >
              <span className={`testimonial-tag ${cfg.className}`}>{cfg.label}</span>
              <blockquote>{t.quote}</blockquote>
              <p className="testimonial-attribution" style={{ color: cfg.color }}>{t.attribution}</p>
            </button>
          );
        })}
      </div>

      {activeItem && (
        <div className="testimonial-modal-overlay" onClick={close} role="dialog" aria-modal="true">
          <button className="testimonial-modal-close" onClick={close} aria-label="Close">&times;</button>
          <button
            className="testimonial-modal-nav prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
          <div className="testimonial-modal-card" onClick={(e) => e.stopPropagation()}>
            <span className={`testimonial-tag ${activeCfg.className}`}>{activeCfg.label}</span>
            <blockquote>{activeItem.quote}</blockquote>
            <p className="testimonial-attribution" style={{ color: activeCfg.color }}>{activeItem.attribution}</p>
            <p className="testimonial-modal-count">{active + 1} / {filtered.length}</p>
          </div>
          <button
            className="testimonial-modal-nav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
