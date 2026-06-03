import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import ActivityCalendars from '@/components/ActivityCalendars';
import JsonLd, { faqSchema, breadcrumbSchema, SALEM_BUSINESS, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

export const metadata = {
  title: 'Vibrant Activities & Monthly Calendars | John Bertram Homes',
  description:
    'Exercise, music, arts, outings, religious services, and community events at John Bertram Homes in Salem and Swampscott, MA. View monthly activity calendars for each community.',
  alternates: { canonical: 'https://bertramhouse.org/activities' },
};

const categoryCards = [
  { title: 'Exercise & Movement', desc: 'Gentle movement, stretching, walking, and wellness activities throughout the week.' },
  { title: 'Arts & Creativity', desc: 'Crafts, painting, music, and creative programs that bring color into the day.' },
  { title: 'Games & Social Programs', desc: 'Trivia, cards, group games, and social gatherings that build friendships.' },
  { title: 'Cultural Outings', desc: 'Seasonal outings, local experiences, and community events across the North Shore.' },
  { title: 'Religious Services', desc: 'Spiritual and religious programming for residents who value faith-based connection.' },
  { title: 'Family & Community Events', desc: 'Programs that bring residents, families, volunteers, and staff together.' },
];

const sampleWeek = [
  { day: 'Monday', morning: 'Chair fitness', afternoon: 'Crafts & creative arts', evening: 'Movie night' },
  { day: 'Tuesday', morning: 'Walking group', afternoon: 'Trivia & brain teasers', evening: 'Music & sing-along' },
  { day: 'Wednesday', morning: 'Stretching class', afternoon: 'Continuing education talk', evening: 'Social hour' },
  { day: 'Thursday', morning: 'Chair dance', afternoon: 'Shopping outing', evening: 'Card games' },
  { day: 'Friday', morning: 'Gentle yoga', afternoon: 'Live performance', evening: 'Resident-favorite film' },
  { day: 'Saturday', morning: 'Scenic drive', afternoon: 'Bingo', evening: 'Family event or gathering' },
  { day: 'Sunday', morning: 'Church transportation', afternoon: 'Brunch & conversation', evening: 'Quiet reading hour' },
];

const calendarsData = {
  label: 'Monthly Activity Calendars',
  salem: {
    locationName: 'John Bertram House of Salem',
    monthLabel: 'June 2026',
    pdf: '/calendars/salem-activities-june-2026.pdf',
    images: ['/images/calendars/salem-activities-june-2026.png'],
    highlights: [
      { title: 'Salem Common Walks', desc: 'Weather-permitting strolls across one of America’s oldest public commons.' },
      { title: 'Gifts for the Soul', desc: 'Our award-winning non-denominational spiritual program continues weekly.' },
      { title: 'Live Music in the Ballroom', desc: 'Visiting musicians perform in the dining-room ballroom with 18-foot ceilings.' },
      { title: 'Community Lectures', desc: 'Slide presentations and continuing-education talks on history, art, and culture.' },
      { title: 'Holiday & Birthday Celebrations', desc: 'Seasonal events that bring residents, families, and staff together around the table.' },
    ],
  },
  swampscott: {
    locationName: 'John Bertram House of Swampscott',
    monthLabel: 'June 2026',
    pdf: '/calendars/swampscott-activities-june-2026.pdf',
    images: [
      '/images/calendars/swampscott-activities-june-2026-1.png',
      '/images/calendars/swampscott-activities-june-2026-2.png',
    ],
    highlights: [
      { title: 'Chair Dance & Chair Chi', desc: 'Group movement classes that meet residents where they are.' },
      { title: 'Library & Reading Circle', desc: 'Intimate book gatherings by the fireplace in our library.' },
      { title: 'Community Outings', desc: 'Shopping trips, restaurant excursions, and North Shore Music Theatre visits.' },
      { title: 'Reminiscence Programs', desc: 'Memory-friendly activities for our Reminiscence neighborhood residents.' },
      { title: 'Communion & Protestant Worship', desc: 'On-site spiritual programming offered throughout the month.' },
    ],
  },
};

const faqs = [
  { q: 'How often are activities offered?', a: 'Activities are offered daily at both communities — morning, afternoon, and evening. The calendar varies month to month based on resident interests, seasons, and special events.' },
  { q: 'Are activities optional?', a: 'Yes. Residents choose what they want to join. Our team helps connect each resident with programs that fit their interests, abilities, and energy on any given day.' },
  { q: 'Are there different calendars for Salem and Swampscott?', a: 'Yes. Each community has its own activities team and monthly calendar. The two calendars share a similar philosophy but reflect each community’s personality and resident interests.' },
  { q: 'Do residents go on outings?', a: 'Regularly. Outings include shopping trips, restaurants, scenic drives, cultural attractions, religious services, theater visits, and seasonal events across Boston’s North Shore.' },
  { q: 'Are families welcome at events?', a: 'Yes — family and community events are a regular part of programming. We love seeing families join in.' },
  { q: 'Are religious services available?', a: 'Yes. Both communities offer religious and spiritual programming. Salem includes our award-winning non-denominational "Gifts for the Soul" program, and Swampscott offers communion, Protestant worship, and holiday celebrations.' },
  { q: 'How are activities adapted for memory care residents at Swampscott?', a: 'Our Reminiscence neighborhood at Swampscott offers memory-friendly programming — music, gentle movement, reminiscence, and sensory activities designed for residents living with Alzheimer’s and dementia.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Activities', path: '/activities' },
];

export default function ActivitiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={SALEM_BUSINESS} />
      <JsonLd data={SWAMPSCOTT_BUSINESS} />

      <div className="page-hero">
        <p className="eyebrow">Our Care</p>
        <h1>Daily Activities That Keep Residents Connected, Engaged, and Inspired</h1>
        <p>Life at John Bertram Homes is shaped by meaningful daily experiences. From exercise and music to outings, games, arts, religious services, and community events, residents have opportunities to stay active, social, and connected.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          <Link href="/contact" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>Purposeful Days, Meaningful Moments</p>
              <h2>Activities Are Not Filler</h2>
              <p>Daily programs at John Bertram Homes support routine, friendships, physical movement, cognitive engagement, creativity, spiritual life, and emotional well-being. They’re the reason most days don’t feel long.</p>
              <p>For families worried that a parent or loved one will be isolated, this is where to look first. A well-run activities calendar is one of the most reliable measures of community life — and at both Salem and Swampscott, ours is full.</p>
            </div>
            <div className="image-block">
              <img
                src="/images/swampscott/3rdfloormusic1.jpg"
                alt="Residents participating in a music program at John Bertram House"
                style={{ height: '420px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Activity Categories</p>
            <h2>What a Week Might Include</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {categoryCards.map((c) => (
              <FadeIn key={c.title} className="feature-item">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="calendar" style={{ scrollMarginTop: '90px' }}>
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Monthly Calendars</p>
            <h2>Salem &amp; Swampscott Activity Calendars</h2>
            <p>Browse the current calendar for either community. Programming varies month to month.</p>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn>
            <ActivityCalendars {...calendarsData} />
          </FadeIn>
          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.88rem', color: '#666' }}>
            Need the latest calendar? <Link href="/contact" style={{ color: 'var(--navy)', fontWeight: 600 }}>Request it from our team</Link>.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Daily Rhythm</p>
            <h2>A Sample Week</h2>
            <p>An evergreen sample to help families picture the daily rhythm. Real programming varies — see the monthly calendars above for what’s happening now.</p>
            <div className="divider"></div>
          </FadeIn>

          <FadeIn style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', maxWidth: '900px', margin: '0 auto', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <thead>
                <tr style={{ background: 'var(--navy)', color: '#fff' }}>
                  <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', letterSpacing: '0.1em' }}>Day</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', letterSpacing: '0.1em' }}>Morning</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', letterSpacing: '0.1em' }}>Afternoon</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', letterSpacing: '0.1em' }}>Evening</th>
                </tr>
              </thead>
              <tbody>
                {sampleWeek.map((d, i) => (
                  <tr key={d.day} style={{ borderBottom: i === sampleWeek.length - 1 ? 'none' : '1px solid #ececec' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem' }}>{d.day}</td>
                    <td style={{ padding: '12px 14px', fontSize: '0.9rem', color: '#555' }}>{d.morning}</td>
                    <td style={{ padding: '12px 14px', fontSize: '0.9rem', color: '#555' }}>{d.afternoon}</td>
                    <td style={{ padding: '12px 14px', fontSize: '0.9rem', color: '#555' }}>{d.evening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">The People Behind the Programs</p>
            <h2>Activities Teams at Salem &amp; Swampscott</h2>
            <p>Programming is shaped by people who know our residents personally. Meet the Activities team on our <Link href="/leadership" style={{ color: 'var(--navy)', fontWeight: 600 }}>Our Team</Link> page, or visit during a class.</p>
            <div className="divider"></div>
          </FadeIn>

          <div style={{ textAlign: 'center' }}>
            <Link href="/contact" className="btn btn-navy">Request the Current Activities Calendar</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <FadeIn>
            <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.8, color: '#333', margin: '0 0 16px' }}>
              &ldquo;Everyone here is loving and kind, always trying to help in every way they can. I feel truly at home and cared for at Bertram House.&rdquo;
            </blockquote>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>&mdash; An 8-year resident</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Questions Families Ask</p>
            <h2>Frequently Asked Questions</h2>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn style={{ maxWidth: '820px', margin: '0 auto' }}>
            <FAQ items={faqs} />
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="callout-box" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <h3>See the John Bertram Difference in Person</h3>
            <p>The best way to feel our communities is to visit during an activity. Schedule a tour and we’ll time your visit accordingly.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
              <Link href="/contact" className="btn btn-navy">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
