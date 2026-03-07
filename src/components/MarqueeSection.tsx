import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

const MarqueeSection = () => {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const items = t('marquee.text')
    .split('·')
    .map((item) => item.trim())
    .filter(Boolean);
  const loopItems = [...items, ...items, ...items];
  const accentEvery = Math.max(items.length, 1);

  return (
    <section className="theme-cappuccino section-aura section-aura--marquee relative overflow-hidden border-y border-[rgba(128,102,72,0.22)] bg-[linear-gradient(90deg,rgba(245,241,236,0.99)_0%,rgba(237,229,217,0.985)_28%,rgba(226,213,191,0.985)_50%,rgba(237,229,217,0.985)_72%,rgba(245,241,236,0.99)_100%)] py-7 sm:py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,167,107,0.2),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.34),transparent_38%,rgba(112,85,58,0.06)_100%),linear-gradient(90deg,rgba(255,255,255,0.22),transparent_16%,transparent_84%,rgba(255,255,255,0.18))]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(128,102,72,0.24)] to-transparent" />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(188,150,90,0.34)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[rgba(245,241,236,0.99)] via-[rgba(245,241,236,0.95)] to-transparent sm:w-24 lg:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[rgba(245,241,236,0.99)] via-[rgba(245,241,236,0.95)] to-transparent sm:w-24 lg:w-36" />

      <motion.div
        aria-label={t('marquee.text')}
        animate={reduceMotion ? undefined : { x: ['0%', '-33.333%'] }}
        transition={reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: 'linear' }}
        className="flex w-max items-center gap-9 pr-9 [will-change:transform] sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16"
      >
        {loopItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-9 sm:gap-12 lg:gap-16">
            <span
              className={`font-elegant text-[2.55rem] italic leading-none tracking-[0.024em] [text-shadow:0_0_1px_rgba(255,255,255,0.08)] sm:text-[3.5rem] lg:text-[4.8rem] ${
                index % accentEvery === 0 ? 'text-[rgba(188,150,90,0.96)]' : 'text-[rgba(30,24,18,0.92)]'
              }`}
            >
              {item}
            </span>
            <span className="flex h-3 w-3 items-center justify-center rounded-full border border-[rgba(188,150,90,0.82)] sm:h-3.5 sm:w-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(188,150,90,0.94)] shadow-[0_0_10px_rgba(188,150,90,0.24)] sm:h-2 sm:w-2" />
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
