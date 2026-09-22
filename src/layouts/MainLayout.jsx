import { Outlet } from 'react-router';
import AmbientBackground from '@/components/AmbientBackground.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import Footer from '@/components/Footer.jsx';
import Navbar from '@/components/Navbar.jsx';
import PersonSchema from '@/components/PersonSchema.jsx';
import ScrollProgress from '@/components/ScrollProgress.jsx';
import useScrollToHash from '@/hooks/useScrollToHash.js';

export default function MainLayout() {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col">
      <PersonSchema />
      <AmbientBackground />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-70 focus:rounded-full focus:bg-accent-solid focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
