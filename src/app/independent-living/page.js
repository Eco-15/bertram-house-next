import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FamilyCommunication from '@/components/FamilyCommunication';
import JsonLd, { breadcrumbSchema, SALEM_BUSINESS, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

// NOTE: Pending client confirmation of whether John Bertram Homes currently offers an
// independent-living tier. This page is written as an inquiry-oriented landing page; once
// the offering is confirmed, expand the "What Independent Living Includes" section with the
// specific amenities and pricing model.

export const metadata = {
  title: 'Independent Living | John Bertram Homes',
  description:
    'Independent living options at John Bertram Homes on Massachusetts’ North Shore. Maintenance-free living with community, dining, and activities — and care available as needs change.',
  alternates: { canonical: 'https://bertramhouse.org/independent-living' },
};

const highlights = [
  { title: 'Maintenance-Free Living', desc: 'Leave home upkeep, cooking, and housekeeping behind and focus on the things you enjoy most.' },
  { title: 'Built-In Community', desc: 'Neighbors, shared meals, and a full activities calendar make connection effortless.' },
  { title: 'Dining & Activities', desc: 'Chef-prepared meals and a vibrant program of outings, classes, and social events.' },
  { title: 'Care When You Need It', desc: 'Should needs change over time, our assisted living and memory care support is right here — no disruptive move required.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Independent Living', path: '/independent-living' },
];

export default function IndependentLivingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={SALEM_BUSINESS} />
      <JsonLd data={SWAMPSCOTT_BUSINESS} />

      <div className="page-hero">
        <p className="eyebrow">Living Experiences · Independent Living</p>
        <h1>Independent Living on the North Shore</h1>
        <p>Enjoy an active, maintenance-free lifestyle with the comfort of knowing support is available whenever you need it. Talk with our team about independent living options at John Bertram Homes.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          <Link href="/contact" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>Freedom With Peace of Mind</p>
              <h2>Live the Way You Like It</h2>
              <p>Independent living is for active older adults who want the freedom of their own space without the burdens of home maintenance. Enjoy chef-prepared dining, social activities, and a welcoming community — on your own schedule.</p>
              <p>And because John Bertram Homes is built around a continuum of care, support is here if your needs ever change. You can settle in knowing assisted living and memory care are part of the same trusted community.</p>
              <p style={{ background: 'var(--off-white)', padding: '16px 20px', borderLeft: '4px solid var(--navy)', borderRadius: '4px', fontSize: '0.95rem', color: '#444' }}>
                Interested in independent living? <Link href="/contact" style={{ color: 'var(--navy)', fontWeight: 600 }}>Reach out to our team</Link> and we’ll walk you through current availability and options at each community.
              </p>
            </div>
            <div className="image-block">
              <img
                src="/images/swampscott/1stdining5.jpg"
                alt="A team member sharing the menu with a smiling resident in the dining room at John Bertram House"
                style={{ height: '420px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">What Independent Living Offers</p>
            <h2>An Easy, Engaged Lifestyle</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {highlights.map((c) => (
              <FadeIn key={c.title} className="feature-item">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FamilyCommunication />

      <section className="section section-light">
        <div className="container">
          <FadeIn className="callout-box" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <h3>Explore Independent Living With Us</h3>
            <p>Schedule a visit to either community and we’ll help you picture daily life and explore the options that fit you best.</p>
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
