# Contact form → Google Sheet

The site's contact form posts to `/api/contact` (a Next.js route handler), which
forwards each submission to a Google Apps Script web app that appends a row to a
Google Sheet.

```
ContactForm (browser)
  └─ POST /api/contact            src/app/api/contact/route.js  (server)
       └─ POST to Apps Script web app  → appends a row to the Google Sheet
```

## One-time setup

1. **Create the Sheet.** Make a new Google Sheet (e.g. "Website Contact
   Submissions"). The first tab is where rows land; headers are added
   automatically on the first submission.

2. **Add the script.** In that Sheet: **Extensions ▸ Apps Script**. Delete the
   placeholder `Code.gs` contents and paste in [`Code.gs`](./Code.gs). Save.

3. *(Optional)* **Set a shared secret.** For a little protection against random
   POSTs to the public endpoint, set `SHARED_SECRET` at the top of `Code.gs` to
   a random string, and put the same value in `.env.local` as
   `SHEETS_WEBHOOK_SECRET`. Leave both empty to skip.

4. **Deploy as a web app.** **Deploy ▸ New deployment ▸** gear icon ▸ **Web
   app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
   - Click **Deploy**, authorize when prompted, and copy the **Web app URL**
     (ends in `/exec`).

5. **Point the site at it.** In the project root, put the URL in `.env.local`:

   ```bash
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfyc.../exec
   SHEETS_WEBHOOK_SECRET=        # only if you set SHARED_SECRET in step 3
   ```

   Restart `npm run dev` (env vars are read at server start). On your host
   (Vercel/etc.) add the same variables in the project's environment settings.

## Testing

With the dev server running:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"5551234567","location":"salem","interest":"tour"}'
```

A `{"ok":true}` response should produce a new row in the Sheet.

## Updating the script later

Editing `Code.gs` in the Apps Script editor isn't live until you redeploy:
**Deploy ▸ Manage deployments ▸** edit the existing deployment ▸ **Version: New
version ▸ Deploy**. This keeps the same URL.
