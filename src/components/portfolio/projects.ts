/* ─── Portfolio: real client builds ───
   Extracted from the retired /web-development gallery (src/app/web-development/client.tsx).
   Names, categories, live URLs, and screenshots are all real — never add an
   entry without a live site and a screenshot in public/images/projects/. */

export interface PortfolioProject {
  client: string;
  category: string;
  url: string;
  image: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    client: 'Weiss Goldring',
    category: 'Apparel',
    url: 'https://www.weissgoldring.com',
    image: '/images/projects/weissgoldring.png',
  },
  {
    client: 'Pop-A-Lock',
    category: 'Services',
    url: 'https://pop-a-lock.vercel.app/',
    image: '/images/projects/pop-a-lock-v2.png',
  },
  {
    client: 'Cave Wave Car Wash',
    category: 'Car Wash',
    url: 'https://www.cavewavecarwash.com',
    image: '/images/projects/cavewavecarwash.png',
  },
  {
    client: 'Matteo Perin',
    category: 'Apparel',
    url: 'https://www.matteoperin.com',
    image: '/images/projects/matteoperin.png',
  },
  {
    client: 'DP Contractors',
    category: 'HVAC',
    url: 'https://dp-contractors.vercel.app/',
    image: '/images/projects/dp-contractors-v2.png',
  },
  {
    client: 'Southern Longview Auto',
    category: 'Automotive',
    url: 'https://southern-longview-auto.vercel.app/',
    image: '/images/projects/southern-longview-auto-v2.png',
  },
  {
    client: 'Elite Seamless',
    category: 'Contracting',
    url: 'https://elite-seamless.vercel.app/',
    image: '/images/projects/elite-seamless-v2.png',
  },
  {
    client: 'Work Truck One',
    category: 'Automotive',
    url: 'https://work-truck-one.vercel.app/',
    image: '/images/projects/work-truck-one.png',
  },
  {
    client: 'Last Wild River',
    category: 'Conservation',
    url: 'https://last-wild-river.vercel.app/',
    image: '/images/projects/last-wild-river.png',
  },
  {
    client: 'Status',
    category: 'HVAC',
    url: 'https://status-4593.vercel.app/',
    image: '/images/projects/status-4593.png',
  },
  {
    client: 'Griffen',
    category: 'Clinic',
    url: 'https://griffen.vercel.app/',
    image: '/images/projects/griffen.png',
  },
  {
    client: 'Insight',
    category: 'Business',
    url: 'https://new-insight.vercel.app/',
    image: '/images/projects/new-insight.png',
  },
];
