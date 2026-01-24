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

const aboutPageData = {
    title: "Quiénes Somos",
    description: "Somos una empresa dedicada al transporte de personal y del sector público, con más de 17 años de experiencia brindando servicios de calidad en Arequipa.",
    mission: {
        title: "Compromiso con la Calidad",
        description: "Estrella de David S.R.L. es una empresa dedicada al transporte de personal, comprometida en brindar un servicio integral, con altos estándares de calidad, seguridad y puntualidad. Buscamos satisfacer las necesidades de movilidad de nuestros clientes, contribuyendo al desarrollo de las empresas y la comunidad arequipeña."
    },
    vision: {
        title: "Liderazgo Regional",
        description: "Aspiramos ser reconocidos como una empresa privada rentable, líder en el transporte de personal en la región sur del Perú, destacándonos por la excelencia en el servicio, la innovación constante y el compromiso con la seguridad y bienestar de nuestros pasajeros y colaboradores."
    },
    valuesTitle: "Lo que nos Define",
    valuesDescription: "Los valores que nos guían y definen nuestro compromiso diario con cada cliente.",
    timelineTitle: "Trayectoria",
    timelineItems: [
        { year: "2007", title: "Fundación", description: "Inicio de operaciones en Arequipa con 5 vehículos" },
        { year: "2012", title: "Expansión", description: "Ampliación de flota a 20 unidades y nuevos clientes corporativos" },
        { year: "2017", title: "Consolidación", description: "Reconocidos como empresa líder en transporte de personal" },
        { year: "2024", title: "Actualidad", description: "Más de 50 vehículos modernos y presencia regional" }
    ],
    statsTitle: "Nuestra Experiencia en Números",
    stats: [
        { value: "17+", label: "Años de experiencia", icon: "clock" },
        { value: "50+", label: "Vehículos en flota", icon: "truck" },
        { value: "100+", label: "Clientes satisfechos", icon: "users" },
        { value: "24/7", label: "Disponibilidad", icon: "globe" }
    ],
    whyChooseUs: {
        badge: "Por qué Elegirnos",
        title: "Confía en los Expertos",
        description: "Con más de 17 años de experiencia, hemos desarrollado procesos y estándares que garantizan un servicio de primera calidad.",
        benefits: [
            "Conductores profesionales y certificados",
            "Flota moderna con mantenimiento constante",
            "Cobertura en toda la región sur del Perú",
            "Atención personalizada las 24 horas",
            "Precios competitivos y transparentes",
        ]
    }
}

async function main() {
    console.log('Starting About Page content migration...')

    // Upload image for Why Choose Us
    const busesPath = path.join(process.cwd(), 'public/images/buses-colonial.jpg')
    const busesImageId = await uploadImage(busesPath)

    const doc = {
        _id: 'aboutPage',
        _type: 'aboutPage',
        title: aboutPageData.title,
        description: aboutPageData.description,
        mission: aboutPageData.mission,
        vision: aboutPageData.vision,
        valuesTitle: aboutPageData.valuesTitle,
        valuesDescription: aboutPageData.valuesDescription,
        timelineTitle: aboutPageData.timelineTitle,
        timelineItems: aboutPageData.timelineItems,
        statsTitle: aboutPageData.statsTitle,
        stats: aboutPageData.stats,
        whyChooseUs: {
            ...aboutPageData.whyChooseUs,
            image: busesImageId ? { _type: 'image', asset: { _ref: busesImageId } } : undefined
        }
    }

    await client.createOrReplace(doc)
    console.log('About Page content uploaded successfully!')
}

main().catch(console.error)
