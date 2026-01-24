import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const token = 'skoV1Hy6wf01ytrFTCQDtftyP4TrRjCPz53ndQixoqTzcP9cE5RvDrm4jyZl0hnZD8CLCKU7N3aX0iuYZ53mTlyzutbZswXGp7LNc0fX53Hvv8QV9U317wynzp9CzSeOBC8v8y2LnKwR5fS6l3Ko27T3zsIL3CcNkZZfsDcSXDRX1YcixLWF'

const client = createClient({
    projectId: 'ft2ytm48',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: token,
    useCdn: false,
    apiVersion: '2024-01-01',
})

async function uploadImage(filePath: string) {
    try {
        if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filePath}`)
            return null
        }
        const buffer = fs.readFileSync(filePath)
        const asset = await client.assets.upload('image', buffer, {
            filename: path.basename(filePath)
        })
        return asset._id
    } catch (error) {
        console.error(`Failed to upload image: ${filePath}`, error)
        return null
    }
}

const slides = [
    {
        image: "public/images/2969e9a5-bf6a-41bf-bb9d-bb864cefe3d9.jpeg",
        alt: "Flota de vehículos modernos de Estrella de David",
        title: "Alquiler de Vehículos",
        subtitle: "Soluciones flexibles para su movilidad",
        description: "Disponga de nuestra moderna flota para sus necesidades personales o corporativas.",
        features: ["Variedad de Modelos", "Tarifas Competitivas", "Soporte 24/7"]
    },
    {
        image: "public/images/6726b31f-e811-4f06-953e-c73326e277fc.jpeg",
        alt: "Transporte corporativo profesional",
        title: "Transporte de Personal",
        subtitle: "Seguridad y puntualidad en cada viaje",
        description: "Servicio especializado para el traslado de personal de empresas e instituciones.",
        features: ["Conductores Calificados", "Monitoreo GPS", "Seguridad Total"]
    },
    {
        image: "public/images/d2e5b4ee-c4df-4a83-a8dd-79ba14138b64.jpeg",
        alt: "Buses confortables para eventos y convenciones",
        title: "Eventos y Convenciones",
        subtitle: "Viaje con comodidad y estilo",
        description: "Transporte ideal para excursiones, congresos y eventos sociales.",
        features: ["Aire Acondicionado", "Asientos Reclinables", "Experiencia Garantizada"]
    },
    {
        image: "public/images/d558da3c-69a4-4240-8d65-5d133d0f0985.jpeg",
        alt: "Servicio de transporte privado de alta calidad",
        title: "Servicio Ejecutivo",
        subtitle: "Exclusividad y confort",
        description: "Atención personalizada para traslados ejecutivos y VIP.",
        features: ["Discreción", "Confort Premium", "Atención Personalizada"]
    },
    {
        image: "public/images/bus-gold-1.jpg",
        alt: "Bus moderno con diseño dorado de Estrella de David",
        title: "Confort Superior",
        subtitle: "Viaje con estilo y elegancia",
        description: "Nuestras unidades modernas garantizan una experiencia de viaje inigualable.",
        features: ["Diseño Moderno", "Asientos Ergonómicos", "Climatización"]
    },
    {
        image: "public/images/bus-silver-1.jpg",
        alt: "Bus interprovincial plateado y moderno",
        title: "Viajes Seguros",
        subtitle: "Su seguridad es nuestra prioridad",
        description: "Flota equipada con la última tecnología en seguridad vial.",
        features: ["Frenos ABS", "Control de Estabilidad", "Monitoreo 24/7"]
    },
    {
        image: "public/images/bus-silver-2.jpg",
        alt: "Vista frontal de bus moderno de Estrella de David",
        title: "Servicio Puntual",
        subtitle: "Respetamos su tiempo",
        description: "Garantizamos la puntualidad en todos nuestros servicios de transporte.",
        features: ["Salidas Exactas", "Rutas Optimizadas", "Conductores Expertos"]
    },
]

async function main() {
    console.log('Starting Hero content migration...')

    const processedSlides = []

    for (const slide of slides) {
        const imagePath = path.join(process.cwd(), slide.image)
        const imageId = await uploadImage(imagePath)

        if (imageId) {
            processedSlides.push({
                _key: crypto.randomUUID(),
                image: { _type: 'image', asset: { _ref: imageId } },
                alt: slide.alt,
                title: slide.title,
                subtitle: slide.subtitle,
                description: slide.description,
                features: slide.features
            })
        }
    }

    const heroDoc = {
        _id: 'hero',
        _type: 'hero',
        slides: processedSlides
    }

    await client.createOrReplace(heroDoc)
    console.log('Hero content uploaded successfully!')
}

main().catch(console.error)
