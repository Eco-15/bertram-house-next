import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { LightboxImage } from '@/components/Lightbox';

export const metadata = { title: 'Studio Suites' };

const photos = [
  { src: '/images/swampscott/2ndroom1.jpg', alt: 'Studio suite bedroom', caption: 'Bedroom' },
  { src: '/images/swampscott/2ndroom2.jpg', alt: 'Studio suite living area', caption: 'Living Area' },
  { src: '/images/swampscott/2ndroom3.jpg', alt: 'Studio suite interior', caption: 'Interior' },
  { src: '/images/swampscott/2ndroom4.jpg', alt: 'Studio suite detail', caption: 'Suite Detail' },
];

export default function SuiteStudioPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Our Suites</p>
        <h1>Studio Suites</h1>
        <p>Efficient and comfortable living at John Bertram House of Swampscott.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: '1.05rem', color: '#444', maxWidth: '720px', marginBottom: '40px' }}>Studio suites offer a private bedroom, private bathroom, and kitchenette with ample closet space. Select first-floor units include deck access.</p>
          </FadeIn>

          <div className="photo-grid">
            {photos.map((p, i) => (
              <LightboxImage key={i} src={p.src} alt={p.alt} caption={p.caption} />
            ))}
          </div>

          <FadeIn style={{ marginTop: '40px' }}>
            <Link href="/swampscott" className="btn btn-navy">Back to Swampscott</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
