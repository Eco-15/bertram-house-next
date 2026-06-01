import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

// Shared "Family Communication" section used across the Living Experiences landing
// pages (assisted living, independent living, respite care, memory care). Highlights
// the ways families stay connected: newsletters, the upcoming blog, and Facebook.
export default function FamilyCommunication() {
  return (
    <section className="section section-light">
      <div className="container">
        <FadeIn className="section-header">
          <p className="eyebrow">Staying Connected</p>
          <h2>Family Communication</h2>
          <p>Families are partners in care. We keep loved ones informed and involved through regular communication and an open-door approach.</p>
          <div className="divider"></div>
        </FadeIn>

        <div className="features-grid">
          <FadeIn className="feature-item">
            <h4>Newsletters</h4>
            <p>Periodic newsletters share community happenings, menus, and updates so families always know what life looks like day to day.</p>
          </FadeIn>
          <FadeIn className="feature-item">
            <h4>Our New Blog</h4>
            <p>A brand-new blog is coming soon with stories, tips for families, and news from both communities. <Link href="/blog" style={{ color: 'var(--navy)', fontWeight: 600 }}>Take a look →</Link></p>
          </FadeIn>
          <FadeIn className="feature-item">
            <h4>Follow Us on Facebook</h4>
            <p>Our <a href="https://www.facebook.com/JohnBertramHouse" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navy)', fontWeight: 600 }}>Facebook page</a> shows regular photos of activities, outings, celebrations, and more — a window into daily life at John Bertram Homes.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
