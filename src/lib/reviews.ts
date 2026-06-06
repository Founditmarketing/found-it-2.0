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
    name: 'Smith Lake Rentals & Sales',
    title: 'Google Review',
    quote:
      'I almost never leave reviews, but after only a week of working with this company, they absolutely earned a five-star review. I am so glad to have this team managing my marketing. They are extremely responsive and use a great app that makes collaboration and communication seamless.',
    rating: 5,
  },
  {
    id: 4,
    name: 'A. C.',
    title: 'Google Review',
    quote:
      'Trevor convinced me to sign up for his SEO company when I didn’t know what SEO was and he put my business at the top of Google. He did what he said he would do and now I call him my friend. Great company.',
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
  {
    id: 7,
    name: 'David Roshto',
    title: 'Google Review',
    quote: 'Excellent marketing company. Several reasons, but number 1 is results. Trevor got my phone ringing.',
    rating: 5,
  },
  {
    id: 8,
    name: 'William Whiddon',
    title: 'Google Review',
    quote:
      'Great people to work with. If you want the best targeted marketing team, choose Found It. A+ knowledge on how to grow your small business.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Santos Mendez',
    title: 'Google Review',
    quote: 'Great customer service. So many more clients, and the website looks amazing. Thank you Trevor and the team!',
    rating: 5,
  },
  {
    id: 10,
    name: 'Creighton Harmon',
    title: 'Google Review',
    quote:
      'He moves fast, communicates well, and delivers results. Their marketing and design have helped our business grow significantly.',
    rating: 5,
  },
  {
    id: 11,
    name: 'Donald Ruby',
    title: 'Google Review',
    quote: 'The Found It team is great to work with, and the website and videos are professional!',
    rating: 5,
  },
  {
    id: 12,
    name: "Everything's Albright",
    title: 'Google Review',
    quote:
      'Absolutely amazing company to work with. They laid out all of the steps from point A to B, set realistic expectations, and communicated well.',
    rating: 5,
  },
  {
    id: 13,
    name: 'Justin Morgan',
    title: 'Google Review',
    quote:
      'Website came out great, actually better than I imagined! The process from start to finish was easy and smooth.',
    rating: 5,
  },
  {
    id: 14,
    name: 'Angela',
    title: 'Google Review',
    quote:
      'Professional, responsive, and they truly listened to our vision. They delivered quality work and helped bring our ideas to life. Highly recommend!',
    rating: 5,
  },
  {
    id: 15,
    name: 'Boo Wilkerson',
    title: 'Area Wide Paving',
    quote: 'Great website rework and marketing for Area Wide Paving.',
    rating: 5,
  },
  {
    id: 16,
    name: 'Ironclad',
    title: 'Google Review',
    quote:
      'These guys really know their SEO, and they handle everything: websites, Google, and Facebook. Very affordable for the quality of work. Highly recommend.',
    rating: 5,
  },
  {
    id: 17,
    name: 'Reddirt Mahindra',
    title: 'Google Review',
    quote:
      'A game-changer for my business. They took the time to understand my goals, my industry, and my customers, and built something that fit, not a cookie-cutter solution.',
    rating: 5,
  },
  {
    id: 18,
    name: 'Sky',
    title: 'Google Review',
    quote:
      'The guys over at Found It Marketing are great — they come to me directly to make sure I’m taken care of and issues are solved.',
    rating: 5,
  },
];
