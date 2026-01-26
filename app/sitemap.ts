import { MetadataRoute } from 'next'
import { client } from "@/sanity/lib/client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://estrelladedavid.pe'

    // Get all services
    const services = await client.fetch(`
    *[_type == "service"] {
      "slug": slug.current,
      _updatedAt
    }
  `)

    const serviceUrls = services.map((service: any) => ({
        url: `${baseUrl}/servicios/${service.slug}`,
        lastModified: new Date(service._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/nosotros`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/clientes`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        ...serviceUrls,
    ]
}
