import Link from 'next/link';
import Tabs from '@/components/Tabs';
import JsonLd, { breadcrumbSchema, SALEM_BUSINESS } from '@/components/JsonLd';

export const metadata = {
  title: 'John Bertram House of Salem — Assisted Living on Salem Common',
  description:
    'Massachusetts’ first assisted living community, on Salem Common. Personalized assisted living in a historic Federalist home at 29 Washington Square, Salem, MA.',
  alternates: { canonical: 'https://bertramhouse.org/salem' },
};

const overview = (
  <>
    <div className="two-col fade-in visible">
      <div className="content-block">
        <h2>A Historic Community</h2>
        <p>John Bertram House of Salem holds the distinction of being <strong>Massachusetts&apos; first certified free-standing assisted living community</strong>, having opened in 1990 after an extensive restoration and renovation of the historic property.</p>
        <p>Nestled in the heart of downtown Salem, our community is housed in a stunning Federalist-style home that perfectly blends historical elegance with modern assisted living care. Residents enjoy the charm of a beautifully restored historic building while receiving personalized, compassionate support.</p>
        <p>Our social model of care empowers residents to maintain their independence while ensuring that expert support is always available. Residents keep their own physicians and specialists, and our Registered Nurse Resident Care Director leads individualized service plans for every resident.</p>
      </div>
      <div className="image-block">
        <img src="/images/salem/exterior1.jpg" alt="Front entrance of John Bertram House of Salem, a historic brick Federalist home" />
      </div>
    </div>

    <div style={{ marginTop: '56px' }}>
      <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--burgundy)', marginBottom: '24px' }}>What We Offer</h3>
      <div className="features-grid" style={{ background: 'transparent' }}>
        {[
          { title: 'Personalized Care Plans', desc: 'Every resident receives a customized service plan tailored to their preferences, from shower timing to medication reminders.' },
          { title: 'Social Model of Care', desc: "Residents keep their own doctors and specialists. Our RN leads wellness assessments while honoring each person's medical preferences." },
          { title: 'Family Communication', desc: 'Weekly management meetings to discuss residents; prompt family notifications of any changes in health or wellbeing.' },
        ].map((c) => (
          <div key={c.title} style={{ textAlign: 'left', padding: 0 }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '1.4rem', marginTop: '2px' }}>-</span>
              <div>
                <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#222', marginBottom: '6px' }}>{c.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ marginTop: '40px' }}>
      <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--burgundy)', marginBottom: '24px' }}>Included Services &amp; Amenities</h3>
      <div className="amenities-grid">
        {['Private rooms', '3 meals daily', 'Weekly housekeeping', 'Laundry service', 'Medication management', 'Full activities calendar', 'Personal alarm system'].map((a) => (
          <div key={a} className="amenity-item"><span>-</span> {a}</div>
        ))}
      </div>
    </div>
  </>
);

const suites = (
  <div>
    <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222', marginBottom: '12px' }}>Our Suites</h2>
    <p style={{ color: '#555', maxWidth: '720px', marginBottom: '32px' }}>John Bertram House of Salem offers a variety of thoughtfully designed suites within our historic Federalist home. Each suite is unique — reflecting the character of the original 19th-century architecture — while providing modern comfort and accessibility.</p>
    <div className="callout-box" style={{ maxWidth: '720px' }}>
      <h3>Suite Information Coming Soon</h3>
      <p>We&apos;re preparing detailed information and photography of our suite options. Please contact us directly to learn about availability, layouts, and pricing.</p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
        <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
        <a href="tel:9787441002" className="btn btn-navy">Call (978) 744-1002</a>
      </div>
    </div>
  </div>
);

