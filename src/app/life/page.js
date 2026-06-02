import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { LightboxImage } from '@/components/Lightbox';

export const metadata = {
  title: 'Photo Gallery | John Bertram Homes',
  description:
    'Browse the photo gallery of John Bertram Homes — dining rooms, common spaces, the library, sunroom, and grounds at our Salem and Swampscott assisted living communities on the North Shore.',
  alternates: { canonical: 'https://bertramhouse.org/life' },
};

const photos = [
  // Salem
  { src: '/images/salem/exterior5.jpg', alt: 'Historic brick exterior of John Bertram House of Salem with American flag on Salem Common', caption: 'Salem — On the Common' },
  { src: '/images/salem/exterior1.jpg', alt: 'Front entrance of John Bertram House of Salem', caption: 'Salem — Front Entrance' },
  { src: '/images/salem/dining1.jpg', alt: 'Elegant Salem dining room with floral wallpaper, chandelier, and fireplace', caption: 'Salem — Dining Room' },
  { src: '/images/salem/scrabble1.jpg', alt: 'Two residents playing Scrabble at John Bertram House of Salem', caption: 'Salem — Game Time' },
  { src: '/images/salem/menu1.jpg', alt: 'A server presenting the day’s menu to a resident in the elegant Salem dining room', caption: 'Salem — Tableside Service' },
  { src: '/images/salem/library1.jpg', alt: 'Cozy library and reading room with fireplace at John Bertram House of Salem', caption: 'Salem — Library' },
  { src: '/images/salem/sunarea1.jpg', alt: 'Bright sun room at John Bertram House of Salem', caption: 'Salem — Sun Room' },
  { src: '/images/salem/livingarea1.jpg', alt: 'Comfortable living area at John Bertram House of Salem', caption: 'Salem — Living Area' },
  { src: '/images/salem/livingarea2.jpg', alt: 'Elegant parlor with chandelier, fireplace, and piano at John Bertram House of Salem', caption: 'Salem — Parlor' },
  { src: '/images/salem/dining2.jpg', alt: 'Historic dining hall with floral wallpaper and fireplace at John Bertram House of Salem', caption: 'Salem — Dining Hall' },
  { src: '/images/salem/library2.jpg', alt: 'Reading room with built-in bookshelves and chandelier at John Bertram House of Salem', caption: 'Salem — Reading Room' },
  { src: '/images/salem/stairs3.jpg', alt: 'Grand staircase and front hall with grandfather clock at John Bertram House of Salem', caption: 'Salem — Grand Staircase' },
  { src: '/images/salem/park1.jpg', alt: 'Salem Common with the historic bandstand across from John Bertram House of Salem', caption: 'Salem — Salem Common' },
  { src: '/images/salem/sunarea2.jpg', alt: 'Outdoor deck with seating and shade at John Bertram House of Salem', caption: 'Salem — Outdoor Deck' },
  // Swampscott
  { src: '/images/swampscott/1stdining6.jpg', alt: 'Residents enjoying lunch together in the Swampscott dining room', caption: 'Swampscott — Dining Together' },
  { src: '/images/swampscott/1stdining5.jpg', alt: 'A caregiver sharing the menu with a resident at lunch', caption: 'Swampscott — Attentive Service' },
  { src: '/images/swampscott/1stdining2.jpg', alt: 'Elegant first-floor dining room at John Bertram House of Swampscott', caption: 'Swampscott — Dining Room' },
  { src: '/images/swampscott/1stdining7.jpg', alt: 'Dining room table settings at John Bertram House of Swampscott', caption: 'Swampscott — Country-Inn Dining' },
  { src: '/images/swampscott/2nddining2.jpg', alt: 'Memory care dining room at John Bertram House of Swampscott', caption: 'Swampscott — Memory Care Dining' },
  { src: '/images/swampscott/entrancehall1.jpg', alt: 'Entrance hall at John Bertram House of Swampscott', caption: 'Swampscott — Entrance Hall' },
  { src: '/images/swampscott/lobby4.jpg', alt: 'First-floor lobby at John Bertram House of Swampscott', caption: 'Swampscott — First Floor Lobby' },
  { src: '/images/swampscott/lobby2.jpg', alt: 'Veteran appreciation wall at John Bertram House of Swampscott', caption: 'Swampscott — Veteran Appreciation Wall' },
  { src: '/images/swampscott/2ndfloorlobby1.jpg', alt: 'Second-floor lobby at John Bertram House of Swampscott', caption: 'Swampscott — Second Floor' },
  { src: '/images/swampscott/sunroom1.jpg', alt: 'Bright sunroom gathering space at John Bertram House of Swampscott', caption: 'Swampscott — Sunroom' },
  { src: '/images/swampscott/library4.jpg', alt: 'Library and reading area with a fireplace', caption: 'Swampscott — Library' },
  { src: '/images/swampscott/3rdfloormusic1.jpg', alt: 'Music and activity room at John Bertram House of Swampscott', caption: 'Swampscott — Music & Activities' },
  { src: '/images/swampscott/exterior8.jpg', alt: 'Outdoor courtyard at John Bertram House of Swampscott', caption: 'Swampscott — Outdoor Courtyard' },
  { src: '/images/swampscott/exterior6.jpg', alt: 'Outdoor walking path at John Bertram House of Swampscott', caption: 'Swampscott — Outdoor Walking Path' },
  { src: '/images/swampscott/exterior3.jpg', alt: 'Exterior grounds at John Bertram House of Swampscott', caption: 'Swampscott — Our Grounds' },
  { src: '/images/swampscott/exterior1.jpg', alt: 'Exterior of John Bertram House of Swampscott', caption: 'Swampscott — Our Community' },
];

export default function LifePage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '32px' }}>
        <div className="container">
          <FadeIn className="section-header">
            <span className="eyebrow">Our Communities</span>
            <h1>Photo Gallery</h1>
            <p>A look inside Salem &amp; Swampscott. Click any photo to enlarge it, then use the arrows to browse both communities.</p>
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
