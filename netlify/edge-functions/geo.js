// Returns the visitor's coarse location (from Netlify's built-in edge geolocation)
// as JSON. Used by the site-wide GeoGreeting pop-up to greet visitors by town and
// point them to the nearest John Bertram Homes community. No browser permission
// prompt and no third-party tracker — Netlify resolves this at the edge from IP.
export default async (request, context) => {
  const g = (context && context.geo) || {};
  return Response.json(
    {
      city: g.city || null,
      region: (g.subdivision && g.subdivision.code) || null,
      lat: g.latitude ?? null,
      lon: g.longitude ?? null,
    },
    { headers: { 'Cache-Control': 'no-store' } },
  );
};

export const config = { path: '/api/geo' };
