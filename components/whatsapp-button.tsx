"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { useState } from "react"
import { HiX } from "react-icons/hi"

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 border border-border"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              aria-label="Cerrar"
            >
              <HiX className="h-4 w-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                <FaWhatsapp className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Estrella de David</p>
                <p className="text-xs text-muted-foreground mb-2">Responde en minutos</p>
                <p className="text-sm text-foreground">Hola, estamos para ayudarte con tu transporte.</p>
              </div>
            </div>
            <a
              href="https://wa.me/51993756271?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios%20de%20transporte"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 w-full bg-green-500 hover:bg-green-600 text-white text-center py-2.5 rounded-xl font-medium text-sm transition-colors"
            >
              Iniciar conversación
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8 text-white" />

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </motion.button>
    </div>
  )
}
