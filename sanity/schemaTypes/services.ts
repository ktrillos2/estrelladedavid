import { defineField, defineType } from 'sanity'

export const services = defineType({
    name: 'services',
    title: 'Sección Servicios (Inicio)',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Subtítulo (Píldora)',
            type: 'string',
            description: 'Ej: Nuestros Servicios',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: Transporte para Todo Tipo de Eventos',
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
            name: 'servicesList',
            title: 'Lista de Servicios',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Título del Servicio',
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
                            name: 'icon',
                            title: 'Icono',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Edificio/Cultural (Library)', value: 'library' },
                                    { title: 'Graduación/Escolar (GraduationCap)', value: 'graduation' },
                                    { title: 'Música/Fiesta (Music)', value: 'music' },
                                    { title: 'Maletín/Corporativo (Briefcase)', value: 'briefcase' },
                                    { title: 'Autobús (Truck)', value: 'truck' },
                                    { title: 'Calendario (Calendar)', value: 'calendar' },
                                    { title: 'Usuarios (Users)', value: 'users' },
                                ]
                            },
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'link',
                            title: 'Enlace (Redirección)',
                            type: 'string',
                            description: 'Ej: /servicios/eventos-y-convenciones',
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
                title: 'Sección Servicios',
                subtitle: title || subtitle
            }
        }
    }
})
