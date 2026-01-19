"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Shield,
  Clock,
  Award
} from "lucide-react"

const slides = [
  {
    image: "/images/team-airport.jpg",
    alt: "Equipo de Estrella de David frente a un bus en el aeropuerto de Arequipa",
    title: "Transporte de Personal",
    subtitle: "Profesionalismo y puntualidad garantizada",
    description: "Más de 17 años brindando servicios de transporte corporativo de alta calidad.",
    features: ["Conductores Certificados", "Atención 24/7", "Seguridad Total"]
  },
  {
    image: "/images/vans-fleet.jpg",
    alt: "Flota de vans Mercedes Sprinter de Estrella de David",
    title: "Flota Moderna",
    subtitle: "Vehículos equipados para su comodidad",
    description: "Viaje con la máxima comodidad en nuestras modernas Mercedes Sprinter.",
    features: ["Aire Acondicionado", "Asientos Reclinables", "GPS Monitoreado"]
  },
  {
    image: "/images/buses-colonial.jpg",
    alt: "Buses de Estrella de David en la Plaza de Armas de Arequipa",
    title: "Eventos y Convenciones",
    subtitle: "El mejor servicio para sus eventos especiales",
    description: "Logística integral de transporte para congresos, bodas y turismo.",
    features: ["Capacidad Flexible", "Coordinación Logística", "Experiencia Local"]
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced Overlay - Darker gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Yellow Shape removed as per user request */}

      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">

          {/* Text Content */}
          <div className="lg:col-span-8 flex flex-col justify-center text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Yellow Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  className="h-1 bg-[#FFD700] mb-6 w-24"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold text-[#FFD700] border border-[#FFD700]/30">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight"
                >
                  {slides[currentSlide].title.split(" ").map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Features Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl"
                >
                  {slides[currentSlide].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-200">
                      {idx === 0 && <Shield className="w-5 h-5 text-[#FFD700]" />}
                      {idx === 1 && <Clock className="w-5 h-5 text-[#FFD700]" />}
                      {idx === 2 && <Award className="w-5 h-5 text-[#FFD700]" />}
                      <span>{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="#servicios">
                    <Button
                      size="lg"
                      className="bg-[#FFD700] text-slate-900 hover:bg-[#E5C100] text-lg font-bold px-8 h-14 rounded-none skew-x-[-10deg] group transition-all duration-300"
                    >
                      <span className="skew-x-[10deg] flex items-center">
                        Nuestros Servicios
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                  <a href="https://wa.me/51959741741" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-none skew-x-[-10deg] bg-transparent transition-all duration-300"
                    >
                      <span className="skew-x-[10deg] flex items-center">
                        <FaWhatsapp className="mr-2 h-5 w-5" />
                        WhatsApp
                      </span>
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Navigation - Bottom Right with stylized container */}
      <div className="absolute bottom-0 right-0 bg-slate-900 p-6 z-30 hidden md:flex items-center gap-6 rounded-tl-3xl">
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-[#FFD700] hover:text-slate-900 hover:border-[#FFD700] transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-[#FFD700] hover:text-slate-900 hover:border-[#FFD700] transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlide ? "w-8 bg-[#FFD700]" : "w-2 bg-white/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
