import { posts } from '@/data/blogPosts';

const BASE = 'https://bertramhouse.org';

const staticRoutes = [
  { path: '/',                  changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/salem',             changeFrequency: 'monthly', priority: 0.9 },
  { path: '/swampscott',        changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about',             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/assisted-living',   changeFrequency: 'monthly', priority: 0.8 },
  { path: '/independent-living',changeFrequency: 'monthly', priority: 0.8 },
  { path: '/memory-care',       changeFrequency: 'monthly', priority: 0.8 },
  { path: '/personalized-care', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/respite-care',      changeFrequency: 'monthly', priority: 0.7 },
  { path: '/dining',            changeFrequency: 'monthly', priority: 0.7 },
  { path: '/activities',        changeFrequency: 'monthly', priority: 0.7 },
  { path: '/residences',        changeFrequency: 'monthly', priority: 0.7 },
  { path: '/suite-studio',      changeFrequency: 'monthly', priority: 0.6 },
  { path: '/suite-one-bedroom', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/suite-companion',   changeFrequency: 'monthly', priority: 0.6 },
  { path: '/leadership',        changeFrequency: 'monthly', priority: 0.6 },
  { path: '/life',              changeFrequency: 'monthly', priority: 0.6 },
  { path: '/testimonials',      changeFrequency: 'monthly', priority: 0.6 },
  { path: '/blog',              changeFrequency: 'weekly',  priority: 0.7 },
  { path: '/faq',               changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact',           changeFrequency: 'yearly',  priority: 0.7 },
  { path: '/directions',        changeFrequency: 'yearly',  priority: 0.5 },
  { path: '/support',           changeFrequency: 'monthly', priority: 0.6 },
  { path: '/donate',            changeFrequency: 'yearly',  priority: 0.6 },
  { path: '/ways-to-give',      changeFrequency: 'yearly',  priority: 0.5 },
  { path: '/make-a-tribute',    changeFrequency: 'yearly',  priority: 0.5 },
  { path: '/in-kind-donations', changeFrequency: 'yearly',  priority: 0.5 },
  { path: '/supporters',        changeFrequency: 'monthly', priority: 0.5 },
  { path: '/volunteers',        changeFrequency: 'yearly',  priority: 0.5 },
  { path: '/careers',           changeFrequency: 'monthly', priority: 0.6 },
];

export default function sitemap() {
  const pages = staticRoutes.map((route) => ({
    url: `${BASE}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPages = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...pages, ...blogPages];
}
