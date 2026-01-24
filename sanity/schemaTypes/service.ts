import { defineField, defineType } from 'sanity'
import { Briefcase, Calendar, Truck, Library, GraduationCap, Music, Users, Globe, MapPin, Building, Clock, FileText, CheckCircle, Shield } from 'lucide-react'

export const service = defineType({
    name: 'service',
    title: 'Servicio',
    type: 'document',
    icon: Briefcase,
    fields: [
        defineField({
            name: 'title',
            title: 'Título del Servicio',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'hero',
            title: 'Sección Hero',
            type: 'object',
            fields: [
                defineField({
                    name: 'image',
                    title: 'Imagen de Fondo',
                    type: 'image',
                    options: { hotspot: true },
                }),
                defineField({
                    name: 'badge',
                    title: 'Badge (Texto Superior)',
                    type: 'string',
                }),
                defineField({
                    name: 'title',
                    title: 'Título',
                    type: 'string',
                }),
                defineField({
                    name: 'description',
                    title: 'Descripción',
                    type: 'text',
                }),
            ]
        }),
        defineField({
            name: 'intro',
            title: 'Sección de Introducción',
            type: 'object',
            fields: [
                defineField({
                    name: 'badge',
                    title: 'Badge',
                    type: 'string',
                }),
                defineField({
                    name: 'title',
                    title: 'Título',
                    type: 'string',
                }),
                defineField({
                    name: 'description',
                    title: 'Descripción',
                    type: 'text',
                }),
            ]
        }),
        defineField({
            name: 'features',
            title: 'Grid de Características',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'Icono',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Edificio/Oficina', value: 'building' },
                                    { title: 'Documento', value: 'document' },
                                    { title: 'Camión/Vehículo', value: 'truck' },
                                    { title: 'Soporte', value: 'support' },
                                    { title: 'Mundo', value: 'globe' },
                                    { title: 'Ubicación', value: 'location' },
                                    { title: 'Reloj', value: 'clock' },
                                    { title: 'Biblioteca/Cultura', value: 'library' },
                                    { title: 'Graduación', value: 'graduation' },
                                    { title: 'Música', value: 'music' },
                                    { title: 'Grupo', value: 'users' },
                                ]
                            }
                        }),
                        defineField({
                            name: 'title',
                            title: 'Título',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Descripción',
                            type: 'text',
                        }),
                        defineField({
                            name: 'color',
                            title: 'Color del Gradiente',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Ambar-Amarillo', value: 'from-amber-500 to-yellow-400' },
                                    { title: 'Naranja-Ambar', value: 'from-orange-500 to-amber-400' },
                                    { title: 'Amarillo-Ambar', value: 'from-yellow-500 to-amber-300' },
                                    { title: 'Verde-Esmeralda', value: 'from-green-500 to-emerald-400' },
                                ]
                            }
                        }),
                    ]
                }
            ]
        }),
        defineField({
            name: 'contentSection',
            title: 'Sección de Contenido (Imagen Izq/Der)',
            type: 'object',
            fields: [
                defineField({
                    name: 'image',
                    title: 'Imagen',
                    type: 'image',
                    options: { hotspot: true },
                }),
                defineField({
                    name: 'badge',
                    title: 'Badge',
                    type: 'string',
                }),
                defineField({
                    name: 'title',
                    title: 'Título',
                    type: 'string',
                }),
                defineField({
                    name: 'content',
                    title: 'Contenido',
                    type: 'array',
                    of: [{ type: 'block' }]
                }),
                defineField({
                    name: 'stats',
                    title: 'Estadística Flotante',
                    type: 'object',
                    fields: [
                        defineField({ name: 'value', type: 'string', title: 'Valor (ej. 100+)' }),
                        defineField({ name: 'label', type: 'string', title: 'Etiqueta (ej. Eventos)' }),
                    ]
                })
            ]
        }),
        defineField({
            name: 'extraSection',
            title: 'Sección Extra (Flota/Beneficios)',
            type: 'object',
            fields: [
                defineField({
                    name: 'type',
                    title: 'Tipo de Sección',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Grid de Tarjetas (Flota)', value: 'grid' },
                            { title: 'Lista Simple (Beneficios)', value: 'list' }
                        ]
                    }
                }),
                defineField({
                    name: 'badge',
                    title: 'Badge',
                    type: 'string',
                }),
                defineField({
                    name: 'title',
                    title: 'Título',
                    type: 'string',
                }),
                defineField({
                    name: 'description',
                    title: 'Descripción',
                    type: 'text',
                }),
                defineField({
                    name: 'items',
                    title: 'Items',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'value', type: 'string', title: 'Valor/Capacidad (Solo Grid)' }),
                                defineField({ name: 'title', type: 'string', title: 'Título/Tipo' }),
                                defineField({ name: 'description', type: 'string', title: 'Descripción/Subtítulo' }),
                                defineField({ name: 'subtitle', type: 'string', title: 'Subtítulo pequeño (Solo Grid)' }),
                            ]
                        }
                    ]
                })
            ]
        }),
        defineField({
            name: 'cta',
            title: 'Sección CTA Final',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Título',
                    type: 'string',
                }),
                defineField({
                    name: 'description',
                    title: 'Descripción',
                    type: 'text',
                }),
                defineField({
                    name: 'buttonText',
                    title: 'Texto del Botón',
                    type: 'string',
                })
            ]
        })
    ],
})
