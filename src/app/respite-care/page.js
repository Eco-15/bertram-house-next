import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import FamilyCommunication from '@/components/FamilyCommunication';
import JsonLd, { faqSchema, breadcrumbSchema, SALEM_BUSINESS, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

// NOTE: Copy below is a placeholder draft based on standard respite-care offerings.
// Replace the marked sections with the client's attached respite-care document when provided
// (length of stay, pricing, what's included, availability by location).

export const metadata = {
  title: 'Respite & Short-Term Care | John Bertram Homes',
  description:
    'Short-term respite care at John Bertram Homes in Salem and Swampscott, MA. A safe, supportive stay with meals, activities, and personal care — ideal after a hospital stay or for caregiver relief.',
  alternates: { canonical: 'https://bertramhouse.org/respite-care' },
};

const reasons = [
  { title: 'Caregiver Relief', desc: 'A trusted place for your loved one to stay while you travel, recover, or simply rest and recharge.' },
  { title: 'Recovery After a Hospital Stay', desc: 'Supportive short-term care during recovery from surgery, illness, or a hospital discharge.' },
  { title: 'Try Before You Decide', desc: 'Experience community life firsthand — many families use a respite stay to explore assisted living.' },
  { title: 'Seasonal & Travel Stays', desc: 'A comfortable, fully supported option when family caregivers are away for a season or a trip.' },
];

const included = [
  'A fully furnished room',
  'Three meals daily plus snacks',
  'Personal care and medication support',
  'Housekeeping and laundry',
  'A full calendar of activities and outings',
  'Access to common spaces and amenities',
];

const faqs = [
  { q: 'What is respite care?', a: 'Respite care is a short-term stay in our community that provides the same meals, activities, and personal care our full-time residents enjoy. It’s ideal for caregiver relief, recovery after a hospital stay, or experiencing community life before making a longer-term decision.' },
  { q: 'How long can a respite stay last?', a: 'Respite stays are flexible and arranged based on need and availability. Contact our team to discuss timing — we’ll work with you to find an arrangement that fits. [Confirm minimum/maximum length of stay per client document.]' },
  { q: 'What’s included in a respite stay?', a: 'A respite stay typically includes a furnished room, three daily meals plus snacks, personal care and medication support, housekeeping and laundry, and full access to activities and common spaces.' },
  { q: 'Is respite care available at both locations?', a: 'Respite availability varies by community and season. Please contact John Bertram House of Salem or Swampscott directly to check current availability.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Respite Care', path: '/respite-care' },
];

export default function RespiteCarePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={SALEM_BUSINESS} />
      <JsonLd data={SWAMPSCOTT_BUSINESS} />

      <div className="page-hero">
        <p className="eyebrow">Living Experiences · Respite Care</p>
        <h1>Short-Term Respite Care</h1>
        <p>A safe, welcoming place for a short-term stay — with all the comforts, care, and community of life at John Bertram Homes. Perfect for recovery, caregiver relief, or simply trying out community living.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact" className="btn btn-gold">Inquire About Availability</Link>
          <Link href="/contact" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      {/* TODO(client): replace the intro copy below with the attached respite-care document. */}
      <section className="section">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>Support When You Need It Most</p>
              <h2>A Comfortable Short-Term Stay</h2>
              <p>Respite care gives your loved one a fully supported short-term stay in our community — and gives family caregivers the peace of mind to travel, recover, or rest. Guests enjoy the same meals, activities, personal care, and warm surroundings as our full-time residents.</p>
              <p>Whether you need coverage for a few days, a recovery period after a hospital stay, or a longer seasonal arrangement, our team will help you find a comfortable solution.</p>
            </div>
            <div className="image-block">
              <img
                src="/images/swampscott/3rdfloormusic2.jpg"
                alt="Residents enjoying a group sing-along activity at John Bertram House"
                style={{ height: '420px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">When Respite Care Helps</p>
            <h2>Common Reasons Families Choose Respite</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {reasons.map((c) => (
              <FadeIn key={c.title} className="feature-item">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">What’s Included</p>
            <h2>Everything for a Comfortable Stay</h2>
            <div className="divider"></div>
          </FadeIn>

          <FadeIn style={{ maxWidth: '720px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {included.map((s) => (
                <li key={s} style={{ display: 'flex', alignItems: 'start', gap: '14px', padding: '14px 18px', background: '#fff', border: '1px solid #ececec', borderRadius: '8px', marginBottom: '10px', fontSize: '0.98rem', color: '#444' }}>
                  <span style={{ color: 'var(--navy)', fontWeight: 700, marginTop: '2px' }}>✓</span> {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <FamilyCommunication />

      <section className="section">
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

      <section className="section section-light">
        <div className="container">
          <FadeIn className="callout-box" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <h3>Ask About a Respite Stay</h3>
            <p>Respite availability varies by community and season. Reach out and we’ll help you find a comfortable short-term arrangement.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link href="/contact" className="btn btn-gold">Inquire Now</Link>
              <Link href="/contact" className="btn btn-navy">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
