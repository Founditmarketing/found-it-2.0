'use client';

import { useEffect, useState } from 'react';

/* Shared personalization: city comes from the edge geo cookie set by
   middleware; industry comes from the ?industry= campaign URL param.
   Both resolve after mount, so initial render always matches SSR. */

export const INDUSTRY_NAMES: Record<string, string> = {
  medical: 'Medical Practices',
  contractors: 'Contractors',
  dealerships: 'Dealerships',
  retail: 'Retail Stores',
  realtors: 'Real Estate Agents',
  lawyers: 'Law Firms',
};

export function usePersonalization() {
  const [city, setCity] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);

  useEffect(() => {
    const m = document.cookie.match(/(?:^|;\s*)fi_city=([^;]+)/);
    if (m) {
      try { setCity(decodeURIComponent(m[1])); } catch { /* ignore */ }
    }
    const param = new URLSearchParams(window.location.search).get('industry');
    if (param && INDUSTRY_NAMES[param.toLowerCase()]) {
      setIndustry(INDUSTRY_NAMES[param.toLowerCase()]);
    }
  }, []);

  return { city, industry };
}
