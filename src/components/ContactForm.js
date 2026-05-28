'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [defaultLoc, setDefaultLoc] = useState('');

  useEffect(() => {
    const loc = searchParams.get('loc');
    if (loc) setDefaultLoc(loc);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success visible">
        <h4>Message Sent!</h4>
        <p>Thank you for reaching out. A member of our team will contact you within one business day.</p>
      </div>
    );
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      {/* Honeypot: hidden from people, tempting to bots. Hidden via inline
          styles so it works without relying on a CSS class. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name <span className="form-required">*</span></label>
          <input type="text" id="firstName" name="firstName" required placeholder="Jane" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name <span className="form-required">*</span></label>
          <input type="text" id="lastName" name="lastName" required placeholder="Smith" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address <span className="form-required">*</span></label>
          <input type="email" id="email" name="email" required placeholder="jane@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number <span className="form-required">*</span></label>
          <input type="tel" id="phone" name="phone" required placeholder="(555) 123-4567" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="location">Location of Interest <span className="form-required">*</span></label>
          <select id="location" name="location" required defaultValue={defaultLoc}>
            <option value="" disabled>Please select...</option>
            <option value="salem">John Bertram House — Salem</option>
            <option value="swampscott">John Bertram House — Swampscott</option>
            <option value="both">Both Locations</option>
            <option value="notsure">Not Sure Yet</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="service">Service of Interest</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>Please select...</option>
            <option value="assistedliving">Assisted Living</option>
            <option value="memorycare">Memory Care</option>
            <option value="both">Both</option>
            <option value="notsure">Not Sure Yet</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="interest">I Would Like To...</label>
        <select id="interest" name="interest" defaultValue="">
          <option value="" disabled>Please select...</option>
          <option value="tour">Schedule a Personal Tour</option>
          <option value="info">Be Sent Information</option>
          <option value="call">Receive a Phone Call</option>
          <option value="volunteer">Volunteer</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="residentName">Name of Prospective Resident</label>
        <input type="text" id="residentName" name="residentName" placeholder="If different from above" />
      </div>
      <div className="form-group">
        <label htmlFor="howDidYouHear">How Did You Hear About Us?</label>
        <select id="howDidYouHear" name="howDidYouHear" defaultValue="">
          <option value="" disabled>Please select...</option>
          <option value="internet">Internet Search</option>
          <option value="referral">Friend or Family Referral</option>
          <option value="doctor">Doctor or Healthcare Provider</option>
          <option value="socialworker">Social Worker</option>
          <option value="previous">Previous Resident or Family</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Additional Comments or Questions</label>
        <textarea id="message" name="message" placeholder="Please share any additional information or questions you have for us..."></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-navy"
        style={{ width: '100%', padding: '16px', fontSize: '0.85rem' }}
        disabled={submitting}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
      {error && (
        <p role="alert" style={{ color: '#b00020', fontSize: '0.85rem', marginTop: '12px', textAlign: 'center' }}>
          {error}
        </p>
      )}
      <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '12px', textAlign: 'center' }}>
        We respond within one business day. Your information is kept strictly confidential.
      </p>
    </form>
  );
}
