import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import Counter from '@/components/Counter';
import JsonLd, { faqSchema, breadcrumbSchema, ORGANIZATION } from '@/components/JsonLd';

export const metadata = {
  title: 'Non-Profit Mission | John Bertram Homes',
  description:
    'A not-for-profit assisted living organization serving Salem and Swampscott, MA since 1877. Mission-first care, donor-supported impact, and a legacy of people-first service on the North Shore.',
  alternates: { canonical: 'https://bertramhouse.org/support' },
};

const missionCards = [
  { title: 'Mission Over Profit', desc: 'Decisions are guided by resident care, dignity, and long-term community service — not shareholders.' },
  { title: '149 Years of Service', desc: 'John Bertram Homes continues a legacy of care that began in Salem in 1877.' },
  { title: 'Two North Shore Communities', desc: 'Salem and Swampscott share the same people-first mission and standards of care.' },
  { title: 'Volunteer Leadership', desc: 'A volunteer Board of Trustees provides governance, stewardship, and oversight.' },
  { title: 'Donor-Supported Impact', desc: 'Gifts help support programs, improvements, and resident-centered initiatives that go beyond the basics.' },
  { title: 'Non-Sectarian Care', desc: 'Residents and families of every background are welcomed with respect, dignity, and inclusion.' },
];

const impactAreas = [
  { title: 'Resident Support', desc: 'Help underwrite care for residents with limited financial resources.' },
  { title: 'Enrichment Activities', desc: 'Support music, arts, outings, and special programming throughout the year.' },
  { title: 'Facility Improvements', desc: 'Fund renovations, comfort upgrades, and accessibility improvements at both communities.' },
  { title: 'Staff Appreciation', desc: 'Help us retain and recognize the caregivers who make daily life possible.' },
  { title: 'Greatest-Need Fund', desc: 'Flexible support that meets needs as they arise — wherever they’re needed most.' },
  { title: 'Legacy & Planned Giving', desc: 'Include John Bertram Homes in your estate plan to support generations to come.' },
];

const waysToSupport = [
  { title: 'Make a Gift', desc: 'A one-time or recurring gift supports daily life at both communities.', btn: 'Donate Now', href: '/donate' },
  { title: 'Volunteer', desc: 'Share your time, talents, and companionship with residents on the North Shore.', btn: 'Volunteer Opportunities', href: '/volunteers' },
  { title: 'Honor or Remember', desc: 'Make a tribute gift in honor or memory of someone meaningful in your life.', btn: 'Make a Tribute', href: '/make-a-tribute' },
  { title: 'Planned Giving', desc: 'Create a lasting legacy by including John Bertram Homes in your estate planning.', btn: 'Ways to Give', href: '/ways-to-give' },
];

const faqs = [
  { q: 'What does it mean that John Bertram Homes is not-for-profit?', a: 'It means we exist to serve residents and the community rather than shareholders or investors. Every operating decision is guided by our mission of resident-first, dignity-driven care. Surpluses are reinvested in the communities we serve.' },
  { q: 'Is John Bertram Homes a 501(c)(3)?', a: 'Yes. John Bertram Homes is a 501(c)(3) non-profit charitable organization. Gifts may be tax-deductible to the extent allowed by law.' },
  { q: 'How are donations used?', a: 'Donations support resident scholarships, enrichment activities, facility improvements, staff recognition, and a greatest-need fund. You can also direct a gift toward a specific area.' },
  { q: 'Can I volunteer?', a: 'Yes. Volunteers are an important part of community life. We welcome consistent volunteer schedules and a range of skills — from leading activities to companionship visits.' },
  { q: 'Can I make a gift in honor or memory of someone?', a: 'Yes. Tribute and memorial gifts are a meaningful way to honor a loved one while supporting the seniors in our communities.' },
  { q: 'Does the non-profit mission apply to both Salem and Swampscott?', a: 'Yes. Both communities operate under the same not-for-profit John Bertram Homes umbrella, with the same Board of Trustees and the same mission of people-first care.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Non-Profit Mission', path: '/support' },
];

