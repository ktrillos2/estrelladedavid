"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { HiOutlineLibrary, HiOutlineAcademicCap, HiOutlineMusicNote, HiOutlineUserGroup, HiArrowRight } from "react-icons/hi"

const services = [
  {
    icon: HiOutlineLibrary,
    title: "Visitas Culturales y Turísticas",
    description: "Transporte para visitas a museos, sitios arqueológicos, lugares históricos y destinos turísticos en Arequipa y alrededores.",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Excursiones Escolares",
    description: "Servicio seguro y confiable para instituciones educativas, paseos de promoción y viajes de estudio.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: HiOutlineMusicNote,
    title: "Traslados para Conciertos",
    description: "Transporte organizado para eventos musicales, festivales y espectáculos en la ciudad.",
    color: "from-yellow-500 to-amber-300",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Convenciones y Congresos",
    description: "Soluciones de transporte para eventos corporativos, conferencias y reuniones empresariales de cualquier tamaño.",
    color: "from-green-500 to-emerald-400",
  },
]

const fleetStats = [
  { capacity: "15", type: "Vans", description: "Hasta 15 pasajeros", subtitle: "Ideales para grupos pequeños" },
  { capacity: "30", type: "Minibuses", description: "Hasta 30 pasajeros", subtitle: "Para grupos medianos" },
  { capacity: "50", type: "Buses", description: "Hasta 50 pasajeros", subtitle: "Para grandes grupos" },
]

export default function EventosYConvencionesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/buses-colonial.jpg"
              alt="Buses de Estrella de David en evento"
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
                Servicio de Transporte Privado
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Eventos y Convenciones
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                En Estrella de David ofrecemos el servicio de transporte privado para todo 
                tipo de eventos y convenciones, desde excursiones escolares hasta congresos 
                empresariales, con la garantía de seguridad y puntualidad.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Nuestros Servicios
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Transporte para Todo Tipo de Eventos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contamos con una amplia variedad de servicios adaptados a cada tipo de evento.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-muted/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/team-airport.jpg"
                    alt="Equipo de Estrella de David"
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
                >
                  <p className="text-4xl font-bold">100+</p>
                  <p className="text-sm opacity-80">Eventos realizados</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Experiencia Comprobada
                </span>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Eventos de Gran Escala
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Nuestra experiencia nos permite manejar eventos de cualquier magnitud, 
                  desde pequeños grupos hasta grandes convenciones con cientos de participantes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Coordinamos rutas y horarios para garantizar que todos los asistentes 
                  lleguen puntualmente a su destino, sin importar la complejidad del evento.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Contamos con vehículos de diferentes capacidades para adaptarnos a las 
                  necesidades específicas de cada evento.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
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
              <span className="inline-block px-4 py-2 bg-white/10 text-primary rounded-full text-sm font-medium mb-4">
                Nuestra Flota
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Vehículos para Eventos
              </h2>
              <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
                Disponemos de vehículos de diferentes capacidades para adaptarnos a sus necesidades.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {fleetStats.map((stat, index) => (
                <motion.div
                  key={stat.type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
                >
                  <div className="text-6xl font-bold text-primary mb-2">{stat.capacity}</div>
                  <p className="text-xl font-bold mb-1">{stat.type}</p>
                  <p className="text-secondary-foreground/80 text-sm mb-1">{stat.description}</p>
                  <p className="text-secondary-foreground/60 text-xs">{stat.subtitle}</p>
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
                ¿Organizando un evento?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Déjenos encargarnos del transporte para que usted pueda concentrarse en lo importante.
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
