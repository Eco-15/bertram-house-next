import { Suspense } from 'react';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Get in Touch</p>
        <h1>Contact Us</h1>
        <p>We respond within one business day. We&apos;d love to answer your questions and help you find the right fit.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="contact-layout">
            <div className="contact-info">
              <h3>Our Locations</h3>

              <div className="contact-facility contact-facility-salem">
                <h4>John Bertram House of Salem</h4>
                <p>29 Washington Square<br />
                Salem, MA 01970<br /><br />
                <strong>Main:</strong> <a href="tel:9787441002">(978) 744-1002</a></p>
              </div>

              <div className="contact-facility contact-facility-swampscott">
                <h4>John Bertram House of Swampscott</h4>
                <p>565 Humphrey Street<br />
                Swampscott, MA 01907<br /><br />
                <strong>Main:</strong> <a href="tel:7815951991">(781) 595-1991</a></p>
              </div>

              <div style={{ marginTop: '24px', padding: '24px', background: 'var(--off-white)', borderRadius: '8px', borderLeft: '4px solid var(--gold)' }}>
                <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: 'var(--navy)' }}>Point of Contact</h4>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7 }}>
                  <strong>Kelly Domeniconi</strong><br />Director of Sales<br />John Bertram Homes<br /><br />
                  <a href="tel:7815951991,159" style={{ color: 'var(--navy)', fontWeight: 600 }}>(781) 595-1991 &times;159</a><br />
                  <a href="mailto:johnbertramhousedos@bertramhouse.org" style={{ color: 'var(--navy)', fontWeight: 600 }}>johnbertramhousedos@bertramhouse.org</a>
                </p>
              </div>

              <div style={{ marginTop: '32px', padding: '20px', background: 'var(--off-white)', color: '#222', borderRadius: '8px', border: '1px solid #ececec' }}>
                <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: 'var(--navy)' }}>Our Promise</h4>
                <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.7 }}>We will get back to you within one business day. Whether you&apos;re just starting to explore options or are ready to schedule a tour, we&apos;re here to help — with no pressure and no commitment required.</p>
              </div>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222', marginBottom: '8px' }}>Send Us a Message</h2>
              <p style={{ color: '#666', marginBottom: '28px', fontSize: '0.9rem' }}>Fill out the form below and we will respond within one business day.</p>
              <Suspense fallback={<div>Loading...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-sm section-light" style={{ borderTop: '1px solid #e8e8e8' }}>
        <div className="container">
          <FadeIn style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', minHeight: '400px' }}>
              <iframe
                src="https://maps.google.com/maps?ll=42.505,-70.905&z=12&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing John Bertram Homes Salem and Swampscott locations"
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=29+Washington+Square,+Salem,+MA+01970"
                target="_blank"
                rel="noopener"
                className="map-pin"
                style={{ top: '26%', left: '54%' }}
                aria-label="Get directions to John Bertram House of Salem"
              >
                <span className="map-pin-emoji" role="img" aria-hidden="true">🏠</span>
                <span className="map-pin-label">Salem</span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=565+Humphrey+Street,+Swampscott,+MA+01907"
                target="_blank"
                rel="noopener"
                className="map-pin"
                style={{ top: '64%', left: '40%' }}
                aria-label="Get directions to John Bertram House of Swampscott"
              >
                <span className="map-pin-emoji" role="img" aria-hidden="true">🏠</span>
                <span className="map-pin-label">Swampscott</span>
              </a>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy)', marginBottom: '20px' }}>Visit Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '20px', border: '2px solid rgba(6,32,107,0.15)', borderRadius: '8px' }}>
                  <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--navy)', marginBottom: '8px' }}>John Bertram House of Salem</div>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=29+Washington+Square,+Salem,+MA+01970" target="_blank" rel="noopener" style={{ fontSize: '0.95rem', color: '#333', display: 'block', marginBottom: '6px' }}>29 Washington Square, Salem, MA 01970 &rarr;</a>
                  <a href="tel:9787441002" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem' }}>(978) 744-1002</a>
                </div>
                <div style={{ padding: '20px', border: '2px solid rgba(6,32,107,0.15)', borderRadius: '8px' }}>
                  <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--navy)', marginBottom: '8px' }}>John Bertram House of Swampscott</div>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=565+Humphrey+Street,+Swampscott,+MA+01907" target="_blank" rel="noopener" style={{ fontSize: '0.95rem', color: '#333', display: 'block', marginBottom: '6px' }}>565 Humphrey Street, Swampscott, MA 01907 &rarr;</a>
                  <a href="tel:7815951991" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem' }}>(781) 595-1991</a>
                </div>
              </div>
              <p style={{ marginTop: '16px', fontSize: '0.85rem', color: '#777', lineHeight: 1.7 }}>Click an address to open driving directions in Google Maps.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
