import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import FamilyCommunication from '@/components/FamilyCommunication';
import JsonLd, { faqSchema, breadcrumbSchema, SALEM_BUSINESS, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

export const metadata = {
  title: 'Assisted Living in Salem & Swampscott, MA | John Bertram Homes',
  description:
    'Assisted living at John Bertram Homes in Salem and Swampscott, MA. Personalized service plans, support with daily living, and care that adapts over time on the North Shore.',
  alternates: { canonical: 'https://bertramhouse.org/assisted-living' },
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
    title: 'Three Meals Daily',
    desc: 'Freshly prepared meals, snacks, and a hydration program — served in elegant, social dining rooms.',
  },
  {
    title: 'Care That Adapts Over Time',
    desc: 'Service plans are reviewed and adjusted as needs change so support always fits the person.',
  },
];

const faqs = [
  { q: 'What is assisted living?', a: 'Assisted living is a residential option for older adults who need some help with daily activities but do not require the level of care provided in a nursing home. At John Bertram Homes, we provide personalized support with activities of daily living while promoting independence and quality of life.' },
  { q: 'How is a care plan created?', a: 'A personalized care plan begins with conversations — with the resident, family, and personal physicians. Our wellness team learns about routines, preferences, health needs, mobility, dining preferences, and family involvement, then builds a plan that supports the resident as a whole person.' },
  { q: 'Can care services change over time?', a: 'Yes. Service plans are reviewed regularly and adjusted as needs evolve. The goal is to support residents through every stage with the same care team and the same surroundings.' },
  { q: 'What types of daily support are available?', a: 'Support may include assistance with bathing, dressing, grooming, mobility, medication reminders, and wellness check-ins. The exact mix depends on what each resident needs and prefers.' },
  { q: 'How involved can family members be?', a: 'Families are partners in care. Communication is open, visiting hours are flexible, and the team welcomes family input into care planning and daily life.' },
  { q: 'Is assisted living available at both Salem and Swampscott?', a: 'Yes. Both John Bertram House of Salem and John Bertram House of Swampscott offer assisted living. Memory care is offered exclusively at the Swampscott community.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Assisted Living', path: '/assisted-living' },
];

export default function AssistedLivingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={SALEM_BUSINESS} />
      <JsonLd data={SWAMPSCOTT_BUSINESS} />

      <div className="page-hero">
        <p className="eyebrow">Living Experiences · Assisted Living</p>
        <h1>Assisted Living Built Around Each Resident</h1>
        <p>At John Bertram Homes, assisted living begins with understanding the person. Each resident receives a customized service plan shaped around their routines, preferences, health needs, and lifestyle, with support that adapts as needs change.</p>
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
              <p>Both of our North Shore communities — Salem and Swampscott — share the same approach: support that protects independence, respects dignity, and adapts over time.</p>
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
            <p className="eyebrow">What Assisted Living Includes</p>
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
            <p className="eyebrow">Two North Shore Communities</p>
            <h2>Assisted Living at Salem &amp; Swampscott</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="properties-grid">
            <FadeIn className="property-card property-card-salem">
              <div className="property-card-image">
                <img src="/images/salem/exterior6.jpg" alt="John Bertram House of Salem on Salem Common" />
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Salem</h3>
                <p>Assisted living in a historic, established setting across from Salem Common — Massachusetts’ first certified assisted living community.</p>
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
                <p>Assisted living in a comfortable North Shore setting one block from the ocean. Memory care is also available here.</p>
                <div className="property-card-footer" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '0 28px 28px' }}>
                  <Link href="/swampscott" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Explore Swampscott</Link>
                  <Link href="/contact?loc=swampscott" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
                </div>
              </div>
            </FadeIn>
          </div>
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
