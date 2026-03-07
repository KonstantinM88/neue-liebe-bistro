import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';
import { useIsMobile } from '@/hooks/use-mobile';
import interior from '@/assets/unnamed (9).webp';

const AboutSection = () => {
  const { lang, t } = useLang();
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const isImageInView = useInView(imageRef, { once: true, amount: isMobile ? 0.26 : 0.28 });
  const isTextInView = useInView(textRef, { once: true, amount: isMobile ? 0.22 : 0.28 });
  const isTitleInView = useInView(titleRef, { once: !isMobile, amount: isMobile ? 0.72 : 0.42 });
  const [isCompactAbout, setIsCompactAbout] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.innerWidth < 1360;
  });

  useEffect(() => {
    const onResize = () => setIsCompactAbout(window.innerWidth < 1360);
    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const titleLines =
    lang === 'de'
      ? isMobile
        ? ['Köstliche', 'Gerichte:', 'Frische', 'Aromen für', 'jeden', 'Geschmack']
        : isCompactAbout
          ? ['Köstliche', 'Gerichte:', 'Frische', 'Aromen für', 'jeden Geschmack']
          : ['Köstliche', 'Gerichte:', 'Frische Aromen', 'für jeden', 'Geschmack']
      : isMobile
        ? ['Delicious', 'dishes:', 'fresh', 'flavors for', 'every taste']
        : isCompactAbout
          ? ['Delicious', 'dishes:', 'fresh flavors', 'for every taste']
          : ['Delicious', 'dishes:', 'fresh flavors', 'for every', 'taste'];

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_28%,rgba(201,146,46,0.08),transparent_24%),radial-gradient(circle_at_80%_22%,rgba(255,255,255,0.04),transparent_20%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-16 xl:gap-20">
          <motion.div
            ref={imageRef}
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : isMobile ? -54 : -96,
              y: reduceMotion ? 0 : isMobile ? 18 : 0,
              scale: reduceMotion ? 1 : 0.97,
            }}
            animate={{
              opacity: isImageInView || reduceMotion ? 1 : 0,
              x: isImageInView || reduceMotion ? 0 : isMobile ? -54 : -96,
              y: isImageInView || reduceMotion ? 0 : isMobile ? 18 : 0,
              scale: isImageInView || reduceMotion ? 1 : 0.97,
            }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[42px] bg-[radial-gradient(circle,rgba(201,146,46,0.18),transparent_68%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-dark-surface p-2 shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:rounded-[42px] lg:rounded-[52px]">
              <div className="overflow-hidden rounded-[28px] sm:rounded-[34px] lg:rounded-[44px]">
                <motion.img
                  src={interior}
                  alt="Restaurant Neue Liebe Interior"
                  animate={reduceMotion ? undefined : { scale: [1.04, 1.1, 1.04], y: [0, -10, 0] }}
                  transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-[430px] w-full object-cover object-center sm:h-[520px] lg:h-[620px]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/18 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            ref={textRef}
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : isMobile ? 54 : 96,
              y: reduceMotion ? 0 : isMobile ? 22 : 0,
            }}
            animate={{
              opacity: isTextInView || reduceMotion ? 1 : 0,
              x: isTextInView || reduceMotion ? 0 : isMobile ? 54 : 96,
              y: isTextInView || reduceMotion ? 0 : isMobile ? 22 : 0,
            }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[640px]"
          >
            <motion.span
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: isTextInView || reduceMotion ? 1 : 0, y: isTextInView || reduceMotion ? 0 : 16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-[11px] uppercase tracking-[0.42em] text-gold"
            >
              {t('about.welcome')}
            </motion.span>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold to-transparent" />

            <h2
              ref={titleRef}
              aria-label={t('about.title')}
              className="mt-8 max-w-[11ch] font-display text-[clamp(2.55rem,5vw,5rem)] leading-[0.92] tracking-[-0.05em] text-foreground"
            >
              {titleLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block overflow-hidden">
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : isMobile ? '132%' : '110%',
                      filter: reduceMotion ? 'blur(0px)' : isMobile ? 'blur(14px)' : 'blur(10px)',
                    }}
                    animate={{
                      opacity: isTitleInView || reduceMotion ? 1 : 0,
                      y: isTitleInView || reduceMotion ? 0 : isMobile ? '132%' : '110%',
                      filter: isTitleInView || reduceMotion ? 'blur(0px)' : isMobile ? 'blur(14px)' : 'blur(10px)',
                    }}
                    transition={{
                      duration: reduceMotion ? 0.2 : isMobile ? 0.94 : 0.82,
                      delay: reduceMotion ? 0 : (isMobile ? 0.14 : 0.08) + index * (isMobile ? 0.1 : 0.08),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>

            <div>
              <motion.p
                initial={{ opacity: 0, y: reduceMotion ? 0 : isMobile ? 30 : 22 }}
                animate={{ opacity: isTextInView || reduceMotion ? 1 : 0, y: isTextInView || reduceMotion ? 0 : isMobile ? 30 : 22 }}
                transition={{ duration: 0.72, delay: reduceMotion ? 0 : isMobile ? 0.12 : 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-[35rem] font-body text-[1.02rem] leading-[1.9] text-foreground/68 sm:text-[1.08rem]"
              >
                {t('about.desc')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : isMobile ? 30 : 22 }}
                animate={{ opacity: isTextInView || reduceMotion ? 1 : 0, y: isTextInView || reduceMotion ? 0 : isMobile ? 30 : 22 }}
                transition={{ duration: 0.72, delay: reduceMotion ? 0 : isMobile ? 0.22 : 0.36, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/55 bg-gold/10 px-6 py-3 font-body text-[11px] uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
                >
                  {t('about.cta')}
                  <ArrowRight size={14} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : isMobile ? 34 : 26 }}
                animate={{ opacity: isTextInView || reduceMotion ? 1 : 0, y: isTextInView || reduceMotion ? 0 : isMobile ? 34 : 26 }}
                transition={{ duration: 0.78, delay: reduceMotion ? 0 : isMobile ? 0.32 : 0.46, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-7"
              >
                <h5 className="font-body text-[10px] uppercase tracking-[0.32em] text-gold">{t('about.hours')}</h5>
                <p className="mt-4 font-display text-[1.7rem] leading-tight text-foreground sm:text-[2rem]">{t('hero.openValue')}</p>
                <p className="mt-3 max-w-[30ch] font-body text-sm leading-relaxed text-foreground/64 sm:text-[0.98rem]">{t('about.hoursDetail')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
