"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const features = [
  "FLOTA MODERNA Y CERTIFICADA",
  "CONDUCTORES PROFESIONALES",
  "ATENCIÓN 24/7"
]

export function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Yellow Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-8 opacity-0"
          >
            {/* Yellow Background / Frame */}
            <div className="absolute inset-0 bg-[#FFD700] rounded-[2rem] transform -rotate-2" />

            <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-2 transition-transform hover:rotate-0 duration-500">
              <Image
                src="/images/d558da3c-69a4-4240-8d65-5d133d0f0985.jpeg"
                alt="Equipo de Estrella de David"
                fill
                className="object-cover"
              />
            </div>

            {/* Dark Stats Box */}
            <div className="absolute bottom-12 right-0 md:-right-8 bg-[#1a1a1a] text-white p-8 md:p-10 rounded-tl-3xl shadow-2xl z-20 max-w-[200px] md:max-w-[240px]">
              <p className="text-[#FFD700] text-5xl md:text-6xl font-black mb-2 leading-none">15+</p>
              <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase leading-relaxed text-gray-300">
                Años de Experiencia
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative pt-12 lg:pt-0 opacity-0"
          >
            {/* Faint Background Text */}
            <span className="absolute -top-20 left-0 text-[120px] md:text-[180px] font-black text-gray-100 select-none -z-10 leading-none opacity-60">
              ABOUT
            </span>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#FFD700]" />
              <span className="text-[#FFD700] font-bold tracking-[0.2em] text-sm uppercase">
                Sobre Nosotros
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-8 leading-[1.1]">
              EXCELENCIA EN <br />
              <span className="text-[#1a1a1a]">MOVILIDAD</span> <br />
              CORPORATIVA
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
              Somos más que una empresa de transporte; somos su socio estratégico.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10">
              Dedicados al transporte de personal y alquiler de vehiculos, nuestra filosofía
              se centra en la <span className="font-bold text-gray-900">seguridad integral</span> y
              la <span className="font-bold text-gray-900">eficiencia operativa</span>.
            </p>

            {/* Feature List */}
            <ul className="space-y-5 mb-12">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group cursor-default opacity-0"
                >
                  <div className="p-1 rounded-full border-2 border-[#FFD700] text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-gray-800 tracking-wide">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/nosotros" className="inline-block">
              <div className="group flex items-center gap-3 border-b-2 border-[#1a1a1a] pb-1 hover:border-[#FFD700] transition-colors duration-300">
                <span className="font-bold text-[#1a1a1a] tracking-wider text-sm uppercase lg:text-base">
                  Conoce Nuestra Historia
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#1a1a1a] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
