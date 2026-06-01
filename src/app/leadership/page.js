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
  { name: 'Robert Wasserman, MPH', title: 'President · Executive Director, Swampscott', img: '/images/staff/RobertWasserman.jpg' },
  { name: 'Kelly Domeniconi', title: 'Director of Sales', img: '/images/staff/KellyDomeniconi.jpg' },
  { name: 'Kathy Christopher', title: 'Finance Director', img: '/images/staff/KathyChristopher.jpg' },
  { name: 'Sarah Sterling', title: 'Compliance Officer · Executive Director, Salem', img: '/images/staff/SarahSterling.jpg' },
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
];

const swampscottTeam = [
  { name: 'Robert Wasserman, MPH', title: 'Executive Director', img: '/images/staff/RobertWasserman.jpg' },
  { name: 'Marisa Waters', title: 'Assisted Living Coordinator', img: '/images/staff/MarisaWaters.jpg' },
  { name: 'Pablo Solorzano', title: 'Reminiscence Coordinator', img: '/images/staff/Pablo Solorzano.jpg' },
  { name: 'Athena Raptis', title: 'Activities Director', img: '/images/staff/AthenaRaptis.jpg' },
  { name: 'Eddy Morales', title: 'Dining Service Coordinator', img: '/images/staff/EddyMorales.jpg' },
  { name: 'Jim Vahey', title: 'Maintenance Coordinator', img: '/images/staff/JimVahey.jpg' },
];

const board = [
  'Margaret Dillon, Chair',
  'Susan Syversen, Treasurer',
  'Cathy Favreau, Secretary',
  'Jonathan Curtis',
  'Jessica Demmerly',
  'Susan Maciewiczs',
];

const faqs = [
  { q: 'Who should I contact about availability?', a: 'Kelly Domeniconi, our Director of Sales, is the best first contact for tours, availability, and move-in questions. You can also call either community directly: Salem at (978) 744-1002 or Swampscott at (781) 595-1991.' },
  { q: 'Who coordinates resident care?', a: 'Care coordination is a collaborative process led by our Assisted Living Coordinators, in partnership with the Resident Care Director, Wellness Team, residents, and their families. From the initial assessment through day-to-day support, our team works together to understand each resident’s routines, preferences, care needs, and goals. The Assisted Living Coordinators help serve as a key point of connection, making sure services are organized, communication stays clear, and each resident receives the right level of support. Our Resident Care Director and Wellness Team oversee clinical and personal care needs, while family members are encouraged to stay involved and informed. As needs change, the care plan can be reviewed and adjusted so residents continue to receive personalized, appropriate support in a comfortable and familiar environment.' },
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

      <section className="section" style={{ paddingBottom: '0', textAlign: 'center' }}>
        <div className="container">
          <h1>Our Team</h1>
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
              <FadeIn key={m.name} className="leader-card">
                <div className="leader-avatar"><img src={m.img} alt={m.name} /></div>
                <h4>{m.name}</h4>
                <p className="leader-title">{m.title}</p>
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
