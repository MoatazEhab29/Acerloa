import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const links = [
  { label: 'Portfolio', href: '#templates' },
  { label: 'Features', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/30">
            <Code2 className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span>
            Acerola
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 text-ink-600 transition-colors hover:bg-ink-100 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-600 hover:shadow-primary-500/40 active:scale-95 sm:inline-flex"
          >
            Get Started
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 text-ink-700 dark:border-ink-700 dark:text-ink-200 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-4 mt-3 animate-slide-down rounded-2xl glass p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-xl bg-primary-500 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
