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
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/icon-256.png',
        sizes: '256x256',
        type: 'image/png'
      }
    ]
  }
}
