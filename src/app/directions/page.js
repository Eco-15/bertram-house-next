import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Directions' };

export default function DirectionsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Find Us</p>
        <h1>Directions</h1>
        <p>How to reach our communities in Salem and Swampscott.</p>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn>
            <h2>John Bertram House of Swampscott</h2>
            <p style={{ marginBottom: '4px' }}><strong>Address:</strong> 565 Humphrey Street, Swampscott, MA 01907</p>
            <p style={{ marginBottom: '32px' }}><strong>Phone:</strong> <a href="tel:7815951991">(781) 595-1991</a></p>

            <div className="directions-block">
              <h4>From Boston</h4>
              <p>Travel through Callahan Tunnel north on Route 1A past Logan Airport, follow approximately 3 miles bearing right toward Lynn/Marblehead. Pass Wonderland MBTA station through Lynn, then at Carroll Parkway head toward Swampscott rotary. Follow shoreline approximately 1.8 miles, look for Papa John&apos;s on left. At traffic light after Papa John&apos;s, turn left onto Route 129. John Bertram House of Swampscott is 1/4 mile up on the right.</p>
            </div>

            <div className="directions-block">
              <h4>From the South</h4>
              <p>Take Route 128 North to exit 44B, follow Route 129 East toward Swampscott for 3.1 miles. Navigate through turns onto Route 129A and Waitts Avenue, continue 1.4 miles to ocean. Turn left onto Route 129 toward Swampscott and follow Humphrey Street. John Bertram House of Swampscott is approximately 1/4 mile on the right.</p>
            </div>

            <div className="directions-block">
              <h4>From the North</h4>
              <p>Take Route 128 South to Exit 25, follow Route 1A through Salem to Swampscott. At Vinnin Square traffic light, turn left then immediately right onto Salem Street, then right onto Humphrey Street. John Bertram House of Swampscott is 1/2 mile on the left.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <FadeIn>
            <h2>John Bertram House of Salem</h2>
            <p style={{ marginBottom: '4px' }}><strong>Address:</strong> Downtown Salem, MA</p>
            <p style={{ marginBottom: '4px' }}><strong>Phone:</strong> <a href="tel:9787441002">(978) 744-1002</a></p>
            <p style={{ marginBottom: '32px' }}>Located in the heart of downtown Salem, Massachusetts. Please call for specific driving directions from your location.</p>

            <Link href="/contact" className="btn btn-navy">Contact Us for Directions</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
