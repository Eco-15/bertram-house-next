import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Lightbox from '@/components/Lightbox';

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
      </body>
    </html>
  );
}
