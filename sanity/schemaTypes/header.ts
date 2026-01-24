import { defineField, defineType } from 'sanity'

export const header = defineType({
    name: 'header',
    title: 'Encabezado',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'topBar',
            title: 'Barra Superior',
            type: 'object',
            fields: [
                defineField({ name: 'phone', title: 'Teléfono', type: 'string' }),
                defineField({ name: 'email', title: 'Email', type: 'string' }),
                defineField({ name: 'whatsapp', title: 'WhatsApp', type: 'string' }),
            ]
        }),
        defineField({
            name: 'navigation',
            title: 'Navegación',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
                        defineField({ name: 'href', title: 'Enlace', type: 'string' }),
                        defineField({
                            name: 'subItems',
                            title: 'Sub-items (Dropdown)',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
                                        defineField({ name: 'href', title: 'Enlace', type: 'string' }),
                                    ]
                                }
                            ]
                        })
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Configuración de Encabezado'
            }
        }
    }
})
