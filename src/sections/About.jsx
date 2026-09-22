import { MotionConfig, motion } from 'framer-motion';
import { Briefcase, Code, MapPin, FolderCode } from 'lucide-react';
import GlassCard from '@/components/GlassCard.jsx';
import { fadeUp, scaleIn, staggerContainer } from '@/components/motionVariants.js';
import { about } from '@/data/about.js';

const ICONS = {
  location: MapPin,
  role: Code,
  experience: Briefcase,
  projects: FolderCode,
};

const infoCards = about.infoCards.map((card) => ({ ...card, icon: ICONS[card.id] }));

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="about" aria-labelledby="about-heading" className="py-24 sm:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16"
        >
          <div>
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-ink sm:text-5xl"
            >
              {about.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {about.description}
            </motion.p>
          </div>

          <ul role="list" aria-label="Quick facts" className="grid gap-4 sm:grid-cols-2">
            {infoCards.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <GlassCard variants={scaleIn} className="flex h-full items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="font-medium text-ink">{label}</span>
                </GlassCard>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
