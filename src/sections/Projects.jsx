import { MotionConfig, motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard.jsx';
import { fadeUp, staggerContainer } from '@/components/motionVariants.js';
import { projects } from '@/data/projects.js';

const revealOnce = { once: true, amount: 0.1 };

export default function Projects() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="projects" aria-labelledby="projects-heading" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            id="projects-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="text-4xl font-bold tracking-tight text-ink sm:text-5xl"
          >
            Featured Projects
          </motion.h2>

          <motion.ul
            role="list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}
