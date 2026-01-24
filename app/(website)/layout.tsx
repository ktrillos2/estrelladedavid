import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { sanityFetch } from "@/sanity/lib/fetch"
import { GLOBAL_CONFIG_QUERY } from "@/sanity/lib/queries"

export default async function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const globalConfig = await sanityFetch({ query: GLOBAL_CONFIG_QUERY }) as { header?: any; footer?: any }

    return (
        <>
            <Header data={globalConfig?.header} />
            {children}
            <Footer data={globalConfig?.footer} />
            <WhatsAppButton />
        </>
    )
}
