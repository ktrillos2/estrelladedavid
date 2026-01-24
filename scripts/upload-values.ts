import { createClient } from 'next-sanity'

const token = 'skoV1Hy6wf01ytrFTCQDtftyP4TrRjCPz53ndQixoqTzcP9cE5RvDrm4jyZl0hnZD8CLCKU7N3aX0iuYZ53mTlyzutbZswXGp7LNc0fX53Hvv8QV9U317wynzp9CzSeOBC8v8y2LnKwR5fS6l3Ko27T3zsIL3CcNkZZfsDcSXDRX1YcixLWF'

const client = createClient({
    projectId: 'ft2ytm48',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: token,
    useCdn: false,
    apiVersion: '2024-01-01',
})

const valuesData = {
    subtitle: "Nuestros Valores",
    title: "Lo que nos Define",
    description: "Los valores que nos guían y definen nuestro compromiso diario con cada cliente.",
    valuesList: [
        {
            title: "Puntualidad",
            description: "La puntualidad es parte de la disciplina de nuestra compañía. Nos comprometemos a cumplir con los horarios establecidos, garantizando que nuestros clientes lleguen a tiempo a sus destinos.",
            color: "#F59E0B",
            icon: "clock"
        },
        {
            title: "Seguridad",
            description: "Todas las unidades pasan periódicamente un control operativo para garantizar su óptimo funcionamiento. Nuestros conductores están capacitados y certificados para ofrecer un servicio seguro.",
            color: "#F97316",
            icon: "shield"
        },
        {
            title: "Comodidad",
            description: "La comodidad en una empresa de transportes es un punto básico y esencial. Contamos con unidades modernas y bien equipadas para asegurar el confort de nuestros pasajeros.",
            color: "#EAB308",
            icon: "sparkles"
        }
    ]
}

async function main() {
    console.log('Starting Values content migration...')

    const doc = {
        _id: 'values',
        _type: 'values',
        subtitle: valuesData.subtitle,
        title: valuesData.title,
        description: valuesData.description,
        valuesList: valuesData.valuesList
    }

    await client.createOrReplace(doc)
    console.log('Values content uploaded successfully!')
}

main().catch(console.error)
