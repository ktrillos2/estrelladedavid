import { sanityFetch } from "@/sanity/lib/fetch"
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries"
import { ContactContent } from "@/components/contact/contact-content"

export default async function ContactoPage() {
  const pageData = await sanityFetch({ query: CONTACT_PAGE_QUERY }) as any

  return (
    <main>
      {/* Using a Client Component for the content to keep animations working smoothly */}
      <ContactContent
        data={pageData}
      />
    </main>
  )
}
