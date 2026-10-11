import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Templates from '@/components/Templates';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-ink-900 dark:bg-ink-950 dark:text-ink-100">
      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>
        <Hero />
        <Templates />
        <Features />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
