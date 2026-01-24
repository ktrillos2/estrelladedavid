"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  HiOutlineMenu,
  HiOutlineX,
  HiChevronDown,
  HiOutlinePhone,
  HiOutlineMail
} from "react-icons/hi"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header({ data }: { data: any }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { logo, topBar, navigation } = data || {}

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              {topBar?.phone && (
                <a href={`tel:${topBar.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <HiOutlinePhone className="h-4 w-4" />
                  <span>{topBar.phone}</span>
                </a>
              )}
              {topBar?.email && (
                <a href={`mailto:${topBar.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <HiOutlineMail className="h-4 w-4" />
                  <span>{topBar.email}</span>
                </a>
              )}
            </div>
            {topBar?.whatsapp && (
              <a
                href={`https://wa.me/${topBar.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>WhatsApp: {topBar.whatsapp}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${scrolled
          ? "bg-background/98 backdrop-blur-md shadow-lg"
          : "bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {logo?.asset?.url ? (
                  <Image
                    src={logo.asset.url}
                    alt="Estrella de David"
                    width={180}
                    height={60}
                    className="h-14 w-auto transition-transform"
                    priority
                  />
                ) : (
                  <span className="text-xl font-bold">Estrella de David</span>
                )}
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation?.map((item: any, index: number) => {
                if (item.subItems && item.subItems.length > 0) {
                  return (
                    <DropdownMenu key={index}>
                      <DropdownMenuTrigger
                        id={`dropdown-trigger-${index}`}
                        className="flex items-center gap-1 text-[15px] font-medium text-foreground hover:text-[#FFD700] transition-colors group tracking-wide outline-none py-1 relative"
                      >
                        {item.label}
                        <HiChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-64 p-2 rounded-xl border border-border/50 shadow-xl bg-background/95 backdrop-blur-md">
                        {item.subItems.map((sub: any, subIndex: number) => (
                          <DropdownMenuItem key={subIndex} asChild className="rounded-lg focus:bg-[#FFD700]/10 focus:text-foreground cursor-pointer">
                            <Link href={sub.href || '#'} className="w-full py-2 font-medium">
                              {sub.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )
                }
                return (
                  <Link
                    key={index}
                    href={item.href || '#'}
                    className="relative text-[15px] font-medium text-foreground hover:text-[#FFD700] transition-colors group tracking-wide py-1"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </Link>
                )
              })}

              <Link href="/contacto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#1a1a1a] text-white hover:bg-[#FFD700] hover:text-[#1a1a1a] transition-colors shadow-lg font-medium px-6 rounded-full border border-transparent hover:border-[#1a1a1a]/10">
                    Contacto
                  </Button>
                </motion.div>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border bg-background overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-2">
                  {navigation?.map((item: any, index: number) => {
                    if (item.subItems && item.subItems.length > 0) {
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="py-2"
                        >
                          <span className="block text-sm font-medium text-muted-foreground px-4 mb-2">{item.label}</span>
                          <div className="ml-4 flex flex-col gap-1">
                            {item.subItems.map((sub: any, subIndex: number) => (
                              <Link
                                key={subIndex}
                                href={sub.href || '#'}
                                className="text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-2 px-4 rounded-lg"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )
                    }
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href || '#'}
                          className="block text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    )
                  })}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-2"
                  >
                    <Link
                      href="/contacto"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Contacto
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
