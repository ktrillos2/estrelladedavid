import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

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

const aboutData = {
    image: "public/images/d558da3c-69a4-4240-8d65-5d133d0f0985.jpeg",
    experienceCount: "15+",
    experienceText: "Años de Experiencia",
    backgroundText: "ABOUT",
    subtitle: "Sobre Nosotros",
    title: "EXCELENCIA EN MOVILIDAD CORPORATIVA",
    mainText: "Somos más que una empresa de transporte; somos su socio estratégico.",
    secondaryText: "Dedicados al transporte de personal y alquiler de vehiculos, nuestra filosofía se centra en la seguridad integral y la eficiencia operativa.",
    features: [
        "FLOTA MODERNA Y CERTIFICADA",
        "CONDUCTORES PROFESIONALES",
        "ATENCIÓN 24/7"
    ],
    ctaText: "Conoce Nuestra Historia",
    ctaLink: "/nosotros"
}

async function main() {
    console.log('Starting About content migration...')

    const imagePath = path.join(process.cwd(), aboutData.image)
    const imageId = await uploadImage(imagePath)

    if (!imageId) {
        console.error("Failed to upload main image")
        return
    }

    const doc = {
        _id: 'about',
        _type: 'about',
        image: { _type: 'image', asset: { _ref: imageId } },
        experienceCount: aboutData.experienceCount,
        experienceText: aboutData.experienceText,
        backgroundText: aboutData.backgroundText,
        subtitle: aboutData.subtitle,
        title: aboutData.title,
        mainText: aboutData.mainText,
        secondaryText: aboutData.secondaryText,
        features: aboutData.features,
        ctaText: aboutData.ctaText,
        ctaLink: aboutData.ctaLink
    }

    await client.createOrReplace(doc)
    console.log('About content uploaded successfully!')
}

main().catch(console.error)
