"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { HiOutlineGlobeAlt, HiOutlineLocationMarker, HiOutlineOfficeBuilding, HiOutlineClock, HiOutlineCheck, HiArrowRight } from "react-icons/hi"

const benefits = [
  {
    icon: HiOutlineGlobeAlt,
    title: "Reduce la contaminación",
    description: "Menos vehículos en las calles significa un aire más limpio para todos.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: HiOutlineLocationMarker,
    title: "Garantiza mayor accesibilidad",
    description: "Facilitamos el traslado de sus colaboradores desde diversos puntos de la ciudad.",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: "Mejora la imagen corporativa",
    description: "Demuestre el compromiso de su empresa con el bienestar de sus empleados.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: HiOutlineClock,
    title: "Aumenta la puntualidad",
    description: "Sus colaboradores llegarán a tiempo, mejorando la productividad.",
    color: "from-yellow-500 to-amber-300",
  },
]

const features = [
  "Flota de vehículos modernos y bien mantenidos",
  "Conductores profesionales y capacitados",
  "Rutas optimizadas para mayor eficiencia",
  "Monitoreo GPS en tiempo real",
  "Seguro de pasajeros incluido",
  "Servicio personalizado según sus necesidades",
  "Tarifas competitivas y transparentes",
]

export default function TransporteDePersonalPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/team-airport.jpg"
              alt="Equipo de Estrella de David"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
          </div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          />

          <div className="relative z-10 container mx-auto px-4 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6"
              >
                Seguridad para tu Empresa
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transporte de Personal
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                Con más de 17 años de experiencia profesional, brindamos servicios de transporte
                de personal para diferentes empresas, garantizando seguridad, comodidad y
                puntualidad en cada traslado.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contacto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
                      Solicitar Cotización
                      <HiArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Nuestro Servicio
                </span>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  ¿Qué es el transporte de personal?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  El transporte de personal es un servicio especializado que permite a las empresas
                  movilizar a sus colaboradores desde sus hogares hasta el centro de trabajo y
                  viceversa. Este servicio no solo optimiza los tiempos de traslado, sino que
                  también contribuye a mejorar la calidad de vida de los empleados y la
                  productividad de la organización.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  En Estrella de David S.R.L., contamos con una flota moderna y conductores
                  capacitados para ofrecer un servicio integral que se adapta a las necesidades
                  específicas de cada empresa.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/vans-fleet.jpg"
                    alt="Flota de vans"
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
                >
                  <p className="text-4xl font-bold">50+</p>
                  <p className="text-sm opacity-80">Vehículos</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Beneficios
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ventajas del Transporte de Personal
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubre las ventajas de contar con un servicio de transporte para tu empresa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/buses-colonial.jpg"
                    alt="Flota de buses"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Por qué elegirnos
                </span>
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  Calidad Garantizada
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <HiOutlineCheck className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
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
                ¿Listo para mejorar el transporte de su empresa?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Contáctenos hoy y reciba una cotización personalizada sin compromiso.
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
    </>
  )
}
