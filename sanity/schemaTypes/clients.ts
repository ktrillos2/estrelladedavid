import { defineField, defineType } from 'sanity'

export const clients = defineType({
    name: 'clients',
    title: 'Sección Clientes (Inicio)',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Subtítulo (Píldora)',
            type: 'string',
            description: 'Ej: Clientes Destacados',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: Empresas que Confían en Nosotros',
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
            name: 'clientsList',
            title: 'Lista de Clientes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Nombre del Cliente',
                            type: 'string',
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'logo',
                            title: 'Logo',
                            type: 'image',
                            options: { hotspot: true },
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
                title: 'Sección Clientes',
                subtitle: title || subtitle
            }
        }
    }
})
