/* ─── Team / Staff ───
   Single source of truth for the staff collage shown on the homepage and
   landing pages. Headshots live in /public. */

export interface StaffMember {
  name: string;
  role: string;
  image: string;
  /** Optional object-position for awkward crops. */
  objectPosition?: string;
}

export const staff: StaffMember[] = [
  { name: 'Trevor Ruby', role: 'Founder', image: '/trevorruby.jpeg' },
  { name: 'Reece Roberts', role: 'Head of Search & GEO', image: '/reese-roberts.jpeg' },
  { name: 'Thomas Dombrowski', role: 'Client Relations', image: '/thomas-dombrowski.jpeg', objectPosition: 'center 10%' },
];
