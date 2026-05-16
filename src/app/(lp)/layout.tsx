/* Landing page route group — no html/body here; 
   the root layout handles that. This nested layout 
   exists only for LP-specific metadata defaults. */

export default function LPRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
