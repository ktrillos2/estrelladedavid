import { createClient } from 'next-sanity'

const token = 'skoV1Hy6wf01ytrFTCQDtftyP4TrRjCPz53ndQixoqTzcP9cE5RvDrm4jyZl0hnZD8CLCKU7N3aX0iuYZ53mTlyzutbZswXGp7LNc0fX53Hvv8QV9U317wynzp9CzSeOBC8v8y2LnKwR5fS6l3Ko27T3zsIL3CcNkZZfsDcSXDRX1YcixLWF'

const client = createClient({
    projectId: 'ft2ytm48',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: token,
    useCdn: false,
    apiVersion: '2024-01-01',
})

const contactPageData = {
    title: "Hablemos",
    description: "Estamos aquí para ayudarle. Contáctenos para solicitar información sobre nuestros servicios o una cotización personalizada.",
    formTitle: "Envíenos un Mensaje",
    infoTitle: "Datos de Contacto",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5835476076395!2d-71.53916068513125!3d-16.38383848868196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a5c6b9d6f1f%3A0x4b0a5c1234567890!2sCalle%20General%20Varela%20377%2C%20Cayma%2C%20Arequipa!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
}

async function main() {
    console.log('Starting Contact Page content migration...')

    const doc = {
        _id: 'contactPage',
        _type: 'contactPage',
        title: contactPageData.title,
        description: contactPageData.description,
        formTitle: contactPageData.formTitle,
        infoTitle: contactPageData.infoTitle,
        mapUrl: contactPageData.mapUrl
    }

    await client.createOrReplace(doc)
    console.log('Contact Page content uploaded successfully!')
}

main().catch(console.error)
