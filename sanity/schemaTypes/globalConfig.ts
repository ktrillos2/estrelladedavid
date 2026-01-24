import { defineField, defineType } from 'sanity'

export const globalConfig = defineType({
    name: 'globalConfig',
    title: 'Configuración Global',
    type: 'document',
    fields: [
        defineField({
            name: 'header',
            title: 'Encabezado',
            type: 'object',
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
            ]
        }),
        defineField({
            name: 'footer',
            title: 'Pie de Página',
            type: 'object',
            fields: [
                defineField({
                    name: 'description',
                    title: 'Descripción',
                    type: 'text',
                    rows: 3
                }),
                defineField({
                    name: 'socialLinks',
                    title: 'Redes Sociales',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'platform',
                                    title: 'Plataforma',
                                    type: 'string',
                                    options: {
                                        list: [
                                            { title: 'Facebook', value: 'facebook' },
                                            { title: 'Instagram', value: 'instagram' },
                                            { title: 'LinkedIn', value: 'linkedin' },
                                            { title: 'WhatsApp', value: 'whatsapp' },
                                        ]
                                    }
                                }),
                                defineField({ name: 'url', title: 'URL', type: 'url' }),
                            ]
                        }
                    ]
                }),
                defineField({
                    name: 'contactInfo',
                    title: 'Información de Contacto',
                    type: 'object',
                    fields: [
                        defineField({ name: 'address', title: 'Dirección', type: 'string' }),
                        defineField({ name: 'phones', title: 'Teléfonos', type: 'array', of: [{ type: 'string' }] }),
                        defineField({ name: 'email', title: 'Email', type: 'string' }),
                    ]
                })
            ]
        })
    ]
})
