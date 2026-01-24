import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
    name: 'aboutPage',
    title: 'Página Nosotros',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: Quiénes Somos',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Descripción Hero',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'mission',
            title: 'Misión',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Título', type: 'string' }),
                defineField({ name: 'description', title: 'Descripción', type: 'text' })
            ]
        }),
        defineField({
            name: 'vision',
            title: 'Visión',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Título', type: 'string' }),
                defineField({ name: 'description', title: 'Descripción', type: 'text' })
            ]
        }),
        defineField({
            name: 'valuesTitle',
            title: 'Título Sección Valores',
            type: 'string',
            initialValue: 'Lo que nos Define'
        }),
        defineField({
            name: 'valuesDescription',
            title: 'Descripción Sección Valores',
            type: 'text',
            rows: 2
        }),
        defineField({
            name: 'timelineTitle',
            title: 'Título Sección Historia',
            type: 'string',
            initialValue: 'Trayectoria'
        }),
        defineField({
            name: 'timelineItems',
            title: 'Items de Trayectoria',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'year', title: 'Año', type: 'string' }),
                    defineField({ name: 'title', title: 'Título', type: 'string' }),
                    defineField({ name: 'description', title: 'Descripción', type: 'text' })
                ]
            }]
        }),
        defineField({
            name: 'statsTitle',
            title: 'Título Sección Estadísticas',
            type: 'string',
            initialValue: 'Nuestra Experiencia en Números'
        }),
        defineField({
            name: 'stats',
            title: 'Estadísticas',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'value', title: 'Valor (ej. 17+)', type: 'string' }),
                    defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
                    defineField({
                        name: 'icon',
                        title: 'Icono',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Reloj', value: 'clock' },
                                { title: 'Camión', value: 'truck' },
                                { title: 'Grupo', value: 'users' },
                                { title: 'Mundo', value: 'globe' }
                            ]
                        }
                    })
                ]
            }]
        }),
        defineField({
            name: 'whyChooseUs',
            title: 'Sección Por Qué Elegirnos',
            type: 'object',
            fields: [
                defineField({ name: 'badge', title: 'Badge', type: 'string' }),
                defineField({ name: 'title', title: 'Título', type: 'string' }),
                defineField({ name: 'description', title: 'Descripción', type: 'text' }),
                defineField({
                    name: 'benefits',
                    title: 'Lista de Beneficios',
                    type: 'array',
                    of: [{ type: 'string' }]
                }),
                defineField({
                    name: 'image',
                    title: 'Imagen',
                    type: 'image',
                    options: { hotspot: true }
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: 'Página Nosotros',
                subtitle: title
            }
        }
    }
})