export default function SupportPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={ORGANIZATION} />

      <div className="page-hero">
        <p className="eyebrow">Our Mission</p>
        <h1>A Non-Profit Mission Rooted in People-First Care</h1>
        <p>For more than 149 years, John Bertram Homes has served seniors and families on the North Shore with a simple guiding principle: people come first. As a not-for-profit charitable organization, our mission is focused on care, dignity, and community.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          <Link href="/donate" className="btn btn-navy">Support Our Mission</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>Our Mission</p>
              <h2>Who We Are</h2>
              <p>John Bertram Homes is a non-sectarian, not-for-profit charitable organization providing exceptional assisted living care to seniors and families on Massachusetts’ North Shore. With communities in Salem and Swampscott, Massachusetts, we combine personalized support, meaningful daily life, strong family communication, and a warm residential environment where residents are treated with dignity, respect, and genuine care.</p>
              <p>Our legacy began in 1877 with Captain John Bertram’s commitment to serving older adults in the Salem community. Today, that mission continues through two distinguished communities: John Bertram House of Salem, located in a beautifully restored historic Federalist-style home across from Salem Common, and John Bertram House of Swampscott, an ocean-side senior living community one block from the water.</p>
              <p>We offer individualized service plans, daily dining, engaging activities, wellness support, housekeeping, laundry, medication management, and compassionate assistance with daily living. Our Swampscott community also includes a dedicated Reminiscence memory care neighborhood for residents living with Alzheimer’s disease and memory loss.</p>
              <p>At John Bertram Homes, care is personal. Our team of CNAs, nurses, dining staff, activities professionals, housekeepers, maintenance staff, administrators, volunteers, and leadership work together to create a home-like environment where residents can remain independent while receiving the support they need.</p>
              <p>We share community news, celebrate our staff, highlight career opportunities, recognize volunteers and donors, and showcase life inside our Salem and Swampscott communities.</p>
            </div>
            <div className="image-block">
              <img
                src="/images/swampscott/1stdining6.jpg"
                alt="Residents sharing lunch and conversation in the dining room at John Bertram Homes"
                style={{ height: '420px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">What Drives Us</p>
            <h2>The Mission, in Six Pieces</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {missionCards.map((c) => (
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
          <FadeIn className="two-col">
            <div className="image-block">
              <img
                src="/images/salem/exterior1.jpg"
                alt="The historic John Bertram House across from Salem Common"
                style={{ height: '420px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>Our Legacy</p>
              <h2>Since 1877, on the North Shore</h2>
              <p>Our story begins with Captain John Bertram — a Salem sea captain whose life of trade and philanthropy shaped the city. The Salem Home for Aged Men, founded in his name in 1877, provided shelter and care to older men in the community, especially retired sailors.</p>
              <p>In 1990, the John Bertram House reopened as Massachusetts’ very first certified free-standing assisted living community. In 1997, our Swampscott community opened just one block from the ocean. Today, both communities share the same mission and the same Board of Trustees.</p>
              <p><Link href="/about" style={{ color: 'var(--navy)', fontWeight: 600 }}>Read our full history →</Link></p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <FadeIn className="stats-bar">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="number"><Counter target={149} /></div>
                <div className="label">Years of Service</div>
              </div>
              <div className="stat-item">
                <div className="number"><Counter target={1877} /></div>
                <div className="label">Established</div>
              </div>
              <div className="stat-item">
                <div className="number"><Counter target={2} /></div>
                <div className="label">Communities</div>
              </div>
              <div className="stat-item">
                <div className="number">501(c)(3)</div>
                <div className="label">Non-Profit Status</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">How Support Helps</p>
            <h2>Where Gifts Make a Difference</h2>
            <p>Gifts of every size support daily life and long-term health across both communities. Direct your gift to a specific area or contribute to our greatest need.</p>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {impactAreas.map((c) => (
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
            <p className="eyebrow">Get Involved</p>
            <h2>Ways to Support</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="impact-grid">
            {waysToSupport.map((w) => (
              <FadeIn key={w.title} className="impact-card">
                <div className="impact-card-body">
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                  <Link href={w.href} className="btn btn-navy">{w.btn}</Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>For Families</p>
              <h2>Why Non-Profit Matters When Choosing a Community</h2>
              <p>When you’re comparing assisted living options, non-profit status is a meaningful signal. It tells you the organization exists to serve residents — that mission and care, not investor returns, drive decisions.</p>
              <p>That’s why John Bertram Homes has remained rooted on the North Shore since 1877: because the mission has never been about scale or margin. It’s about our residents, their families, and care done well today, tomorrow, and for generations to come.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
                <Link href="/salem" className="btn btn-navy">Explore Salem</Link>
                <Link href="/swampscott" className="btn btn-navy">Explore Swampscott</Link>
              </div>
            </div>
            <div className="image-block">
              <img
                src="/images/swampscott/library1.jpg"
                alt="Library with fireplace at John Bertram House of Swampscott"
                style={{ height: '380px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Questions Families &amp; Donors Ask</p>
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
            <p>Whether you’re considering a community for a loved one or supporting the mission, visit us to see what 149 years of people-first care looks like.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
              <Link href="/donate" className="btn btn-navy">Make a Donation</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
