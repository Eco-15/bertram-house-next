'use client';

import { useState } from 'react';

const TAG_COLORS = {
  both: { className: 'tag-both', color: 'var(--navy)', label: 'Both Locations' },
  salem: { className: 'tag-salem', color: 'var(--burgundy)', label: 'John Bertram House — Salem' },
  swampscott: { className: 'tag-swampscott', color: 'var(--teal)', label: 'John Bertram House — Swampscott' },
};

export default function TestimonialsGrid({ items }) {
  const [filter, setFilter] = useState('all');

  const filtered = items.filter((i) => filter === 'all' || i.location === filter);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
        <div>
          <p className="eyebrow" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--navy)', marginBottom: '8px' }}>All Testimonials</p>
          <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222' }}>What People Are Saying</h2>
        </div>
        <div className="filter-bar">
          {[
            { id: 'all', label: 'All' },
            { id: 'both', label: 'Both Locations' },
            { id: 'salem', label: 'Salem' },
            { id: 'swampscott', label: 'Swampscott' },
          ].map((f) => (
            <button
              key={f.id}
              className={`filter-btn${filter === f.id ? ' active' : ''}`}
              data-filter={f.id}
              onClick={() => setFilter(f.id)}
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
            <div key={i} className="testimonial-card fade-in visible" data-location={t.location}>
              <span className={`testimonial-tag ${cfg.className}`}>{cfg.label}</span>
              <blockquote>{t.quote}</blockquote>
              <p className="testimonial-attribution" style={{ color: cfg.color }}>{t.attribution}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
