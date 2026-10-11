import { MessageCircle, Mail, MapPin, UtensilsCrossed, Phone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const WHATSAPP_NUMBER = '201552193602';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'm interested in a website for my restaurant. Can you tell me more?",
)}`;

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <footer id="contact" className="relative overflow-hidden pt-24 sm:pt-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-whatsapp/10 blur-[140px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-primary-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* CTA Card */}
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-900 to-ink-950 p-8 shadow-2xl sm:p-12 lg:p-16 transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Decorative dots */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
                <MessageCircle className="h-4 w-4 text-whatsapp" />
                Let's build your restaurant's website
              </div>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to get your menu online?
              </h2>
              <p className="mt-4 max-w-lg text-lg text-ink-300">
                Send me a message on WhatsApp and let's talk about your restaurant. Free consultation,
                no obligation. I reply within a few hours.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-whatsapp px-7 py-4 text-base font-bold text-white shadow-xl shadow-whatsapp/30 transition-all hover:bg-whatsapp-dark hover:shadow-whatsapp/40 active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  Contact via WhatsApp
                </a>
                <a
                  href="mailto:moatazehab29@gmail.com"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </div>
            </div>

            {/* Quick contact info */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Call / WhatsApp', value: '+20 155 219 3602' },
                { icon: Mail, label: 'Email', value: 'moatazehab29@gmail.com' },
                { icon: MapPin, label: 'Available', value: 'Remote · Worldwide' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/20 text-primary-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-ink-400">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-white">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-ink-200 py-10 dark:border-ink-800 sm:flex-row">
          <div className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white">
              <UtensilsCrossed className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span>
              Acerola
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-ink-500 dark:text-ink-400">
            <a href="#templates" className="transition-colors hover:text-primary-500">Templates</a>
            <a href="#features" className="transition-colors hover:text-primary-500">Features</a>
            <a href="#process" className="transition-colors hover:text-primary-500">Process</a>
            <a href="#contact" className="transition-colors hover:text-primary-500">Contact</a>
          </div>

          <div className="text-sm text-ink-500 dark:text-ink-400">
            © 2026 Acerola
          </div>
        </div>
      </div>
    </footer>
  );
}
