import { MotionConfig, motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import GlassCard from '@/components/GlassCard.jsx';
import { fadeUp, scaleIn, staggerContainer } from '@/components/motionVariants.js';
import { experience } from '@/data/experience.js';

const revealOnce = { once: true, amount: 0.15 };

export default function Experience() {
  const { heading, items } = experience;

  return (
    <MotionConfig reducedMotion="user">
      <section id="experience" aria-labelledby="experience-heading" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2
            id="experience-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="text-4xl font-bold tracking-tight text-ink sm:text-5xl"
          >
            {heading}
          </motion.h2>

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="relative mt-14 space-y-10"
          >
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[19px] w-px bg-line sm:left-[23px]"
            />

            {items.map(({ id, role, company, location, period, responsibilities }) => (
              <motion.li key={id} variants={scaleIn} className="relative pl-14 sm:pl-16">
                <span className="absolute top-0 left-0 grid size-10 place-items-center rounded-full bg-accent-soft text-accent ring-4 ring-canvas sm:size-12">
                  <Briefcase size={18} aria-hidden="true" />
                </span>

                <GlassCard className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{role}</h3>
                    <p className="mt-1 font-medium text-accent">{company}</p>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={15} aria-hidden="true" />
                      {location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={15} aria-hidden="true" />
                      {period}
                    </span>
                  </div>

                  <ul role="list" className="space-y-2.5">
                    {responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>
    </MotionConfig>
  );
}
