/**
 * John Bertram Homes — Contact form → Google Sheet
 *
 * Paste this into the Apps Script editor of the Sheet that should collect
 * submissions (Extensions ▸ Apps Script). It appends one row per submission and
 * is called by the site's /api/contact route. See README.md in this folder for
 * the full deploy steps.
 */

// Optional shared secret. If non-empty, it must equal SHEETS_WEBHOOK_SECRET in
// the site's .env.local — submissions without a matching secret are rejected.
// Leave '' to accept any POST (fine for low-traffic sites).
const SHARED_SECRET = '';

// The first row written to an empty sheet. Order must match the row below.
const HEADERS = [
  'Timestamp',
  'First Name',
  'Last Name',
  'Email',
  'Phone',
  'Location of Interest',
  'Service of Interest',
  'I Would Like To',
  'Prospective Resident',
  'How They Heard',
  'Message',
];

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    if (SHARED_SECRET && body.secret !== SHARED_SECRET) {
      return json({ ok: false, error: 'unauthorized' });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow([
      new Date(),
      body.firstName || '',
      body.lastName || '',
      body.email || '',
      body.phone || '',
      body.location || '',
      body.service || '',
      body.interest || '',
      body.residentName || '',
      body.howDidYouHear || '',
      body.message || '',
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
