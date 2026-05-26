import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { LightboxImage } from '@/components/Lightbox';

export const metadata = {
  title: 'Photo Tour | John Bertram Homes',
  description:
    'Take a photo tour of John Bertram Homes — dining rooms, common spaces, the library, sunroom, and grounds at our Salem and Swampscott assisted living communities on the North Shore.',
  alternates: { canonical: 'https://bertramhouse.org/life' },
};

const photos = [
  { src: '/images/swampscott/1stdining6.jpg', alt: 'Residents enjoying lunch together in the Swampscott dining room', caption: 'Dining Together' },
  { src: '/images/swampscott/1stdining5.jpg', alt: 'A caregiver sharing the menu with a resident at lunch', caption: 'Personal, Attentive Service' },
  { src: '/images/swampscott/1stdining1.jpg', alt: 'Swampscott dining room set for service with linens and flowers', caption: 'Our Dining Room' },
  { src: '/images/swampscott/sunroom1.jpg', alt: 'Bright sunroom gathering space at John Bertram House of Swampscott', caption: 'Bright Common Spaces' },
  { src: '/images/swampscott/library1.jpg', alt: 'Library and reading area with a fireplace', caption: 'Library & Reading' },
  { src: '/images/swampscott/3rdfloormusic1.jpg', alt: 'Music and activity room at John Bertram House of Swampscott', caption: 'Music & Activities' },
  { src: '/images/swampscott/3rdfloortvroom1.jpg', alt: 'Common area and TV room', caption: 'Common Areas' },
  { src: '/images/swampscott/lobby1.jpg', alt: 'Foyer and living room at John Bertram House of Swampscott', caption: 'Foyer & Living Room' },
  { src: '/images/swampscott/exterior8.jpg', alt: 'Outdoor courtyard at John Bertram House of Swampscott', caption: 'Outdoor Courtyard' },
  { src: '/images/swampscott/exterior2.jpg', alt: 'Deck and outdoor walkway at John Bertram House of Swampscott', caption: 'Outdoor Living' },
  { src: '/images/swampscott/exterior1.jpg', alt: 'Exterior of John Bertram House of Swampscott', caption: 'Our Swampscott Community' },
  { src: 'https://www.bertramhouse.org/images/jbh-house.png', alt: 'The historic John Bertram House of Salem on Salem Common', caption: 'Our Historic Salem Home' },
];

export default function LifePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Experience the Difference</span>
          <h1>Photo Tour</h1>
          <p>Step inside John Bertram Homes. Click any photo to enlarge it, then use the arrows to browse the full tour of both communities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <span className="eyebrow">Our Communities</span>
            <h2>A Look Inside Salem &amp; Swampscott</h2>
          </FadeIn>

          <div className="photo-grid">
            {photos.map((p) => (
              <LightboxImage key={p.src} src={p.src} alt={p.alt} caption={p.caption} gallery={photos} />
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
          <FadeIn tag="p">Photos only tell part of the story. Schedule a personal tour and discover the difference for yourself.</FadeIn>
          <FadeIn style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
