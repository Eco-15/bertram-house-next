import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import Counter from '@/components/Counter';

export const metadata = { title: 'Ways to Give' };

const options = [
  {
    title: 'One-Time Gift',
    desc: 'Make an immediate impact with a one-time charitable contribution of any amount.',
    cta: 'Donate Now',
    href: '/donate',
    icon: (<svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="7" width="20" height="5" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="22" x2="12" y2="7" strokeLinecap="round"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: 'Monthly Giving',
    desc: 'Become a sustaining supporter with a recurring monthly donation.',
    cta: 'Become a Monthly Donor',
    href: '/contact',
    icon: (<svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10" strokeLinecap="round" strokeLinejoin="round"/><polyline points="1 20 1 14 7 14" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: 'Planned Giving',
    desc: 'Include John Bertram Homes in your estate plan to create a lasting legacy.',
    cta: 'Learn More',
    href: '/contact',
    icon: (<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: 'In-Kind Donations',
    desc: 'Donate goods, supplies, or services that directly benefit our residents.',
    cta: 'Learn More',
    href: '/in-kind-donations',
    icon: (<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round"/></svg>),
  },
  {
    title: 'Memorial & Tribute Gifts',
    desc: 'Honor or remember a loved one with a meaningful contribution in their name.',
    cta: 'Make a Tribute',
    href: '/make-a-tribute',
    icon: (<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
];

const stats = [
  { value: 139, suffix: '', label: 'Years of Care' },
  { value: 2, suffix: '', label: 'Communities' },
  { value: 1887, suffix: '', label: 'Founded' },
  { value: 100, suffix: '%', label: 'Non-Profit' },
];

export default function WaysToGivePage() {
  return (
    <>
      <section className="section give-hero">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow">Support Our Mission</p>
              <h1>Ways to Give</h1>
              <p>Your generosity helps our residents live with dignity, comfort, and joy — and keeps our non-profit communities thriving for generations to come. However you choose to give, your gift makes a difference.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/donate" className="btn btn-navy">Donate Now</Link>
                <Link href="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="image-block">
              <img src="/images/giving-hero.jpg" alt="A John Bertram Homes resident smiling while planting tomatoes in the community garden" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Choose Your Path</p>
            <h2>How to Give</h2>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn className="giving-grid">
            {options.map((o) => (
              <div key={o.title} className="giving-card">
                <div className="giving-icon">{o.icon}</div>
                <h4>{o.title}</h4>
                <p>{o.desc}</p>
                <Link href={o.href} className="btn btn-navy" style={{ marginTop: '20px', fontSize: '0.72rem', padding: '10px 18px' }}>{o.cta}</Link>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Your Gift at Work</p>
            <h2>A Legacy of Care</h2>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn className="stats-bar">
            <div className="stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="stat-item">
                  <div className="number"><Counter target={s.value} suffix={s.suffix} /></div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="callout-box" style={{ textAlign: 'center' }}>
            <h3>Ready to Give?</h3>
            <p>We would love to help you find the giving option that is right for you. Whether you would like to make a donation today or learn more about planned giving and other options, our team is here to assist. Contact us for more information or make a contribution now to support the seniors in our care.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link href="/donate" className="btn btn-navy">Donate Now</Link>
              <Link href="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
