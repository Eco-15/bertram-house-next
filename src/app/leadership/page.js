import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import JsonLd, { faqSchema, breadcrumbSchema, ORGANIZATION } from '@/components/JsonLd';

export const metadata = {
  title: 'Our Team & Leadership | John Bertram Homes',
  description:
    'Meet the leadership, care, wellness, dining, and activities teams behind assisted living in Salem and Swampscott, MA. Hands-on leadership and coordinated care on the North Shore.',
  alternates: { canonical: 'https://bertramhouse.org/leadership' },
};

const seniorLeaders = [
  {
    name: 'Robert Wasserman, MPH',
    title: 'President · Executive Director, Swampscott',
    img: '/images/staff/RobertWasserman.jpg',
    email: 'rwasserman@bertramhouse.org',
    contactAbout: 'Operations, admissions inquiries, organizational leadership',
    bio: 'Robert leads John Bertram Homes as President and also serves as Executive Director of the Swampscott community. He brings public-health training and a steady, hands-on approach to daily operations.',
  },
  {
    name: 'Kelly Domeniconi',
    title: 'Director of Sales',
    img: '/images/staff/KellyDomeniconi.jpg',
    contactAbout: 'Tours, availability, move-in process',
    bio: 'Kelly works with families exploring assisted living and memory care. She is often the first point of contact for tours, availability questions, and walking through what to expect.',
  },
  {
    name: 'Kathy Christopher',
    title: 'Finance Director',
    img: '/images/staff/KathyChristopher.jpg',
    contactAbout: 'Finance, billing, administrative questions',
    bio: 'Kathy oversees the financial stewardship of John Bertram Homes and supports both communities’ administrative operations.',
  },
];

const trustCards = [
  {
    title: 'Hands-On Leadership',
    desc: 'Our leadership team stays close to residents, families, and daily operations — not behind a desk.',
  },
  {
    title: 'Coordinated Care',
    desc: 'Wellness, dining, activities, and maintenance teams work together around each resident’s needs.',
  },
  {
    title: 'Mission-Driven Service',
    desc: 'As a not-for-profit, every decision is guided by care, dignity, and long-term community service.',
  },
];

const salemTeam = [
  { name: 'Sarah Sterling', title: 'Executive Director', img: '/images/staff/SarahSterling.jpg' },
  { name: 'Suzanne Carr', title: 'Assisted Living Coordinator', img: '/images/salem/suzanne1.jpg' },
  { name: 'MaryAnne Thompson', title: 'Wellness Nurse', img: '/images/staff/MaryAnn.jpg' },
  { name: 'Tracy', title: 'Activities Coordinator', img: '/images/salem/tracy1.jpg' },
  { name: 'Duncan', title: 'Dining Service Coordinator', img: '/images/salem/Duncan1.jpg' },
  { name: 'John', title: 'Maintenance', initials: 'J' },
];

const swampscottTeam = [
  { name: 'Robert Wasserman, MPH', title: 'Executive Director', img: '/images/staff/RobertWasserman.jpg' },
  { name: 'Marisa Waters', title: 'Assisted Living Coordinator', img: '/images/staff/MarisaWaters.jpg' },
  { name: 'Athena Raptis', title: 'Activities Director', img: '/images/staff/AthenaRaptis.jpg' },
  { name: 'Pablo Solorzano', title: 'Reminiscence Coordinator', img: '/images/staff/Pablo Solorzano.jpg' },
  { name: 'Eddy Morales', title: 'Dining Service Coordinator', img: '/images/staff/EddyMorales.jpg' },
  { name: 'Jim Vahey', title: 'Maintenance Coordinator', img: '/images/staff/JimVahey.jpg' },
];

const board = [
  'Margaret Dillon, Chair',
  'Susan Syversen, Treasurer',
  'Cathy Favreau, Secretary',
  'Jonathan Curtis',
  'Lisa DiGianni',
  'Susan Maciewiczs',
];

