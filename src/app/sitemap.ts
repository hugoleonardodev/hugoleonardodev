import { type MetadataRoute } from 'next'

const baseUrl = 'https://www.hugoleonardodev.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: baseUrl + '/en-US',
          es: baseUrl + '/es-ES',
          pt: baseUrl + '/pt-BR',
        },
      },
    },
  ]
}
