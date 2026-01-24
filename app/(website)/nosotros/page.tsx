import { sanityFetch } from "@/sanity/lib/fetch"
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries"
import { AboutContent } from "@/components/about/about-content"

export default async function NosotrosPage() {
  const pageData = await sanityFetch({ query: ABOUT_PAGE_QUERY }) as any

  return (
    <main>
      <AboutContent data={pageData} />
    </main>
  )
}
