"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ClientsSection } from "@/components/home/clients-section"
import { motion } from "framer-motion"

export default function ClientesPage() {
  return (
    <>
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
    </section >

      {/* Reusing the Carousel Component */ }
      < ClientsSection />

      </main >
      <Footer />
      <WhatsAppButton />
    </>
  )
}
