import { Link } from 'react-router';
import { MotionConfig, motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons.jsx';
import { profile } from '@/data/profile.js';

// Presentation only: the original photo file is never altered or regenerated.
// Slight exposure lift, mild contrast improvement, very light saturation reduction.
const PORTRAIT_FILTER = 'brightness(1.04) contrast(1.06) saturate(0.94)';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const socialLinks = [
  { label: 'GitHub', href: profile.links.github, icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: LinkedinIcon, external: true },
  { label: 'Email', href: `mailto:${profile.links.email}`, icon: Mail, external: false },
];

export default function Hero() {
  const { hero, links, photo } = profile;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="flex min-h-svh items-center pt-16"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.p variants={item} className="text-sm font-medium text-accent sm:text-base">
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="mt-4 max-w-2xl text-5xl font-bold tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl"
            >
              {hero.heading}
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {hero.description}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/#projects"
                className="inline-flex items-center justify-center rounded-full bg-accent-solid px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
              >
                View Projects
              </Link>
              <a
                href={links.resume}
                download="Deepak_KV_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-glass px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition hover:bg-accent-soft active:scale-[0.98]"
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
            </motion.div>

            <motion.ul
              variants={item}
              role="list"
              aria-label="Social links"
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
                  >
                    <Icon size={18} />
                    {label}
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="order-1 mx-auto w-full max-w-[15rem] sm:max-w-xs lg:order-2 lg:max-w-md lg:justify-self-end"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              fetchPriority="high"
              decoding="async"
              style={{ filter: PORTRAIT_FILTER }}
              className="aspect-square w-full rounded-3xl object-cover shadow-[0_24px_60px_-24px_rgb(15_18_34/0.45)] ring-1 ring-black/5 dark:shadow-[0_24px_70px_-24px_rgb(99_102_241/0.4)] dark:ring-white/10"
            />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
