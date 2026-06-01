import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Our Story</p>
        <h1>About John Bertram Homes</h1>
        <p>A mission rooted in compassion, service, and 139 years of exceptional elder care.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <h2>Who We Are</h2>
              <p>John Bertram Homes is a non-sectarian, not-for-profit charitable organization operated by the John Bertram Homes Board of Trustees. We provide exceptional assisted living services at two communities on Massachusetts&apos; beautiful North Shore.</p>
              <p>Our website provides general information about our assisted living programs at both locations. We warmly invite you to contact us directly to discuss how we can best serve you and your family.</p>
              <p>Whether you&apos;re exploring options for yourself or a loved one, we&apos;re here to help — with no pressure and no commitment required to visit or ask questions.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="tel:9787441002" className="btn btn-navy">Salem: (978) 744-1002</a>
                <a href="tel:7815951991" className="btn btn-outline" style={{ color: 'var(--teal)', borderColor: 'var(--teal)' }}>Swampscott: (781) 595-1991</a>
              </div>
            </div>
            <div className="image-block">
              <img src="/images/swampscott/sunroom1.jpg" alt="Sunroom at John Bertram House of Swampscott" style={{ height: '380px', objectFit: 'cover', width: '100%' }} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-sm" style={{ padding: '40px 0' }}>
        <div className="container">
          <FadeIn className="mission-block" style={{ background: 'var(--off-white)', color: '#222', borderRadius: '8px', padding: '40px', textAlign: 'center', border: '1px solid #ececec' }}>
            <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--navy)', marginBottom: '16px' }}>Our Mission</h3>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#444', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>&quot;The John Bertram Homes communities are dedicated to promoting the highest level of Wellness for each of our residents, through a combination of encouraging independence, providing support when needed, and communicating regularly with family members, residents, and each resident&apos;s personal medical team.&quot;</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light" id="history">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Our Heritage</p>
            <h2>At Home with History and Heart</h2>
            <p>From a 19th-century sea captain&apos;s philanthropy to Massachusetts&apos; first assisted living community — our history is as rich as our care.</p>
            <div className="divider"></div>
          </FadeIn>

          <FadeIn style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--navy)', marginBottom: '20px' }}>Captain John Bertram</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '16px' }}>Born on the Isle of Jersey in the Channel Islands, Captain John Bertram arrived in America in 1807 as a young boy of ten aboard the ship <em>Alert</em>. His family settled in Salem, Massachusetts, where he began his remarkable journey from cabin boy earning $5 a month to one of Salem&apos;s most celebrated sea captains and philanthropists.</p>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '16px' }}>As a captain, he accumulated considerable wealth through trading voyages to South Africa, Zanzibar, Madagascar, and Brazil, and later invested in North American railways. His philanthropic spirit led him to found Salem Hospital and establish programs for women and children.</p>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '16px' }}>In 1887, he created the <strong>Salem Home for Aged Men</strong> — providing shelter, meals, and community to older men without family, especially retired sailors. His legacy continues to inspire the John Bertram Homes community today.</p>
              <div style={{ borderLeft: '4px solid var(--navy)', padding: '20px 24px', background: 'var(--off-white)', borderRadius: '0 6px 6px 0', margin: '24px 0' }}>
                <p style={{ fontStyle: 'italic', color: '#444', fontSize: '0.95rem', lineHeight: 1.8 }}>Captain Bertram&apos;s legacy of caring for the elderly continues to this day in the communities that bear his name — a living testament to a life of service and generosity.</p>
              </div>
              <img
                src="/images/captain-john-bertram.png"
                alt="Portrait of Captain John Bertram, founder of the John Bertram Homes legacy"
                style={{ width: '220px', maxWidth: '60%', height: 'auto', display: 'block', marginTop: '24px', borderRadius: '6px', border: '1px solid #ececec' }}
              />
            </div>

            <div>
              <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--navy)', marginBottom: '20px' }}>Our Modern History</h3>
              <div style={{ position: 'relative', paddingLeft: '40px' }}>
                {[
                  { year: '1882', title: 'Captain Bertram Passes', desc: 'Captain John Bertram dies. His widow donates their home to become the Salem Public Library, continuing his legacy of community giving.' },
                  { year: '1887', title: 'Salem Home for Aged Men Founded', desc: 'The Salem Home for Aged Men is established in Salem, MA — providing shelter, meals, and community for older men, particularly retired sailors, and carrying forward Captain Bertram’s philanthropic legacy.' },
                  { year: '1988', title: 'Original Home Facing Closure', desc: 'The original home was closing with only 3 residents remaining, prompting the Board of Trustees to consider a new model of care.' },
                  { year: '1990 – 1991', title: "Massachusetts' First Assisted Living", desc: "After extensive restoration and renovation, John Bertram House reopens as Massachusetts' very first certified free-standing assisted living community — a landmark moment in elder care." },
                  { year: '1997', title: 'John Bertram House of Swampscott Opens', desc: "The second community opens at 565 Humphrey Street in Swampscott, MA — just one block from the ocean — extending the mission to the North Shore's beautiful coastline." },
                  { year: 'Today', title: 'Serving Generations', desc: "Two thriving communities continue Captain Bertram's legacy of compassionate care, serving hundreds of residents and their families each year with the same devotion and warmth." },
                ].map((item, i) => (
                  <div key={i} style={{ position: 'relative', marginBottom: '36px' }}>
                    <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--navy)', marginBottom: '4px' }}>{item.year}</div>
                    <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#222', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/swampscott/1stdining6.jpg"
              alt="Residents sharing lunch and conversation in the dining room at John Bertram Homes"
              style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
            />
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Visit Us</p>
            <h2>Explore Our Communities</h2>
            <p>We invite you to schedule a personal tour at either location to experience John Bertram Homes for yourself.</p>
            <div className="divider"></div>
          </FadeIn>

          <FadeIn className="properties-grid">
            <div className="property-card property-card-salem">
              <div className="property-card-image">
                <img src="/images/salem/exterior1.jpg" alt="John Bertram House of Salem" />
                <span className="property-badge">Est. 1990 — MA&apos;s First</span>
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Salem</h3>
                <p>Elegant assisted living in a historic Federalist home in downtown Salem. Massachusetts&apos; first certified assisted living community.</p>
                <div className="property-meta"><a href="tel:9787441002" style={{ color: 'var(--burgundy)' }}>(978) 744-1002</a></div>
              </div>
              <div className="property-card-footer">
                <Link href="/salem" className="btn btn-salem" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>View Community</Link>
              </div>
            </div>

            <div className="property-card property-card-swampscott">
              <div className="property-card-image">
                <img src="/images/swampscott/exterior1.jpg" alt="John Bertram House of Swampscott exterior" />
                <span className="property-badge">Est. 1997 — Near the Ocean</span>
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Swampscott</h3>
                <p>Exceptional senior living just one block from the ocean on Boston&apos;s beautiful North Shore. 59 suites with stunning sea views.</p>
                <div className="property-meta"><a href="tel:7815951991" style={{ color: 'var(--teal)' }}>(781) 595-1991</a></div>
              </div>
              <div className="property-card-footer">
                <Link href="/swampscott" className="btn btn-swampscott" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>View Community</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
