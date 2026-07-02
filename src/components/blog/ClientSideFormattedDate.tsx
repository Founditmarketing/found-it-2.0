// Renders a blog post date. Formatting is deterministic (fixed en-US locale +
// UTC time zone), so the server and client always produce the same string —
// no hydration mismatch, and the date is present in the initial HTML for
// users without JavaScript and for crawlers.
//
// Post dates are stored as 'YYYY-MM-DD', which Date parses as UTC midnight;
// formatting in UTC keeps the calendar day correct in every viewer timezone.
export function ClientSideFormattedDate({ dateString }: { dateString: string }) {
  return (
    <>
      {new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      })}
    </>
  );
}
