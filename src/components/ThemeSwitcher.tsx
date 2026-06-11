'use client';

import { useTheme } from 'next-themes';
import { Sparkles, Frown } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/** The old dark/light toggle, reborn: flips the site into "Boring Mode" —
    the generic template site every other agency would have built. */
export function ThemeSwitcher({ forceWhite }: { forceWhite?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isBoring = resolvedTheme === 'boring';

  if (!mounted) {
    return <div className="flex items-center space-x-2 h-6 w-[76px]"></div>;
  }

  return (
    <div className="flex items-center space-x-2" title="Boring Mode: see what every other agency would build">
      <Sparkles className={cn('h-5 w-5', forceWhite ? 'text-white' : 'text-foreground')} />
      <Switch
        id="boring-switch"
        checked={isBoring}
        onCheckedChange={(checked) => setTheme(checked ? 'boring' : 'dark')}
        aria-label="Toggle Boring Mode"
      />
      <Frown className={cn('h-5 w-5', forceWhite ? 'text-white' : 'text-foreground')} />
    </div>
  );
}
