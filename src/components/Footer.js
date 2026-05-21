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
              North Shore since 1887.
            </p>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/life">Life at JBH</Link></li>
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
