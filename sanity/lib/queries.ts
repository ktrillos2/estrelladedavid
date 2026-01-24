import { defineQuery } from "next-sanity";



export const GLOBAL_CONFIG_QUERY = defineQuery(`
  {
    "header": *[_type == "header"][0] {
      logo { asset->{url} },
      topBar,
      navigation
    },
    "footer": *[_type == "footer"][0] {
      logo { asset->{url} },
      description,
      socialLinks,
      contactInfo
    },
    "settings": *[_type == "settings"][0] {
      whatsappNumber,
      seo
    }
  }
`);