const wellness = (
  <div className="two-col">
    <div className="content-block">
      <h2>Wellness &amp; Care</h2>
      <p>Our approach to wellness is rooted in a <strong>social model of care</strong> — not a medical one. We believe that maintaining independence, strong social connections, and a sense of purpose are as vital to health as any medical treatment.</p>
      <p>Residents at John Bertram House of Salem retain their own personal physicians and specialists. Our professional staff does not prescribe medications or diagnose illness, but instead provides essential daily support and wellness oversight.</p>

      <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#222', marginBottom: '12px', marginTop: '24px' }}>Individualized Service Plans</h4>
      <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>Every resident receives a customized plan covering:</p>
      <ul style={{ margin: '12px 0 0 20px', listStyle: 'disc', fontSize: '0.9rem', color: '#555', lineHeight: 2 }}>
        <li>Personal care preferences (shower timing, daily routines)</li>
        <li>Medication management and reminders</li>
        <li>Mobility and physical activity support</li>
        <li>Dietary needs and preferences</li>
        <li>Cognitive and emotional wellbeing activities</li>
        <li>Family communication protocols</li>
      </ul>

    </div>

    <div>
      <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '32px', marginBottom: '24px' }}>
        <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--burgundy)', marginBottom: '16px' }}>Our Wellness Philosophy</h4>
        <p style={{ fontStyle: 'italic', fontSize: '1rem', color: '#444', lineHeight: 1.8, borderLeft: '4px solid var(--burgundy)', paddingLeft: '20px' }}>&quot;The Bertram communities are dedicated to promoting the highest level of Wellness for each of our residents, through a combination of encouraging independence, providing support when needed, and communicating regularly with family members, residents, and each resident&apos;s personal medical team.&quot;</p>
      </div>

      <div style={{ background: 'var(--off-white)', color: '#222', borderRadius: '8px', padding: '32px', border: '1px solid #ececec' }}>
        <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', color: 'var(--burgundy)' }}>Communication Commitment</h4>
        <ul style={{ listStyle: 'none', fontSize: '0.9rem', lineHeight: 2, color: '#444' }}>
          <li>✓ Weekly management meetings</li>
          <li>✓ Prompt family notification of changes</li>
          <li>✓ Regular care plan reviews</li>
          <li>✓ Open-door family policy</li>
          <li>✓ No restrictions on visiting hours</li>
        </ul>
      </div>
    </div>
  </div>
);

