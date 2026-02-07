import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || 'https://sav-consulting.fr';

  const routes = [
    '',
    '/a-propos',
    '/notre-equipe',
    '/etudes-de-cas',
    '/processus-integration',
    '/contact',
    '/services/saisie-comptable',
    '/services/externalisation-paie',
    '/secteurs/immobilier',
    '/securite',
    '/mentions-legales',
    '/confidentialite',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
