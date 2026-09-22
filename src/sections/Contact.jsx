import { MotionConfig, motion } from 'framer-motion';
import { Globe, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import GlassCard from '@/components/GlassCard.jsx';
import { fadeUp, scaleIn, staggerContainer } from '@/components/motionVariants.js';
import { contact } from '@/data/contact.js';

const ICONS = {
  email: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  portfolio: Globe,
  location: MapPin,
};

const revealOnce = { once: true, amount: 0.15 };

export default function Contact() {
  const { heading, subheading, cards } = contact;

  return (
    <MotionConfig reducedMotion="user">
      <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2
            id="contact-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="text-4xl font-bold tracking-tight text-balance text-ink sm:text-5xl"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {subheading}
          </motion.p>

          <motion.ul
            role="list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map(({ id, label, value, href }) => {
              const Icon = ICONS[id];
              const isExternal = Boolean(href) && href.startsWith('http');
              const cardBody = (
                <GlassCard variants={scaleIn} className="flex h-full items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block truncate font-medium text-ink">{value}</span>
                  </span>
                </GlassCard>
              );

              return (
                <li key={id}>
                  {href ? (
                    <a
                      href={href}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="block rounded-2xl"
                    >
                      {cardBody}
                      {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  ) : (
                    cardBody
                  )}
                </li>
              );
            })}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealOnce}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-10"
          >
            <GlassCard>
              <h3 className="text-lg font-semibold tracking-tight text-ink">Send a message</h3>
              <div className="mt-5">
                <ContactForm />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
