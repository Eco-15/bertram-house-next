import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import JsonLd, { faqSchema, breadcrumbSchema, SALEM_BUSINESS, SWAMPSCOTT_BUSINESS } from '@/components/JsonLd';

export const metadata = {
  title: 'Chef-Crafted Dining at John Bertram Homes',
  description:
    'Three home-cooked meals daily in welcoming dining rooms at our Salem and Swampscott assisted living communities. Fresh ingredients, snacks, and seasonal celebrations on the North Shore.',
  alternates: { canonical: 'https://bertramhouse.org/dining' },
};

const diningCards = [
  { title: 'Three Daily Meals', desc: 'Breakfast, lunch, and dinner are served daily — predictable, satisfying, and unhurried.' },
  { title: 'Fresh, Familiar Ingredients', desc: 'Meals are prepared with care using fresh ingredients and the comforting flavors residents grew up with.' },
  { title: 'Snacks Throughout the Day', desc: 'Refreshments, fresh fruit, baked goods, and warm drinks are available between meals.' },
  { title: 'Welcoming Dining Rooms', desc: 'Dining rooms feel warm and social — closer to a country inn than a cafeteria.' },
  { title: 'Resident Preferences', desc: 'Our team gets to know each resident’s likes, dislikes, routines, and dietary needs.' },
  { title: 'Special Meals & Celebrations', desc: 'Holidays, birthdays, and community events often center around food and gathering.' },
];

const salemHighlights = [
  'Dining room set in a former ballroom with 18-foot ceilings overlooking Salem Common',
  'Fresh flowers and linens at every table',
  'Hydration for Better Health Program: Poland Spring water, cider, and fresh juices available all day',
  'Special seasonal menus tied to Salem traditions and holidays',
  'Snacks served in the sunroom throughout the day',
];

const swampscottHighlights = [
  'Dining room often compared to a country inn — warm, inviting, social',
  'Chef-crafted meals served in the universal caregiver model, with staff who know residents personally',
  'Seasonal ingredients with a North Shore sensibility',
  'Daily snack service and beverage station',
  'Birthday celebrations and resident-favorite themed meals',
];

const faqs = [
  { q: 'Are meals included?', a: 'Yes. Three home-cooked meals daily, plus snacks and refreshments throughout the day, are included in the base rate at both Salem and Swampscott.' },
  { q: 'What types of meals are typically served?', a: 'Meals lean toward home-cooked, familiar comfort food prepared with fresh ingredients. Expect chef-prepared entrées, fresh vegetables, salads, soups, and seasonal favorites — alongside classics our residents love.' },
  { q: 'Are snacks available?', a: 'Yes. Snacks and refreshments are available throughout the day in common areas, from fresh fruit and baked goods to warm drinks.' },
  { q: 'Can families join residents for meals?', a: 'Absolutely. Families are welcome to join their loved one for a meal. Just let the community know in advance so we can prepare.' },
  { q: 'Can dietary needs or preferences be accommodated?', a: 'Yes. Dietary needs, preferences, allergies, and texture modifications are part of each resident’s personalized service plan. The dining team works with residents and families to get it right.' },
  { q: 'Do Salem and Swampscott each have their own dining experience?', a: 'Yes. Both communities serve three meals daily with the same commitment to quality, but each has its own dining room, atmosphere, and dining team.' },
];

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Dining', path: '/dining' },
];

