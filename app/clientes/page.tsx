"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HiArrowRight, HiOutlineUserGroup, HiOutlineHeart, HiOutlineClock, HiOutlineShieldCheck } from "react-icons/hi"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const clients = [
  { 
    name: "CAT", 
    sector: "Minería y Construcción",
    description: "Servicios de transporte de personal para operaciones mineras.",
    color: "from-amber-500 to-yellow-400"
  },
  { 
    name: "Yura", 
    sector: "Industria Cementera",
    description: "Transporte diario de colaboradores a planta de producción.",
    color: "from-orange-500 to-amber-400"
  },
  { 
    name: "WHEIR", 
    sector: "Servicios Industriales",
    description: "Soluciones de movilidad para personal técnico especializado.",
    color: "from-yellow-500 to-amber-300"
  },
  { 
    name: "Cerro Verde", 
    sector: "Gran Minería",
    description: "Transporte de personal para operaciones mineras de cobre.",
    color: "from-green-500 to-emerald-400"
  },
  { 
    name: "Southern", 
    sector: "Minería",
    description: "Servicios de movilidad para personal administrativo y operativo.",
    color: "from-blue-500 to-cyan-400"
  },
  { 
    name: "Sociedad Minera", 
    sector: "Minería",
    description: "Transporte especializado para zonas de difícil acceso.",
    color: "from-purple-500 to-indigo-400"
  },
]

const testimonials = [
  {
    quote: "Estrella de David ha sido un aliado estratégico para el transporte de nuestro personal. Su puntualidad y profesionalismo son excepcionales.",
    author: "Gerente de Operaciones",
    company: "Empresa del sector minero",
  },
  {
    quote: "Confiamos en ellos hace más de 5 años. La seguridad y el trato a nuestros colaboradores siempre ha sido de primera.",
    author: "Jefe de Recursos Humanos",
    company: "Empresa del sector industrial",
  },
  {
    quote: "El servicio de transporte para nuestros eventos corporativos siempre ha superado nuestras expectativas.",
    author: "Coordinador de Eventos",
    company: "Empresa del sector servicios",
  },
]

const stats = [
  { value: "100+", label: "Clientes activos", icon: HiOutlineUserGroup },
  { value: "98%", label: "Satisfacción", icon: HiOutlineHeart },
  { value: "17+", label: "Años de servicio", icon: HiOutlineClock },
  { value: "0", label: "Accidentes graves", icon: HiOutlineShieldCheck },
]

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return <span ref={ref}>{isInView ? value : "0"}</span>
}

export default function ClientesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-secondary text-secondary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/10 text-primary rounded-full text-sm font-medium mb-6"
              >
                Confían en Nosotros
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nuestros Clientes
              </h1>
              <p className="text-xl text-secondary-foreground/80 leading-relaxed">
                Trabajamos con pasión y propósito junto con nuestros clientes, integrando 
                enfoques innovadores y experiencia profunda para entregar servicios de calidad
                que han permitido trabajar con marcas reconocidas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Clientes Destacados
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Empresas que Confían en Nosotros
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nos enorgullece trabajar con empresas líderes en diferentes sectores.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-muted/50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-border/50 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <span className="text-3xl font-bold text-white">
                      {client.name.charAt(0)}
                    </span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {client.sector}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                Nuestros Números Hablan
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <p className="text-secondary-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Testimonios
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 relative"
                >
                  <FaQuoteLeft className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic text-lg">
                    {testimonial.quote}
                  </p>
                  <FaQuoteRight className="h-8 w-8 text-primary/20 ml-auto mb-4" />
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                ¿Quiere ser parte de nuestros clientes satisfechos?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Contáctenos hoy y descubra cómo podemos ayudarle con sus necesidades de transporte.
              </p>
              <Link href="/contacto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg text-lg px-10">
                    Contactar Ahora
                    <HiArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
