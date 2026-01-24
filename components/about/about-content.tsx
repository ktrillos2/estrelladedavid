"use client"

import { WhatsAppButton } from "@/components/whatsapp-button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { HiOutlineClock, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineUserGroup, HiOutlineTruck, HiOutlineGlobeAlt, HiOutlineCheck } from "react-icons/hi"

const values = [
    {
        icon: HiOutlineClock,
        title: "Puntualidad",
        description:
            "La puntualidad es parte de la disciplina de nuestra compañía. Nos comprometemos a cumplir con los horarios establecidos, garantizando que nuestros clientes lleguen a tiempo a sus destinos.",
        color: "from-amber-500 to-yellow-400",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Seguridad",
        description:
            "Todas las unidades pasan periódicamente un control operativo para garantizar su óptimo funcionamiento. Nuestros conductores están capacitados y certificados para ofrecer un servicio seguro.",
        color: "from-orange-500 to-amber-400",
    },
    {
        icon: HiOutlineSparkles,
        title: "Comodidad",
        description:
            "La comodidad en una empresa de transportes es un punto básico y esencial. Contamos con unidades modernas y bien equipadas para asegurar el confort de nuestros pasajeros.",
        color: "from-yellow-500 to-amber-300",
    },
]

const iconMap: Record<string, any> = {
    clock: HiOutlineClock,
    truck: HiOutlineTruck,
    users: HiOutlineUserGroup,
    globe: HiOutlineGlobeAlt,
}

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <span ref={ref}>
            {isInView ? value : "0"}
        </span>
    )
}

interface AboutContentProps {
    data: {
        title: string
        description: string
        mission: {
            title: string
            description: string
        }
        vision: {
            title: string
            description: string
        }
        valuesTitle: string
        valuesDescription: string
        timelineTitle: string
        timelineItems: {
            year: string
            title: string
            description: string
        }[]
        statsTitle: string
        stats: {
            value: string
            label: string
            icon: string
        }[]
        whyChooseUs: {
            badge: string
            title: string
            description: string
            benefits: string[]
            image: { asset: { url: string } }
        }
    }
}

export function AboutContent({ data }: AboutContentProps) {
    const missionRef = useRef(null)
    const missionInView = useInView(missionRef, { once: true, margin: "-100px" })

    const {
        title,
        description,
        mission,
        vision,
        valuesTitle,
        valuesDescription,
        timelineTitle,
        timelineItems,
        statsTitle,
        stats,
        whyChooseUs
    } = data || {}

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/team-airport.jpg"
                        alt="Equipo de Estrella de David"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
                </div>

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
                            Conócenos
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                </div>

                {/* Floating decoration */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl hidden lg:block"
                />
            </section>

            {/* Mission & Vision Section */}
            <section ref={missionRef} className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={missionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="bg-muted/50 rounded-2xl p-10 border border-border/50 relative overflow-hidden group hover:shadow-xl transition-shadow"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                            <div className="relative z-10">
                                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                    Nuestra Misión
                                </span>
                                <h2 className="text-3xl font-bold text-foreground mb-6">
                                    {mission?.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {mission?.description}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={missionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-secondary text-secondary-foreground rounded-2xl p-10 relative overflow-hidden group hover:shadow-xl transition-shadow"
                        >
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                            <div className="relative z-10">
                                <span className="inline-block px-4 py-2 bg-white/10 text-primary rounded-full text-sm font-medium mb-6">
                                    Nuestra Visión
                                </span>
                                <h2 className="text-3xl font-bold mb-6">
                                    {vision?.title}
                                </h2>
                                <p className="text-secondary-foreground/80 leading-relaxed text-lg">
                                    {vision?.description}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-muted/50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                            Nuestros Valores
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {valuesTitle}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {valuesDescription}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
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
                                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                >
                                    <value.icon className="h-10 w-10 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                            Nuestra Historia
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {timelineTitle}
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

                            {timelineItems?.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-muted/50 rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all"
                                        >
                                            <span className="text-3xl font-bold text-primary">{item.year}</span>
                                            <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="hidden md:flex w-4 h-4 bg-primary rounded-full shrink-0 relative z-10">
                                        <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {statsTitle}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {stats?.map((stat, index) => {
                            const Icon = iconMap[stat.icon] || HiOutlineSparkles
                            return (
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
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                                        <AnimatedCounter value={stat.value} />
                                    </div>
                                    <p className="text-secondary-foreground/70">{stat.label}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                {whyChooseUs?.badge || "Por qué Elegirnos"}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                {whyChooseUs?.title || "Confía en los Expertos"}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {whyChooseUs?.description}
                            </p>

                            <ul className="space-y-4">
                                {whyChooseUs?.benefits?.map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <HiOutlineCheck className="h-4 w-4 text-primary" />
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
                                {whyChooseUs?.image?.asset?.url && (
                                    <Image
                                        src={whyChooseUs.image.asset.url}
                                        alt={whyChooseUs.title || "Imagen Por qué elegirnos"}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
                            >
                                <p className="text-4xl font-bold">
                                    {stats?.[0]?.value || "+17"}
                                </p>
                                <p className="text-sm opacity-80">
                                    {stats?.[0]?.label || "Años de experiencia"}
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <WhatsAppButton />
        </>
    )
}
