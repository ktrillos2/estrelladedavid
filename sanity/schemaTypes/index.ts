import { type SchemaTypeDefinition } from 'sanity'
import { header } from './header'
import { footer } from './footer'
import { settings } from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer, settings],
}
