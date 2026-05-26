import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Blog' };

// NOTE: Temporary, evergreen placeholder posts for demo purposes.
// Replace with the client's content from the attached blog doc when provided.
const posts = [
  { date: 'May 2026', title: '5 Questions to Ask When Touring an Assisted Living Community', img: '/images/swampscott/lobby1.jpg', alt: 'Welcoming foyer and living room at John Bertram House of Swampscott', desc: 'Touring senior living can feel overwhelming. Here are the five questions that reveal the most about the quality of care — and how John Bertram Homes answers each one.' },
  { date: 'May 2026', title: 'What Makes Memory Care Different', img: '/images/swampscott/3rdfloormusic1.jpg', alt: 'Music and activity space in the Swampscott Reminiscence neighborhood', desc: 'Our dedicated Reminiscence neighborhood in Swampscott is designed around structure, familiarity, and dignity. Here’s how memory care differs from assisted living.' },
  { date: 'April 2026', title: 'A Day in the Life at John Bertram Homes', img: '/images/swampscott/1stdining6.jpg', alt: 'Residents sharing a meal together in the dining room', desc: 'From morning coffee in the sunroom to evening entertainment, see how a typical day unfolds across our Salem and Swampscott communities.' },
  { date: 'April 2026', title: 'Why Non-Profit Senior Living Matters', img: '/images/swampscott/exterior1.jpg', alt: 'Exterior of John Bertram House of Swampscott', desc: 'As a 501(c)(3) serving the North Shore since 1887, our mission — not margins — drives every decision. Here’s why that matters for families.' },
  { date: 'March 2026', title: 'Activities That Bring Residents Together', img: '/images/swampscott/3rdfloortvroom1.jpg', alt: 'Residents gathering in a common area', desc: 'Music, exercise, outings, and games aren’t filler — they’re how friendships form. A look at the programs that shape community life.' },
  { date: 'March 2026', title: 'Welcoming Spring on the North Shore', img: '/images/swampscott/exterior5.jpg', alt: 'Gardens and grounds at John Bertram Homes', desc: 'Warmer days mean garden walks, patio gatherings, and seasonal menus. Here’s what residents look forward to as spring arrives in Salem and Swampscott.' },
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

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          </div>
        </div>
      </section>
    </>
  );
}
