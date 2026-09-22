import { Helmet } from 'react-helmet-async';
import { contact } from '@/data/contact.js';
import { profile } from '@/data/profile.js';
import { DEFAULT_IMAGE, SITE_URL } from '@/data/seo.js';

const emailCard = contact.cards.find((card) => card.id === 'email');

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  jobTitle: 'Software Developer',
  description: profile.hero.description,
  email: emailCard?.value,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wayanad',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'SNDP Yogam Arts & Science College',
  },
  sameAs: [profile.links.github, profile.links.linkedin],
};

export default function PersonSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
}
