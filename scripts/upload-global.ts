import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

// Configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'skoV1Hy6wf01ytrFTCQDtftyP4TrRjCPz53ndQixoqTzcP9cE5RvDrm4jyZl0hnZD8CLCKU7N3aX0iuYZ53mTlyzutbZswXGp7LNc0fX53Hvv8QV9U317wynzp9CzSeOBC8v8y2LnKwR5fS6l3Ko27T3zsIL3CcNkZZfsDcSXDRX1YcixLWF' // Fallback to provided token if env var missing (though token is actually for write access)
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
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

async function main() {
    console.log('Starting migration to new schemas...')

    // Upload Logo
    const logoPath = path.join(process.cwd(), 'public/images/logo.png')
    const logoId = await uploadImage(logoPath)

    // Header
    const headerDoc = {
        _id: 'header',
        _type: 'header',
        logo: logoId ? { _type: 'image', asset: { _ref: logoId } } : undefined,
        topBar: {
            phone: '+51 993 756 271',
            email: 'estrella_de_david1@hotmail.com',
            whatsapp: '+51 993 756 271'
        },
        navigation: [
            { _key: 'nav1', label: 'Inicio', href: '/' },
            { _key: 'nav2', label: 'Nosotros', href: '/nosotros' },
            {
                _key: 'nav3',
                label: 'Servicios',
                href: '#',
                subItems: [
                    { _key: 'sub1', label: 'Transporte de Personal', href: '/servicios/transporte-de-personal' },
                    { _key: 'sub2', label: 'Eventos y Convenciones', href: '/servicios/eventos-y-convenciones' },
                    { _key: 'sub3', label: 'Renta de Autos', href: '/servicios/renta-de-autos' },
                ]
            },
            { _key: 'nav4', label: 'Clientes', href: '/clientes' },
            { _key: 'nav5', label: 'Contacto', href: '/contacto' },
        ]
    }

    // Footer
    const footerDoc = {
        _id: 'footer',
        _type: 'footer',
        description: 'Empresa dedicada al transporte de personal y alquiler de vehículos en Arequipa desde 2007. Compromiso, puntualidad y seguridad.',
        socialLinks: [
            { _key: 'social1', platform: 'facebook', url: '#' },
            { _key: 'social2', platform: 'instagram', url: '#' },
            { _key: 'social3', platform: 'linkedin', url: '#' },
            { _key: 'social4', platform: 'whatsapp', url: 'https://wa.me/51993756271' }
        ],
        contactInfo: {
            address: 'Calle General Varela 377 Tomilla - Cayma',
            phones: ['+51 993 756 271', '+51 959 683 159'],
            email: 'estrella_de_david1@hotmail.com'
        }
    }

    // Settings
    const settingsDoc = {
        _id: 'settings',
        _type: 'settings',
        whatsappNumber: '51993756271',
        seo: {
            title: 'Estrella de David No. 1'
        }
    }

    await client.createOrReplace(headerDoc)
    await client.createOrReplace(footerDoc)
    await client.createOrReplace(settingsDoc)

    // Delete old globalConfig if exists to avoid confusion (optional, but good practice)
    await client.delete('globalConfig').catch(() => { })

    console.log('Migration completed successfully!')
}

main().catch(console.error)
