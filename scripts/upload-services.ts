import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

// Configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ft2ytm48'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = 'skoV1Hy6wf01ytrFTCQDtftyP4TrRjCPz53ndQixoqTzcP9cE5RvDrm4jyZl0hnZD8CLCKU7N3aX0iuYZ53mTlyzutbZswXGp7LNc0fX53Hvv8QV9U317wynzp9CzSeOBC8v8y2LnKwR5fS6l3Ko27T3zsIL3CcNkZZfsDcSXDRX1YcixLWF'

const client = createClient({
    projectId,
    dataset,
    token,
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
    console.log('Starting services migration...')

    // Upload Images
    // We try to find these images in public/images
    const teamAirportId = await uploadImage(path.join(process.cwd(), 'public/images/team-airport.jpg'))
    const vansFleetId = await uploadImage(path.join(process.cwd(), 'public/images/vans-fleet.jpg'))
    const busesColonialId = await uploadImage(path.join(process.cwd(), 'public/images/buses-colonial.jpg'))

    const services = [
        // 1. Transporte de Personal
        {
            _id: 'service-transporte-de-personal',
            _type: 'service',
            title: 'Transporte de Personal',
            slug: { current: 'transporte-de-personal' },
            hero: {
                image: teamAirportId ? { _type: 'image', asset: { _ref: teamAirportId } } : undefined,
                badge: 'Seguridad para tu Empresa',
                title: 'Transporte de Personal',
                description: 'Con más de 17 años de experiencia profesional, brindamos servicios de transporte de personal para diferentes empresas, garantizando seguridad, comodidad y puntualidad en cada traslado.'
            },
            intro: {
                badge: 'Nuestro Servicio',
                title: '¿Qué es el transporte de personal?',
                description: 'El transporte de personal es un servicio especializado que permite a las empresas movilizar a sus colaboradores desde sus hogares hasta el centro de trabajo y viceversa. Este servicio no solo optimiza los tiempos de traslado, sino que también contribuye a mejorar la calidad de vida de los empleados y la productividad de la organización.'
            },
            features: [
                {
                    _key: 'feat1',
                    icon: 'globe',
                    title: 'Reduce la contaminación',
                    description: 'Menos vehículos en las calles significa un aire más limpio para todos.',
                    color: 'from-green-500 to-emerald-400'
                },
                {
                    _key: 'feat2',
                    icon: 'location',
                    title: 'Garantiza mayor accesibilidad',
                    description: 'Facilitamos el traslado de sus colaboradores desde diversos puntos de la ciudad.',
                    color: 'from-amber-500 to-yellow-400'
                },
                {
                    _key: 'feat3',
                    icon: 'building',
                    title: 'Mejora la imagen corporativa',
                    description: 'Demuestre el compromiso de su empresa con el bienestar de sus empleados.',
                    color: 'from-orange-500 to-amber-400'
                },
                {
                    _key: 'feat4',
                    icon: 'clock',
                    title: 'Aumenta la puntualidad',
                    description: 'Sus colaboradores llegarán a tiempo, mejorando la productividad.',
                    color: 'from-yellow-500 to-amber-300'
                }
            ],
            contentSection: {
                image: vansFleetId ? { _type: 'image', asset: { _ref: vansFleetId } } : undefined,
                badge: 'Beneficios',
                title: 'Ventajas del Transporte de Personal',
                content: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Descubre las ventajas de contar con un servicio de transporte para tu empresa. Flota moderna, conductores capacitados y seguro de pasajeros incluido.' }]
                    }
                ],
                stats: { value: '50+', label: 'Vehículos' }
            },
            extraSection: {
                type: 'list',
                badge: 'Por qué elegirnos',
                title: 'Calidad Garantizada',
                items: [
                    { _key: 'item1', title: 'Flota de vehículos modernos y bien mantenidos' },
                    { _key: 'item2', title: 'Conductores profesionales y capacitados' },
                    { _key: 'item3', title: 'Rutas optimizadas para mayor eficiencia' },
                    { _key: 'item4', title: 'Monitoreo GPS en tiempo real' },
                    { _key: 'item5', title: 'Seguro de pasajeros incluido' },
                ]
            },
            cta: {
                title: '¿Listo para mejorar el transporte de su empresa?',
                description: 'Contáctenos hoy y reciba una cotización personalizada sin compromiso.',
                buttonText: 'Contactar Ahora'
            }
        },
        // 2. Eventos y Convenciones
        {
            _id: 'service-eventos-y-convenciones',
            _type: 'service',
            title: 'Eventos y Convenciones',
            slug: { current: 'eventos-y-convenciones' },
            hero: {
                image: busesColonialId ? { _type: 'image', asset: { _ref: busesColonialId } } : undefined,
                badge: 'Servicio de Transporte Privado',
                title: 'Eventos y Convenciones',
                description: 'En Estrella de David ofrecemos el servicio de transporte privado para todo tipo de eventos y convenciones, desde excursiones escolares hasta congresos empresariales.'
            },
            intro: {
                badge: 'Nuestros Servicios',
                title: 'Transporte para Todo Tipo de Eventos',
                description: 'Contamos con una amplia variedad de servicios adaptados a cada tipo de evento.'
            },
            features: [
                {
                    _key: 'feat1',
                    icon: 'library',
                    title: 'Visitas Culturales y Turísticas',
                    description: 'Transporte para visitas a museos, sitios arqueológicos y destinos turísticos.',
                    color: 'from-amber-500 to-yellow-400'
                },
                {
                    _key: 'feat2',
                    icon: 'graduation',
                    title: 'Excursiones Escolares',
                    description: 'Servicio seguro para instituciones educativas y paseos de promoción.',
                    color: 'from-orange-500 to-amber-400'
                },
                {
                    _key: 'feat3',
                    icon: 'music',
                    title: 'Traslados para Conciertos',
                    description: 'Transporte organizado para eventos musicales y festivales.',
                    color: 'from-yellow-500 to-amber-300'
                },
                {
                    _key: 'feat4',
                    icon: 'users',
                    title: 'Convenciones y Congresos',
                    description: 'Soluciones de transporte para eventos corporativos y reuniones empresariales.',
                    color: 'from-green-500 to-emerald-400'
                }
            ],
            contentSection: {
                image: teamAirportId ? { _type: 'image', asset: { _ref: teamAirportId } } : undefined,
                badge: 'Experiencia Comprobada',
                title: 'Eventos de Gran Escala',
                content: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Nuestra experiencia nos permite manejar eventos de cualquier magnitud. Coordinamos rutas y horarios para garantizar la puntualidad de todos los asistentes.' }]
                    }
                ],
                stats: { value: '100+', label: 'Eventos realizados' }
            },
            extraSection: {
                type: 'grid',
                badge: 'Nuestra Flota',
                title: 'Vehículos para Eventos',
                description: 'Disponemos de vehículos de diferentes capacidades.',
                items: [
                    { _key: 'item1', value: '15', title: 'Vans', description: 'Hasta 15 pasajeros', subtitle: 'Grupos pequeños' },
                    { _key: 'item2', value: '30', title: 'Minibuses', description: 'Hasta 30 pasajeros', subtitle: 'Grupos medianos' },
                    { _key: 'item3', value: '50', title: 'Buses', description: 'Hasta 50 pasajeros', subtitle: 'Grupos grandes' },
                ]
            },
            cta: {
                title: '¿Organizando un evento?',
                description: 'Déjenos encargarnos del transporte para que usted pueda concentrarse en lo importante.',
                buttonText: 'Solicitar Cotización'
            }
        },
        // 3. Renta de Autos
        {
            _id: 'service-renta-de-autos',
            _type: 'service',
            title: 'Renta de Autos',
            slug: { current: 'renta-de-autos' },
            hero: {
                image: vansFleetId ? { _type: 'image', asset: { _ref: vansFleetId } } : undefined,
                badge: 'Alquiler de Vehículos',
                title: 'Renta de Autos y Camionetas',
                description: 'En Estrella de David le asesoramos hasta conseguir el automóvil que se adapte a sus necesidades con las mejores tarifas.'
            },
            intro: {
                badge: 'Características',
                title: 'Ventajas de Nuestro Servicio',
                description: 'Descubra las ventajas de alquilar con Estrella de David.'
            },
            features: [
                {
                    _key: 'feat1',
                    icon: 'building',
                    title: 'Para Empresas y Particulares',
                    description: 'Adaptamos el servicio a necesidades corporativas o personales.',
                    color: 'from-amber-500 to-yellow-400'
                },
                {
                    _key: 'feat2',
                    icon: 'document',
                    title: 'Tarifas Todo Incluido',
                    description: 'Incluyen equipamiento, seguro y asistencia.',
                    color: 'from-orange-500 to-amber-400'
                },
                {
                    _key: 'feat3',
                    icon: 'truck',
                    title: 'Vehículos Modernos',
                    description: 'Mantenidos en óptimas condiciones para su seguridad.',
                    color: 'from-yellow-500 to-amber-300'
                },
                {
                    _key: 'feat4',
                    icon: 'support',
                    title: 'Atención Personalizada',
                    description: 'Asesoría completa para elegir el mejor vehículo.',
                    color: 'from-green-500 to-emerald-400'
                }
            ],
            contentSection: {
                image: busesColonialId ? { _type: 'image', asset: { _ref: busesColonialId } } : undefined,
                badge: 'Flota Diversa',
                title: 'Vehículos Modernos y Seguros',
                content: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Contamos con una amplia variedad de vehículos, desde sedanes económicos hasta camionetas 4x4 y vans.' }]
                    }
                ],
                stats: { value: '24/7', label: 'Asistencia' }
            },
            extraSection: {
                type: 'grid',
                badge: 'Tipos de Vehículos',
                title: 'Encuentra el Vehículo Perfecto',
                description: 'Variedad para todas las necesidades.',
                items: [
                    { _key: 'item1', title: 'Sedanes', value: '4-5 pax', description: 'Económicos urbanos' },
                    { _key: 'item2', title: 'SUVs', value: '5-7 pax', description: 'Todo terreno' },
                    { _key: 'item3', title: 'Buses', value: '12-50 pax', description: 'Grupos' },
                    { _key: 'item4', title: 'Camionetas', value: '3-5 pax', description: 'Carga y personal' },
                ]
            },
            cta: {
                title: '¿Necesita alquilar un vehículo?',
                description: 'Contáctenos y le ayudaremos a encontrar el vehículo perfecto para usted.',
                buttonText: 'Solicitar Cotización'
            }
        }
    ]

    for (const doc of services) {
        console.log(`Migrating ${doc.title}...`)
        await client.createOrReplace(doc)
    }

    console.log('Services migration completed!')
}

main().catch(console.error)
