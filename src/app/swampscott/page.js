import Link from 'next/link';
import Tabs from '@/components/Tabs';
import JsonLd, { breadcrumbSchema, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

export const metadata = {
  title: 'John Bertram House of Swampscott — Assisted Living & Memory Care',
  description:
    'Assisted living and memory care one block from the ocean at 565 Humphrey Street, Swampscott, MA. 59 residences and a dedicated Reminiscence neighborhood for Alzheimer’s and memory loss.',
  alternates: { canonical: 'https://bertramhouse.org/swampscott' },
};

const overview = (
  <>
    <div className="two-col">
      <div className="content-block">
        <h2>Exceptional Senior Living by the Sea</h2>
        <p>John Bertram House of Swampscott offers an unparalleled assisted living experience just one block from the ocean on beautiful Humphrey Street — often described as feeling &quot;more like a bed and breakfast than a resort or hospital.&quot;</p>
        <p>Established in 1997 on the former site of the historic New Ocean House Hotel, our community brings together the warmth of a family home and the resources of an expertly managed senior living community. With <strong>59 beautifully appointed residences</strong>, ocean access within a 10-minute walk, and a team of dedicated, experienced caregivers, life here is truly exceptional.</p>
      </div>
      <div className="image-block">
        <img src="/images/swampscott/exterior1.jpg" alt="John Bertram House of Swampscott exterior" />
      </div>
    </div>

    <div style={{ marginTop: '48px' }}>
      <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '24px' }}>Life at John Bertram House of Swampscott</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {[
          {
            title: 'Ocean Access',
            desc: 'Ocean access within 10 minutes walking distance; spacious outdoor patios for sunshine and fresh air.',
            img: '/images/swampscott/exterior5.jpg',
            icon: (<svg viewBox="0 0 24 24"><path d="M2 17l5-5 4 4 5-7 6 8" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 21c2-1 4-1 6 0s4 1 6 0 4-1 6 0" strokeLinecap="round" strokeLinejoin="round"/></svg>),
          },
          {
            title: 'Universal Caregiver Model',
            desc: 'CNAs and HHAs serve meals, manage laundry, lead activities, and provide personal care.',
            img: '/images/swampscott/lobby1.jpg',
            icon: (<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>),
          },
          {
            title: 'Memory Care',
            desc: "Dedicated Reminiscence neighborhood for residents with Alzheimer's and memory loss.",
            img: '/images/swampscott/3rdfloormusic1.jpg',
            icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
          },
          {
            title: 'Pet-Friendly',
            desc: 'Pets welcome (some restrictions apply) — because furry companions matter.',
            img: '/images/swampscott/sunroom1.jpg',
            icon: (<svg viewBox="0 0 24 24"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="14" r="2"/><circle cx="4" cy="8" r="2"/><path d="M8 22c-2 0-3-1.5-3-3 0-3 4-4 4-7 0-1.5 1-3 3-3s3 1.5 3 3c0 3 4 4 4 7 0 1.5-1 3-3 3-2 0-3-1-4-1s-2 1-4 1z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
          },
        ].map((c) => (
          <div key={c.title} style={{ background: '#fff', border: '1px solid #ececec', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
            <img src={c.img} alt={c.title} style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} loading="lazy" />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <div className="tile-icon">{c.icon}</div>
              <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '8px' }}>{c.title}</h4>
              <p style={{ fontSize: '0.88rem', color: '#555' }}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

const suites = (
  <>
    <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222', marginBottom: '8px' }}>Our Residences &amp; Common Areas</h2>
    <p style={{ color: '#666', marginBottom: '40px' }}>59 total residences in three styles, plus beautifully appointed common areas that make every day feel like home.</p>

    <div className="suite-cards" style={{ marginBottom: '48px' }}>
      {[
        { img: '/images/swampscott/room1.jpg', alt: 'One-bedroom living area', title: 'One-Bedroom Apartments', tagline: 'Most spacious option', body: 'Separate living room, private bedroom, bathroom, and kitchenette with one or two closets. Select first-floor units offer deck or patio access for outdoor enjoyment.' },
        { img: '/images/swampscott/2ndroom1.jpg', alt: 'Studio residence', title: 'Studio Residences', tagline: 'Efficient & comfortable', body: 'Private bedroom, bathroom, kitchenette, and ample closet space. Select first-floor studios feature deck access. A cozy, manageable space for comfortable living.' },
        { img: '/images/swampscott/room3.jpg', alt: 'Companion residence entrance', title: 'Companion Residences', tagline: 'Memory care neighborhood', body: 'Available exclusively in our Reminiscence (memory care) neighborhood. Shared living arrangements to promote social connection and emotional growth for memory care residents.' },
      ].map((s) => (
        <div key={s.title} className="suite-card">
          <img className="suite-img" src={s.img} alt={s.alt} />
          <div className="suite-card-header suite-card-swampscott">
            <h3>{s.title}</h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '4px' }}>{s.tagline}</p>
          </div>
          <div className="suite-card-body">
            <p>{s.body}</p>
          </div>
        </div>
      ))}
    </div>

    <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '24px' }}>Common Areas &amp; Spaces</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      {[
        { img: '/images/swampscott/lobby1.jpg', alt: 'Foyer and living room', title: 'Foyer / Living Room', desc: 'A welcoming space for casual conversation and catching up on the newspaper over morning coffee.' },
        { img: '/images/swampscott/sunroom1.jpg', alt: 'Sunroom', title: 'Sunroom', desc: 'Bright and cheerful gathering space for Scrabble, bridge, games, and social activities.' },
        { img: '/images/swampscott/1stdining1.jpg', alt: 'Dining room', title: 'Dining Room', desc: '"Often compared to a country inn" — elegant table settings create a warm, inviting atmosphere.' },
        { img: '/images/swampscott/3rdfloortvroom1.jpg', alt: 'TV room', title: 'TV Room', desc: 'Movies, exercise programs, group activities, and everything in between for entertaining afternoons.' },
        { img: '/images/swampscott/library4.jpg', alt: 'Library with fireplace', title: 'Library', desc: 'Intimate room with classic and new books, and a cozy fireplace — perfect for quiet reading.' },
        { img: '/images/swampscott/exterior8.jpg', alt: 'Outdoor courtyard', title: 'Outdoor Spaces', desc: 'Large outdoor courtyard and patios for enjoying the sunshine and refreshing North Shore sea breezes.' },
      ].map((c) => (
        <div key={c.title} style={{ background: 'var(--off-white)', borderRadius: '6px', overflow: 'hidden' }}>
          <img className="room-img" src={c.img} alt={c.alt} />
          <div style={{ padding: '16px' }}>
            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '6px' }}>{c.title}</h4>
            <p style={{ fontSize: '0.85rem', color: '#555' }}>{c.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

const services = (
  <>
    <div className="two-col" style={{ marginBottom: '48px' }}>
      <div>
        <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '20px' }}>Included in Base Rate</h3>
        <div className="amenities-grid">
          {['3 meals daily + snacks', 'Weekly housekeeping', 'Daily bed-making', 'Weekly laundry', 'Full activities calendar', 'On-site hair salon', 'Most utilities incl.', 'WiFi available', 'Pet-friendly', 'Emergency alert system', 'Outdoor spaces'].map((a) => (
            <div key={a} className="amenity-item"><span>-</span> {a}</div>
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '20px' }}>Additional Services</h3>
        <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px' }}>
          <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: '#333', marginBottom: '8px' }}>Activities of Daily Living</h4>
            <p style={{ fontSize: '0.88rem', color: '#555' }}>Assistance with bathing, dressing, grooming, and mobility — tailored to each resident&apos;s needs.</p>
          </div>
          <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: '#333', marginBottom: '8px' }}>Medication Management</h4>
            <p style={{ fontSize: '0.88rem', color: '#555' }}>Comprehensive medication oversight and reminders coordinated with your personal physician.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: '#333', marginBottom: '8px' }}>Memory Care Support</h4>
            <p style={{ fontSize: '0.88rem', color: '#555' }}>Specialized Reminiscence neighborhood care for residents with Alzheimer&apos;s and other memory loss conditions.</p>
          </div>
        </div>

        <div style={{ borderRadius: '8px', overflow: 'hidden', marginTop: '20px' }}>
          <img src="/images/swampscott/3rdfloormusic1.jpg" alt="Reminiscence memory care neighborhood activities" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
          <div style={{ background: 'var(--off-white)', color: '#222', padding: '20px', borderTop: '1px solid #ececec' }}>
            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', color: 'var(--teal)' }}>Universal Caregiver Model</h4>
            <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.7 }}>Our CNAs and Home Health Aides wear multiple hats — serving meals, managing laundry, leading activities, and providing personal care. This model creates deeper bonds between staff and residents.</p>
          </div>
        </div>
      </div>
    </div>

  </>
);

