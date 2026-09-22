import Seo from '@/components/Seo.jsx';
import About from '@/sections/About.jsx';
import Contact from '@/sections/Contact.jsx';
import Experience from '@/sections/Experience.jsx';
import Hero from '@/sections/Hero.jsx';
import Projects from '@/sections/Projects.jsx';
import Skills from '@/sections/Skills.jsx';

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
