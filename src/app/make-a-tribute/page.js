import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Make a Tribute Gift | John Bertram Homes',
  description:
    'Honor or remember a loved one with a tribute or memorial gift to John Bertram Homes, a 501(c)(3) non-profit serving seniors in Salem and Swampscott, MA.',
  alternates: { canonical: 'https://bertramhouse.org/make-a-tribute' },
};

const tributeTypes = [
  { title: 'In Honor Of', desc: 'Celebrate a birthday, anniversary, caregiver, or someone special with a gift made in their honor.' },
  { title: 'In Memory Of', desc: 'Remember a loved one with a meaningful memorial gift that supports the seniors in our care.' },
  { title: 'Caregiver Tribute', desc: 'Recognize a staff member or caregiver whose compassion made a difference for your family.' },
];

const steps = [
  { n: '1', title: 'Tell Us Who', desc: 'Share the name of the person you wish to honor or remember, and whether you’d like us to notify a family member of your gift.' },
  { n: '2', title: 'Choose Your Gift', desc: 'Make your tribute gift by phone, mail, or in person. Any amount makes a difference.' },
  { n: '3', title: 'We Acknowledge It', desc: 'On request, we’ll send a written acknowledgement to the honoree or their family — the gift amount is never disclosed.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Support Our Mission', path: '/support' },
  { name: 'Make a Tribute', path: '/make-a-tribute' },
];

export default function MakeATributePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <div className="page-hero">
        <p className="eyebrow">Support Our Mission</p>
        <h1>Make a Tribute Gift</h1>
        <p>Honor someone special or remember a loved one with a meaningful gift that supports seniors at John Bertram Homes.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/donate" className="btn btn-gold">Make a Gift</Link>
          <Link href="/contact" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <h2>A Lasting Way to Say Thank You</h2>
            <p style={{ marginTop: '16px', color: '#555' }}>A tribute gift is a heartfelt way to mark a meaningful occasion, recognize a caregiver, or remember someone who is no longer with us. Every tribute gift to John Bertram Homes directly supports resident care, enrichment, and the daily life of our communities in Salem and Swampscott.</p>
            <p style={{ marginTop: '16px', color: '#555' }}>John Bertram Homes is a 501(c)(3) non-profit charitable organization. Tribute gifts may be tax-deductible to the extent allowed by law.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Ways to Pay Tribute</p>
            <h2>Honor, Remember, Recognize</h2>
            <div className="divider"></div>
          </FadeIn>
          <div className="features-grid">
            {tributeTypes.map((t) => (
              <FadeIn key={t.title} className="feature-item">
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">How It Works</p>
            <h2>Making a Tribute Gift</h2>
            <div className="divider"></div>
          </FadeIn>
          <div className="features-grid">
            {steps.map((s) => (
              <FadeIn key={s.n} className="feature-item">
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px' }}>{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="properties-grid">
            <div className="callout-box" style={{ textAlign: 'center' }}>
              <h3>By Phone</h3>
              <p>Our team is glad to take your tribute gift over the phone and note the honoree.</p>
              <p style={{ marginTop: '12px' }}><strong>Salem:</strong> <a href="tel:9787441002">(978) 744-1002</a></p>
              <p style={{ marginTop: '6px' }}><strong>Swampscott:</strong> <a href="tel:7815951991">(781) 595-1991</a></p>
            </div>
            <div className="callout-box" style={{ textAlign: 'center' }}>
              <h3>By Mail</h3>
              <p>Make checks payable to &quot;John Bertram Homes&quot; and note the honoree’s name in the memo.</p>
              <address style={{ marginTop: '12px', fontStyle: 'normal', lineHeight: 1.8 }}>
                <strong>John Bertram Homes</strong><br />565 Humphrey Street<br />Swampscott, MA 01907
              </address>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="callout-box" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <h3>Have Questions About Tribute Gifts?</h3>
            <p>We’re happy to help you arrange a tribute or memorial gift and notify the family if you wish. Reach out anytime.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link href="/donate" className="btn btn-gold">Make a Gift</Link>
              <Link href="/ways-to-give" className="btn btn-navy">Other Ways to Give</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
