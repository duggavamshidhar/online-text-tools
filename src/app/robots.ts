import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const domainName = process.env.DOMAIN_NAME
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `https://${domainName}/sitemap.xml`
  }
}
