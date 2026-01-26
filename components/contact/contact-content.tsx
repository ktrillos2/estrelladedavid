"use client"

import { ContactForm } from "@/components/contact/contact-form"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi"

const contactInfo = [
    {
        icon: HiOutlineLocationMarker,
        title: "Dirección",
        content: ["Calle General Varela 377 Tomilla - Cayma"],
        color: "from-amber-500 to-yellow-400",
    },
    {
        icon: HiOutlinePhone,
        title: "Teléfonos",
        content: ["+51 993 756 271", "+51 959 683 159"],
        links: ["tel:+51993756271", "tel:+51959683159"],
        color: "from-orange-500 to-amber-400",
    },
    {
        icon: HiOutlineMail,
        title: "Correos Electrónicos",
        content: ["estrella_de_david1@hotmail.com"],
        links: ["mailto:estrella_de_david1@hotmail.com"],
        color: "from-yellow-500 to-amber-300",
    },
    {
        icon: HiOutlineClock,
        title: "Horario de Atención",
        content: ["Lunes a Viernes: 8:00 AM - 6:00 PM", "Sábados: 8:00 AM - 1:00 PM"],
        color: "from-amber-400 to-yellow-300",
    },
]

interface ContactContentProps {
    data: {
        title: string
        description: string
        formTitle: string
        infoTitle: string
        mapUrl: string
    }
}

export function ContactContent({ data }: ContactContentProps) {
    const { title, description, formTitle, infoTitle, mapUrl } = data || {}

    return (
        <>
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

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
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
                            Contacto
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            {title || "Hablemos"}
                        </h1>
                        <p className="text-xl text-secondary-foreground/80 leading-relaxed">
                            {description || "Estamos aquí para ayudarle. Contáctenos para solicitar información sobre nuestros servicios o una cotización personalizada."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                Formulario
                            </span>
                            <h2 className="text-3xl font-bold text-foreground mb-8">
                                {formTitle || "Envíenos un Mensaje"}
                            </h2>
                            <ContactForm />
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                Información
                            </span>
                            <h2 className="text-3xl font-bold text-foreground mb-8">
                                {infoTitle || "Datos de Contacto"}
                            </h2>

                            <div className="space-y-6 mb-10">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                        className="flex gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 hover:shadow-md transition-all group"
                                    >
                                        <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                                            <item.icon className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            {item.content.map((line: string, i: number) => (
                                                item.links ? (
                                                    <a
                                                        key={line}
                                                        href={item.links[i]}
                                                        className="block text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        {line}
                                                    </a>
                                                ) : (
                                                    <p key={line} className="text-muted-foreground">
                                                        {line}
                                                    </p>
                                                )
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* WhatsApp CTA */}
                            <motion.a
                                href="https://wa.me/51993756271?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios%20de%20transporte"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-4 p-6 rounded-2xl bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25"
                            >
                                <FaWhatsapp className="h-10 w-10" />
                                <div>
                                    <p className="font-bold text-lg">Chatea con Nosotros</p>
                                    <p className="text-white/80">Respuesta inmediata por WhatsApp</p>
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-muted/50">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                            Encuéntranos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Nuestra Ubicación
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Visítenos en nuestra oficina principal en Cayma, Arequipa.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-2xl h-[500px] border border-border/50"
                    >
                        <iframe
                            src={mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5835476076395!2d-71.53916068513125!3d-16.38383848868196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a5c6b9d6f1f%3A0x4b0a5c1234567890!2sCalle%20General%20Varela%20377%2C%20Cayma%2C%20Arequipa!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Estrella de David S.R.L."
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}
