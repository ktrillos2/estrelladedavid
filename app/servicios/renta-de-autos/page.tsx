"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { HiOutlineOfficeBuilding, HiOutlineDocumentText, HiOutlineTruck, HiOutlineSupport, HiOutlineCheck, HiArrowRight } from "react-icons/hi"

const features = [
  {
    icon: HiOutlineOfficeBuilding,
    title: "Para Empresas y Particulares",
    description: "Este alquiler se ofrece tanto a empresas como a personas naturales, adaptándonos a sus necesidades específicas.",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Tarifas Todo Incluido",
    description: "Nuestras tarifas incluyen el equipamiento del vehículo, seguro contra todo riesgo y asistencia en carretera.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: HiOutlineTruck,
    title: "Vehículos Modernos",
    description: "Ofrecemos modernos vehículos del año, mantenidos en óptimas condiciones para su seguridad y comodidad.",
    color: "from-yellow-500 to-amber-300",
  },
  {
    icon: HiOutlineSupport,
    title: "Atención Personalizada",
    description: "Le asesoramos hasta conseguir el automóvil que se adapte mejor a sus necesidades y presupuesto.",
    color: "from-green-500 to-emerald-400",
  },
]

const vehicleTypes = [
  { type: "Sedanes", description: "Vehículos compactos y económicos para uso urbano", capacity: "4-5 pasajeros", color: "from-amber-500 to-yellow-400" },
  { type: "SUVs", description: "Vehículos todo terreno para mayor versatilidad", capacity: "5-7 pasajeros", color: "from-orange-500 to-amber-400" },
  { type: "Vans", description: "Ideales para grupos pequeños y familias", capacity: "12-15 pasajeros", color: "from-yellow-500 to-amber-300" },
  { type: "Camionetas", description: "Para transporte de carga y personal", capacity: "3-5 pasajeros", color: "from-green-500 to-emerald-400" },
]

const benefits = [
  "Vehículos del año con mantenimiento regular",
  "Seguro contra todo riesgo incluido",
  "Asistencia en carretera 24/7",
  "Entrega y recojo a domicilio disponible",
  "Tarifas por día, semana o mes",
  "Sin límite de kilometraje",
]

export default function RentaDeAutosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/vans-fleet.jpg"
              alt="Flota de vehículos de alquiler"
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
                Alquiler de Vehículos
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Renta de Autos y Camionetas
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                En Estrella de David le asesoramos hasta conseguir el automóvil que se 
                adapte a sus necesidades. Ofrecemos una amplia gama de vehículos modernos 
                con las mejores tarifas del mercado.
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

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Características
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ventajas de Nuestro Servicio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubra las ventajas de alquilar con Estrella de David.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-muted/50 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image and Info Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Flota Diversa
                </span>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Vehículos Modernos y Seguros
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  Contamos con una amplia variedad de vehículos para satisfacer cualquier 
                  necesidad de transporte. Desde sedanes económicos para uso personal 
                  hasta vans para grupos grandes.
                </p>
                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-background transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <HiOutlineCheck className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/buses-colonial.jpg"
                    alt="Flota de vehículos"
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
                  <p className="text-4xl font-bold">24/7</p>
                  <p className="text-sm opacity-80">Asistencia</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vehicle Types Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Tipos de Vehículos
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Encuentra el Vehículo Perfecto
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentre el vehículo perfecto para sus necesidades.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {vehicleTypes.map((vehicle, index) => (
                <motion.div
                  key={vehicle.type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-muted/50 rounded-2xl p-6 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${vehicle.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <HiOutlineTruck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {vehicle.type}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {vehicle.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {vehicle.capacity}
                  </p>
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
                ¿Necesita alquilar un vehículo?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Contáctenos y le ayudaremos a encontrar el vehículo perfecto para usted.
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
