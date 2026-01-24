import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ValuesSection } from "@/components/home/values-section"
import { ServicesSection } from "@/components/home/services-section"
import { ClientsSection } from "@/components/home/clients-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

import { sanityFetch } from "@/sanity/lib/fetch"
import { HERO_QUERY, ABOUT_QUERY, VALUES_QUERY, SERVICES_QUERY, CLIENTS_QUERY } from "@/sanity/lib/queries"

export default async function HomePage() {
  const heroData = await sanityFetch({ query: HERO_QUERY }) as { slides: any[] }
  const aboutData = await sanityFetch({ query: ABOUT_QUERY }) as any
  const valuesData = await sanityFetch({ query: VALUES_QUERY }) as any
  const servicesData = await sanityFetch({ query: SERVICES_QUERY }) as any
  const clientsData = await sanityFetch({ query: CLIENTS_QUERY }) as any

  return (
    <>
      <main>
        <HeroSection data={heroData} />
        <AboutSection data={aboutData} />
        <ValuesSection data={valuesData} />
        <ServicesSection data={servicesData} />
        <ClientsSection data={clientsData} />
      </main>
    </>
  )
}
