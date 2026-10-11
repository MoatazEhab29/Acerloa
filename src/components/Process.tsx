import { MessageSquare, Palette, Rocket } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const steps = [
  {
    icon: MessageSquare,
    title: 'We Chat',
    description: 'A quick WhatsApp call to understand your restaurant, your menu, and your vision. I ask the right questions and listen.',
    duration: 'Day 1',
  },
  {
    icon: Palette,
    title: 'I Design & Build',
    description: 'Within days, you get a custom-designed, fully functional website with your real menu, photos, and WhatsApp ordering — ready to preview.',
    duration: 'Days 2-5',
  },
  {
    icon: Rocket,
    title: 'You Go Live',
    description: 'After your feedback and final tweaks, your site goes live with a custom domain. I hand it over — no monthly fees, no lock-in.',
    duration: 'Day 7',
  },
];

export default function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-4 py-1.5 text-sm font-medium text-ink-600 dark:border-ink-700 dark:bg-ink-800/50 dark:text-ink-300">
            How It Works
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From chat to live in 7 days
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            A simple, transparent process. No lengthy contracts or endless meetings — just efficient, focused work.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => {
            const { ref: stepRef, visible: stepVisible } = useReveal<HTMLDivElement>();
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                ref={stepRef}
                className={`relative transition-all duration-700 ${
                  stepVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-full hidden h-px w-full -translate-y-0 lg:block">
                    <div className="h-px w-[80%] bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-700" />
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-xl shadow-primary-500/30">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-white dark:bg-ink-100 dark:text-ink-900">
                      {i + 1}
                    </span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-primary-500">
                    {step.duration}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
