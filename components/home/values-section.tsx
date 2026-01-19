"use client"

import { motion } from "framer-motion"
import { Clock, ShieldCheck, Sparkles } from "lucide-react"

const values = [
    {
        icon: Clock,
        title: "Puntualidad",
        description: "La puntualidad es parte de la disciplina de nuestra compañía. Nos comprometemos a cumplir con los horarios establecidos, garantizando que nuestros clientes lleguen a tiempo a sus destinos.",
        color: "#F59E0B", // Amber-500
    },
    {
        icon: ShieldCheck,
        title: "Seguridad",
        description: "Todas las unidades pasan periódicamente un control operativo para garantizar su óptimo funcionamiento. Nuestros conductores están capacitados y certificados para ofrecer un servicio seguro.",
        color: "#F97316", // Orange-500
    },
    {
        icon: Sparkles,
        title: "Comodidad",
        description: "La comodidad en una empresa de transportes es un punto básico y esencial. Contamos con unidades modernas y bien equipadas para asegurar el confort de nuestros pasajeros.",
        color: "#EAB308", // Yellow-500
    },
]

export function ValuesSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 bg-[#FFD700]/10 text-[#FFD600] rounded-full text-sm font-bold mb-6 tracking-wide"
                    >
                        Nuestros Valores
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight"
                    >
                        Lo que nos Define
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground leading-relaxed font-medium"
                    >
                        Los valores que nos guían y definen nuestro compromiso diario con cada cliente.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group"
                        >
                            {/* Solid Color Icon Container - No Gradients */}
                            <div
                                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: value.color }}
                            >
                                <value.icon className="h-10 w-10 text-white" strokeWidth={2} />
                            </div>

                            <h3 className="text-2xl font-bold mb-6 text-slate-900 group-hover:text-[#FFD700] transition-colors">
                                {value.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
