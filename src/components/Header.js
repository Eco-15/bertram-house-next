'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About Us',
    dropdown: [
      { href: '/about', label: 'Who We Are' },
      { href: '/leadership', label: 'Leadership' },
      { href: '/blog', label: 'Blog' },
      { href: '/faq', label: 'FAQ' },
      { href: '/testimonials', label: 'Testimonials' },
    ],
  },
  { href: '/life', label: 'Life at JBH' },
  {
    href: '/residences',
    label: 'Residences',
    dropdown: [
      { href: '/salem', label: 'John Bertram House of Salem' },
      { href: '/swampscott', label: 'John Bertram House of Swampscott' },
    ],
  },
  {
    href: '/support',
    label: 'Support Our Mission',
    dropdown: [
      { href: '/support', label: 'Your Contribution Matters' },
      { href: '/ways-to-give', label: 'Ways to Give' },
      { href: '/donate', label: 'Donate Now' },
      { href: '/volunteers', label: 'Volunteer Opportunities' },
    ],
  },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname, link) {
  if (link.href === '/' && pathname === '/') return true;
  if (link.href !== '/' && pathname.startsWith(link.href)) return true;
  if (link.dropdown && link.dropdown.some((d) => pathname.startsWith(d.href) && d.href !== '/')) return true;
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  return (
    <>
      <header>
        <div className="header-inner">
          <Link href="/" className="logo">
            <img
              src="https://bhs.bertramhouse.org/wp-content/uploads/2025/05/JBH-logo-original.png"
              alt="John Bertram Homes"
              style={{ height: '72px' }}
            />
          </Link>
          <nav aria-label="Primary navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className={link.dropdown ? 'has-dropdown' : ''}>
                  <Link href={link.href} className={isActive(pathname, link) ? 'active' : ''}>
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <ul className="dropdown">
                      {link.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link href={sub.href}>{sub.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-right">
            <Link href="/login" className="header-tour">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }} aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Family Login
            </Link>
            <button
              className="hamburger"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>
          &times;
        </button>
        {navLinks.map((link) =>
          link.dropdown ? (
            <div
              key={link.href}
              className={`mobile-nav-group${openGroup === link.href ? ' open' : ''}`}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenGroup(openGroup === link.href ? null : link.href);
                }}
              >
                {link.label} <span className="mobile-chevron">&#9662;</span>
              </a>
              <div className="mobile-dropdown">
                {link.dropdown.map((sub) => (
                  <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}>
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          )
        )}
      </nav>
    </>
  );
}
