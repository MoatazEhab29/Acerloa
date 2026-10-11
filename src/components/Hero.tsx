import { ArrowRight, Sparkles, Smartphone, Star } from 'lucide-react';

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
              Custom-built for restaurants & cafes
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Digital menus & ordering websites that turn scrollers into{' '}
              <span className="text-gradient">hungry customers</span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              I design and build stunning, mobile-first websites for restaurants and cafes — with
              WhatsApp ordering built right in. No templates, no monthly fees. Just your menu, beautifully online.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#templates"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/30 transition-all hover:bg-primary-600 hover:shadow-primary-500/40 active:scale-95"
              >
                View Templates
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

          {/* Right visual — phone mockup */}
          <div className="relative hidden animate-fade-up [animation-delay:200ms] lg:block">
            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-900 shadow-2xl dark:border-ink-800">
                <div className="overflow-hidden rounded-[2rem] bg-white">
                  {/* Status bar */}
                  <div className="flex items-center justify-between bg-ink-900 px-6 py-2 text-xs text-white">
                    <span>9:41</span>
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    </span>
                  </div>

                  {/* Hero image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4315148/pexels-photo-4315148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Burger restaurant"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <div className="text-lg font-bold leading-tight">Burger Bay</div>
                      <div className="flex items-center gap-1 text-xs opacity-90">
                        <Star className="h-3 w-3 fill-primary-400 text-primary-400" />
                        4.9 · Fast Food
                      </div>
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="space-y-3 p-4">
                    {[
                      { name: 'Classic Beef Burger', price: '$8.50', desc: 'Juicy beef, cheddar, pickles' },
                      { name: 'Double Cheese Melt', price: '$12.00', desc: 'Double patty, double cheese' },
                      { name: 'Crispy Chicken Deluxe', price: '$9.50', desc: 'Crispy chicken, fresh slaw' },
                    ].map((item, i) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-xl border border-ink-100 p-3 transition-colors hover:border-primary-200 hover:bg-primary-50/50"
                      >
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-ink-900">{item.name}</div>
                          <div className="text-xs text-ink-500">{item.desc}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-primary-600">{item.price}</div>
                          {i === 0 && (
                            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-whatsapp px-2 py-0.5 text-[10px] font-bold text-white">
                              <Smartphone className="h-2.5 w-2.5" /> Order
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom bar */}
                  <div className="flex items-center justify-between border-t border-ink-100 px-4 py-3">
                    <span className="text-xs font-medium text-ink-500">3 items selected</span>
                    <button className="rounded-lg bg-whatsapp px-4 py-2 text-xs font-bold text-white">
                      Order on WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-8 top-16 animate-pulse-slow rounded-2xl glass px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-whatsapp/15 text-whatsapp">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink-900 dark:text-white">Mobile-First</div>
                    <div className="text-[10px] text-ink-500">Optimized design</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-24 animate-pulse-slow [animation-delay:1.5s] rounded-2xl glass px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 text-accent-600">
                    <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink-900 dark:text-white">4.9 Rating</div>
                    <div className="text-[10px] text-ink-500">Customer loved it</div>
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
