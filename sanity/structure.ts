import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Gestionar Contenido')
    .items([
      S.listItem()
        .title('Global')
        .child(
          S.list()
            .title('Elementos Globales')
            .items([
              S.listItem()
                .title('Encabezado')
                .child(
                  S.document()
                    .schemaType('header')
                    .documentId('header')
                ),
              S.listItem()
                .title('Pie de Página')
                .child(
                  S.document()
                    .schemaType('footer')
                    .documentId('footer')
                ),
              S.listItem()
                .title('Configuraciones Generales')
                .child(
                  S.document()
                    .schemaType('settings')
                    .documentId('settings')
                ),
            ])
        ),
      // Add more lists here for Pages (Home, About, etc.)
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['header', 'footer', 'settings'].includes(item.getId()!)
      ),
    ])
