'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// The two communities, with the coordinates already used for structured data in
// JsonLd.js. We pick whichever is closest to the visitor.
const COMMUNITIES = [
  { key: 'salem', name: 'Salem', full: 'John Bertram House of Salem', href: '/salem', lat: 42.5215, lon: -70.8925 },
  { key: 'swampscott', name: 'Swampscott', full: 'John Bertram House of Swampscott', href: '/swampscott', lat: 42.473, lon: -70.912 },
];

const STORAGE_KEY = 'jbh-greeted';

function distanceMi(lat1, lon1, lat2, lon2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 3959; // miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function nearestCommunity(lat, lon) {
  if (typeof lat !== 'number' || typeof lon !== 'number') return COMMUNITIES[0];
  let best = COMMUNITIES[0];
  let bestD = Infinity;
  for (const c of COMMUNITIES) {
    const d = distanceMi(lat, lon, c.lat, c.lon);
    if (d < bestD) {
      bestD = d;
      best = c;
    }
  }
  return best;
}

export default function GeoGreeting() {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState(null);
  const [community, setCommunity] = useState(COMMUNITIES[0]);

  useEffect(() => {
    // Once per visit (browser session).
    if (typeof window === 'undefined') return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    let cancelled = false;
    let timer;

    (async () => {
      try {
        const res = await fetch('/api/geo', { headers: { Accept: 'application/json' } });
        if (!res.ok) return;
        const data = await res.json();
        const hasCoords = typeof data.lat === 'number' && typeof data.lon === 'number';
        // Only greet if we actually detected something useful.
        if (!data.city && !hasCoords) return;
        if (cancelled) return;
        setCity(data.city || null);
        setCommunity(nearestCommunity(data.lat, data.lon));
        timer = setTimeout(() => {
          if (cancelled) return;
          try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch {}
          setVisible(true);
        }, 1200);
      } catch {
        // Geo unavailable — never block the page; just don't greet.
      }
    })();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Body scroll-lock + Escape-to-close while open.
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setVisible(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [visible]);

  if (!visible) return null;

  const close = () => setVisible(false);

  return (
    <div
      className="geo-modal-overlay"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="geo-greet-title"
    >
      <div className="geo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="geo-modal-close" onClick={close} aria-label="Close">×</button>
        <div className="geo-modal-wave" aria-hidden="true">👋</div>
        <h2 id="geo-greet-title">
          {city ? `Hey there, ${city}!` : 'Hey there, neighbor!'}
        </h2>
        <p>
          You&apos;re right near us. <strong>{community.full}</strong> offers warm,
          personalized assisted living on Massachusetts&apos; North Shore — we&apos;d love
          to welcome you for a visit.
        </p>
        <div className="geo-modal-actions">
          <Link href={community.href} className="btn btn-gold" onClick={close}>
            Explore {community.name} →
          </Link>
          <Link href="/contact" className="geo-modal-secondary" onClick={close}>
            Schedule a tour
          </Link>
        </div>
      </div>
    </div>
  );
}
