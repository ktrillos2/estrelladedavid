import React from "react"
import type { Metadata } from 'next'
import { Sarabun } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sarabun = Sarabun({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sarabun',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Estrella de David S.R.L. | Transporte de Personal y Alquiler de Vehículos en Arequipa',
  description: 'Empresa dedicada al transporte de personal y alquiler de vehículos en Arequipa desde 2007. Servicios de transporte para empresas, eventos y convenciones.',
  generator: 'v0.app',
  keywords: ['transporte de personal', 'alquiler de vehículos', 'Arequipa', 'transporte turístico', 'eventos', 'convenciones'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${sarabun.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
