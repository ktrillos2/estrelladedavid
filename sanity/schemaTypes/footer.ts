import { defineField, defineType } from 'sanity'

export const footer = defineType({
    name: 'footer',
    title: 'Pie de Página',
    type: 'document',
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
