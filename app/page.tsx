import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ValuesSection } from "@/components/home/values-section"
import { ServicesSection } from "@/components/home/services-section"
import { ClientsSection } from "@/components/home/clients-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ServicesSection />
        <ClientsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
