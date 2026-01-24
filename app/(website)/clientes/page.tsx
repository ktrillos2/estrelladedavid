import { ClientsSection } from "@/components/home/clients-section"

import { sanityFetch } from "@/sanity/lib/fetch"
import { CLIENTS_QUERY, CLIENTS_PAGE_QUERY } from "@/sanity/lib/queries"

export default async function ClientesPage() {
  const clientsData = await sanityFetch({ query: CLIENTS_QUERY }) as any
  const pageData = await sanityFetch({ query: CLIENTS_PAGE_QUERY }) as any

  return (
    <main className="pt-20">
      <section className="relative py-20 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* We animate manually here since this is server component + motion inside client components usually, 
              but for text we can just render it. If motion is needed, we should extract a component. 
              For now keeping simple text rendering to match server component pattern or wrap in MotionDiv if needed. 
              The original file used motion.div directly. Let's keep it simple or use a client wrapper if we want animation.
              Given the original had animation, I'll assume we can use a client component wrapper or just static text for now to be safe with server components,
              OR we make this a server component and pass data to a client component.
              Wait, the original file had "use client".
              I removed "use client" to make it async/await for data fetching.
              I should probably create a separate ClientHero component if I want animation, or just render static content.
              Let's create a small client component for the hero part to keep animations.
          */}
          <ClientsHero title={pageData?.title || "Nuestros Clientes"} description={pageData?.description || "Empresas líderes que confían en nuestra excelencia y compromiso."} />
        </div>
      </section>

      <ClientsSection data={clientsData} showHeader={false} />
    </main>
  )
}

import { ClientsHero } from "@/components/clients-hero"