const activities = (
  <>
    <div className="two-col" style={{ marginBottom: '48px' }}>
      <div className="content-block">
        <h2>Vibrant Activities Program</h2>
        <p>Life at John Bertram House of Swampscott is full and engaging. Our comprehensive activities calendar offers something for every interest and ability — from vigorous exercise to quiet contemplation, from artistic expression to community service.</p>
        <p>We regularly venture out to the finest cultural attractions of Boston&apos;s North Shore and beyond.</p>
        <div className="callout-box" style={{ marginTop: '24px' }}>
          <h3>Vibrant Activity Programs</h3>
          <p>See everything happening this month — exercise, music, outings, games, spiritual life, and more — on our full monthly activities calendar.</p>
          <Link href="/activities?loc=swampscott#calendar" className="btn btn-swampscott" style={{ marginTop: '8px' }}>Go to Activities Calendar</Link>
        </div>
      </div>
      <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden' }}>
        <img src="/images/swampscott/exterior5.jpg" alt="Outdoor garden and grounds at John Bertram House of Swampscott" style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      {[
        { title: 'Exercise & Wellness', items: ['Chair dance classes', 'Yoga', 'Chair chi', 'Chaboom classes'] },
        { title: 'Games & Social', items: ['Scrabble & Bridge', 'Bingo & Rummikub', 'Brain teasers', 'Social gatherings'] },
        { title: 'Education & Arts', items: ['The Great Courses lectures', 'Art history presentations', 'Trivia', 'Creative arts'] },
        { title: 'Spiritual Life', items: ['Communion services', 'Protestant worship', 'Holiday celebrations'] },
        { title: 'Community Outings', items: ['Shopping & restaurants', 'Theater productions', 'North Shore Music Theatre'] },
      ].map((c) => (
        <div key={c.title} style={{ padding: '24px', background: 'var(--off-white)', borderRadius: '8px', borderTop: '4px solid var(--teal)' }}>
          <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '12px' }}>{c.title}</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: '#555', lineHeight: 2 }}>
            {c.items.map((it) => (<li key={it}>• {it}</li>))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

const directions = (
  <div className="contact-layout">
    <div className="contact-info">
      <h3>Address &amp; Contact</h3>
      <div className="contact-facility contact-facility-swampscott">
        <h4>John Bertram House of Swampscott</h4>
        <p><a href="https://maps.google.com/?q=565+Humphrey+Street,+Swampscott,+MA+01907" target="_blank" rel="noopener noreferrer">565 Humphrey Street<br />Swampscott, MA 01907</a><br />
        <a href="tel:7815951991">(781) 595-1991</a> — Main</p>
      </div>

      <h3>Schedule a Tour</h3>
      <p>We respond within one business day. We&apos;d love to show you our beautiful community.</p>
      <p style={{ marginTop: '12px' }}>
        <Link href="/contact?loc=swampscott" className="btn" style={{ background: 'var(--teal)', color: '#fff', borderColor: 'var(--teal)', fontSize: '0.8rem', padding: '12px 24px' }}>Contact Us</Link>
      </p>
    </div>

    <div>
      <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '24px' }}>Driving Directions</h3>

      <div className="directions-block">
        <h4>From Boston</h4>
        <p>Take the Callahan Tunnel north on Route 1A past Logan Airport (~3 miles). Bear right toward Lynn/Marblehead; pass Wonderland MBTA and continue through Lynn. Exit Route 1A at Carroll Parkway; take the rotary to Swampscott along the shoreline (~1.8 miles). Pass Papa John&apos;s; turn left on Route 129. John Bertram House is ¼ mile on the right.</p>
      </div>

      <div className="directions-block">
        <h4>From the South</h4>
        <p>Take Route 128 North to Exit 44B (Danvers/Lynn). Follow Route 129 East 3.1 miles toward Swampscott, then follow 129A East to the ocean. Turn left on Route 129 along the shoreline; John Bertram House is approximately ¼ mile on the right at Humphrey Street.</p>
      </div>

      <div className="directions-block">
        <h4>From the North</h4>
        <p>Take Route 128 South to Exit 25 (Route 114 East/Salem). Follow signs through Salem to Salem State College; turn right on Route 1A toward Swampscott. At Vinnin Square, turn left then immediately right onto Salem Street. Follow to Humphrey Street; facility is ½ mile on the left.</p>
      </div>

      <div style={{ background: 'var(--off-white)', color: '#222', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ececec', marginTop: '16px' }}>
        <iframe
          title="John Bertram House of Swampscott — Map"
          src="https://maps.google.com/maps?q=565+Humphrey+Street,+Swampscott,+MA+01907&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="320"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div style={{ padding: '16px 20px', textAlign: 'center' }}>
          <a href="https://maps.google.com/?q=565+Humphrey+Street,+Swampscott,+MA+01907" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--teal)', fontWeight: 600 }}>Open in Google Maps →</a>
        </div>
      </div>
    </div>
  </div>
);

