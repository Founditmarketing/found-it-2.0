/* ─── Client Reviews ───
   Single source of truth for testimonials / Google reviews shown across the
   site. To add more, paste new entries here (or wire the Google Places API
   to populate this list automatically). */

export interface Review {
  id: number;
  name: string;
  /** Source label, e.g. 'Google Review - 5 Stars' */
  title: string;
  quote: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Byron',
    title: 'National Equipment Dealer',
    quote:
      'We started out as a small group. We never intended to grow as big as we have. It’s been 9 years plus with Found It, and they turned us into a major volume dealer throughout the United States simply by using their service.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Tyler Griffin',
    title: 'Google Review',
    quote:
      "I’ve worked with marketing agencies before, and Found It Marketing stands out in every way. They don't just run ads or “do SEO” — they actually take the time to understand your business, your goals, and what will move the needle. Communication is clear, consistent, and honest. No fluff, no excuses, just real strategy and execution.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Smith Lake Rentals and Sales',
    title: 'Google Review',
    quote:
      'I almost never leave reviews, but after only a week of working with this company, they absolutely earned a five-star review. I am so glad to have this team managing my marketing. They are extremely responsive and use a great app that makes collaboration and communication seamless.',
    rating: 5,
  },
  {
    id: 4,
    name: 'A C',
    title: 'Google Review',
    quote:
      'Trevor convinced me to sign up for his SEO company when I didnt know what SEO was and he put my business at the top of Google. He did what he said he would do and now I call him my friend. Great company.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Emanuele Romiti',
    title: 'Google Review',
    quote:
      'Trevor is fast and efficient, he is available any time of the day and very interested on the well performing marketing actions he takes for the business.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Cory Chandler',
    title: 'Google Review',
    quote: 'Been working with them for years. Anytime we need something, they are right on it.',
    rating: 5,
  },
];
