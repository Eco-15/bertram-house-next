import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FadeInLink from '@/components/FadeInLink';
import HeroSlider from '@/components/HeroSlider';
import Counter from '@/components/Counter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import JsonLd, { ORGANIZATION, SALEM_BUSINESS, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

const heroImages = [
  '/images/swampscott/exterior1.jpg',
  '/images/swampscott/1stdining1.jpg',
  '/images/swampscott/library1.jpg',
  '/images/swampscott/sunroom1.jpg',
  '/images/swampscott/exterior8.jpg',
  'https://www.bertramhouse.org/images/jbh-house.png',
];

const testimonials = [
  { quote: '"Everything all of you do every day to help the Bertram House residents and their families is so important and valued. We can never thank you enough."', attribution: 'Family of a 12.5-year resident' },
  { quote: '"The staff are fabulous. My mother is enveloped by the Bertram House family and we couldn\'t be more grateful for the care and warmth she receives every single day."', attribution: 'Family of a 7-month resident' },
  { quote: '"From the very first day, to her last breath, you cared for her as if she were your own family. There are no words to adequately express our gratitude."', attribution: 'Family of a 5-year resident' },
  { quote: '"Everyone here is loving and kind, always trying to help in every way they can. I feel truly at home and cared for at Bertram House."', attribution: 'An 8-year resident' },
  { quote: '"My dad had the best 6 years and 8 months of his life that any person on earth could ever wish for. Bertram House gave him a home full of love."', attribution: 'Family member' },
  { quote: '"My wife has Alzheimer\'s and she seems like a new person every day thanks to the incredible Reminiscence floor staff. They are truly angels."', attribution: 'Resident of 5 years, Reminiscence floor' },
];

