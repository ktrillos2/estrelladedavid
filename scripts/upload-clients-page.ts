import { createClient } from 'next-sanity'

const token = 'skoV1Hy6wf01ytrFTCQDtftyP4TrRjCPz53ndQixoqTzcP9cE5RvDrm4jyZl0hnZD8CLCKU7N3aX0iuYZ53mTlyzutbZswXGp7LNc0fX53Hvv8QV9U317wynzp9CzSeOBC8v8y2LnKwR5fS6l3Ko27T3zsIL3CcNkZZfsDcSXDRX1YcixLWF'

const client = createClient({
    projectId: 'ft2ytm48',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: token,
    useCdn: false,
    apiVersion: '2024-01-01',
})

const clientsPageData = {
    title: "Nuestros Clientes",
    description: "Empresas líderes que confían en nuestra excelencia y compromiso."
}

async function main() {
    console.log('Starting Clients Page content migration...')

    const doc = {
        _id: 'clientsPage',
        _type: 'clientsPage',
        title: clientsPageData.title,
        description: clientsPageData.description
    }

    await client.createOrReplace(doc)
    console.log('Clients Page content uploaded successfully!')
}

main().catch(console.error)
