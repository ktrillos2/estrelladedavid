import { defineField, defineType } from 'sanity'

export const about = defineType({
    name: 'about',
    title: 'Sección Sobre Nosotros (Inicio)',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Imagen Principal',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'experienceCount',
            title: 'Años de Experiencia (Número)',
            type: 'string',
            description: 'Ej: 15+',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'experienceText',
            title: 'Texto Experiencia',
            type: 'string',
            description: 'Ej: Años de Experiencia',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'backgroundText',
            title: 'Texto de Fondo (Grande)',
            type: 'string',
            description: 'Ej: ABOUT',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtítulo (Dorado)',
            type: 'string',
            description: 'Ej: Sobre Nosotros',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: EXCELENCIA EN MOVILIDAD CORPORATIVA',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'mainText',
            title: 'Texto Principal (Destacado)',
            type: 'text',
            rows: 2,
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'secondaryText',
            title: 'Texto Secundario',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'features',
            title: 'Características (Lista)',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(1)
        }),
        defineField({
            name: 'ctaText',
            title: 'Texto Botón',
            type: 'string',
            description: 'Ej: Conoce Nuestra Historia',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'ctaLink',
            title: 'Enlace Botón',
            type: 'string',
            description: 'Ej: /nosotros',
            validation: (Rule) => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image'
        },
        prepare({ title, subtitle, media }) {
            return {
                title: 'Sección Sobre Nosotros',
                subtitle: title,
                media: media
            }
        }
    }
})
