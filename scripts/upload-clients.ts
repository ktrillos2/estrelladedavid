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

const clientsData = {
    subtitle: "Clientes Destacados",
    title: "Empresas que Confían en Nosotros",
    description: "Nos enorgullece trabajar con empresas líderes en diferentes sectores.",
    clientsList: [
        { name: "Ferreyros", logo: "public/images/clients/ferreyros-logo.png" },
        { name: "CAT", logo: "public/images/clients/cat-logo.png" },
        { name: "Yura", logo: "public/images/clients/yura-logo.png" },
        { name: "Weir Minerals", logo: "public/images/clients/weir-logo.png" },
        { name: "FLSmidth", logo: "public/images/clients/flsmidth-logo.png" }
    ]
}

async function main() {
    console.log('Starting Clients content migration...')

    const processedClients = []

    for (const client of clientsData.clientsList) {
        const imagePath = path.join(process.cwd(), client.logo)
        const imageId = await uploadImage(imagePath)

        if (imageId) {
            processedClients.push({
                _type: 'object',
                _key: client.name.toLowerCase().replace(/\s+/g, '-'),
                name: client.name,
                logo: { _type: 'image', asset: { _ref: imageId } }
            })
        }
    }

    const doc = {
        _id: 'clients',
        _type: 'clients',
        subtitle: clientsData.subtitle,
        title: clientsData.title,
        description: clientsData.description,
        clientsList: processedClients
    }

    await client.createOrReplace(doc)
    console.log('Clients content uploaded successfully!')
}

main().catch(console.error)