const careCards = [
  {
    href: '/personalized-care',
    title: 'Personalized Care',
    desc: 'Every resident receives a customized service plan tailored to their individual preferences, needs, and lifestyle.',
    icon: (<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
  },
  {
    href: '/leadership',
    title: 'Expert Staff',
    desc: 'Our team of CNAs, Home Health Aides, and an RN Resident Care Coordinator support residents every day.',
    icon: (<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    href: '/dining',
    title: 'Chef-Crafted Dining',
    desc: 'Three home-cooked meals daily with fresh ingredients, plus snacks throughout the day in welcoming dining rooms.',
    icon: (<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 010 8h-1" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" strokeLinecap="round" strokeLinejoin="round"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>),
  },
  {
    href: '/activities',
    title: 'Vibrant Activities',
    desc: 'Full calendars of exercise classes, cultural outings, games, arts, music, religious services, and community events.',
    icon: (<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>),
  },
  {
    href: '/memory-care',
    title: 'Memory Care',
    desc: "Dedicated Reminiscence neighborhoods offer safe, nurturing environments for those with Alzheimer's and memory loss.",
    icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    href: '/support',
    title: 'Non-Profit Mission',
    desc: 'As a not-for-profit charitable trust, 139 years of service — our mission is always people first.',
    icon: (<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={ORGANIZATION} />
      <JsonLd data={SALEM_BUSINESS} />
      <JsonLd data={SWAMPSCOTT_BUSINESS} />
      <HeroSlider images={heroImages}>
        <p className="hero-eyebrow">One of Massachusetts' First Assisted Living Communities</p>
        <h1>Exceptional Care for Generations</h1>
        <p>Two distinguished assisted living communities on the North Shore — where residents are family and every day is lived with dignity, warmth, and purpose.</p>
        <div className="hero-buttons">
          <Link href="/salem" className="btn btn-primary">John Bertram House — Salem</Link>
          <Link href="/swampscott" className="btn btn-primary">John Bertram House — Swampscott</Link>
        </div>
      </HeroSlider>

      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="number"><Counter target={139} /></div>
              <div className="label">Years of Service</div>
            </div>
            <div className="stat-item">
              <div className="number"><Counter target={2} /></div>
              <div className="label">Locations</div>
            </div>
            <div className="stat-item">
              <div className="number"><Counter target={84} /></div>
              <div className="label">Resident Suites</div>
            </div>
            <div className="stat-item">
              <div className="number"><Counter target={1887} /></div>
              <div className="label">Established</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Our Communities</p>
            <h2>Two Exceptional Locations</h2>
            <p>Each John Bertram House offers a unique setting with the same commitment to personalized, compassionate care.</p>
            <div className="divider"></div>
          </FadeIn>

          <div className="properties-grid">
            <FadeIn tag="article" className="property-card property-card-salem">
              <div className="property-card-image">
                <img src="https://www.bertramhouse.org/images/jbh-house.png" alt="John Bertram House of Salem — historic Federalist home" />
                <span className="property-badge">Established 1887 – On the Salem Common</span>
              </div>
              <div className="property-card-body">
                <h3>John Bertram House of Salem</h3>
                <p>Elegant assisted living in a beautifully restored historic Federalist-style home in the heart of downtown Salem.</p>
                <div className="property-meta">
                  <a href="tel:9787441002">(978) 744-1002</a>
                </div>
                <div className="property-meta">
                  <a href="https://maps.google.com/?q=29+Washington+Square,+Salem,+MA+01970" target="_blank" rel="noopener noreferrer">29 Washington Square, Salem, MA 01970</a>
                </div>
              </div>
              <div className="property-card-footer">
                <Link href="/salem" className="btn btn-salem" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Learn More</Link>
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
                <p>Exceptional senior living just one block from the ocean on Boston's beautiful North Shore. 84 suites with ocean access within 10 minutes walking distance.</p>
                <div className="property-meta"><a href="tel:7815951991">(781) 595-1991</a></div>
                <div className="property-meta">
                  <a href="https://maps.google.com/?q=565+Humphrey+Street,+Swampscott,+MA+01907" target="_blank" rel="noopener noreferrer">565 Humphrey St., Swampscott, MA 01907</a>
                </div>
              </div>
              <div className="property-card-footer">
                <Link href="/swampscott" className="btn btn-swampscott" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Learn More</Link>
                <Link href="/contact?loc=swampscott" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Why John Bertram Homes</p>
            <h2>Care You Can Trust</h2>
            <p>For 139 years, John Bertram Homes has delivered exceptional, personalized care rooted in respect, warmth, and purpose.</p>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {careCards.map((c) => (
              <FadeInLink key={c.href} href={c.href} className="feature-item">
                <div className="feature-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </FadeInLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <FadeIn className="content-block">
              <h2>A Legacy of Compassionate Care</h2>
              <p>The story of John Bertram Homes begins with Captain John Bertram — a Salem sea captain who arrived in America at age 10 and built a remarkable life of philanthropy and service, founding the Salem Home for Aged Men in 1887.</p>
              <p>In 1990, the John Bertram House became Massachusetts' very first certified free-standing assisted living community. Since then, we have cared for hundreds of residents and their families with the same devotion Captain Bertram showed to his community.</p>
              <p>Our Swampscott location opened in 1997, extending our mission to a beautiful seaside setting. Both communities are governed by the John Bertram Homes Board of Trustees.</p>
              <Link href="/about" className="btn btn-navy">Read Our History</Link>
            </FadeIn>
            <FadeIn className="image-block">
              <img src="https://www.bertramhouse.org/images/jbh-house.png" alt="John Bertram House of Salem" style={{ height: '380px', objectFit: 'cover', width: '100%' }} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <FadeIn className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>Support Our Mission</p>
              <h2>Your Contribution Matters</h2>
              <p style={{ color: '#555' }}>As a non-profit organization, John Bertram Homes relies on the generosity of donors and volunteers to continue providing exceptional care. Every gift makes a difference in the lives of our residents.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/donate" className="btn btn-gold">Make a Donation</Link>
                <Link href="/volunteers" className="btn btn-navy">Volunteer With Us</Link>
              </div>
            </FadeIn>
            <FadeIn style={{ textAlign: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  {
                    n: '139',
                    l: 'Years of Service',
                    icon: (<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                  },
                  {
                    n: '1,000+',
                    l: 'Residents Cared For',
                    icon: (<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                  },
                  {
                    n: '2',
                    l: 'Communities',
                    icon: (<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
                  },
                  {
                    n: '501c3',
                    l: 'Non-Profit',
                    icon: (<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                  },
                ].map((s) => (
                  <div key={s.l} style={{ background: 'var(--off-white)', borderRadius: '16px', padding: '28px 20px', border: '1px solid #ececec' }}>
                    <div className="tile-icon" style={{ margin: '0 auto 14px' }}>{s.icon}</div>
                    <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '2rem', fontWeight: 700, marginBottom: '6px', color: 'var(--navy)' }}>{s.n}</div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#666', fontFamily: "'Raleway', sans-serif" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="properties-grid">
            <FadeIn className="callout-box">
              <h3>Join Our Team</h3>
              <p>Make a meaningful difference every day while working in a warm, supportive environment serving seniors on the North Shore.</p>
              <Link href="/careers" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 24px' }}>View Career Opportunities</Link>
            </FadeIn>
            <FadeIn className="callout-box" style={{ borderLeftColor: 'var(--teal)' }}>
              <h3 style={{ color: 'var(--teal)' }}>Become a Volunteer</h3>
              <p>Share your time, talents, and companionship to help create meaningful moments that brighten daily life for our residents.</p>
              <Link href="/volunteers" className="btn btn-swampscott" style={{ fontSize: '0.78rem', padding: '10px 24px' }}>Volunteer Opportunities</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">What Families Say</p>
            <h2>Voices of Our Community</h2>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn>
            <TestimonialCarousel slides={testimonials} />
          </FadeIn>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/testimonials" className="btn btn-navy">Read All Testimonials</Link>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--off-white)', borderTop: '1px solid #e8e8e8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <p className="eyebrow" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--navy)', marginBottom: '12px' }}>For Families</p>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', color: '#222' }}>Stay Close to Your Loved One</h2>
            <p style={{ color: '#666', maxWidth: '560px', margin: '0 auto 28px' }}>Log in to the Family Portal to see new photos, manage care preferences, and stay connected with your parent or family member at John Bertram Homes.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/login" className="btn btn-gold">Family Login</Link>
              <Link href="/contact" className="btn btn-navy">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
