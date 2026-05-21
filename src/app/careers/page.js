import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Careers' };

const positions = [
  { title: 'Care Manager', desc: 'Provide direct personal care and support to residents throughout the day.' },
  { title: 'Kitchen Service Staff', desc: 'Help prepare and serve chef-crafted meals in our welcoming dining rooms.' },
  { title: 'Concierge', desc: 'Welcome visitors, answer phones, and provide a warm first impression.' },
  { title: 'Housekeeping Services', desc: 'Maintain a clean, comfortable, and home-like environment for residents.' },
  { title: 'Maintenance Staff', desc: 'Ensure our facilities are safe, well-maintained, and in excellent condition.' },
  { title: 'Administrative Support', desc: 'Support daily operations with organizational and administrative tasks.' },
];

export default function CareersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Join Our Team</span>
          <h1>Careers at John Bertram Homes</h1>
          <p>Make a meaningful difference every day while working in a warm, supportive environment serving seniors on the North Shore.</p>
        </div>
      </section>

      <FadeIn tag="section" className="section">
        <div className="container">
          <div className="two-col">
            <div className="content-block">
              <h2>Join Our Caring Community</h2>
              <p>At John Bertram House of Swampscott and Salem, our team is dedicated to creating a welcoming and supportive home for seniors on the North Shore. If you are passionate about helping others and want to be part of a caring community, we would love to hear from you.</p>
              <a href="https://www.indeed.com/cmp/Bertram-House-of-Swampscott" target="_blank" rel="noopener" className="btn btn-navy">View Current Open Positions</a>
            </div>
            <div>
              <img src="/images/swampscott/lobby1.jpg" alt="Common area at John Bertram House of Swampscott" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn tag="section" className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Work With Us</span>
            <h2>More Than a Job</h2>
            <p>Working here means more than simply having a job. It means becoming part of a mission-driven organization where relationships matter and where your work has a meaningful impact every day.</p>
          </div>
          <div className="benefit-cards">
            {[
              {
                title: 'Meaningful Work',
                desc: 'Make a difference in the daily lives of older adults.',
                icon: (<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Supportive Team',
                desc: 'Work alongside colleagues who value compassion and collaboration.',
                icon: (<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Personal Connections',
                desc: 'Build lasting relationships with residents and families.',
                icon: (<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 21v-1a6 6 0 0112 0v1" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Professional Growth',
                desc: 'Opportunities to learn, develop skills, and grow within the organization.',
                icon: (<svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeLinecap="round" strokeLinejoin="round"/><polyline points="16 7 22 7 22 13" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
            ].map((b) => (
              <div key={b.title} className="benefit-card">
                <div className="benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn tag="section" className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Current Opportunities</span>
            <h2>Open Positions</h2>
          </div>
          <div className="role-cards">
            {positions.map((p) => (
              <div key={p.title} className="role-card">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <a href="https://www.indeed.com/cmp/Bertram-House-of-Swampscott" target="_blank" rel="noopener" className="btn btn-navy">Learn More</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="https://www.indeed.com/cmp/Bertram-House-of-Swampscott" target="_blank" rel="noopener" className="btn btn-navy">View All Positions on Indeed</a>
          </div>
        </div>
      </FadeIn>

      <FadeIn tag="section" className="section section-navy">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>A Place Where Your Work Matters</h2>
          <p>At John Bertram Homes, our residents are at the heart of everything we do. Staff members often describe the community as a place where relationships are genuine and where every person contributes to making daily life meaningful.</p>
          <p>Whether you join us as an employee or volunteer, you become part of a tradition of service that has supported older adults on the North Shore for generations.</p>
          <Link href="/contact" className="btn btn-navy">Contact Us</Link>
        </div>
      </FadeIn>
    </main>
  );
}
