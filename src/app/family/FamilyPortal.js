'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const initialResidents = [
  {
    id: 'r1',
    name: 'Eleanor Whitfield',
    relation: 'Mother',
    community: 'John Bertram House of Swampscott',
    suite: 'Suite 204',
    moveIn: '2023-08-14',
    initials: 'EW',
    color: '#7A9CC6',
    careLevel: 'Personalized Care',
    recentNote:
      'Eleanor enjoyed a sunny afternoon in the garden today and led a sing-along in the parlor.',
  },
  {
    id: 'r2',
    name: 'Harold Whitfield',
    relation: 'Father',
    community: 'John Bertram House of Swampscott',
    suite: 'Suite 207',
    moveIn: '2024-02-02',
    initials: 'HW',
    color: '#C7A05A',
    careLevel: 'Personalized Care',
    recentNote:
      'Harold joined the Tuesday history discussion and shared stories from his Navy years.',
  },
];

const photoFeed = [
  {
    src: '/images/swampscott/sunroom1.jpg',
    caption: 'Afternoon tea in the sunroom',
    date: '2026-05-12',
    residentId: 'r1',
  },
  {
    src: '/images/swampscott/library1.jpg',
    caption: 'Book club in the library',
    date: '2026-05-10',
    residentId: 'r1',
  },
  {
    src: '/images/swampscott/3rdfloormusic1.jpg',
    caption: 'Live piano performance',
    date: '2026-05-09',
    residentId: 'r2',
  },
  {
    src: '/images/swampscott/1stdining3.jpg',
    caption: 'Mother’s Day brunch',
    date: '2026-05-10',
    residentId: 'r1',
  },
  {
    src: '/images/swampscott/2ndfloorlobby1.jpg',
    caption: 'Morning coffee hour',
    date: '2026-05-07',
    residentId: 'r2',
  },
  {
    src: '/images/swampscott/library3.jpg',
    caption: 'Reading the Sunday paper',
    date: '2026-05-05',
    residentId: 'r2',
  },
  {
    src: '/images/swampscott/sunroom2.jpg',
    caption: 'Sunroom chat with friends',
    date: '2026-05-03',
    residentId: 'r1',
  },
  {
    src: '/images/swampscott/3rdfloortvroom1.jpg',
    caption: 'Movie night',
    date: '2026-05-01',
    residentId: 'r2',
  },
];

const upcomingEvents = [
  { date: '2026-05-16', title: 'Family Brunch', detail: 'Saturday · 11:00 AM · Main dining room' },
  { date: '2026-05-19', title: 'Symphony Outing', detail: 'Tuesday · 2:00 PM · Bus departs at 1:30' },
  { date: '2026-05-22', title: 'Garden Party', detail: 'Friday · 3:00 PM · Courtyard' },
];

