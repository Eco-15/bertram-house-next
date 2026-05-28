// Receives contact-form submissions and forwards them to a Google Sheet via the
// Apps Script web app (see /apps-script for setup). Keeping this server-side
// hides the webhook URL/secret from the browser, sidesteps CORS, validates
// input + blocks bots (honeypot), and maps coded <select> values to readable
// text so the spreadsheet is legible for staff.

const REQUIRED = ['firstName', 'lastName', 'email', 'phone', 'location'];

// Maps the form's <option value> codes to the human-readable labels shown in
// the UI. Unknown values fall through to the raw value, so this never throws if
// an option is added to the form before this map is updated.
const LABELS = {
  location: {
    salem: 'John Bertram House — Salem',
    swampscott: 'John Bertram House — Swampscott',
    both: 'Both Locations',
    notsure: 'Not Sure Yet',
  },
  service: {
    assistedliving: 'Assisted Living',
    memorycare: 'Memory Care',
    both: 'Both',
    notsure: 'Not Sure Yet',
  },
  interest: {
    tour: 'Schedule a Personal Tour',
    info: 'Be Sent Information',
    call: 'Receive a Phone Call',
    volunteer: 'Volunteer',
    other: 'Other',
  },
  howDidYouHear: {
    internet: 'Internet Search',
    referral: 'Friend or Family Referral',
    doctor: 'Doctor or Healthcare Provider',
    socialworker: 'Social Worker',
    previous: 'Previous Resident or Family',
    other: 'Other',
  },
};

const label = (field, value) => LABELS[field]?.[value] || value || '';
const clean = (v) => (typeof v === 'string' ? v.trim() : '');

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real users never see/fill this hidden field. Pretend success so
  // bots don't learn they were caught.
  if (clean(data.company)) {
    return Response.json({ ok: true });
  }

  const missing = REQUIRED.filter((k) => !clean(data[k]));
  if (missing.length) {
    return Response.json(
      { ok: false, error: 'Please fill in all required fields.' },
      { status: 400 },
    );
  }

  const email = clean(data.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { ok: false, error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('GOOGLE_SHEETS_WEBHOOK_URL is not set — cannot record submission.');
    return Response.json(
      { ok: false, error: 'The form is not configured yet. Please call us instead.' },
      { status: 500 },
    );
  }

  const payload = {
    secret: process.env.SHEETS_WEBHOOK_SECRET || '',
    firstName: clean(data.firstName),
    lastName: clean(data.lastName),
    email,
    phone: clean(data.phone),
    location: label('location', clean(data.location)),
    service: label('service', clean(data.service)),
    interest: label('interest', clean(data.interest)),
    residentName: clean(data.residentName),
    howDidYouHear: label('howDidYouHear', clean(data.howDidYouHear)),
    message: clean(data.message),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // Apps Script web apps 302-redirect to a googleusercontent.com URL; fetch
      // follows it by default, which is where the real response comes from.
      redirect: 'follow',
    });
    const result = await res.json().catch(() => ({}));
    if (!res.ok || result.ok === false) {
      throw new Error(result.error || `Sheet responded ${res.status}`);
    }
  } catch (err) {
    console.error('Failed to forward contact submission:', err);
    return Response.json(
      { ok: false, error: 'Something went wrong sending your message. Please call us instead.' },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
