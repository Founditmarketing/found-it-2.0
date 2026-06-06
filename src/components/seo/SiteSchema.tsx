import Script from 'next/script';
import { buildEntityGraph } from '@/lib/schema';

/**
 * Site-wide entity knowledge graph (Organization + LocalBusiness + WebSite +
 * founder Person), all linked by @id. Render exactly once, in the root layout.
 */
export function SiteSchema() {
    const graph = buildEntityGraph();

    return (
        <Script
            id="site-entity-graph"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
}