export default function DiningPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={SALEM_BUSINESS} />
      <JsonLd data={SWAMPSCOTT_BUSINESS} />

      <div className="page-hero">
        <p className="eyebrow">Our Care</p>
        <h1>Chef-Crafted Dining That Feels Like Home</h1>
        <p>Meals are an important part of daily life at John Bertram Homes. Residents enjoy three home-cooked meals each day, prepared with fresh ingredients and served in welcoming dining rooms where food, conversation, and community come together.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
          <Link href="/contact" className="btn btn-navy">Contact Our Team</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn className="two-col">
            <div className="content-block">
              <p className="eyebrow" style={{ color: 'var(--navy)', fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '12px' }}>More Than a Meal</p>
              <h2>Dining as Daily Comfort</h2>
              <p>Dining at John Bertram Homes is a daily source of nutrition, routine, comfort, independence, and connection. Meals bring residents together in welcoming dining rooms where conversation flows as easily as the food does.</p>
              <p>Our kitchens cook from fresh, familiar ingredients — the kind of comfort food residents grew up with, adapted to honor dietary needs and personal preferences. Snacks are available throughout the day, and holidays and birthdays often center around the dining table.</p>
              <p>Both communities take dining seriously because it shapes how each day feels. A good meal, shared with neighbors, is one of the most reliable forms of care.</p>
            </div>
            <div className="image-block">
              <img
                src="/images/swampscott/1stdining1.jpg"
                alt="Residents enjoying a meal together in the dining room at John Bertram House of Swampscott"
                style={{ height: '420px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">The Dining Experience</p>
            <h2>What Residents Can Expect</h2>
            <div className="divider"></div>
          </FadeIn>

          <div className="features-grid">
            {diningCards.map((c) => (
              <FadeIn key={c.title} className="feature-item">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Dining Highlights</p>
            <h2>Two Dining Rooms, Two Personalities</h2>
            <p>Each community has its own dining team, dining room, and small-town character — but the standard for quality and warmth is the same.</p>
            <div className="divider"></div>
          </FadeIn>

          <div className="properties-grid">
            <FadeIn className="property-card property-card-salem">
              <div className="property-card-image">
                <img src="https://bhs.bertramhouse.org/wp-content/uploads/2025/05/DiningRoom2-1-e1748009775812.jpg" alt="Salem dining room with linens and fresh flowers overlooking Salem Common" />
              </div>
              <div className="property-card-body">
                <h3>Salem Dining</h3>
                <p>Set in a former ballroom with soaring 18-foot ceilings overlooking Salem Common. Fresh flowers grace every table; fine linens set the stage for a truly elegant dining experience in a historic Federalist home.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
                  {salemHighlights.map((h) => (
                    <li key={h} style={{ display: 'flex', alignItems: 'start', gap: '10px', padding: '6px 0', fontSize: '0.9rem', color: '#555' }}>
                      <span style={{ color: 'var(--navy)', fontWeight: 700, marginTop: '2px' }}>•</span> {h}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                  <Link href="/salem" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Explore Salem</Link>
                  <Link href="/contact?loc=salem" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="property-card property-card-swampscott">
              <div className="property-card-image">
                <img src="/images/swampscott/1stdining1.jpg" alt="Swampscott dining room set for service" />
              </div>
              <div className="property-card-body">
                <h3>Swampscott Dining</h3>
                <p>Often compared to a country inn — warm, inviting, and social. Our universal caregiver model means the staff serving you in the dining room are the same team who know your routines, preferences, and stories.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
                  {swampscottHighlights.map((h) => (
                    <li key={h} style={{ display: 'flex', alignItems: 'start', gap: '10px', padding: '6px 0', fontSize: '0.9rem', color: '#555' }}>
                      <span style={{ color: 'var(--navy)', fontWeight: 700, marginTop: '2px' }}>•</span> {h}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                  <Link href="/swampscott" className="btn btn-navy" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Explore Swampscott</Link>
                  <Link href="/contact?loc=swampscott" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Schedule a Tour</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Around the Table</p>
            <h2>Celebrations and Special Meals</h2>
            <p>Holidays, birthdays, and community events bring people together around the dining table — the way they always have.</p>
            <div className="divider"></div>
          </FadeIn>

          <div className="two-col" style={{ alignItems: 'center' }}>
            <FadeIn className="image-block">
              <img
                src="/images/swampscott/sunroom1.jpg"
                alt="Sunroom gathering space at John Bertram House of Swampscott"
                style={{ height: '360px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
              />
            </FadeIn>
            <FadeIn className="content-block">
              <p>Major holidays — Thanksgiving, Christmas, Hanukkah, Easter, Mother’s Day, Father’s Day, the Fourth of July — are marked with thoughtful menus and gathering. Birthdays are celebrated with cake and warm acknowledgement. Seasonal events and resident-favorite themed meals add variety throughout the year.</p>
              <p>Families are welcome to join their loved ones for special meals — just give us a little notice so we can set the table accordingly.</p>
              <Link href="/contact" className="btn btn-navy" style={{ marginTop: '12px' }}>Ask About Dining</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <FadeIn>
            <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.8, color: '#333', margin: '0 0 16px' }}>
              &ldquo;The staff are fabulous. My mother is enveloped by the Bertram House family and we couldn’t be more grateful for the care and warmth she receives every single day.&rdquo;
            </blockquote>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>&mdash; Family of a 7-month resident</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="eyebrow">Questions Families Ask</p>
            <h2>Frequently Asked Questions</h2>
            <div className="divider"></div>
          </FadeIn>
          <FadeIn style={{ maxWidth: '820px', margin: '0 auto' }}>
            <FAQ items={faqs} />
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn className="callout-box" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <h3>See the John Bertram Difference in Person</h3>
            <p>The dining room is one of the best places to feel the warmth of our communities. Visit during a meal — we’d love to have you.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link href="/contact" className="btn btn-gold">Schedule a Tour</Link>
              <Link href="/contact" className="btn btn-navy">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
