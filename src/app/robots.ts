import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Εδώ βάζεις φακέλους που ΔΕΝ θες να φαίνονται (αν έχεις)
    },
    sitemap: 'https://athensluxurytransfer.gr/sitemap.xml',
  }
}