const dining = (
  <div>
    <div className="two-col" style={{ marginBottom: '48px' }}>
      <div className="content-block">
        <h2>Exceptional Dining</h2>
        <p>Our dining room is set in a <strong>former ballroom with soaring 18-foot ceilings</strong> and sculpted crown molding, overlooking Salem Common. Fresh flowers grace every table, and fine linens set the stage for a truly elegant dining experience.</p>
        <p>Meals are crafted from fresh, quality ingredients and served by our dedicated dining staff. We accommodate special dietary needs and preferences as part of each resident&apos;s personalized service plan.</p>
        <p>Our <strong>Hydration for Better Health Program</strong> ensures Poland Spring water, cider, and fresh juices are constantly available throughout the day — because good hydration is foundational to wellbeing.</p>
      </div>
      <div className="image-block">
        <img src="/images/salem/dining1.jpg" alt="Elegant dining room with floral wallpaper, chandelier, and fireplace at John Bertram House of Salem" />
      </div>
    </div>

    <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--burgundy)', marginBottom: '24px' }}>Daily Meal Schedule</h3>
    <div className="meal-cards">
      {[
        { title: 'Breakfast', desc: 'Flexible schedule with a variety of options including coffee, tea, cereals, toast, fresh fruit, eggs, and breakfast meats. Start your morning your way.' },
        { title: 'Lunch (Noon)', desc: 'Our main meal of the day features fresh, chef-prepared entrées such as grilled salmon, homemade meatloaf, roasted potatoes, fresh vegetables, salads, and desserts.' },
        { title: 'Dinner (~5:00 PM)', desc: 'A lighter, satisfying evening meal with hot and cold sandwiches, soups, salads, pot pies, lasagna, turnovers, and ice cream and desserts.' },
        { title: 'Daily Snacks', desc: "Served in the sunroom throughout the day — from fresh fruit and mini quiches to freshly baked cookies. There's always something delicious available." },
      ].map((m) => (
        <div key={m.title} className="meal-card">
          <h4>{m.title}</h4>
          <p>{m.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const activities = (
  <div>
    <div className="two-col" style={{ marginBottom: '48px' }}>
      <div className="content-block">
        <h2>Engaging Activities</h2>
        <p>Life at John Bertram House of Salem is vibrant and full of purpose. Our Activities and Volunteer Coordinator <strong>Liz Stone</strong> creates a rich calendar of programs that adapt to the evolving interests and abilities of our residents.</p>
        <p>From morning exercise to evening entertainment, every day offers opportunities for connection, creativity, growth, and joy.</p>
      </div>
      <div>
        <img src="/images/salem/scrabble1.jpg" alt="Residents playing Scrabble together at John Bertram House of Salem" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px', objectFit: 'cover', height: '200px' }} />
        <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px' }}>
          <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--burgundy)', marginBottom: '16px' }}>Award-Winning Programs</h4>
          <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>Our non-denominational <strong>&quot;Gifts for the Soul&quot;</strong> spiritual program has received the <strong>MassALFA Program Innovation Award</strong> — a testament to our commitment to holistic, resident-centered programming.</p>
        </div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
      {[
        { title: 'Exercise & Wellness', items: ['Exercise and walking groups', 'Chair fitness classes', 'Stretching and movement'] },
        { title: 'Arts & Culture', items: ['Crafts and creative arts', 'Continuing education discussions', 'Slide presentations & lectures'] },
        { title: 'Entertainment', items: ['Singers, pianists, guitarists', 'Harpists, poets, dancers', 'Social Hour with refreshments'] },
        { title: 'Community & Outings', items: ['Scenic drives & restaurant trips', 'Movies, theater, library visits', 'Bowling & Boston adventures'] },
        { title: 'Shopping', items: ['Weekly local shopping trips', 'Clothing & holiday gift trips', 'Scheduled medical transport'] },
        { title: 'Spiritual Life', items: ['Monthly church services on-site', 'Sunday church transportation', '"Gifts for the Soul" program'] },
      ].map((c) => (
        <div key={c.title} style={{ padding: '24px', background: 'var(--off-white)', borderRadius: '8px', borderLeft: '4px solid var(--burgundy)' }}>
          <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--burgundy)', marginBottom: '12px' }}>{c.title}</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#555', lineHeight: 2 }}>
            {c.items.map((it) => (<li key={it}>• {it}</li>))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const team = (
  <div>
    <div className="section-header" style={{ marginBottom: '40px' }}>
      <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222' }}>Meet Our Team</h2>
      <p style={{ color: '#666', maxWidth: '560px', margin: '12px auto 0' }}>Our dedicated Salem team.</p>
    </div>
    <div className="team-grid">
      <div className="leader-card">
        <div className="leader-avatar"><img src="/images/staff/SarahSterling.jpg" alt="Sarah Sterling" /></div>
        <h4>Sarah Sterling</h4>
        <p className="leader-title">Executive Director</p>
        <a className="leader-email" href="mailto:ssterling@bertramhouse.org">ssterling@bertramhouse.org</a>
      </div>
      <div className="leader-card">
        <div className="leader-avatar"><img src="/images/salem/suzanne1.jpg" alt="Suzanne Carr" /></div>
        <h4>Suzanne Carr</h4>
        <p className="leader-title">Assisted Living Coordinator</p>
      </div>
      <div className="leader-card">
        <div className="leader-avatar"><img src="/images/staff/MaryAnn.jpg" alt="MaryAnne Thompson" /></div>
        <h4>MaryAnne Thompson</h4>
        <p className="leader-title">Wellness Nurse</p>
        <a className="leader-email" href="mailto:mthompson@bertramhouse.org">mthompson@bertramhouse.org</a>
      </div>
      <div className="leader-card">
        <div className="leader-avatar"><img src="/images/salem/tracy1.jpg" alt="Tracy" /></div>
        <h4>Tracy</h4>
        <p className="leader-title">Activities Coordinator</p>
      </div>
      <div className="leader-card">
        <div className="leader-avatar"><img src="/images/salem/Duncan1.jpg" alt="Duncan" /></div>
        <h4>Duncan</h4>
        <p className="leader-title">Dining Service Coordinator</p>
      </div>
      <div className="leader-card">
        <div className="leader-avatar">J</div>
        <h4>John</h4>
        <p className="leader-title">Maintenance</p>
      </div>
    </div>
  </div>
);

const directions = (
  <div className="contact-layout">
    <div className="contact-info">
      <h3>Contact Information</h3>
      <div className="contact-facility contact-facility-salem">
        <h4>John Bertram House of Salem</h4>
        <p><a href="https://maps.google.com/?q=29+Washington+Square,+Salem,+MA+01970" target="_blank" rel="noopener noreferrer">29 Washington Square<br />Salem, MA 01970</a><br />
        <a href="tel:9787441002">(978) 744-1002</a> — Main</p>
      </div>

      <h3>Schedule a Tour</h3>
      <p>We respond within one business day. Fill out our contact form or call directly to speak with our team.</p>
      <p style={{ marginTop: '12px' }}>
        <Link href="/contact?loc=salem" className="btn" style={{ background: 'var(--burgundy)', color: '#fff', borderColor: 'var(--burgundy)', fontSize: '0.8rem', padding: '12px 24px' }}>Contact Us</Link>
      </p>

      <h3 style={{ marginTop: '32px' }}>Employment &amp; Volunteering</h3>
      <p>We welcome applications from compassionate individuals who share our commitment to exceptional elder care. Consistent volunteer schedules are preferred.</p>
    </div>

    <div>
      <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--burgundy)', marginBottom: '24px' }}>Getting Here</h3>
      <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '24px' }}>John Bertram House of Salem is located in historic downtown Salem, Massachusetts — easily accessible from Route 1A and major North Shore roads.</p>

      <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '32px', marginBottom: '16px' }}>
        <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--burgundy)', marginBottom: '12px' }}>Salem Location</h4>
        <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.8 }}>Historic Federalist home in downtown Salem<br />Accessible via Route 1A from the south or north<br />MBTA commuter rail available to Salem Depot</p>
      </div>

      <div style={{ background: 'var(--off-white)', color: '#222', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ececec' }}>
        <iframe
          title="John Bertram House of Salem — Map"
          src="https://maps.google.com/maps?q=29+Washington+Square,+Salem,+MA+01970&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="320"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div style={{ padding: '16px 20px', textAlign: 'center' }}>
          <a href="https://maps.google.com/?q=29+Washington+Square,+Salem,+MA+01970" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--burgundy)', fontWeight: 600 }}>Open in Google Maps →</a>
        </div>
      </div>
    </div>
  </div>
);

const tabs = [
  { id: 'overview', label: 'Overview', content: overview },
  { id: 'suites', label: 'Our Suites', content: suites },
  { id: 'wellness', label: 'Services & Wellness', content: wellness },
  { id: 'dining', label: 'Dining', content: dining },
  { id: 'activities', label: 'Activities', content: activities },
  { id: 'team', label: 'Our Team', content: team },
  { id: 'directions', label: 'Directions', content: directions },
];

export default function SalemPage() {
  return (
    <>
      <JsonLd data={SALEM_BUSINESS} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Salem', path: '/salem' }])} />
      <div className="facility-hero facility-hero-salem">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--burgundy)', marginBottom: '12px' }}>Massachusetts&apos; First Assisted Living Community</p>
          <h1>John Bertram House of Salem</h1>
          <p>Home the Way You Like It — elegant assisted living in a beautifully restored historic Federalist home in the heart of downtown Salem.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
            <Link href="/contact?loc=salem" className="btn btn-salem">Schedule a Tour</Link>
            <a href="tel:9787441002" className="btn btn-navy">(978) 744-1002</a>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </>
  );
}
