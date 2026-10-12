import { Smartphone, Zap, MessageCircle, Search, Palette, BarChart3 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface Feature {
  icon: typeof Smartphone;
  title: string;
  description: string;
  highlight?: boolean;
}

const features: Feature[] = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description:
      'Most of your visitors browse on their phones. Every site I build looks stunning on small screens first, then scales up beautifully to tablets and desktops.',
    highlight: true,
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Loading',
    description:
      'Sites load in under a second. No bloated frameworks, no slow plugins — just clean, optimized code that keeps visitors from bouncing.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description:
      'Connect with customers directly. Add WhatsApp chat, booking, or order buttons so visitors can reach you with one tap — no app or middleman required.',
    highlight: true,
  },
  {
    icon: Search,
    title: 'SEO & Google Ready',
    description:
      'Your business shows up when people search for what you offer. Built with proper metadata, structured data, and local SEO best practices.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description:
      'Your colors, your logo, your personality. Nothing cookie-cutter — each design is crafted from scratch to match your business\'s unique identity.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description:
      'See how many people visit your site, what they click, and where they come from. Simple, actionable insights — no data science degree required.',
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col rounded-3xl p-6 transition-all duration-700 hover:-translate-y-1 ${
        feature.highlight
          ? 'glass-card border-primary-200/60 shadow-lg shadow-primary-500/5 dark:border-primary-800/40'
          : 'glass-card'
      } ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {feature.highlight && (
        <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-primary-400/20 to-accent-400/10 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      )}

      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
          feature.highlight
            ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
            : 'bg-ink-100 text-primary-600 dark:bg-ink-800 dark:text-primary-400'
        }`}
      >
        <Icon className="h-7 w-7" strokeWidth={2} />
      </div>

      <h3 className="font-display text-lg font-bold tracking-tight">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
        {feature.description}
      </p>
    </div>
  );
}

export default function Features() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-4 py-1.5 text-sm font-medium text-ink-600 dark:border-ink-700 dark:bg-ink-800/50 dark:text-ink-300">
            Why Choose Acerola
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything your business needs to stand out online
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            No expensive platforms, no recurring fees, no complexity.
            Just a beautiful website that works hard for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
