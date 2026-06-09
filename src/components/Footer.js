import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span
              className="logo-title"
              style={{
                display: 'block',
                color: '#fff',
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              John Bertram Homes
            </span>
            <p>
              A non-sectarian, not-for-profit charitable organization providing exceptional
              assisted living care to generations of residents and their families on Massachusetts'
              North Shore since 1877.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/people/Bertram-House-of-Swampscott/61579304325001/" target="_blank" rel="noopener noreferrer" aria-label="John Bertram Homes on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/john-bertram-homes/" target="_blank" rel="noopener noreferrer" aria-label="John Bertram Homes on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.46c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88V21H9z" />
                </svg>
              </a>
              <a href="https://www.indeed.com/cmp/Bertram-House-of-Swampscott-1/jobs" target="_blank" rel="noopener noreferrer" aria-label="John Bertram Homes jobs on Indeed">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="13" cy="3.6" r="2.2" />
                  <path d="M11.1 7.2c-2.7-.2-5.2 1-6.9 3.2-.3.4.2.9.6.6 1.4-1.1 3-1.8 4.4-1.8v9.4c0 1 .8 1.8 1.9 1.8s1.9-.8 1.9-1.8V7.6c-.6-.2-1.2-.3-1.9-.4z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/life">Photo Gallery</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/support">Support Our Mission</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>John Bertram House of Salem</h5>
            <address>
              29 Washington Square<br />
              Salem, MA 01970<br />
              <a href="tel:9787441002">(978) 744-1002</a>
              <br /><br />
              <Link href="/salem">Learn More &rarr;</Link>
            </address>
          </div>
          <div className="footer-col">
            <h5>John Bertram House of Swampscott</h5>
            <address>
              565 Humphrey Street<br />
              Swampscott, MA 01907<br />
              <a href="tel:7815951991">(781) 595-1991</a>
              <br /><br />
              <Link href="/swampscott">Learn More &rarr;</Link>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 John Bertram Homes. All rights reserved.</span>
          <span>
            <a href="#">Site Terms</a> &middot; <Link href="/contact">Contact Us</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
