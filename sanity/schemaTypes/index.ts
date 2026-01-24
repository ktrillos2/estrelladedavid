import { type SchemaTypeDefinition } from 'sanity'
import { header } from './header'
import { footer } from './footer'
import { settings } from './settings'
import { hero } from './hero'
import { about } from './about'
import { values } from './values'
import { services } from './services'
import { clients } from './clients'
import { clientsPage } from './clientsPage'
import { contactPage } from './contactPage'
import { aboutPage } from './aboutPage'

import { service } from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer, settings, hero, about, aboutPage, values, services, clients, clientsPage, contactPage, service],
}
