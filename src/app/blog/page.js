import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Blog' };

const posts = [
  { date: 'March 15, 2026', title: 'Community Garden Update', img: '/images/swampscott/exterior5.jpg', alt: 'Grounds and gardens at John Bertram Homes', desc: "Our residents have been hard at work planting spring flowers and vegetables in the community garden. See what's blooming this season." },
  { date: 'February 28, 2026', title: 'Holiday Celebrations at JBH', img: '/images/swampscott/1stdining1.jpg', alt: 'Holiday celebrations at John Bertram Homes', desc: 'From festive decorations to special meals, our communities came together to celebrate the holiday season with joy and togetherness.' },
  { date: 'January 20, 2026', title: 'Meet Our Team', img: '/images/swampscott/lobby1.jpg', alt: 'Meet our dedicated team members', desc: 'Get to know the compassionate professionals who make John Bertram Homes a special place for our residents and their families.' },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">News &amp; Stories</span>
          <h1>Blog</h1>
          <p>Stories, updates, and news from the John Bertram Homes community.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <FadeIn className="callout-box">
            <h3>Coming Soon</h3>
            <p>We&apos;re working on bringing you stories, updates, and news from our communities. Check back soon for articles about daily life, resident spotlights, community events, and more.</p>
            <p>In the meantime, visit our Testimonials page to hear from residents and families.</p>
            <Link href="/testimonials" className="btn btn-navy" style={{ marginTop: '16px' }}>Read Testimonials</Link>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="blog-grid">
            {posts.map((p) => (
              <FadeIn key={p.title} className="blog-card">
                <div className="blog-card-image">
                  <img src={p.img} alt={p.alt} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <p className="blog-date">{p.date}</p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
