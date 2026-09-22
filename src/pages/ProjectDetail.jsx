import { Link, useParams } from 'react-router';
import { MotionConfig, motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  GalleryHorizontal,
  Info,
  Layers,
  Lightbulb,
  ListChecks,
  Puzzle,
  Target,
} from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons.jsx';
import ProjectMedia from '@/components/ProjectMedia.jsx';
import Seo from '@/components/Seo.jsx';
import { fadeUp, staggerContainer } from '@/components/motionVariants.js';
import { projects } from '@/data/projects.js';
import { SITE_URL } from '@/data/seo.js';

function SectionHeading({ icon: Icon, title }) {
  return (
    <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-ink">
      <Icon size={20} aria-hidden="true" className="text-accent" />
      {title}
    </h2>
  );
}

function TextSection({ icon, title, text }) {
  return (
    <div>
      <SectionHeading icon={icon} title={title} />
      <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}

function ListSection({ icon, title, items }) {
  return (
    <div>
      <SectionHeading icon={icon} title={title} />
      <ul role="list" className="mt-3 space-y-2.5">
        {items.map((entry) => (
          <li key={entry} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-ink">Project not found</h1>
      <p className="mt-3 text-muted">This project may have moved, or the link is incorrect.</p>
      <Link
        to="/#projects"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Projects
      </Link>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) return <NotFound />;

  const {
    title,
    tagline,
    description,
    problem,
    solution,
    techStack,
    features,
    challenges,
    screenshots,
    github,
    demo,
  } = project;
  const gallery = screenshots.slice(1);

  return (
    <MotionConfig reducedMotion="user">
      <Seo
        title={title}
        description={tagline}
        type="article"
        image={screenshots[0] ? `${SITE_URL}${screenshots[0].src}` : undefined}
      />

      <article className="py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Projects
          </Link>

          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-6">
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-ink sm:text-5xl"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-lg leading-relaxed text-muted"
            >
              {tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-glass px-5 py-2.5 text-sm font-semibold text-ink backdrop-blur transition hover:bg-accent-soft"
                >
                  <GithubIcon size={18} />
                  GitHub
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-10 overflow-hidden rounded-2xl border border-line"
          >
            <ProjectMedia image={screenshots[0]} title={title} className="aspect-video w-full" />
          </motion.div>

          <div className="mt-14">
            <TextSection icon={Info} title="Overview" text={description} />
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <TextSection icon={Target} title="Problem" text={problem} />
            <TextSection icon={Lightbulb} title="Solution" text={solution} />
          </div>

          <div className="mt-12">
            <SectionHeading icon={Layers} title="Tech Stack" />
            <ul role="list" className="mt-3 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-black/[0.03] px-3 py-1 text-sm text-ink dark:bg-white/[0.06]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <ListSection icon={ListChecks} title="Key Features" items={features} />
            <ListSection icon={Puzzle} title="Challenges" items={challenges} />
          </div>

          {gallery.length > 0 && (
            <div className="mt-14">
              <SectionHeading icon={GalleryHorizontal} title="Screenshots" />
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {gallery.map((shot) => (
                  <ProjectMedia
                    key={shot.src}
                    image={shot}
                    title={title}
                    className="aspect-video w-full rounded-xl border border-line"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </MotionConfig>
  );
}
