import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'In-Kind Donations | John Bertram Homes',
  description:
    'Donate goods, supplies, or services that directly benefit seniors at John Bertram Homes in Salem and Swampscott, MA. Learn what we welcome and how to give in-kind.',
  alternates: { canonical: 'https://bertramhouse.org/in-kind-donations' },
};

const welcomeItems = [
  { title: 'Activity & Craft Supplies', desc: 'Art materials, puzzles, games, and supplies that support our enrichment programs.' },
  { title: 'Books & Music', desc: 'Large-print books, audiobooks, and CDs for our libraries and music programs.' },
  { title: 'Comfort Items', desc: 'New blankets, lap robes, and seasonal décor that brighten common spaces.' },
  { title: 'Event & Celebration Goods', desc: 'Flowers, decorations, and treats for holidays, birthdays, and resident celebrations.' },
  { title: 'Professional Services', desc: 'Musicians, performers, and volunteers who can share their talents with residents.' },
  { title: 'Garden & Outdoor', desc: 'Plants, planters, and materials that enhance our courtyards and outdoor spaces.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Support Our Mission', path: '/support' },
  { name: 'In-Kind Donations', path: '/in-kind-donations' },
];

export default function InKindDonationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <div className="page-hero">
        <p className="eyebrow">Support Our Mission</p>
        <h1>In-Kind Donations</h1>
        <p>Donate goods, supplies, or services that directly enrich the daily lives of seniors at John Bertram Homes.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact" className="btn btn-gold">Offer a Donation</Link>
          <Link href="/contact" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Gifts That Go Straight to Daily Life</h2>
            <p style={{ marginTop: '16px', color: '#555' }}>Not every meaningful gift is a check. In-kind donations — goods, supplies, and services — directly support the activities, comfort, and celebrations that make our communities feel like home. Because we are a 501(c)(3) non-profit, in-kind gifts may be tax-deductible to the extent allowed by law.</p>
            <p style={{ marginTop: '16px', color: '#555' }}>Before dropping anything off, please reach out so we can confirm current needs and arrange a convenient time. It helps us make the most of your generosity.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">What We Welcome</p>
            <h2>Helpful In-Kind Gifts</h2>
            <p>A starting point — contact us for our current wish list, which changes with the seasons and programming.</p>
            <div className="divider"></div>
          </FadeIn>
          <div className="features-grid">
            {welcomeItems.map((c) => (
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
          <FadeIn className="callout-box" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <h3>Ready to Donate Goods or Services?</h3>
            <p>Contact either community to confirm current needs and coordinate your in-kind donation. We’ll make it easy.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link href="/contact" className="btn btn-gold">Contact Us</Link>
              <Link href="/ways-to-give" className="btn btn-navy">Other Ways to Give</Link>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.9rem', color: '#666' }}>
              <strong>Salem:</strong> <a href="tel:9787441002" style={{ color: 'var(--navy)', fontWeight: 600 }}>(978) 744-1002</a> &nbsp;·&nbsp;
              <strong>Swampscott:</strong> <a href="tel:7815951991" style={{ color: 'var(--navy)', fontWeight: 600 }}>(781) 595-1991</a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
