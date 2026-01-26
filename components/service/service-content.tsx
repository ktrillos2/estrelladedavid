"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
    Building, FileText, Truck, ShieldCheck,
    Globe, MapPin, Clock, Library, GraduationCap,
    Music, Users, CheckCircle, ArrowRight, Zap
} from "lucide-react"
import { PortableText } from "@portabletext/react"

const iconMap: Record<string, any> = {
    building: Building,
    document: FileText,
    truck: Truck,
    support: ShieldCheck,
    globe: Globe,
    location: MapPin,
    clock: Clock,
    library: Library,
    graduation: GraduationCap,
    music: Music,
    users: Users,
}

interface ServiceContentProps {
    data: {
        title: string
        hero: {
            image: { asset: { url: string; metadata?: { lqip: string } } }
            badge: string
            title: string
            description: string
        }
        intro: {
            badge: string
            title: string
            description: string
        }
        features: {
            icon: string
            title: string
            description: string
            color: string
        }[]
        contentSection: {
            image: { asset: { url: string; metadata?: { lqip: string } } }
            badge: string
            title: string
            content: any[]
            stats: { value: string; label: string }
        }
        extraSection: {
            type: 'grid' | 'list'
            badge: string
            title: string
            description: string
            items: {
                title: string
                value?: string
                description?: string
                subtitle?: string
            }[]
        }
        cta: {
            title: string
            description: string
            buttonText: string
        }
    }
}

export function ServiceContent({ data }: ServiceContentProps) {
    if (!data) return null

    const { hero, intro, features, contentSection, extraSection, cta } = data

    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    {hero?.image?.asset?.url && (
                        <Image
                            src={hero.image.asset.url}
                            alt={hero.title || data.title}
                            fill
                            className="object-cover"
                            priority
                            placeholder={hero.image.asset.metadata?.lqip ? "blur" : "empty"}
                            blurDataURL={hero.image.asset.metadata?.lqip}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
                </div>

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-[10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50"
                />

                <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-32">
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
                            className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 opacity-0"
                            style={{ opacity: 1 /* Fix FOUC */ }}
                        >
                            {hero?.badge}
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {hero?.title}
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                            {hero?.description}
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="opacity-0"
                            style={{ opacity: 1 }}
                        >
                            <Link href="/contacto">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
                                        Solicitar Cotización
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 opacity-0"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                            {intro?.badge}
                        </span>
                        <h2 className="text-4xl font-bold text-foreground mb-6">
                            {intro?.title}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {intro?.description}
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    {features && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {features.map((feature, index) => {
                                const Icon = iconMap[feature.icon] || Zap
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -10 }}
                                        className="bg-muted/50 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group opacity-0"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                                        >
                                            <Icon className="h-7 w-7 text-white" />
                                        </motion.div>
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Content Section (Image + Text) */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1 opacity-0"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                {contentSection?.image?.asset?.url && (
                                    <Image
                                        src={contentSection.image.asset.url}
                                        alt={contentSection.title}
                                        fill
                                        className="object-cover"
                                        placeholder={contentSection.image.asset.metadata?.lqip ? "blur" : "empty"}
                                        blurDataURL={contentSection.image.asset.metadata?.lqip}
                                    />
                                )}
                            </div>
                            {contentSection?.stats && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl opacity-0"
                                >
                                    <p className="text-4xl font-bold">{contentSection.stats.value}</p>
                                    <p className="text-sm opacity-80">{contentSection.stats.label}</p>
                                </motion.div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 opacity-0"
                        >
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                {contentSection?.badge}
                            </span>
                            <h2 className="text-4xl font-bold text-foreground mb-6">
                                {contentSection?.title}
                            </h2>
                            <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed">
                                <PortableText value={contentSection?.content} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Extra Section (Grid or List) */}
            {extraSection && (
                <section className="py-24 bg-background relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }} />
                    </div>

                    <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16 opacity-0"
                        >
                            <span className="inline-block px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium mb-4">
                                {extraSection?.badge}
                            </span>
                            <h2 className="text-4xl font-bold mb-6">
                                {extraSection?.title}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {extraSection?.description}
                            </p>
                        </motion.div>

                        {extraSection.type === 'grid' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                                {extraSection.items?.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5 }}
                                        className="text-center p-6 bg-muted/40 rounded-2xl border border-border/50 hover:border-primary/30 transition-all opacity-0"
                                    >
                                        <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                                        <p className="text-lg font-bold mb-1">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                        {item.subtitle && <p className="text-xs text-muted-foreground/70 mt-1">{item.subtitle}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                                {extraSection.items?.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/60 transition-colors opacity-0"
                                    >
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="text-lg font-medium">{item.title}</span>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto opacity-0"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                            {cta?.title}
                        </h2>
                        <p className="text-xl text-primary-foreground/80 mb-10">
                            {cta?.description}
                        </p>
                        <Link href="/contacto">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg text-lg px-10 h-14 rounded-full">
                                    {cta?.buttonText || "Solicitar Cotización"}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
