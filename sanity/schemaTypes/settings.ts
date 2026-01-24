import { defineField, defineType } from 'sanity'

export const settings = defineType({
    name: 'settings',
    title: 'Configuraciones Generales',
    type: 'document',
    fields: [
        defineField({
            name: 'whatsappNumber',
            title: 'Número de WhatsApp (Toda la web)',
            type: 'string',
            description: 'Número para el botón flotante y enlaces de contacto'
        }),
        defineField({
            name: 'seo',
            title: 'SEO Global',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Título Base', type: 'string' }),
                defineField({ name: 'description', title: 'Descripción Base', type: 'text' })
            ]
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Ajustes Generales'
            }
        }
    }
})
