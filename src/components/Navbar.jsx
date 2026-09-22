import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle.jsx';
import { NAV_ITEMS, SECTION_IDS } from '@/data/navigation.js';
import useActiveSection from '@/hooks/useActiveSection.js';

export default function Navbar() {
  const { pathname } = useLocation();
  const activeId = useActiveSection(SECTION_IDS, pathname === '/');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  // Move focus into the menu when it opens, and back to the toggle button when it
  // closes (Escape, a link click, or the toggle itself) — standard disclosure pattern.
  useEffect(() => {
    if (menuOpen) {
      firstMenuLinkRef.current?.focus();
    } else if (wasMenuOpenRef.current) {
      menuButtonRef.current?.focus();
    }
    wasMenuOpenRef.current = menuOpen;
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-glass backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link to="/#home" className="text-base font-semibold tracking-tight text-ink">
          Deepak K V
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <Link
                    to={`/#${id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      isActive ? 'text-accent' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-accent-soft"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink md:hidden"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-line md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {NAV_ITEMS.map(({ id, label }, index) => {
                const isActive = activeId === id;
                return (
                  <li key={id}>
                    <Link
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      to={`/#${id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? 'location' : undefined}
                      className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? 'bg-accent-soft text-accent' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
