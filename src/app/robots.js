export default function robots() {
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