const dining = (
  <div>
    <div className="two-col" style={{ marginBottom: '48px' }}>
      <div className="content-block">
        <h2>Dining by the Sea</h2>
        <p>Meals at John Bertram House of Swampscott are a highlight of every day. Our dining room — &quot;often compared to a country inn&quot; — sets a warm, elegant stage with attentive service and the company of friends and neighbors.</p>
        <p>Our chefs prepare fresh, home-style meals daily, accommodating special dietary needs and preferences as part of each resident&apos;s personalized service plan. Through our <strong>Universal Caregiver Model</strong>, the same caring team that serves your meals knows you by name.</p>
        <p>Three meals a day plus snacks are included, with hydration and fresh options available throughout the day.</p>
      </div>
      <div className="image-block">
        <img src="/images/swampscott/1stdining1.jpg" alt="Elegant country-inn style dining room at John Bertram House of Swampscott" />
      </div>
    </div>

    <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: '24px' }}>Daily Meal Schedule</h3>
    <div className="meal-cards">
      {[
        { title: 'Breakfast', desc: 'A flexible morning with coffee, tea, fresh fruit, cereals, eggs, and breakfast favorites — start your day your way.' },
        { title: 'Lunch', desc: 'A hearty midday meal with chef-prepared entrées, fresh vegetables, salads, and desserts served in our elegant dining room.' },
        { title: 'Dinner', desc: 'A lighter evening meal of soups, sandwiches, comforting entrées, and sweet finishes shared with friends.' },
        { title: 'Daily Snacks', desc: 'Fresh fruit, baked goods, and refreshments available throughout the day in our common areas.' },
      ].map((m) => (
        <div key={m.title} className="meal-card">
          <h4>{m.title}</h4>
          <p>{m.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const swampscottTeam = [
  { name: 'Robert Wasserman, MPH', title: 'Executive Director', img: '/images/staff/RobertWasserman.jpg' },
  { name: 'Marisa Waters', title: 'Assisted Living Coordinator', img: '/images/staff/MarisaWaters_head.jpg' },
  { name: 'Pablo Solorzano', title: 'Reminiscence Coordinator', img: '/images/staff/Pablo Solorzano.jpg' },
  { name: 'Athena Raptis', title: 'Activities Director', img: '/images/staff/AthenaRaptis.jpg' },
  { name: 'Eddy Morales', title: 'Dining Service Coordinator', img: '/images/staff/EddyMorales.jpg' },
  { name: 'Jim Vahey', title: 'Maintenance Coordinator', img: '/images/staff/JimVahey.jpg' },
];

const team = (
  <div>
    <div className="section-header" style={{ marginBottom: '40px' }}>
      <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222' }}>Meet Our Team</h2>
      <p style={{ color: '#666', maxWidth: '560px', margin: '12px auto 0' }}>Our dedicated Swampscott team supports both assisted living and Reminiscence memory care residents.</p>
    </div>
    <div className="team-grid">
      {swampscottTeam.map((m) => (
        <div key={m.name} className="leader-card">
          <div className="leader-avatar">{m.img ? <img src={m.img} alt={m.name} /> : m.initials}</div>
          <h4>{m.name}</h4>
          <p className="leader-title">{m.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const tabs = [
  { id: 'overview', label: 'Overview', content: overview },
  { id: 'suites', label: 'Our Residences', content: suites },
  { id: 'services', label: 'Services & Wellness', content: services },
  { id: 'dining', label: 'Dining', content: dining },
  { id: 'activities', label: 'Activities', content: activities },
  { id: 'team', label: 'Our Team', content: team },
  { id: 'directions', label: 'Directions', content: directions },
];

export default function SwampscottPage() {
  return (
    <>
      <JsonLd data={SWAMPSCOTT_BUSINESS} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Swampscott', path: '/swampscott' }])} />
      <div className="facility-hero facility-hero-swampscott">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--teal)', marginBottom: '12px' }}>Exceptional Senior Living on Boston&apos;s North Shore</p>
          <h1>John Bertram House of Swampscott</h1>
          <p>One block from the ocean — 59 beautifully appointed residences with personalized care, vibrant activities, and ocean access within 10 minutes walking distance.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
            <Link href="/contact?loc=swampscott" className="btn btn-swampscott">Schedule a Tour</Link>
            <a href="tel:7815951991" className="btn btn-navy">(781) 595-1991</a>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', color: 'var(--navy)', padding: '24px 0', borderTop: '1px solid #ececec', borderBottom: '1px solid #ececec' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', textAlign: 'center' }}>
            {[
              { n: '1997', l: 'Established' },
              { n: '29', l: 'Years of Service' },
              { n: '59', l: 'Residences' },
              { n: '1 Block', l: 'From the Ocean' },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.8rem', fontWeight: 700 }}>{s.n}</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#666' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </>
  );
}
