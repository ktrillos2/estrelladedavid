"use client"

import { motion } from "framer-motion"
import { Clock, ShieldCheck, Sparkles } from "lucide-react"

const iconMap: Record<string, any> = {
    clock: Clock,
    shield: ShieldCheck,
    sparkles: Sparkles
}

interface ValuesSectionProps {
    data: {
        subtitle: string
        title: string
        description: string
        valuesList: {
            title: string
            description: string
            color: string
            icon: string
        }[]
    }
}

export function ValuesSection({ data }: ValuesSectionProps) {
    if (!data) return null

    const {
        subtitle = "Nuestros valores",
        title = "Pilares de Nuestra Excelencia",
        description = "Los principios que guían cada uno de nuestros servicios y garantizan la satisfacción de nuestros clientes.",
        valuesList = [
            {
                title: "Seguridad",
                description: "Nuestra prioridad absoluta. Unidades monitoreadas y conductores rigurosamente seleccionados.",
                color: "#ff9100", // Orange
                icon: "shield"
            },
            {
                title: "Puntualidad",
                description: "Respetamos su tiempo. Cumplimiento estricto de itinerarios y horarios programados.",
                color: "#ffd700", // Gold
                icon: "clock"
            },
            {
                title: "Calidad",
                description: "Servicio de primer nivel. Atención amable, unidades limpias y confortables.",
                color: "#ffbd00", // Amber
                icon: "sparkles"
            }
        ]
    } = data || {}

    return (
        <section className="py-24 bg-background  relative overflow-hidden" >
            <div className="container mx-auto  relative z-10 px-4 lg:px-[120px]">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 bg-[#FFD700]/10 text-[#FFD600] rounded-full text-sm font-bold mb-6 tracking-wide"
                    >
                        {subtitle}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground leading-relaxed font-medium"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {valuesList?.map((value, index) => {
                        const Icon = iconMap[value.icon] || Sparkles
                        return (
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
                                    <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                                </div>

                                <h3 className="text-2xl font-bold mb-6 text-slate-900 group-hover:text-[#FFD700] transition-colors">
                                    {value.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
