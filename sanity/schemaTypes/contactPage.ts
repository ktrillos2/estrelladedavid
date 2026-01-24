import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
    name: 'contactPage',
    title: 'Página Contacto',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: Hablemos',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Descripción Hero',
            type: 'text',
            rows: 2,
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'formTitle',
            title: 'Título Formulario',
            type: 'string',
            description: 'Ej: Envíenos un Mensaje',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'infoTitle',
            title: 'Título Información',
            type: 'string',
            description: 'Ej: Datos de Contacto',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'mapUrl',
            title: 'URL del Mapa (Embed)',
            type: 'url',
            description: 'URL del iframe de Google Maps (src)',
            validation: (Rule) => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: 'Página Contacto',
                subtitle: title
            }
        }
    }
})
