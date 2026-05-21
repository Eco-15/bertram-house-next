'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const VALID_ACCOUNTS = [
  {
    email: 'family@bertramhouse.org',
    password: 'bertram2026',
    name: 'Whitfield Family',
  },
];

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail || !password) {
      setError('Please enter your email and password.');
      return;
    }

    const match = VALID_ACCOUNTS.find(
      (a) => a.email.toLowerCase() === trimmedEmail && a.password === password,
    );

    if (!match) {
      setError('Incorrect email or password. Please try again.');
      return;
    }

    setSubmitting(true);

    const session = {
      email: match.email,
      name: match.name,
      signedInAt: new Date().toISOString(),
    };

    try {
      const store = remember ? window.localStorage : window.sessionStorage;
      store.setItem('jbhFamilySession', JSON.stringify(session));
    } catch {
      // Storage may be unavailable (private mode, etc.) — portal will still render
      // with a generic welcome message.
    }

    router.push('/family');
  }

  function fillDemo() {
    const demo = VALID_ACCOUNTS[0];
    setEmail(demo.email);
    setPassword(demo.password);
    setError('');
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <label className="login-field">
          <span>Email address</span>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label className="login-field">
          <span>Password</span>
          <div className="login-password-wrap">
            <input
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <button
              type="button"
              className="login-password-toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </label>

        <div className="login-row">
          <label className="login-check">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Keep me signed in</span>
          </label>
          <a href="/contact" className="login-forgot">Forgot password?</a>
        </div>

        {error && <p className="login-error" role="alert">{error}</p>}

        <button type="submit" className="btn btn-gold login-submit" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign In'}
        </button>
      </form>

      <div className="login-demo">
        <div>
          <p className="login-demo-label">Demo credentials</p>
          <p className="login-demo-creds">
            <code>{VALID_ACCOUNTS[0].email}</code>
            <span> / </span>
            <code>{VALID_ACCOUNTS[0].password}</code>
          </p>
        </div>
        <button type="button" className="login-demo-fill" onClick={fillDemo}>
          Use demo
        </button>
      </div>
    </>
  );
}
