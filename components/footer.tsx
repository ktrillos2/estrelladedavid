"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi"
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/51993756271", label: "WhatsApp" },
]

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contacto", label: "Contacto" },
]

const serviceLinks = [
  { href: "/servicios/transporte-de-personal", label: "Transporte de Personal" },
  { href: "/servicios/eventos-y-convenciones", label: "Eventos y Convenciones" },
  { href: "/servicios/renta-de-autos", label: "Renta de Autos" },
]

export function Footer({ data }: { data: any }) {
  const { logo, description, socialLinks, contactInfo } = data || {}

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {logo?.asset?.url ? (
              <Image
                src={logo.asset.url}
                alt="Estrella de David"
                width={160}
                height={53}
                className="h-14 w-auto mb-6 brightness-0 invert"
              />
            ) : (
              <span className="text-xl font-bold mb-6 block">Estrella de David</span>
            )}

            <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-6">
              {description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks?.map((social: any) => {
                let Icon = FaFacebookF;
                if (social.platform === 'instagram') Icon = FaInstagram;
                if (social.platform === 'linkedin') Icon = FaLinkedinIn;
                if (social.platform === 'whatsapp') Icon = FaWhatsapp;

                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 relative">
              Enlaces Rápidos
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/clientes", label: "Clientes" },
                { href: "/contacto", label: "Contacto" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 relative">
              Servicios
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/servicios/transporte-de-personal", label: "Transporte de Personal" },
                { href: "/servicios/eventos-y-convenciones", label: "Eventos y Convenciones" },
                { href: "/servicios/renta-de-autos", label: "Renta de Autos" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 relative">
              Contacto
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 3 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-white/10 group-hover:bg-primary rounded-lg flex items-center justify-center shrink-0 transition-colors">
                  <HiOutlineLocationMarker className="h-5 w-5" />
                </div>
                <span className="text-sm text-secondary-foreground/70 leading-relaxed">
                  {contactInfo?.address}
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-white/10 group-hover:bg-primary rounded-lg flex items-center justify-center shrink-0 transition-colors">
                  <HiOutlinePhone className="h-5 w-5" />
                </div>
                <div className="text-sm text-secondary-foreground/70">
                  {contactInfo?.phones?.map((phone: string) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors block">
                      {phone}
                    </a>
                  ))}
                </div>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-white/10 group-hover:bg-primary rounded-lg flex items-center justify-center shrink-0 transition-colors">
                  <HiOutlineMail className="h-5 w-5" />
                </div>
                {contactInfo?.email && (
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                )}
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} Estrella de David S.R.L. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/50">
            <Link href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
