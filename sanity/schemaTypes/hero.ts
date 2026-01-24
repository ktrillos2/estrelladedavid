import { defineField, defineType } from 'sanity'

export const hero = defineType({
    name: 'hero',
    title: 'Sección Hero (Inicio)',
    type: 'document',
    fields: [
        defineField({
            name: 'slides',
            title: 'Diapositivas',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image',
                            title: 'Imagen de Fondo',
                            type: 'image',
                            options: { hotspot: true },
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Texto Alternativo (Imagen)',
                            type: 'string',
                            description: 'Descripción para accesibilidad y SEO',
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'subtitle',
                            title: 'Subtítulo (Píldora dorada)',
                            type: 'string',
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'title',
                            title: 'Título Principal',
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
                            name: 'features',
                            title: 'Características (Iconos)',
                            type: 'array',
                            of: [{ type: 'string' }],
                            validation: (Rule) => Rule.max(3)
                        })
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            items: 'slides'
        },
        prepare({ items }) {
            const count = items ? items.length : 0
            return {
                title: 'Slider Principal',
                subtitle: `${count} diapositiva${count !== 1 ? 's' : ''}`,
                media: items && items[0]?.image // Use the first slide's image as preview
            }
        }
    }
})
