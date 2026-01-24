import { createClient } from 'next-sanity'

// Replicate client config from sanity/lib/client.ts
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ft2ytm48'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Force fresh data
})

async function checkData() {
    try {
        console.log(`Checking data for Project ID: ${projectId}, Dataset: ${dataset}`)

        const query = `{
            "header": *[_type == "header"][0],
            "footer": *[_type == "footer"][0],
            "settings": *[_type == "settings"][0]
        }`

        const data = await client.fetch(query)
        console.log('Data retrieved:', JSON.stringify(data, null, 2))

        if (!data.header) console.error('ERROR: Header document not found!')
        else console.log('SUCCESS: Header found.')

    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

checkData()
