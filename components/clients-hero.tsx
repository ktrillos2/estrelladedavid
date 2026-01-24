"use client"

import { motion } from "framer-motion"

interface ClientsHeroProps {
    title: string
    description: string
}

export function ClientsHero({ title, description }: ClientsHeroProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {title}
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed max-w-3xl mx-auto">
                {description}
            </p>
        </motion.div>
    )
}
