"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { HiOutlineCheckCircle, HiOutlineRefresh } from "react-icons/hi"
import { CgSpinner } from "react-icons/cg"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        servicio: formData.get('servicio'),
        mensaje: formData.get('mensaje'),
      }

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error sending message:', error)
      alert("Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 text-center border border-green-200"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <HiOutlineCheckCircle className="h-12 w-12 text-green-600" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-foreground mb-3"
        >
          Mensaje Enviado
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground mb-6"
        >
          Gracias por contactarnos. Nos pondremos en contacto con usted lo antes posible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
          >
            <HiOutlineRefresh className="mr-2 h-4 w-4" />
            Enviar otro mensaje
          </Button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-muted/30 rounded-2xl p-8 border border-border/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="space-y-2"
          animate={{ scale: focusedField === 'nombre' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Label htmlFor="nombre" className="text-foreground font-medium">
            Nombre <span className="text-primary">*</span>
          </Label>
          <Input
            id="nombre"
            name="nombre"
            placeholder="Su nombre completo"
            required
            className="bg-background border-border/50 focus:border-primary transition-all"
            onFocus={() => setFocusedField('nombre')}
            onBlur={() => setFocusedField(null)}
          />
        </motion.div>
        <motion.div
          className="space-y-2"
          animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Label htmlFor="email" className="text-foreground font-medium">
            Correo Electrónico <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ejemplo@correo.com"
            required
            className="bg-background border-border/50 focus:border-primary transition-all"
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
          />
        </motion.div>
      </div>

      <motion.div
        className="space-y-2"
        animate={{ scale: focusedField === 'telefono' ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Label htmlFor="telefono" className="text-foreground font-medium">
          Teléfono
        </Label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="+51 999 999 999"
          className="bg-background border-border/50 focus:border-primary transition-all"
          onFocus={() => setFocusedField('telefono')}
          onBlur={() => setFocusedField(null)}
        />
      </motion.div>

      <motion.div
        className="space-y-2"
        animate={{ scale: focusedField === 'servicio' ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Label htmlFor="servicio" className="text-foreground font-medium">
          Servicio de Interés
        </Label>
        <select
          id="servicio"
          name="servicio"
          className="flex h-10 w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all"
          onFocus={() => setFocusedField('servicio')}
          onBlur={() => setFocusedField(null)}
        >
          <option value="">Seleccione un servicio</option>
          <option value="transporte-personal">Transporte de Personal</option>
          <option value="eventos">Eventos y Convenciones</option>
          <option value="renta">Renta de Autos y Camionetas</option>
          <option value="otro">Otro</option>
        </select>
      </motion.div>

      <motion.div
        className="space-y-2"
        animate={{ scale: focusedField === 'mensaje' ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Label htmlFor="mensaje" className="text-foreground font-medium">
          Mensaje <span className="text-primary">*</span>
        </Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Cuéntenos sobre sus necesidades de transporte..."
          rows={5}
          required
          className="bg-background border-border/50 focus:border-primary resize-none transition-all"
          onFocus={() => setFocusedField('mensaje')}
          onBlur={() => setFocusedField(null)}
        />
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 font-semibold"
          disabled={isSubmitting}
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <CgSpinner className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </motion.span>
            ) : (
              <motion.span
                key="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Enviar Mensaje
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      <p className="text-sm text-muted-foreground text-center">
        Los campos marcados con <span className="text-primary">*</span> son obligatorios.
      </p>
    </motion.form>
  )
}
