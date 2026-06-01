import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { posts } from '@/data/blogPosts';

export const metadata = { title: 'Blog' };

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
              <FadeIn key={p.slug} className="blog-card">
                <Link href={`/blog/${p.slug}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <img src={p.img} alt={p.alt} loading="lazy" />
                  </div>
                  <div className="blog-card-body">
                    <p className="blog-date">{p.date}</p>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <span className="blog-card-more">Read more →</span>
                  </div>
                </Link>
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
