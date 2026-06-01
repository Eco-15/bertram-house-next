import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { LightboxImage } from '@/components/Lightbox';

export const metadata = { title: 'One-Bedroom Apartments' };

const photos = [
  { src: '/images/swampscott/room1.jpg', alt: 'One-bedroom apartment living area', caption: 'Living Area' },
  { src: '/images/swampscott/room2.jpg', alt: 'One-bedroom apartment view', caption: 'Living Space' },
  { src: '/images/swampscott/room3.jpg', alt: 'One-bedroom apartment seating area', caption: 'Seating Area' },
  { src: '/images/swampscott/room4.jpg', alt: 'One-bedroom apartment detail', caption: 'Apartment Detail' },
  { src: '/images/swampscott/room5.jpg', alt: 'One-bedroom apartment interior', caption: 'Interior' },
];

export default function SuiteOneBedroomPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Our Residences</p>
        <h1>One-Bedroom Apartments</h1>
        <p>The most spacious option at John Bertram House of Swampscott.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: '1.05rem', color: '#444', maxWidth: '720px', marginBottom: '40px' }}>Our one-bedroom apartments feature a separate living room, bedroom, private bathroom, and kitchenette with one to two closets. Select apartments include deck or patio access.</p>
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
