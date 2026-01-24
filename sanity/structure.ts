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
      // Home Page
      S.listItem()
        .title('Página de Inicio')
        .child(
          S.list()
            .title('Secciones Inicio')
            .items([
              S.listItem()
                .title('Slider Principal')
                .child(
                  S.document()
                    .schemaType('hero')
                    .documentId('hero')
                ),
              S.listItem()
                .title('Sección Sobre Nosotros')
                .child(
                  S.document()
                    .schemaType('about')
                    .documentId('about')
                ),
              S.listItem()
                .title('Sección Valores')
                .child(
                  S.document()
                    .schemaType('values')
                    .documentId('values')
                ),
              S.listItem()
                .title('Sección Servicios')
                .child(
                  S.document()
                    .schemaType('services')
                    .documentId('services')
                ),
              S.listItem()
                .title('Sección Clientes')
                .child(
                  S.document()
                    .schemaType('clients')
                    .documentId('clients')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Página Clientes')
        .child(
          S.document()
            .schemaType('clientsPage')
            .documentId('clientsPage')
        ),
      S.divider(),
      S.listItem()
        .title('Página Nosotros')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.divider(),
      S.listItem()
        .title('Página Contacto')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      S.divider(),
      S.listItem()
        .title('Páginas de Servicios')
        .child(
          S.documentTypeList('service')
            .title('Servicios')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['header', 'footer', 'settings', 'hero', 'about', 'aboutPage', 'values', 'services', 'clients', 'clientsPage', 'contactPage', 'service'].includes(item.getId()!)
      ),
    ])
