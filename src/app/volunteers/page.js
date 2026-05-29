import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Volunteer Opportunities' };

const ways = [
  {
    title: 'Friendly Visiting',
    desc: 'Share conversation and companionship with residents.',
    img: '/images/swampscott/lobby1.jpg',
    icon: (<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: 'Group Activities',
    desc: 'Assist with games, events, and social programs.',
    img: '/images/swampscott/3rdfloortvroom1.jpg',
    icon: (<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>),
  },
  {
    title: 'Music',
    desc: 'Share songs, play an instrument, or lead sing-alongs.',
    img: '/images/swampscott/3rdfloormusic1.jpg',
    icon: (<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>),
  },
  {
    title: 'Arts & Crafts',
    desc: 'Help with creative projects and art sessions.',
    img: '/images/swampscott/sunroom1.jpg',
    icon: (<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2.4c3.1 0 5.6-2.5 5.6-5.6C23 6.1 18.1 2 12 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: 'Holiday Events',
    desc: 'Support special celebrations and seasonal events.',
    img: '/images/swampscott/1stdining1.jpg',
    icon: (<svg viewBox="0 0 24 24"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
];

export default function VolunteersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Make a Difference</span>
          <h1>Volunteer Opportunities</h1>
          <p>Share your time and talents to brighten daily life for our residents.</p>
        </div>
      </section>

      <FadeIn tag="section" className="section">
        <div className="container">
          <div className="two-col">
            <div className="content-block">
              <h2>Volunteers Make a Difference</h2>
              <p>Volunteers play an important role in enriching the lives of residents at John Bertram Homes. By sharing your time, talents, and companionship, you help create meaningful moments that brighten daily life for those who call our residences home.</p>
              <p>We welcome individuals, students, and community members who are interested in making a difference.</p>
            </div>
            <div>
              <img src="/images/swampscott/3rdfloormusic1.jpg" alt="Activities at John Bertram House of Swampscott" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn tag="section" className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Get Involved</span>
            <h2>Ways Volunteers Help</h2>
          </div>
          <div className="benefit-cards benefit-cards-5">
            {ways.map((w) => (
              <div key={w.title} className="benefit-card">
                <div className="benefit-card-image">
                  <img src={w.img} alt={w.title} loading="lazy" />
                </div>
                <span className="benefit-icon">{w.icon}</span>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn tag="section" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="callout-box">
            <h3>Become a Volunteer</h3>
            <p>Ready to make a difference? Contact our Activities Coordinator Athena to learn more about volunteer opportunities.</p>
            <p><a href="mailto:swampscottavc@bertramhouse.org">swampscottavc@bertramhouse.org</a></p>
            <a href="mailto:swampscottavc@bertramhouse.org" className="btn btn-navy">Contact Us</a>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
