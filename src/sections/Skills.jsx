import { MotionConfig, motion } from 'framer-motion';
import { Blocks, Braces, CloudUpload, Database, Globe, Server, Wrench } from 'lucide-react';
import GlassCard from '@/components/GlassCard.jsx';
import { fadeUp, scaleIn, staggerContainer } from '@/components/motionVariants.js';
import { skills } from '@/data/skills.js';

const ICONS = {
  languages: Braces,
  web: Globe,
  backend: Server,
  databases: Database,
  tools: Wrench,
  concepts: Blocks,
};

const categories = skills.categories.map((category) => ({ ...category, icon: ICONS[category.id] }));

const revealOnce = { once: true, amount: 0.15 };

export default function Skills() {
  const { heading, deployment } = skills;

  return (
    <MotionConfig reducedMotion="user">
      <section id="skills" aria-labelledby="skills-heading" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            id="skills-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="text-4xl font-bold tracking-tight text-ink sm:text-5xl"
          >
            {heading}
          </motion.h2>

          <motion.ul
            role="list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="mt-12 grid gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map(({ id, title, items, icon: Icon }) => (
              <li key={id}>
                <GlassCard variants={scaleIn} className="flex h-full flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
                  </div>

                  <ul role="list" className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line bg-black/[0.03] px-3 py-1 text-sm text-ink dark:bg-white/[0.06]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:gap-6"
          >
            <motion.h3
              variants={fadeUp}
              className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight text-ink"
            >
              <CloudUpload size={20} aria-hidden="true" className="text-accent" />
              {deployment.title}
            </motion.h3>

            <ul role="list" className="flex flex-wrap gap-2">
              {deployment.items.map((name) => (
                <motion.li
                  key={name}
                  variants={scaleIn}
                  className="rounded-full border border-line bg-white/70 px-4 py-1.5 text-sm font-medium text-ink backdrop-blur-xl dark:bg-white/[0.05]"
                >
                  {name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
