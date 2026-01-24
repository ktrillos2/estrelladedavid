"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Users, Calendar, Truck, Library, GraduationCap, Music, Briefcase } from "lucide-react"

const iconMap: Record<string, any> = {
  library: Library,
  graduation: GraduationCap,
  music: Music,
  briefcase: Briefcase,
  users: Users,
  calendar: Calendar,
  truck: Truck
}

interface ServicesSectionProps {
  data: {
    subtitle: string
    title: string
    description: string
    servicesList: {
      title: string
      description: string
      icon: string
      link: string
    }[]
  }
}

export function ServicesSection({ data }: ServicesSectionProps) {
  if (!data) return null

  const { subtitle, title, description, servicesList } = data

  return (
    <section id="servicios" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 opacity-0"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#FFD700]/10 text-[#FFD600] rounded-full text-sm font-medium mb-4 opacity-0"
          >
            {subtitle}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList?.map((service, index) => {
            const Icon = iconMap[service.icon] || Briefcase
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-card rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 opacity-0"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Optional: Add Link wrapping or button if desired, though design had just cards */}
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 opacity-0"
        >
          <Link href="/contacto">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 text-lg px-8 py-6 rounded-xl shadow-lg">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
