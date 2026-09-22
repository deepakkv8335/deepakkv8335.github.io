import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons.jsx';
import GlassCard from '@/components/GlassCard.jsx';
import ProjectMedia from '@/components/ProjectMedia.jsx';
import { scaleIn } from '@/components/motionVariants.js';

export default function ProjectCard({ project }) {
  const { slug, title, tagline, techStack, github, demo, screenshots } = project;

  return (
    <GlassCard variants={scaleIn} className="flex h-full flex-col overflow-hidden p-0">
      <ProjectMedia image={screenshots[0]} title={title} className="aspect-video w-full" />

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>
        </div>

        <ul role="list" className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-black/[0.03] px-2.5 py-1 text-xs text-ink dark:bg-white/[0.06]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm font-medium">
          <Link to={`/projects/${slug}`} className="text-accent hover:underline">
            View Case Study
          </Link>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
