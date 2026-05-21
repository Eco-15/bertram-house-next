import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Our Supporters' };

export default function SupportersPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Thank You</p>
        <h1>Our Supporters</h1>
        <p>We are grateful to the individuals and organizations who support our mission.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Thank You to Our Generous Supporters</h2>
            <p style={{ marginTop: '16px' }}>The work we do at John Bertram Homes would not be possible without the extraordinary generosity of our supporters. From individuals and families to local businesses and community organizations, your contributions make a profound difference in the lives of the seniors we serve.</p>
            <p style={{ marginTop: '16px' }}>Every donation — whether large or small — helps us maintain the highest standards of care, fund resident programs and activities, support staff development, and ensure that our communities remain warm, welcoming places for all who call them home.</p>
            <p style={{ marginTop: '16px' }}>We are deeply grateful for each and every gift, and we are honored by the trust our supporters place in us to carry forward Captain John Bertram&apos;s legacy of compassion and service.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <h2>Community Partners</h2>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="callout-box" style={{ textAlign: 'center' }}>
              <h3>Our Community Makes It Possible</h3>
              <p>We are proud to partner with dedicated individuals, families, local businesses, civic organizations, and community groups across Massachusetts&apos; North Shore. These partnerships strengthen our ability to provide exceptional care and enriching experiences for our residents every day.</p>
              <p style={{ marginTop: '16px' }}>If your organization is interested in partnering with John Bertram Homes, we would love to hear from you. Please <Link href="/contact">contact us</Link> to learn about partnership and sponsorship opportunities.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn tag="h2">Join Our Community of Supporters</FadeIn>
          <FadeIn tag="p" style={{ marginTop: '12px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', color: '#555' }}>Your contribution, no matter the size, makes a meaningful difference in the lives of the seniors we serve and the families who trust us with their care.</FadeIn>
          <FadeIn style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link href="/donate" className="btn btn-navy">Make a Donation</Link>
            <Link href="/ways-to-give" className="btn btn-outline">Ways to Give</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
