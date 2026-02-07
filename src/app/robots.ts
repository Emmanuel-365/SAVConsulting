import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://sav-consulting.fr';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
