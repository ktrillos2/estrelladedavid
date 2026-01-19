"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

// Combined list of clients
const clients = [
  // New Uploaded Images
  { name: "Ferreiros", logo: "/images/clients/ferreyros-logo.png" },
  { name: "CAT", logo: "/images/clients/cat-logo.png" },
  { name: "Yura", logo: "/images/clients/yura-logo.png" },
  { name: "Weir Minerals", logo: "/images/clients/weir-logo.png" },
  { name: "FLSmidth", logo: "/images/clients/flsmidth-logo.png" },

  // Existing Images in Folder
  { name: "Cliente 1", logo: "/images/clients/image.png" },
  { name: "Cliente 2", logo: "/images/clients/image copy.png" },
  { name: "Cliente 3", logo: "/images/clients/image copy 2.png" },
  { name: "Cliente 4", logo: "/images/clients/image copy 3.png" },
  { name: "Cliente 5", logo: "/images/clients/image copy 4.png" },
]

export function ClientsSection() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Clientes Destacados
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Nos enorgullece trabajar con empresas líderes en diferentes sectores.
          </p>
        </motion.div>

        {/* Carousel client logos */}
        <div className="relative mb-8 px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8 items-center cursor-grab active:cursor-grabbing">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 basis-1/2 md:basis-1/3 lg:basis-1/5 select-none">
                  <div className="p-2 h-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl h-44 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={140}
                          height={80}
                          className="object-contain max-h-24 w-auto"
                        />
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/clientes">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 group transition-all duration-300 transform hover:scale-105"
            >
              Ver todos nuestros clientes
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
