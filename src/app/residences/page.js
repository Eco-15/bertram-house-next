import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Our Residences' };

export default function ResidencesPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Our Communities</p>
        <h1>Our Residences</h1>
        <p>Two exceptional assisted living communities on Massachusetts&apos; North Shore.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <span className="eyebrow">Our Communities</span>
            <h2>Two Exceptional Locations</h2>
          </FadeIn>

          <div className="properties-grid">
            <FadeIn tag="article" className="property-card property-card-salem">
              <div className="property-card-image">
                <img src="/images/salem/exterior1.jpg" alt="John Bertram House of Salem — historic Federalist home" />
                <span className="property-badge">Est. 1990 — MA&apos;s First</span>
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Salem</h3>
                <p>Elegant assisted living in a beautifully restored historic Federalist-style home in downtown Salem — Massachusetts&apos; first assisted living community.</p>
                <div className="property-meta">
                  <a href="tel:9787441002">(978) 744-1002</a>
                </div>
                <div className="property-meta">Downtown Salem, MA</div>
              </div>
              <div className="property-card-footer">
                <Link href="/salem" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Learn More</Link>
                <Link href="/contact?loc=salem" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
              </div>
            </FadeIn>

            <FadeIn tag="article" className="property-card property-card-swampscott">
              <div className="property-card-image">
                <img src="/images/swampscott/exterior1.jpg" alt="John Bertram House of Swampscott exterior" />
                <span className="property-badge">Est. 1997 — Near the Ocean</span>
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Swampscott</h3>
                <p>Exceptional senior living just one block from the ocean on Boston&apos;s beautiful North Shore — 84 suites with ocean access within 10 minutes walking distance.</p>
                <div className="property-meta">
                  <a href="tel:7815951991">(781) 595-1991</a>
                </div>
                <div className="property-meta">565 Humphrey St., Swampscott, MA 01907</div>
              </div>
              <div className="property-card-footer">
                <Link href="/swampscott" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Learn More</Link>
                <Link href="/contact?loc=swampscott" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
