import { sanityFetch } from "@/sanity/lib/fetch"
import { SERVICE_QUERY } from "@/sanity/lib/queries"
import { ServiceContent } from "@/components/service/service-content"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata(
    props: Props,
): Promise<Metadata> {
    const params = await props.params;
    const data = await sanityFetch<any>({
        query: SERVICE_QUERY,
        params: { slug: params.slug }
    })

    if (!data) {
        return {
            title: "Servicio no encontrado",
        }
    }

    return {
        title: `${data.title} | Estrella de David`,
        description: data.hero?.description || data.intro?.description,
    }
}

export default async function ServicePage(props: Props) {
    const params = await props.params;
    const data = await sanityFetch<any>({
        query: SERVICE_QUERY,
        params: { slug: params.slug }
    })

    if (!data) {
        notFound()
    }

    return <ServiceContent data={data} />
}
