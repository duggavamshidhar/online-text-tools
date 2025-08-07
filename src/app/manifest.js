export default function manifest() {
  return {
    name: 'Online Text Tools',
    short_name: 'Online Text Tools',
    description:
      'A comprehensive collection of free online text tools to help you manipulate, format, and analyze text content quickly and easily.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/images/icon.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/images/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
