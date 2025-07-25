export default function sitemap() {
  const domainName = process.env.DOMAIN_NAME
  const tools = [
    '',
    'sentence-case-converter',
    'upper-case-converter',
    'lower-case-converter',
    'capitalized-case-converter',
    'title-case-converter',
    'alternating-case-converter',
    'inverse-case-converter',
    'base64-encode',
    'base64-decode',
    'md5-hash-generator',
    'sha-1-hash-generator',
    'sha-256-hash-generator',
    'character-count',
    'word-frequency'
  ]
  return tools.map((item) => ({
    url: `https://${domainName}/${item}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: item === '' ? 1.0 : 0.9
  }))
}
