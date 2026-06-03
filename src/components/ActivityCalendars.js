'use client';

import { useState, useEffect } from 'react';
import { openLightbox } from './Lightbox';

export default function ActivityCalendars({ salem, swampscott, label }) {
  const [active, setActive] = useState('salem');

  // Honor a ?loc=salem|swampscott deep link (e.g. from the location pages'
  // "Activity Calendar" tab) so the right calendar shows on arrival.
  useEffect(() => {
    const loc = new URLSearchParams(window.location.search).get('loc');
    if (loc === 'salem' || loc === 'swampscott') setActive(loc);
  }, []);
  const current = active === 'salem' ? salem : swampscott;
  const accent = active === 'salem' ? 'var(--navy)' : 'var(--navy)';

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#666' }}>{label}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {['salem', 'swampscott'].map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => setActive(loc)}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              padding: '12px 28px',
              borderRadius: '4px',
              border: `2px solid ${accent}`,
              background: active === loc ? accent : 'transparent',
              color: active === loc ? '#fff' : accent,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {loc === 'salem' ? 'Salem Calendar' : 'Swampscott Calendar'}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ background: '#fff', border: '1px solid #ececec', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          {current.images && current.images.length ? (
            <div>
              {current.images.map((img, i) => {
                const gallery = current.images.map((s, idx) => ({
                  src: s,
                  alt: `${current.locationName} activity calendar — ${current.monthLabel}${current.images.length > 1 ? ` (page ${idx + 1})` : ''}`,
                }));
                return (
                  <img
                    key={img}
                    src={img}
                    alt={gallery[i].alt}
                    onClick={() => openLightbox(img, gallery)}
                    title="Click to enlarge"
                    loading="lazy"
                    style={{ width: '100%', display: 'block', cursor: 'zoom-in', borderBottom: i < current.images.length - 1 ? '1px solid #ececec' : 'none' }}
                  />
                );
              })}
            </div>
          ) : current.pdf ? (
            <div style={{ aspectRatio: '8.5 / 11', background: '#f5f5f5' }}>
              <iframe
                title={`${current.locationName} activity calendar`}
                src={`${current.pdf}#view=FitH`}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
              />
            </div>
          ) : (
            <div style={{ aspectRatio: '8.5 / 11', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
              <div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#999', marginBottom: '8px' }}>{current.locationName}</div>
                <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px' }}>Current Calendar Coming Soon</h4>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>The monthly activity calendar will appear here soon. Please contact us for the current calendar.</p>
              </div>
            </div>
          )}
          <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: '#666' }}>{current.monthLabel}</span>
            {current.pdf && (
              <a
                href={current.pdf}
                download
                className="btn btn-navy"
                style={{ fontSize: '0.75rem', padding: '8px 18px' }}
              >
                Download PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
