'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Tabs({ tabs }) {
  // A tab with an `href` acts as a link (navigates away) instead of switching
  // an in-page panel — useful for sending visitors to a related page.
  const [active, setActive] = useState(tabs.find((t) => !t.href)?.id);

  return (
    <div className="tabs-container">
      <div className="tabs-nav">
        {tabs.map((t) =>
          t.href ? (
            <Link key={t.id} href={t.href} className="tab-btn">
              {t.label}
            </Link>
          ) : (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          )
        )}
      </div>
      {tabs
        .filter((t) => !t.href)
        .map((t) => (
          <div
            key={t.id}
            className={`tab-panel${active === t.id ? ' active' : ''}`}
          >
            {t.content}
          </div>
        ))}
    </div>
  );
}