function readSession() {
  if (typeof window === 'undefined') return null;
  try {
    const raw =
      window.localStorage.getItem('jbhFamilySession') ||
      window.sessionStorage.getItem('jbhFamilySession');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function clearSession() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem('jbhFamilySession');
    window.sessionStorage.removeItem('jbhFamilySession');
  } catch {
    // ignore
  }
}

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function formatShortDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function FamilyPortal() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [session, setSession] = useState(null);
  const [residents, setResidents] = useState(initialResidents);
  const [activeResident, setActiveResident] = useState('all');
  const [tab, setTab] = useState('photos');
  const [lightbox, setLightbox] = useState(null);
  const [addingResident, setAddingResident] = useState(false);
  const [newResident, setNewResident] = useState({ name: '', relation: '', community: 'John Bertram House of Swampscott' });
  const [compactHeader, setCompactHeader] = useState(false);

  useEffect(() => {
    const s = readSession();
    if (!s) {
      router.replace('/login');
      return;
    }
    setSession(s);
    setReady(true);
  }, [router]);

  useEffect(() => {
    if (!ready) return;
    const onScroll = () => setCompactHeader(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ready]);

  const filteredPhotos = useMemo(() => {
    if (activeResident === 'all') return photoFeed;
    return photoFeed.filter((p) => p.residentId === activeResident);
  }, [activeResident]);

  function handleSignOut() {
    clearSession();
    router.push('/login');
  }

  function handleAddResident(e) {
    e.preventDefault();
    if (!newResident.name.trim()) return;
    const initials = newResident.name
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase())
      .slice(0, 2)
      .join('');
    setResidents((rs) => [
      ...rs,
      {
        id: `r${Date.now()}`,
        name: newResident.name.trim(),
        relation: newResident.relation.trim() || 'Family member',
        community: newResident.community,
        suite: 'Suite assignment pending',
        moveIn: new Date().toISOString().slice(0, 10),
        initials: initials || 'JB',
        color: '#06206B',
        careLevel: 'Pending intake',
        recentNote: 'Welcome! The care team will share updates here as they get to know your loved one.',
      },
    ]);
    setNewResident({ name: '', relation: '', community: 'John Bertram House of Swampscott' });
    setAddingResident(false);
  }

  if (!ready) {
    return (
      <div className="portal-loading">
        <p>Loading your portal…</p>
      </div>
    );
  }

  const greetingName = 'Whitfield Family';

  return (
    <div className="portal">
      <header className={compactHeader ? 'portal-top portal-top-compact' : 'portal-top'}>
        <div className="container portal-top-inner">
          <div className="portal-top-text">
            <p className="eyebrow">Family Portal</p>
            <h1>Welcome, {greetingName}</h1>
            <p className="portal-sub">Here&apos;s what&apos;s new with your family at John Bertram Homes.</p>
          </div>
          <button type="button" className="portal-signout" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </header>

      <section className="portal-section">
        <div className="container">
          <div className="portal-section-head">
            <h2>Your family</h2>
            <button
              type="button"
              className="btn btn-navy portal-add-btn"
              onClick={() => setAddingResident((v) => !v)}
            >
              {addingResident ? 'Cancel' : '+ Add a loved one'}
            </button>
          </div>

          {addingResident && (
            <form className="portal-add-form" onSubmit={handleAddResident}>
              <label>
                <span>Their name</span>
                <input
                  type="text"
                  value={newResident.name}
                  onChange={(e) => setNewResident((r) => ({ ...r, name: e.target.value }))}
                  placeholder="e.g. Mary Sullivan"
                  required
                />
              </label>
              <label>
                <span>Your relation</span>
                <input
                  type="text"
                  value={newResident.relation}
                  onChange={(e) => setNewResident((r) => ({ ...r, relation: e.target.value }))}
                  placeholder="Mother, Father, Aunt..."
                />
              </label>
              <label>
                <span>Community</span>
                <select
                  value={newResident.community}
                  onChange={(e) => setNewResident((r) => ({ ...r, community: e.target.value }))}
                >
                  <option>John Bertram House of Salem</option>
                  <option>John Bertram House of Swampscott</option>
                </select>
              </label>
              <button type="submit" className="btn btn-gold">Add to my family</button>
            </form>
          )}

          <div className="portal-residents">
            {residents.map((r) => (
              <article key={r.id} className="resident-card">
                <div className="resident-avatar" style={{ background: r.color }}>
                  {r.initials}
                </div>
                <div className="resident-body">
                  <p className="resident-relation">{r.relation}</p>
                  <h3>{r.name}</h3>
                  <p className="resident-meta">{r.community}</p>
                  <p className="resident-meta">
                    {r.suite} · {r.careLevel}
                  </p>
                  <p className="resident-note">“{r.recentNote}”</p>
                  <p className="resident-meta resident-since">
                    With us since {formatDate(r.moveIn)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section portal-section-alt">
        <div className="container">
          <div className="portal-tabs">
            <button
              type="button"
              className={tab === 'photos' ? 'portal-tab active' : 'portal-tab'}
              onClick={() => setTab('photos')}
            >
              Photos
            </button>
            <button
              type="button"
              className={tab === 'events' ? 'portal-tab active' : 'portal-tab'}
              onClick={() => setTab('events')}
            >
              Upcoming
            </button>
            <button
              type="button"
              className={tab === 'messages' ? 'portal-tab active' : 'portal-tab'}
              onClick={() => setTab('messages')}
            >
              Care team
            </button>
          </div>

          {tab === 'photos' && (
            <>
              <div className="portal-filter">
                <button
                  type="button"
                  className={activeResident === 'all' ? 'portal-chip active' : 'portal-chip'}
                  onClick={() => setActiveResident('all')}
                >
                  Everyone
                </button>
                {residents.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className={activeResident === r.id ? 'portal-chip active' : 'portal-chip'}
                    onClick={() => setActiveResident(r.id)}
                  >
                    {r.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="portal-photo-grid">
                {filteredPhotos.map((p) => {
                  const r = residents.find((x) => x.id === p.residentId);
                  return (
                    <button
                      type="button"
                      key={p.src + p.date}
                      className="portal-photo"
                      onClick={() => setLightbox(p)}
                    >
                      <img src={p.src} alt={p.caption} loading="lazy" />
                      <div className="portal-photo-meta">
                        <strong>{p.caption}</strong>
                        <span>
                          {r ? r.name.split(' ')[0] : 'Community'} · {formatShortDate(p.date)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {filteredPhotos.length === 0 && (
                <p className="portal-empty">No photos yet for this family member. Check back soon.</p>
              )}
            </>
          )}

          {tab === 'events' && (
            <ul className="portal-events">
              {upcomingEvents.map((e) => (
                <li key={e.date + e.title}>
                  <div className="portal-event-date">
                    <span className="portal-event-day">{new Date(e.date).getDate()}</span>
                    <span className="portal-event-month">
                      {new Date(e.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>
                  <div>
                    <h4>{e.title}</h4>
                    <p>{e.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {tab === 'messages' && (
            <div className="portal-messages">
              <p className="portal-empty">
                Send a note to the care team and we&apos;ll get back to you the same business day.
              </p>
              <form
                className="portal-message-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.currentTarget.reset();
                  window.alert('Thanks! The care team will follow up shortly.');
                }}
              >
                <textarea
                  rows={4}
                  placeholder="Write a message to the care team…"
                  required
                />
                <button type="submit" className="btn btn-gold">Send message</button>
              </form>
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div
          className="portal-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="portal-lightbox-close"
            aria-label="Close photo"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <figcaption>
              <strong>{lightbox.caption}</strong>
              <span>{formatDate(lightbox.date)}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
