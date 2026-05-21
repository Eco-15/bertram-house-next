import LoginForm from './LoginForm';

export const metadata = {
  title: 'Family Login',
  description:
    'Log in to the John Bertram Homes Family Portal to see new photos, manage care preferences, and stay connected with your loved one.',
};

export default function LoginPage() {
  return (
    <section className="login-section">
      <div className="login-wrap">
        <div className="login-card">
          <div className="login-card-header">
            <div className="login-logo-circle">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <p className="eyebrow">Family Portal</p>
            <h1>Welcome Back</h1>
            <p className="login-sub">
              Sign in to view new photos, message the care team, and stay close to your
              loved one at John Bertram Homes.
            </p>
          </div>

          <LoginForm />

          <div className="login-help">
            <p>
              Don&apos;t have a portal account yet?{' '}
              <a href="/contact">Contact your community</a> and our team will send you an invitation.
            </p>
          </div>
        </div>

        <aside className="login-side">
          <h2>What you can do in the Family Portal</h2>
          <ul className="login-feature-list">
            <li>
              <span className="login-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="9.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
              </span>
              <div>
                <h4>See new photos</h4>
                <p>Browse pictures of your loved one from recent activities, outings, and meals.</p>
              </div>
            </li>
            <li>
              <span className="login-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
              </span>
              <div>
                <h4>Manage your family</h4>
                <p>Add parents or relatives, share access with siblings, and update emergency contacts.</p>
              </div>
            </li>
            <li>
              <span className="login-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              </span>
              <div>
                <h4>Stay in touch</h4>
                <p>Message the care team directly and see updates from the activities and dining staff.</p>
              </div>
            </li>
            <li>
              <span className="login-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </span>
              <div>
                <h4>See what&apos;s coming up</h4>
                <p>Browse the calendar for upcoming activities, outings, and family events.</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
