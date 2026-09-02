'use client';

import { useEffect } from 'react';

/* Native-app shell for /drive on phones (Trevor 9/2: "it needs to look like
   and feel like a native app"): tag the body so globals.css can hide the
   site header and the Ask Trevor launcher under sm — the machine owns the
   screen. Desktop keeps the normal site chrome. */
export function DriveAppMode() {
  useEffect(() => {
    document.body.classList.add('drive-app');
    return () => document.body.classList.remove('drive-app');
  }, []);
  return null;
}
