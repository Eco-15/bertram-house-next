import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import JsonLd, { faqSchema, breadcrumbSchema, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

export const metadata = {
  title: 'Memory Care in Swampscott, MA | John Bertram House',
  description:
    'Dedicated memory care for Alzheimer’s and dementia at John Bertram House of Swampscott. Structured, safe, and compassionate support on Boston’s North Shore.',
  alternates: { canonical: 'https://bertramhouse.org/memory-care' },
};

const careCards = [
  { title: 'Structured Daily Routines', desc: 'Predictable rhythms help residents feel secure, oriented, and at ease throughout the day.' },
  { title: 'Safe, Supportive Spaces', desc: 'Familiar surroundings reduce confusion and support comfort, with thoughtful design throughout the neighborhood.' },
  { title: 'Compassionate Staff', desc: 'Our team approaches memory loss with patience, empathy, and respect — every interaction matters.' },
  { title: 'Meaningful Activities', desc: 'Programs may include music, gentle movement, reminiscence, sensory engagement, and familiar experiences.' },
  { title: 'Personalized Support', desc: 'Care is adapted to each resident’s abilities, preferences, and stage of memory loss.' },
  { title: 'Family Partnership', desc: 'Families receive communication, guidance, and support as care needs change over time.' },
];

const rightTimeSignals = [
  'Wandering or getting lost in familiar places',
  'Increasing confusion or disorientation',
  'Difficulty with medications, bathing, dressing, or meals',
  'Safety concerns at home',
  'Changes in mood, behavior, or sleep',
  'Caregiver stress or burnout',
  'Isolation or loss of daily routine',
];

const faqs = [
  { q: 'What is memory care?', a: 'Memory care is a dedicated level of assisted living for residents living with Alzheimer’s disease, dementia, or other forms of memory loss. It combines daily care with structured routines, a secure environment, and specialized engagement designed to support residents at every stage.' },
  { q: 'How is memory care different from assisted living?', a: 'Assisted living supports residents who need help with some daily tasks but want to maintain a high degree of independence. Memory care offers more structure, a more familiar physical environment, and staff trained specifically to support residents with memory loss.' },
  { q: 'Is memory care available at both locations?', a: 'No. Memory care is offered exclusively at John Bertram House of Swampscott. John Bertram House of Salem provides assisted living but not dedicated memory care.' },
  { q: 'How do you support residents with Alzheimer’s disease or dementia?', a: 'Support is grounded in predictable routines, familiar surroundings, compassionate staff, and meaningful daily engagement. Care plans are personalized to each resident’s history, preferences, and current abilities.' },
  { q: 'Can families visit residents in memory care?', a: 'Yes. Family involvement is an important part of memory care. We work with families to find visiting rhythms that support both the resident and the family.' },
  { q: 'How do you help a resident adjust after move-in?', a: 'The first weeks focus on familiarity and reassurance. Staff learn each resident’s history, routines, and comforts, and the care plan is refined as we get to know them.' },
  { q: 'How do we know when memory care may be the right next step?', a: 'Common signals include wandering, increasing confusion, difficulty managing daily tasks, safety concerns at home, and caregiver exhaustion. Our team is happy to talk through your situation without pressure or commitment.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Memory Care', path: '/memory-care' },
];

export default function MemoryCarePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={SWAMPSCOTT_BUSINESS} />

      <div className="page-hero">
        <p className="eyebrow">Memory Care · Swampscott</p>
        <h1>Compassionate Memory Care in a Safe, Familiar Environment</h1>
        <p>For residents living with Alzheimer’s disease or memory loss, John Bertram House of Swampscott offers dedicated memory care designed to provide structure, safety, dignity, and meaningful daily connection.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact?loc=swampscott" className="btn btn-gold">Schedule a Tour</Link>
          <Link href="/contact?loc=swampscott" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>Memory Care Rooted in Dignity</p>
              <h2>Caring for the Whole Person</h2>
              <p>Memory care at John Bertram House of Swampscott is designed around the whole person — not the diagnosis. We focus on what brings comfort, what feels familiar, and what helps residents feel safe and connected as memory loss progresses.</p>
              <p>For families, the decision to move a loved one into memory care is rarely simple. Our team is here to listen, walk you through what to expect, and answer questions at whatever pace feels right. There is no pressure, and conversations are confidential.</p>
              <p style={{ background: 'var(--off-white)', padding: '16px 20px', borderLeft: '4px solid var(--navy)', borderRadius: '4px', fontSize: '0.95rem', color: '#444' }}>
                <strong>Please note:</strong> Memory care is offered only at our Swampscott community. John Bertram House of Salem provides assisted living but does not offer a dedicated memory care neighborhood.
              </p>
            </div>
            <div className="image-block">
              <img
                src="/images/swampscott/3rdfloormusic1.jpg"
                alt="Calm activity space in the Reminiscence memory care neighborhood at John Bertram House of Swampscott"
                style={{ height: '420px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">A Dedicated Swampscott Setting</p>
            <h2>The Reminiscence Neighborhood</h2>
            <p>Our memory care neighborhood at Swampscott is designed to feel calm, familiar, and supportive — without feeling clinical or institutional.</p>
            <div className="divider"></div>
          </FadeIn>

          <div className="two-col" style={{ alignItems: 'center' }}>
            <FadeIn className="content-block">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Safe, supportive surroundings that reduce confusion',
                  'Predictable daily routines that feel grounding',
                  'Calm, familiar environment with thoughtful design',
                  'Staff trained to support residents with memory loss',
                  'Activities tailored to comfort, connection, and engagement',
                  'Dining support that honors dietary needs and preferences',
                ].map((it) => (
                  <li key={it} style={{ display: 'flex', alignItems: 'start', gap: '12px', padding: '12px 0', borderBottom: '1px solid #ececec', fontSize: '0.98rem', color: '#444' }}>
                    <span style={{ color: 'var(--navy)', fontWeight: 700, marginTop: '2px' }}>✓</span> {it}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn className="image-block">
              <img
                src="/images/swampscott/3rdfloortvroom1.jpg"
                alt="Comfortable lounge in the Reminiscence memory care neighborhood at John Bertram House of Swampscott"
                style={{ height: '380px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">What Memory Care Includes</p>
            <h2>The Daily Experience</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {careCards.map((c) => (
              <FadeIn key={c.title} className="feature-item">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">For Families</p>
            <h2>When Memory Care May Be the Right Next Step</h2>
            <p>You don’t need to have all the answers before you call. Many families recognize one or more of the signals below.</p>
            <div className="divider"></div>
          </FadeIn>

          <FadeIn style={{ maxWidth: '720px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {rightTimeSignals.map((s) => (
                <li key={s} style={{ display: 'flex', alignItems: 'start', gap: '14px', padding: '14px 18px', background: '#fff', border: '1px solid #ececec', borderRadius: '8px', marginBottom: '10px', fontSize: '0.98rem', color: '#444' }}>
                  <span style={{ color: 'var(--navy)', fontWeight: 700, marginTop: '2px' }}>•</span> {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Our Location</p>
            <h2>Memory Care at John Bertram House of Swampscott</h2>
            <div className="divider"></div>
          </FadeIn>

          <FadeIn style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="property-card property-card-swampscott">
              <div className="property-card-image">
                <img src="/images/swampscott/exterior1.jpg" alt="John Bertram House of Swampscott exterior" />
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Swampscott</h3>
                <p>Our dedicated Reminiscence memory care neighborhood serves residents living with Alzheimer’s and dementia. One block from the ocean on Humphrey Street.</p>
                <div className="property-meta">
                  <a href="https://maps.google.com/?q=565+Humphrey+Street,+Swampscott,+MA+01907" target="_blank" rel="noopener noreferrer">565 Humphrey Street, Swampscott, MA 01907</a>
                </div>
                <div className="property-meta">
                  <a href="tel:7815951991">(781) 595-1991</a>
                </div>
              </div>
              <div className="property-card-footer" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '0 28px 28px' }}>
                <Link href="/swampscott" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Explore Swampscott</Link>
                <Link href="/contact?loc=swampscott" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '24px', color: '#666', fontSize: '0.9rem' }}>Looking for assisted living without memory care? Visit <Link href="/salem" style={{ color: 'var(--navy)', fontWeight: 600 }}>John Bertram House of Salem</Link>.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <FadeIn>
            <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.8, color: '#333', margin: '0 0 16px' }}>
              &ldquo;My wife has Alzheimer’s and she seems like a new person every day thanks to the incredible Reminiscence floor staff. They are truly angels.&rdquo;
            </blockquote>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>&mdash; Resident of 5 years, Reminiscence floor</p>
          </FadeIn>
        </div>
      </section>

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
            <h3>See the John Bertram Difference in Person</h3>
            <p>Visit the Reminiscence memory care neighborhood at Swampscott and meet the team. We’ll answer your questions and help you think through what’s next.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link href="/contact?loc=swampscott" className="btn btn-gold">Schedule a Tour</Link>
              <Link href="/contact?loc=swampscott" className="btn btn-navy">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
