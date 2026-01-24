import { defineField, defineType } from 'sanity'

export const values = defineType({
    name: 'values',
    title: 'Sección Valores (Inicio)',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Subtítulo (Píldora)',
            type: 'string',
            description: 'Ej: Nuestros Valores',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: Lo que nos Define',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Descripción General',
            type: 'text',
            rows: 2,
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'valuesList',
            title: 'Lista de Valores',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Título del Valor',
                            type: 'string',
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'description',
                            title: 'Descripción',
                            type: 'text',
                            rows: 3,
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'color',
                            title: 'Color (Hex)',
                            type: 'string',
                            description: 'Ej: #F59E0B',
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icono',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Reloj (Puntualidad)', value: 'clock' },
                                    { title: 'Escudo (Seguridad)', value: 'shield' },
                                    { title: 'Destellos (Comodidad)', value: 'sparkles' }
                                ]
                            },
                            validation: (Rule) => Rule.required()
                        })
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle'
        },
        prepare({ title, subtitle }) {
            return {
                title: 'Sección Valores',
                subtitle: title || subtitle
            }
        }
    }
})
