import Link from 'next/link';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/FadeIn';
import { posts, getPost } from '@/data/blogPosts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Blog' };
  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [post.img],
      type: 'article',
    },
  };
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2>{block.text}</h2>;
    case 'ul':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="article-quote">
          <p>{block.text}</p>
          {block.cite && <cite>— {block.cite}</cite>}
        </blockquote>
      );
    case 'p':
    default:
      return <p>{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <section
          className="article-hero"
          style={{ backgroundImage: `linear-gradient(rgba(6,32,107,0.55), rgba(6,32,107,0.7)), url(${post.img})` }}
        >
          <div className="container">
            <Link href="/blog" className="article-back">← Back to Blog</Link>
            <p className="article-meta">{post.date} · {post.readTime}</p>
            <h1>{post.title}</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <FadeIn className="article-body">
              <p className="article-lead">{post.desc}</p>
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}

              <div className="article-cta">
                <p>Interested in life at John Bertram Homes?</p>
                <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '36px' }}>More Stories</h2>
            <div className="blog-grid">
              {related.map((p) => (
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
          </div>
        </section>
      )}
    </>
  );
}
