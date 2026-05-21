import Link from 'next/link';
import TestimonialsGrid from '@/components/TestimonialsGrid';

export const metadata = { title: 'Testimonials' };

const items = [
  { location: 'both', quote: 'Everything all of you do every day to help the Bertram House residents and their families is so important and valued. We can never thank you enough.', attribution: 'Family of a 12.5-year resident' },
  { location: 'both', quote: "The staff are fabulous. My mother is enveloped by the Bertram House family and we couldn't be more grateful for the care and warmth she receives every single day.", attribution: 'Family of a 7-month resident' },
  { location: 'both', quote: 'From the very first day, to her last breath, you cared for her as if she were your own family. There are no words to adequately express our gratitude.', attribution: 'Family of a 5-year resident' },
  { location: 'both', quote: 'Everyone here is loving and kind, always trying to help in every way they can. I feel truly at home and cared for at Bertram House.', attribution: '8-year resident' },
  { location: 'both', quote: 'My dad had the best 6 years and 8 months of his life that any person on earth could ever wish for. Bertram House gave him a home full of love.', attribution: 'Family member' },
  { location: 'both', quote: "My wife has Alzheimer's and she seems like a new person every day thanks to the incredible Reminiscence floor staff. They are truly angels.", attribution: 'Resident of 5 years, Reminiscence floor' },
  { location: 'salem', quote: 'My Mum and I would like to thank everyone for their amazing commitment, dedication, and hard work. We are blessed to have found such a wonderful place.', attribution: 'Resident and Family Member' },
  { location: 'salem', quote: 'The staff are marvelous. Suits me to a T. They are courteous and polite. People treat me nicely. Meals are terrific.', attribution: 'Resident' },
  { location: 'salem', quote: 'We are so appreciative of everyone and they should know they are a big part of what makes John Bertram House special. The level of care and dedication is extraordinary.', attribution: 'Family Member' },
  { location: 'salem', quote: "They help me a lot. They do it for me so they must do it for others. They couldn't do more for me. Love exercise class!", attribution: 'Resident' },
  { location: 'salem', quote: 'I now know firsthand the certitude of the words "John Bertram House is with you." I consider the Bertram staff as angels on earth.', attribution: 'Family Member' },
  { location: 'swampscott', quote: 'The staff at John Bertram House of Swampscott is one of the best. They take great care of the residents and treat them as their own family.', attribution: 'Family of Resident' },
  { location: 'swampscott', quote: 'It is one of my favorite communities to visit! Everyone is welcoming, helpful and seem to really enjoy their jobs. The positive energy is tangible.', attribution: 'Contract VNA Professional' },
  { location: 'swampscott', quote: 'John Bertram House of Swampscott is a warm and inviting residence that created a welcoming home. Consistently a caring, compassionate, and safe environment for our loved one.', attribution: 'Family Member — May 2025' },
  { location: 'swampscott', quote: 'John Bertram House of Swampscott is an exceptional assisted-living center. The team goes above and beyond to ensure each resident feels cared for, respected, and valued.', attribution: 'Family Member — April 2025' },
  { location: 'swampscott', quote: 'The activities calendar is packed with engaging field trips, exercise classes, and fun ways to stay active and develop friendships.', attribution: 'Family Member' },
  { location: 'swampscott', quote: 'My dad received excellent personal care, great food, and wonderful socialization for 3 years. The staff is truly caring, conscientious, and dedicated.', attribution: 'Family of 3-year resident' },
  { location: 'swampscott', quote: 'It feels more like a bed and breakfast than a resort or hospital. They had salon services, library, garden, and a van for outside activities — everything you could want.', attribution: 'Visitor' },
  { location: 'swampscott', quote: 'Under new leadership, the community has reached an entirely new level of excellence. The improvement has been remarkable.', attribution: 'Recent Family Member' },
  { location: 'swampscott', quote: 'My mom enjoyed the activities, meals, and friendships. She was thriving, not just living somewhere. There is a real difference between the two.', attribution: 'Family of 5-year resident' },
  { location: 'swampscott', quote: 'There was a palpable sense of warmth and welcome from the moment we walked in. Every single person was kind, attentive, and clearly passionate about what they do.', attribution: 'Recent Visitor' },
];

export default function TestimonialsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Voices of Our Community</p>
        <h1>Testimonials</h1>
        <p>Hear directly from the residents and families who have experienced the John Bertram Homes difference.</p>
      </div>

      <section className="section section-navy" style={{ padding: '56px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ fontSize: '3rem', color: 'var(--navy)', opacity: 0.25, lineHeight: 1, marginBottom: '8px' }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', color: '#333', lineHeight: 1.8, marginBottom: '24px' }}>Everything all of you do every day to help the Bertram House residents and their families is so important and valued. We can never thank you enough.</p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--navy)' }}>Family of a 12.5-year resident</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <TestimonialsGrid items={items} />
        </div>
      </section>

      <section className="section-sm section-light" style={{ borderTop: '1px solid #e8e8e8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Experience John Bertram Homes for Yourself</h2>
            <p style={{ color: '#666', maxWidth: '480px', margin: '0 auto 28px' }}>Schedule a personal tour at either of our communities — no commitment required.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-navy">Schedule a Tour</Link>
              <Link href="/contact" className="btn btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--navy)' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
