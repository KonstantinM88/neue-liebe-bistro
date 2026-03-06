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

  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[linear-gradient(180deg,rgba(7,24,28,0.82),rgba(4,18,21,0.95))] py-7 sm:py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,146,46,0.09),transparent_38%),linear-gradient(90deg,rgba(255,255,255,0.035),transparent_18%,transparent_82%,rgba(255,255,255,0.035))]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background via-background/92 to-transparent sm:w-24 lg:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background via-background/92 to-transparent sm:w-24 lg:w-36" />

      <motion.div
        aria-label={t('marquee.text')}
        animate={reduceMotion ? undefined : { x: ['0%', '-33.333%'] }}
        transition={reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: 'linear' }}
        className="flex w-max items-center gap-9 pr-9 [will-change:transform] sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16"
      >
        {loopItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-9 sm:gap-12 lg:gap-16">
            <span className="font-elegant text-[2.55rem] italic leading-none tracking-[0.035em] text-foreground/54 drop-shadow-[0_0_18px_rgba(0,0,0,0.22)] sm:text-[3.5rem] lg:text-[4.8rem]">
              {item}
            </span>
            <span className="flex h-3 w-3 items-center justify-center rounded-full border border-gold/45 sm:h-3.5 sm:w-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_14px_rgba(201,146,46,0.5)] sm:h-2 sm:w-2" />
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
