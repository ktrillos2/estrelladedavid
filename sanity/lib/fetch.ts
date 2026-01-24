import "server-only";
import { defineQuery } from "next-sanity";
import { client } from "./client";

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
}: {
    query: string;
    params?: Record<string, any>;
}): Promise<QueryResponse> {
    return client.fetch<QueryResponse>(query, params, {
        next: { revalidate: 0 }, // For dev; use cached in prod or tags
    });
}
