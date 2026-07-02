import { buildEntityGraph } from '@/lib/schema';

/**
 * Site-wide entity knowledge graph (Organization + LocalBusiness + WebSite +
 * founder Person), all linked by @id. Render exactly once, in the root layout.
 *
 * Plain <script> (not next/script): next/script injects after hydration, so
 * non-JS crawlers — including the AI crawlers robots.txt invites — never saw
 * the schema. This emits it in the initial server-rendered HTML.
 */
export function SiteSchema() {
    const graph = buildEntityGraph();

    return (
        <script
            id="site-entity-graph"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
}
