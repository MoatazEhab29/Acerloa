import { ArrowUpRight, Tag } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  accent: string;
  badge: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: 'Burger & Fast Food Joint',
    category: 'Restaurant',
    description:
      'A bold, appetite-driven layout with vibrant food photography, combo deals, and one-tap WhatsApp ordering. Perfect for quick-service restaurants.',
    tags: ['Food', 'WhatsApp Order', 'Delivery', 'QR Menu'],
    image:
      'https://images.pexels.com/photos/5374420/pexels-photo-5374420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-primary-500 to-primary-600',
    badge: 'Most Popular',
    demoUrl: 'https://goodfood-54j.pages.dev/',
  },
  {
    title: 'Traditional Grill Restaurant',
    category: 'Restaurant',
    description:
      'A warm, authentic design inspired by traditional cuisine. Showcases grilled meats, mezze platters, and family-style sharing menus with bilingual support.',
    tags: ['Food', 'Bilingual', 'Reservations', 'Gallery'],
    image:
      'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-amber-500 to-amber-700',
    badge: 'Authentic Vibe',
    demoUrl: 'https://bold-gourmet.vercel.app/',
  },
  {
    title: 'Cozy Coffee Shop',
    category: 'Cafe',
    description:
      'A clean, minimal aesthetic with soft tones and elegant typography. Ideal for cafes serving specialty coffee, pastries, and breakfast — with a loyalty stamp card built in.',
    tags: ['Cafe', 'Loyalty Card', 'Takeaway', 'Menu'],
    image:
      'https://images.pexels.com/photos/23879458/pexels-photo-23879458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-accent-500 to-accent-600',
    badge: 'New Design',
    demoUrl: 'https://brewandbaker.vercel.app/',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-3xl glass-card transition-all duration-700 hover:shadow-2xl hover:shadow-ink-900/10 dark:hover:shadow-black/30 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute left-4 top-4">
          <span className={`inline-flex rounded-full bg-gradient-to-r ${project.accent} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
            {project.badge}
          </span>
        </div>

        {/* Category */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-lg bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-between gap-2 rounded-xl border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-800 transition-all hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 dark:border-ink-700 dark:text-ink-100 dark:hover:border-primary-600 dark:hover:bg-primary-950/40 dark:hover:text-primary-300"
        >
          View Live Demo
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function Templates() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="templates" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-4 py-1.5 text-sm font-medium text-ink-600 dark:border-ink-700 dark:bg-ink-800/50 dark:text-ink-300">
            Portfolio
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Selected work & live demos
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            Every business is unique. These live demos show just a few directions — your site will be
            custom-built to match your brand, your goals, and your audience.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            These are just the beginning — I build for restaurants, clinics, salons, gyms, shops, agencies, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
