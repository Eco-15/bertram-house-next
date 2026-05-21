import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import JsonLd, { faqSchema, breadcrumbSchema, SALEM_BUSINESS, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

export const metadata = {
  title: 'Personalized Assisted Living Care | John Bertram Homes',
  description:
    'Personalized assisted living care in Salem and Swampscott, MA. Customized service plans built around each resident’s routines, health, and preferences on the North Shore.',
  alternates: { canonical: 'https://bertramhouse.org/personalized-care' },
};

const careCards = [
  {
    title: 'Individualized Service Plans',
    desc: 'Tailored plans based on each resident’s needs, routines, preferences, and independence level.',
  },
  {
    title: 'Support With Daily Living',
    desc: 'Assistance may include bathing, dressing, grooming, mobility, medication reminders, and wellness check-ins.',
  },
  {
    title: 'Respect for Independence',
    desc: 'Care preserves dignity, privacy, choice, and autonomy at every step.',
  },
  {
    title: 'Ongoing Wellness Awareness',
    desc: 'Our team observes changes and communicates concerns when needs evolve.',
  },
  {
    title: 'Family Communication',
    desc: 'Families stay involved and informed through regular updates and open communication.',
  },
  {
    title: 'Care That Adapts Over Time',
    desc: 'Service plans are reviewed and adjusted as needs change so support always fits the person.',
  },
];

const familyChecklist = [
  { q: 'How are care plans created?', a: 'Each plan is built around a resident’s routines, preferences, health needs, and lifestyle — not a checklist.' },
  { q: 'Who updates the care plan?', a: 'Our wellness team reviews plans regularly and adjusts in collaboration with the resident, family, and personal physician.' },
  { q: 'What happens when needs change?', a: 'Plans are designed to flex. As a resident’s needs evolve, support grows with them — never one-size-fits-all.' },
  { q: 'How does the team communicate with families?', a: 'Through regular updates, scheduled check-ins, and prompt notifications when something changes.' },
  { q: 'How do you balance safety and independence?', a: 'We support residents in keeping their routines and choices while staying alert to changes that may need attention.' },
];

const faqs = [
  { q: 'How is a personalized care plan created?', a: 'A personalized care plan begins with conversations — with the resident, family, and personal physicians. Our wellness team learns about routines, preferences, health needs, mobility, dining preferences, and family involvement, then builds a plan that supports the resident as a whole person.' },
  { q: 'Can care services change over time?', a: 'Yes. Service plans are reviewed regularly and adjusted as needs evolve. The goal is to support residents through every stage with the same care team and the same surroundings.' },
  { q: 'What types of daily support are available?', a: 'Support may include assistance with bathing, dressing, grooming, mobility, medication reminders, and wellness check-ins. The exact mix depends on what each resident needs and prefers.' },
  { q: 'How involved can family members be?', a: 'Families are partners in care. Communication is open, visiting hours are flexible, and the team welcomes family input into care planning and daily life.' },
  { q: 'How do you balance safety and independence?', a: 'Our approach is to preserve autonomy and dignity while staying attentive to changes that may signal a need for additional support. Independence is not something residents lose when they move in.' },
  { q: 'Is personalized care available at both Salem and Swampscott?', a: 'Yes. Both John Bertram House of Salem and John Bertram House of Swampscott offer personalized assisted living care. Memory care is offered exclusively at the Swampscott community.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Personalized Care', path: '/personalized-care' },
];

export default function PersonalizedCarePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={SALEM_BUSINESS} />
      <JsonLd data={SWAMPSCOTT_BUSINESS} />

      <div className="page-hero">
        <p className="eyebrow">Our Care</p>
        <h1>Personalized Assisted Living Care Built Around Each Resident</h1>
        <p>At John Bertram Homes, care begins with understanding the person. Each resident receives a customized service plan shaped around their routines, preferences, health needs, and lifestyle, with support that adapts as needs change.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          <Link href="/contact" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>Care That Starts With Listening</p>
              <h2>The Person Comes First</h2>
              <p>Care planning at John Bertram Homes begins by getting to know the resident as a person: routines, preferences, health needs, mobility, dining preferences, family involvement, and the daily rhythms that make life feel like home.</p>
              <p>Our care model is not one-size-fits-all. Move-in support is gentle and individualized, and the team continues to refine the plan as a resident settles in. As needs evolve, the plan evolves with them — without disruption to the resident’s surroundings, neighbors, or staff team.</p>
              <p>Both of our North Shore assisted living communities — Salem and Swampscott — share the same approach: support that protects independence, respects dignity, and adapts over time.</p>
            </div>
            <div className="image-block">
              <img
                src="/images/swampscott/sunroom1.jpg"
                alt="Resident enjoying a quiet conversation in the sunroom at John Bertram House"
                style={{ height: '420px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">What Personalized Care Includes</p>
            <h2>Support Built Around Each Resident</h2>
            <p>Every service plan is unique. The categories below describe the types of support available — combined, adapted, and refined for each individual.</p>
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

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">For Families Comparing Options</p>
            <h2>Questions Worth Asking</h2>
            <p>Whether you’re touring John Bertram Homes or another community, these are the questions that reveal the real quality of care.</p>
            <div className="divider"></div>
          </FadeIn>

          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {familyChecklist.map((item) => (
              <FadeIn key={item.q} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid #ececec' }}>
                <div style={{ flexShrink: 0, width: '32px', height: '32px', background: 'var(--navy)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '0.85rem' }}>✓</div>
                <div>
                  <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1rem', color: 'var(--navy)', marginBottom: '4px' }}>{item.q}</h4>
                  <p style={{ color: '#555', fontSize: '0.95rem' }}>{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Two North Shore Communities</p>
            <h2>Personalized Care at Salem &amp; Swampscott</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="properties-grid">
            <FadeIn className="property-card property-card-salem">
              <div className="property-card-image">
                <img src="https://www.bertramhouse.org/images/jbh-house.png" alt="John Bertram House of Salem on Salem Common" />
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Salem</h3>
                <p>Personalized assisted living care in a historic, established setting on Salem Common — Massachusetts’ first certified assisted living community.</p>
                <div className="property-card-footer" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '0 28px 28px' }}>
                  <Link href="/salem" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Explore Salem</Link>
                  <Link href="/contact?loc=salem" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="property-card property-card-swampscott">
              <div className="property-card-image">
                <img src="/images/swampscott/exterior1.jpg" alt="John Bertram House of Swampscott exterior near the ocean" />
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Swampscott</h3>
                <p>Personalized assisted living care in a comfortable North Shore setting one block from the ocean. Memory care is also available here.</p>
                <div className="property-card-footer" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '0 28px 28px' }}>
                  <Link href="/swampscott" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Explore Swampscott</Link>
                  <Link href="/contact?loc=swampscott" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <FadeIn>
            <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.8, color: '#333', margin: '0 0 16px' }}>
              &ldquo;Everything all of you do every day to help the Bertram House residents and their families is so important and valued. We can never thank you enough.&rdquo;
            </blockquote>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>&mdash; Family of a 12.5-year resident</p>
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
            <p>The best way to understand our approach to care is to walk through one of our communities and meet the people who make it home.</p>
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
