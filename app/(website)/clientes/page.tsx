"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ClientsSection } from "@/components/home/clients-section"
import { motion } from "framer-motion"

export default function ClientesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative py-20 bg-secondary text-secondary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nuestros Clientes
              </h1>
              <p className="text-xl text-secondary-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Empresas líderes que confían en nuestra excelencia y compromiso.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reusing the Carousel Component */}
        <ClientsSection />

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
