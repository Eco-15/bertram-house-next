export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `https://bertramhouse.org${c.path}`,
    })),
  };
}

export const SALEM_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'SeniorAssistedLivingFacility',
  '@id': 'https://bertramhouse.org/salem#facility',
  name: 'John Bertram House of Salem',
  url: 'https://bertramhouse.org/salem',
  telephone: '+1-978-744-1002',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '29 Washington Square',
    addressLocality: 'Salem',
    addressRegion: 'MA',
    postalCode: '01970',
    addressCountry: 'US',
  },
  // NOTE: Approximate coordinates for 29 Washington Square (across from Salem Common).
  // Confirm/replace with the exact lat/long from the Google Business Profile.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.5215,
    longitude: -70.8925,
  },
  hasMap: 'https://maps.google.com/?q=29+Washington+Square,+Salem,+MA+01970',
  parentOrganization: {
    '@type': 'NGO',
    name: 'John Bertram Homes',
    url: 'https://bertramhouse.org',
  },
};

export const SWAMPSCOTT_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'SeniorAssistedLivingFacility',
  '@id': 'https://bertramhouse.org/swampscott#facility',
  name: 'John Bertram House of Swampscott',
  url: 'https://bertramhouse.org/swampscott',
  telephone: '+1-781-595-1991',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '565 Humphrey Street',
    addressLocality: 'Swampscott',
    addressRegion: 'MA',
    postalCode: '01907',
    addressCountry: 'US',
  },
  // NOTE: Approximate coordinates for 565 Humphrey Street (one block from the ocean).
  // Confirm/replace with the exact lat/long from the Google Business Profile.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.4730,
    longitude: -70.9120,
  },
  hasMap: 'https://maps.google.com/?q=565+Humphrey+Street,+Swampscott,+MA+01907',
  parentOrganization: {
    '@type': 'NGO',
    name: 'John Bertram Homes',
    url: 'https://bertramhouse.org',
  },
};

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': 'https://bertramhouse.org/#org',
  name: 'John Bertram Homes',
  alternateName: 'JBH',
  url: 'https://bertramhouse.org',
  foundingDate: '1877',
  description:
    'A non-sectarian, not-for-profit charitable organization providing assisted living care on Massachusetts’ North Shore since 1877.',
  areaServed: { '@type': 'AdministrativeArea', name: 'North Shore of Massachusetts' },
  subOrganization: [
    { '@id': 'https://bertramhouse.org/salem#facility' },
    { '@id': 'https://bertramhouse.org/swampscott#facility' },
  ],
};
