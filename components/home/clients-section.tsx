"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface ClientsSectionProps {
  data: {
    subtitle: string
    title: string
    description: string
    clientsList: {
      name: string
      logo: { asset: { url: string } }
    }[]
  }
  showHeader?: boolean
}

export function ClientsSection({ data, showHeader = true }: ClientsSectionProps) {
  const {
    subtitle = "Confían en Nosotros",
    title = "Nuestros Clientes",
    description = "Empresas líderes que confían en nuestra excelencia y compromiso.",
    clientsList = [
      { name: "Ferreyros", logo: { asset: { url: "/images/clients/ferreyros-logo.png" } } },
      { name: "Yura", logo: { asset: { url: "/images/clients/yura-logo.png" } } },
      { name: "Cat", logo: { asset: { url: "/images/clients/cat-logo.png" } } },
      { name: "FLSmidth", logo: { asset: { url: "/images/clients/flsmidth-logo.png" } } },
      { name: "Weir", logo: { asset: { url: "/images/clients/weir-logo.png" } } },
    ]
  } = data || {}

  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 opacity-0"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-white/10 text-primary rounded-full text-sm font-medium mb-4 opacity-0"
            >
              {subtitle}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}

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
              {clientsList?.map((client, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 basis-1/2 md:basis-1/3 lg:basis-1/5 select-none">
                  <div className="p-2 h-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl h-44 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        {client.logo?.asset?.url && (
                          <Image
                            src={client.logo.asset.url}
                            alt={client.name}
                            width={140}
                            height={80}
                            className="object-contain max-h-24 w-auto"
                          />
                        )}
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
