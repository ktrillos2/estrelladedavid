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

export const HERO_QUERY = defineQuery(`
  *[_type == "hero"][0] {
    slides[] {
      _key,
      title,
      subtitle,
      description,
      alt,
      image {
        asset->{
          url,
          metadata {
            lqip
          }
        }
      },
      features
    }
  }
`);

export const ABOUT_QUERY = defineQuery(`
  *[_type == "about"][0] {
    image {
      asset->{
        url,
        metadata {
          lqip
        }
      }
    },
    experienceCount,
    experienceText,
    backgroundText,
    subtitle,
    title,
    mainText,
    secondaryText,
    features,
    ctaText,
  }
`);

export const VALUES_QUERY = defineQuery(`
  *[_type == "values"][0] {
    subtitle,
    title,
    description,
    valuesList[] {
      title,
      description,
      color,
      icon
    }
  }
`);

export const SERVICES_QUERY = defineQuery(`
  *[_type == "services"][0] {
    subtitle,
    title,
    description,
    servicesList[] {
      title,
      description,
      icon,
      link
    }
  }
`);

export const CLIENTS_QUERY = defineQuery(`
  *[_type == "clients"][0] {
    subtitle,
    title,
    description,
    clientsList[] {
      name,
      logo {
        asset->{
          url,
          metadata {
            lqip
          }
        }
      }
    }
  }
`);

export const CLIENTS_PAGE_QUERY = defineQuery(`
  *[_type == "clientsPage"][0] {
    title,
    description
  }
`);

export const CONTACT_PAGE_QUERY = defineQuery(`
  *[_type == "contactPage"][0] {
    title,
    description,
    formTitle,
    infoTitle,
    mapUrl
  }
`);

export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_type == "aboutPage"][0] {
    title,
    description,
    mission,
    vision,
    valuesTitle,
    valuesDescription,
    timelineTitle,
    timelineItems,
    statsTitle,
    stats,
    whyChooseUs {
      ...,
      image { asset-> { url } }
    }
  }
`);

export const SERVICE_QUERY = defineQuery(`
  *[_type == "service" && slug.current == $slug][0] {
    title,
    hero {
      ...,
      image { asset-> { url, metadata { lqip } } }
    },
    intro,
    features,
    contentSection {
      ...,
      image { asset-> { url, metadata { lqip } } }
    },
    extraSection,
    cta
  }
`);
