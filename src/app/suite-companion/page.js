import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { LightboxImage } from '@/components/Lightbox';

export const metadata = { title: 'Companion Suites' };

const photos = [
  { src: '/images/swampscott/3rdfloormusic1.jpg', alt: 'Reminiscence neighborhood common area', caption: 'Reminiscence Common Area' },
  { src: '/images/swampscott/3rdfloormusic2.jpg', alt: 'Reminiscence music and activity space', caption: 'Music & Activities' },
  { src: '/images/swampscott/3rdfloortvroom1.jpg', alt: 'Reminiscence TV and living space', caption: 'TV & Living Area' },
  { src: '/images/swampscott/3rdfloortvroom2.jpg', alt: 'Reminiscence shared lounge', caption: 'Shared Lounge' },
  { src: '/images/swampscott/2ndfloorwalkway1.jpg', alt: 'Reminiscence neighborhood walkway', caption: 'Neighborhood Walkway' },
];

export default function SuiteCompanionPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Our Suites</p>
        <h1>Companion Suites</h1>
        <p>Memory care living at John Bertram House of Swampscott.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: '1.05rem', color: '#444', maxWidth: '720px', marginBottom: '40px' }}>Companion suites are available in our Reminiscence memory care neighborhood, offering shared living spaces in a safe, nurturing environment.</p>
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
