import { defineField, defineType } from 'sanity'

export const clientsPage = defineType({
    name: 'clientsPage',
    title: 'Página Clientes',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: Nuestros Clientes',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 2,
            description: 'Ej: Empresas líderes que confían en nuestra excelencia y compromiso.',
            validation: (Rule) => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: 'Página Clientes',
                subtitle: title
            }
        }
    }
})
