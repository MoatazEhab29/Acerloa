import { ArrowRight, Sparkles, Smartphone, Star, Monitor, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-primary-400/20 blur-[120px] dark:bg-primary-500/10" />
        <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-accent-400/15 blur-[100px] dark:bg-accent-500/10" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950/50 dark:text-primary-300">
              <Sparkles className="h-4 w-4" />
              Custom websites for any business
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Beautiful websites that turn visitors into{' '}
              <span className="text-gradient">loyal customers</span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              I design and build stunning, mobile-first websites for businesses of all kinds —
              from restaurants and shops to clinics, salons, and startups. No templates, no monthly fees.
              Just your brand, beautifully online.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#templates"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/30 transition-all hover:bg-primary-600 hover:shadow-primary-500/40 active:scale-95"
              >
                View Portfolio
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ink-200 px-7 py-4 text-base font-semibold text-ink-800 transition-all hover:bg-ink-50 active:scale-95 dark:border-ink-700 dark:text-ink-100 dark:hover:bg-ink-800"
              >
                Contact via WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              {[
                { value: '< 1s', label: 'Load time' },
                { value: '100%', label: 'Mobile-first' },
                { value: '7 days', label: 'Avg. delivery' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual — browser window mockup */}
          <div className="relative hidden animate-fade-up [animation-delay:200ms] lg:block">
            <div className="relative mx-auto max-w-md">
              {/* Browser frame */}
              <div className="relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-2xl dark:border-ink-700/60 dark:bg-ink-900">
                {/* Browser top bar */}
                <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-3 dark:border-ink-800 dark:bg-ink-950/50">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-ink-400 dark:bg-ink-800 dark:text-ink-500">
                    <span className="h-2 w-2 rounded-full bg-primary-500" />
                    yourbusiness.com
                  </div>
                </div>

                {/* Browser content */}
                <div className="space-y-4 p-5">
                  {/* Navbar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700" />
                      <div className="h-3 w-20 rounded bg-ink-200 dark:bg-ink-700" />
                    </div>
                    <div className="flex gap-4">
                      <div className="h-2.5 w-10 rounded bg-ink-100 dark:bg-ink-800" />
                      <div className="h-2.5 w-10 rounded bg-ink-100 dark:bg-ink-800" />
                      <div className="h-2.5 w-12 rounded bg-primary-500" />
                    </div>
                  </div>

                  {/* Hero section */}
                  <div className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 p-5">
                    <div className="h-3 w-40 rounded bg-white/30" />
                    <div className="mt-3 h-2.5 w-56 rounded bg-white/20" />
                    <div className="mt-3 h-2.5 w-48 rounded bg-white/20" />
                    <div className="mt-4 flex gap-2">
                      <div className="h-8 w-24 rounded-lg bg-white/90" />
                      <div className="h-8 w-20 rounded-lg border border-white/30" />
                    </div>
                  </div>

                  {/* Cards row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="rounded-lg border border-ink-100 p-3 dark:border-ink-800">
                        <div className="h-8 w-8 rounded-lg bg-primary-100 dark:bg-primary-900/40" />
                        <div className="mt-2 h-2 w-full rounded bg-ink-100 dark:bg-ink-800" />
                        <div className="mt-1.5 h-2 w-2/3 rounded bg-ink-100 dark:bg-ink-800" />
                      </div>
                    ))}
                  </div>

                  {/* Content blocks */}
                  <div className="flex gap-3">
                    <div className="flex-1 space-y-2">
                      <div className="h-2.5 w-full rounded bg-ink-100 dark:bg-ink-800" />
                      <div className="h-2.5 w-4/5 rounded bg-ink-100 dark:bg-ink-800" />
                      <div className="h-2.5 w-3/4 rounded bg-ink-100 dark:bg-ink-800" />
                    </div>
                    <div className="h-20 w-24 rounded-lg bg-gradient-to-br from-accent-400/30 to-primary-400/20" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-8 top-20 animate-pulse-slow rounded-2xl glass px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/15 text-primary-500">
                    <Monitor className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink-900 dark:text-white">Responsive</div>
                    <div className="text-[10px] text-ink-500">Looks great everywhere</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-12 animate-pulse-slow [animation-delay:1.5s] rounded-2xl glass px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 text-accent-600">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink-900 dark:text-white">Any Business</div>
                    <div className="text-[10px] text-ink-500">Shops, clinics, more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
