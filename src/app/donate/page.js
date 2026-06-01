import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Make a Donation' };

export default function DonatePage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Support Our Mission</p>
        <h1>Make a Donation</h1>
        <p>Your generosity helps us provide exceptional care to seniors on the North Shore.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Support John Bertram Homes</h2>
            <p style={{ marginTop: '16px' }}>John Bertram Homes is a registered 501(c)(3) non-profit organization, and all donations are tax-deductible to the full extent permitted by law. Your generosity directly supports resident care, facility improvements, enrichment programs, and scholarships for seniors with limited resources.</p>
            <p style={{ marginTop: '16px' }}>There are several convenient ways to make your contribution:</p>
            <p style={{ marginTop: '16px' }}><strong>By Mail:</strong> Please make checks payable to &quot;John Bertram Homes&quot; and mail to:<br />John Bertram Homes, 565 Humphrey Street, Swampscott, MA 01907</p>
            <p style={{ marginTop: '16px' }}><strong>By Phone:</strong> Call us at <a href="tel:7815951991">(781) 595-1991</a> to make a donation over the phone.</p>
            <p style={{ marginTop: '16px' }}><strong>By ACH / Bank Transfer:</strong> We accept donations via ACH bank transfer. Please contact us at <a href="tel:7815951991">(781) 595-1991</a> for transfer details and routing information.</p>
            <p style={{ marginTop: '16px' }}><strong>In Person:</strong> Donations are gratefully accepted at either of our communities during regular business hours. Our staff will be happy to assist you.</p>
          </FadeIn>
        </div>
      </section>

      {/*
        TODO(client): Drop the financial/donation widget embed here.
        Paste the provider's <iframe>/<script> embed code (e.g. Givebutter, DonorBox,
        Classy, or your processor) inside the bordered container below, replacing the
        placeholder. The section heading and layout are already styled to match the site.
      */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Give Online</p>
            <h2>Make a Secure Online Gift</h2>
            <p>Use the secure form below to make a one-time or recurring tax-deductible donation.</p>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div
              id="donation-widget"
              style={{
                background: 'var(--off-white)',
                border: '1px dashed #c9c9c9',
                borderRadius: '12px',
                padding: '48px 24px',
                textAlign: 'center',
                color: '#777',
              }}
            >
              {/* Replace this placeholder with the donation widget embed code. */}
              <p style={{ marginBottom: '12px', fontWeight: 600, color: '#555' }}>Online donation widget will appear here.</p>
              <p style={{ fontSize: '0.9rem' }}>In the meantime, you can give by <a href="tel:7815951991">phone</a>, by mail, or in person — details above.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">How You Can Help</p>
            <h2>Ways to Support</h2>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn className="benefit-cards">
            {[
              {
                title: 'Make a Gift',
                desc: 'Make an immediate, tax-deductible contribution by phone, mail, ACH, or in person.',
                icon: (<svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="7" width="20" height="5" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="22" x2="12" y2="7" strokeLinecap="round"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Volunteer',
                desc: 'Share your time, talents, and companionship to brighten daily life for residents.',
                icon: (<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Planned Giving',
                desc: 'Include John Bertram Homes in your estate plan to create a lasting legacy.',
                icon: (<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
              },
            ].map((c) => (
              <div key={c.title} className="benefit-card">
                <div className="benefit-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </FadeIn>

          <FadeIn className="properties-grid" style={{ marginTop: '40px' }}>
            <div className="callout-box" style={{ textAlign: 'center' }}>
              <h3>Give by Phone</h3>
              <p>Our team is happy to accept your donation over the phone and answer any questions you may have about giving.</p>
              <p style={{ marginTop: '16px' }}><strong>Salem:</strong> <a href="tel:9787441002">(978) 744-1002</a></p>
              <p style={{ marginTop: '8px' }}><strong>Swampscott:</strong> <a href="tel:7815951991">(781) 595-1991</a></p>
            </div>
            <div className="callout-box" style={{ textAlign: 'center' }}>
              <h3>Give by Mail</h3>
              <p>Send a check made payable to &quot;John Bertram Homes&quot; to our mailing address below.</p>
              <address style={{ marginTop: '16px', fontStyle: 'normal', lineHeight: 1.8 }}>
                <strong>John Bertram Homes</strong><br />
                565 Humphrey Street<br />
                Swampscott, MA 01907
              </address>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn tag="h2">Have Questions About Giving?</FadeIn>
          <FadeIn tag="p" style={{ marginTop: '12px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', color: '#555' }}>We are here to help you find the best way to support our mission. Reach out to our team or explore additional giving options.</FadeIn>
          <FadeIn style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link href="/contact" className="btn btn-navy">Contact Us</Link>
            <Link href="/ways-to-give" className="btn btn-outline">Ways to Give</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
