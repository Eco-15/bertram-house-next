import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { LightboxImage } from '@/components/Lightbox';

export const metadata = { title: 'Life at John Bertram Homes' };

const photos = [
  { src: '/images/swampscott/1stdining1.jpg', alt: 'Dining room set for service', caption: 'Dining Together' },
  { src: '/images/swampscott/sunroom1.jpg', alt: 'Bright sunroom gathering space', caption: 'Bright Common Spaces' },
  { src: '/images/swampscott/exterior8.jpg', alt: 'Outdoor courtyard at John Bertram House of Swampscott', caption: 'Outdoor Courtyard' },
  { src: '/images/swampscott/library1.jpg', alt: 'Library and reading area', caption: 'Library & Reading' },
  { src: '/images/swampscott/exterior2.jpg', alt: 'Deck and outdoor walkway', caption: 'Outdoor Living' },
  { src: '/images/swampscott/3rdfloortvroom1.jpg', alt: 'Common area and TV room', caption: 'Common Areas' },
];

export default function LifePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Experience the Difference</span>
          <h1>Life at John Bertram Homes</h1>
          <p>Every day brings meaningful connections, engaging activities, and the comfort of a true home.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <span className="eyebrow">Our Communities</span>
            <h2>A Day in Our Communities</h2>
          </FadeIn>

          <div className="photo-grid">
            {photos.map((p) => (
              <LightboxImage key={p.src} src={p.src} alt={p.alt} caption={p.caption} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <span className="eyebrow">What to Expect</span>
            <h2>Daily Life at John Bertram Homes</h2>
          </FadeIn>

          <div className="benefit-cards">
            {[
              {
                title: 'Chef-Crafted Dining',
                desc: 'Three home-cooked meals daily with fresh ingredients, plus snacks throughout the day in welcoming dining rooms.',
                img: '/images/swampscott/1stdining1.jpg',
                icon: (<svg viewBox="0 0 24 24"><path d="M4 3v8a3 3 0 003 3v7" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 3v8" strokeLinecap="round"/><path d="M7 3v6" strokeLinecap="round"/><path d="M17 3c-1.5 0-3 2-3 5s1.5 5 3 5v8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Engaging Activities',
                desc: 'Full calendars of exercise classes, cultural outings, games, arts, music, and community events.',
                img: '/images/swampscott/3rdfloormusic1.jpg',
                icon: (<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>),
              },
              {
                title: 'Wellness & Care',
                desc: 'Personalized care plans, dedicated staff, RN oversight, and dedicated memory care programs.',
                img: '/images/swampscott/lobby1.jpg',
                icon: (<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Home-Like Setting',
                desc: 'Comfortable suites, beautiful common areas, gardens, and spaces that feel like home.',
                img: '/images/swampscott/sunroom1.jpg',
                icon: (<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
              },
            ].map((b) => (
              <FadeIn key={b.title} className="benefit-card">
                <div className="benefit-card-image">
                  <img src={b.img} alt={b.title} loading="lazy" />
                </div>
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <FadeIn style={{ marginBottom: '48px' }}>
            <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.8, color: '#333', margin: '0 0 16px' }}>
              &ldquo;The staff truly treats my mother like family. We have complete peace of mind knowing she is safe, happy, and well cared for every single day.&rdquo;
            </blockquote>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>&mdash; Family Member, John Bertram House of Swampscott</p>
          </FadeIn>
          <div className="divider" style={{ background: '#e0e0e0', marginBottom: '48px' }}></div>
          <FadeIn>
            <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.8, color: '#333', margin: '0 0 16px' }}>
              &ldquo;Moving to John Bertram House was the best decision we ever made. The community is warm, the food is wonderful, and there is always something to do.&rdquo;
            </blockquote>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>&mdash; Resident, John Bertram House of Salem</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-sm section-light" style={{ textAlign: 'center' }}>
        <div className="container">
          <FadeIn tag="h2">Experience John Bertram Homes</FadeIn>
          <FadeIn tag="p">Schedule a personal tour and discover the difference for yourself.</FadeIn>
          <FadeIn style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
