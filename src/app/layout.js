import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Lightbox from '@/components/Lightbox';

// Google Analytics 4. Set NEXT_PUBLIC_GA_ID (e.g. "G-XXXXXXXXXX") in the Netlify
// environment (and .env.local for dev). When unset, no analytics is loaded.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  title: {
    default: 'John Bertram Homes — Exceptional Assisted Living in Salem & Swampscott, MA',
    template: '%s — John Bertram Homes',
  },
  description:
    "John Bertram Homes operates two exceptional assisted living communities on Massachusetts' North Shore — John Bertram House of Salem and John Bertram House of Swampscott.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <Lightbox />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
