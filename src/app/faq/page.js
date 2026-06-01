import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';

export const metadata = { title: 'Frequently Asked Questions' };

const items = [
  { q: 'What is assisted living?', a: 'Assisted living is a residential option for older adults who need some help with daily activities but do not require the level of care provided in a nursing home. At John Bertram Homes, we provide personalized support with activities of daily living while promoting independence and quality of life.' },
  { q: 'Who lives in assisted living?', a: 'Our residents are older adults who value their independence but benefit from assistance with certain daily tasks such as bathing, dressing, medication management, or meal preparation. Many residents choose assisted living for the social engagement, safety, and peace of mind it provides.' },
  { q: 'How do people pay for assisted living?', a: "Assisted living is typically paid for through private funds, long-term care insurance, or veterans' benefits. Some residents may qualify for state assistance programs. Our team can help guide you through the financial options available." },
  { q: 'What do I have to give up when I move to assisted living?', a: 'Very little! Residents are encouraged to bring personal furnishings, photos, and cherished belongings to make their residence feel like home. You maintain your independence, make your own choices, and come and go as you please.' },
  { q: 'Are there visiting hours or a curfew?', a: "Family and friends are welcome to visit at any time. We encourage visitors because maintaining close relationships is important to our residents' wellbeing. There is no curfew for residents." },
  { q: 'Am I locked into a long-term commitment?', a: 'No. Our residency agreements are month-to-month. We want you to stay because you love living here, not because of a contract.' },
  { q: 'What are the staff qualifications?', a: 'Our care staff includes Certified Nursing Assistants (CNAs), Home Health Aides, and an RN Resident Care Director who oversees all wellness programs. All staff receive ongoing training in elder care, safety, and compassionate service.' },
  { q: 'Who licenses assisted living communities in Massachusetts?', a: 'Assisted living communities in Massachusetts are certified by the Executive Office of Elder Affairs (EOEA). Both John Bertram House of Salem and John Bertram House of Swampscott are fully certified and in good standing.' },
];

export default function FAQPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Your Questions Answered</span>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about assisted living at John Bertram Homes.</p>
        </div>
      </section>

      <FadeIn tag="section" className="section">
        <div className="container">
          <FAQ items={items} />
        </div>
      </FadeIn>

      <FadeIn tag="section" className="section-sm section-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Still Have Questions?</h2>
          <p>We&apos;re happy to answer any questions you may have.</p>
          <Link href="/contact" className="btn btn-navy">Contact Us</Link>
        </div>
      </FadeIn>
    </main>
  );
}
