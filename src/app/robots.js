import { DOMAIN_NAME } from '@/config/env'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `https://${DOMAIN_NAME}/sitemap.xml`
  }
}