const faqs = [
  { q: 'Who should I contact about availability?', a: 'Kelly Domeniconi, our Director of Sales, is the best first contact for tours, availability, and move-in questions. You can also call either community directly: Salem at (978) 744-1002 or Swampscott at (781) 595-1991.' },
  { q: 'Who coordinates resident care?', a: 'Each community has its own Assisted Living Coordinator and Wellness team who oversee care plans and daily support. They work closely with each resident’s personal physician and family.' },
  { q: 'Does each location have its own leadership team?', a: 'Yes. Salem and Swampscott each have a dedicated Executive Director and on-site team. Robert Wasserman serves as President of John Bertram Homes overall and Executive Director of the Swampscott community.' },
  { q: 'Who oversees wellness and daily care?', a: 'At Salem, MaryAnne Thompson serves as Wellness Nurse. At Swampscott, the Assisted Living Coordinator and Reminiscence Coordinator lead daily care for assisted living and memory care residents respectively.' },
  { q: 'Who supports activities and dining?', a: 'Each community has a dedicated Activities lead and Dining Service Coordinator who shape daily life, from meal experience to programming.' },
  { q: 'How does the Board of Trustees support the mission?', a: 'Our volunteer Board provides governance, strategic oversight, financial stewardship, and protection of the non-profit mission. The Board ensures John Bertram Homes remains people-first for generations to come.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Our Team', path: '/leadership' },
];

function TeamCard({ m }) {
  return (
    <div className="leader-card">
      <div className="leader-avatar">
        {m.img ? <img src={m.img} alt={m.name} /> : m.initials}
      </div>
      <h4>{m.name}</h4>
      <p className="leader-title">{m.title}</p>
    </div>
  );
}

function LocationTeam({ members }) {
  return (
    <div className="team-grid">
      {members.map((m) => <TeamCard key={m.name} m={m} />)}
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={ORGANIZATION} />

      <div className="page-hero">
        <p className="eyebrow">Our Team</p>
        <h1>Experienced, Compassionate People Behind Every Day of Care</h1>
        <p>Our team includes leadership, wellness, care coordination, dining, activities, maintenance, and administrative professionals who work together to make daily life safe, comfortable, and meaningful for residents.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          <Link href="/contact" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Why Our Team Matters</p>
            <h2>The People Behind the Care</h2>
            <p>Care, wellness, dining, activities, maintenance, administration, leadership, and trustees all shape the resident experience. This page is more than a directory — it’s the team that makes daily life work.</p>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {trustCards.map((c) => (
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
            <p className="eyebrow">John Bertram Homes</p>
            <h2>Leadership Team</h2>
            <p>Senior leadership across both communities. Reach out directly with questions about availability, admissions, finance, or operations.</p>
            <div className="divider"></div>
          </FadeIn>

          <div className="team-grid" style={{ maxWidth: '1040px', margin: '0 auto' }}>
            {seniorLeaders.map((m) => (
              <FadeIn key={m.name} className="leader-card" style={{ padding: '28px 24px' }}>
                <div className="leader-avatar"><img src={m.img} alt={m.name} /></div>
                <h4>{m.name}</h4>
                <p className="leader-title">{m.title}</p>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '12px', lineHeight: 1.6 }}>{m.bio}</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--navy)', marginTop: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contact about: <span style={{ color: '#555', textTransform: 'none', fontWeight: 400, letterSpacing: 0 }}>{m.contactAbout}</span></p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Salem · 29 Washington Square</p>
            <h2>John Bertram House of Salem Team</h2>
            <p>Our Salem community team supports assisted living residents in a historic Federalist home on Salem Common.</p>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn>
            <LocationTeam members={salemTeam} />
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Swampscott · 565 Humphrey Street</p>
            <h2>John Bertram House of Swampscott Team</h2>
            <p>Our Swampscott community team supports both assisted living residents and our dedicated <Link href="/memory-care" style={{ color: 'var(--navy)', fontWeight: 600 }}>Reminiscence memory care</Link> neighborhood.</p>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn>
            <LocationTeam members={swampscottTeam} />
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Governance</p>
            <h2>Board of Trustees</h2>
            <p>Our volunteer Board provides strategic oversight, financial stewardship, and protection of the non-profit mission that has guided John Bertram Homes since 1887.</p>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn className="board-list" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            {board.map((p) => (
              <p key={p} style={{ fontSize: '1.05rem', margin: '6px 0', color: '#333' }}>{p}</p>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
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

      <section className="section">
        <div className="container">
          <FadeIn className="callout-box" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <h3>See the John Bertram Difference in Person</h3>
            <p>The best way to understand our team is to meet them. Schedule a tour at either community and we’ll walk you through.</p>
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
