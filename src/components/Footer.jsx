import { Link } from 'react-router';
import { NAV_ITEMS } from '@/data/navigation.js';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold tracking-tight text-ink">Deepak K V</p>
            <p className="mt-1 text-sm text-muted">Software Developer</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <Link to={`/#${id}`} className="text-muted transition-colors hover:text-ink">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-1 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {CURRENT_YEAR} Deepak K V</p>
          {/* <p>Built with React, Vite and Tailwind CSS</p> */}
        </div>
      </div>
    </footer>
  );
}
