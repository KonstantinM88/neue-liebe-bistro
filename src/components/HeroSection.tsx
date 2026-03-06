import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';
import { useIsMobile } from '@/hooks/use-mobile';
import heroDish from '@/assets/gourmet_dish_400.webp';
import heroMainPoster from '@/assets/2024-12-15 (2).webp';
import heroMainVideoMp4 from '@/assets/video-2.mp4';
import heroMainVideoWebm from '@/assets/video-2.webm';

const HeroSection = () => {
  const { lang, t } = useLang();
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [isCompactHero, setIsCompactHero] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.innerWidth < 1280;
  });
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const terraceImageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-14, 38]);
  const terraceImageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1.02, 1.02] : [1.08, 1.17]);
  const terraceGlowY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-10, 22]);
  const terraceCardY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -18]);
  const experienceCardY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [12, -4]);
  const dishCardY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [18, -14]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -20]);
  const dishIntroX = isMobile ? 92 : 176;
  const dishIntroY = isMobile ? -124 : -148;

  useEffect(() => {
    const onResize = () => setIsCompactHero(window.innerWidth < 1280);
    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const titleLines =
    lang === 'de'
      ? isMobile
        ? ['Gemütliches', 'Dining-', 'Erlebnis mit', 'authentischen', 'Aromen']
        : isCompactHero
          ? ['Gemütliches', 'Dining-', 'Erlebnis mit', 'authentischen', 'Aromen']
          : ['Gemütliches', 'Dining-Erlebnis', 'mit authentischen', 'Aromen']
      : isMobile
        ? ['Cozy dining', 'experience', 'with authentic', 'flavor delights']
        : isCompactHero
          ? ['Cozy dining', 'experience', 'with authentic', 'flavor delights']
        : ['Cozy dining', 'experience with', 'authentic flavor', 'delights'];

  const infoCards = [
    {
      icon: MapPin,
      label: t('hero.visit'),
      headline: t('hero.addressHeadline'),
      detail: t('hero.addressDetail'),
      content: (
        <a href="#contact" className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-gold">
          {t('contact.findUs')}
          <ArrowRight size={14} />
        </a>
      ),
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      headline: t('hero.hoursHeadline'),
      detail: t('hero.hoursDetail'),
      content: <span className="text-sm text-foreground/78">{t('hero.openValue')}</span>,
    },
    {
      icon: Phone,
      label: t('hero.contactUs'),
      headline: t('hero.phoneHeadline'),
      detail: t('hero.phoneDetail'),
      content: <a href="tel:034461599804" className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-gold">{t('hero.callNow')} <ArrowRight size={14} /></a>,
    },
  ];

  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,146,46,0.18),transparent_36%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute inset-y-0 right-0 w-full bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.03)_45%,transparent_100%)] opacity-40" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-16 lg:px-12 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-10 xl:gap-16">
          <motion.div className="w-full max-w-[720px]" style={{ y: contentY }}>
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
            >
              <span className="font-body text-[10px] uppercase tracking-[0.32em] text-gold sm:text-[11px]">
                {t('hero.badge')}
              </span>
            </motion.div>

            <h1
              aria-label={t('hero.title')}
              className="mt-6 max-w-[13ch] font-display text-[clamp(2.2rem,10vw,3.95rem)] leading-[0.9] tracking-[-0.06em] text-foreground sm:text-[clamp(2.9rem,8vw,4.65rem)] xl:text-[clamp(4.7rem,6vw,6.15rem)]"
            >
              {titleLines.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : '110%',
                      filter: reduceMotion ? 'blur(0px)' : 'blur(10px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                    }}
                    transition={{
                      duration: reduceMotion ? 0.2 : 0.82,
                      delay: reduceMotion ? 0 : 0.1 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block max-w-full"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[29rem] text-[0.98rem] leading-[1.72] text-foreground/70 font-body sm:mt-6 sm:max-w-[34rem] sm:text-lg sm:leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-6 py-3 text-xs tracking-[0.24em] uppercase text-gold hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
              >
                {t('nav.reserve')}
                <ArrowRight size={14} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-xs tracking-[0.24em] uppercase text-foreground/78 hover:border-gold/40 hover:text-gold transition-all duration-300 font-body"
              >
                {t('hero.explore')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{t('hero.openLabel')}</p>
                <p className="mt-1 text-sm text-foreground/84 font-body">{t('hero.openValue')}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{t('hero.experienceLabel')}</p>
                <p className="mt-1 text-sm text-foreground/84 font-body">{t('hero.experienceValue')}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[620px] pb-14 sm:pb-20 lg:pb-16"
          >
            <motion.div
              style={{ y: terraceGlowY }}
              className="absolute -top-10 right-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(201,146,46,0.28)_0%,transparent_68%)] blur-3xl"
            />

            <motion.div
              style={{ y: terraceCardY }}
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.96,
                clipPath: reduceMotion ? 'inset(0% round 32px)' : 'inset(12% 10% 14% 12% round 32px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% round 32px)',
              }}
              transition={{ duration: reduceMotion ? 0.25 : 1.15, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto h-[400px] overflow-hidden rounded-[32px] border border-white/10 bg-dark-surface shadow-[0_28px_100px_rgba(0,0,0,0.36)] sm:h-[500px] lg:h-[620px]"
            >
              <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-black/24 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{t('hero.subtitle')}</p>
              </div>

              {!reduceMotion && (
                <motion.div
                  animate={{ x: ['-10%', '8%', '-10%'], opacity: [0.08, 0.16, 0.08] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                  className="pointer-events-none absolute inset-y-0 left-[-22%] z-10 w-[62%] bg-[linear-gradient(120deg,transparent,rgba(255,214,153,0.28),transparent)] blur-3xl"
                />
              )}

              <motion.video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={heroMainPoster}
                style={{ y: terraceImageY, scale: terraceImageScale }}
                className="absolute inset-x-0 top-[-7%] h-[114%] w-full object-cover"
              >
                <source src={heroMainVideoWebm} type="video/webm" />
                <source src={heroMainVideoMp4} type="video/mp4" />
              </motion.video>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/18 to-transparent" />

              <motion.div
                style={{ y: experienceCardY }}
                className="absolute bottom-1 right-4 z-20 max-w-[190px] rounded-[22px] border border-white/10 bg-black/22 p-3.5 backdrop-blur-md sm:bottom-2 sm:right-6 sm:max-w-[280px] sm:rounded-[24px] sm:p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{t('hero.experienceLabel')}</p>
                <p className="mt-2 font-display text-[1.15rem] leading-tight text-foreground sm:text-[2rem]">
                  {t('hero.experienceValue')}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y: dishCardY }}
              className="absolute -bottom-5 left-0 w-[48%] sm:-bottom-6 sm:w-[40%] lg:w-[42%]"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : dishIntroX,
                  y: reduceMotion ? 0 : dishIntroY,
                  scale: reduceMotion ? 1 : 0.56,
                  rotate: reduceMotion ? 0 : -7,
                  filter: reduceMotion ? 'blur(0px)' : 'blur(10px)',
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: 'blur(0px)',
                }}
                transition={{ duration: reduceMotion ? 0.25 : 1.2, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[26px] border border-white/10 bg-dark-surface p-2 shadow-[0_24px_70px_rgba(0,0,0,0.34)]"
              >
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, -0.6, 0] }}
                  transition={reduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative overflow-hidden rounded-[20px]"
                >
                  <img src={heroDish} alt="Detail aus der Küche im Restaurant Neue Liebe" className="h-[190px] w-full object-cover object-top sm:h-[230px]" />
                  <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 max-w-[72%] rounded-[16px] border border-white/10 bg-black/22 px-2.5 py-2 backdrop-blur-md sm:bottom-3 sm:left-3 sm:max-w-[74%] sm:rounded-[18px] sm:px-3 sm:py-2.5">
                    <p className="text-[8px] uppercase tracking-[0.22em] text-gold sm:text-[9px]">{t('hero.dishLabel')}</p>
                    <p className="mt-1 max-w-[16ch] text-[0.8rem] leading-[1.12] text-foreground sm:text-[0.9rem]">{t('hero.dishValue')}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {infoCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.52 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_38%,transparent)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-white/[0.04] text-gold shadow-[0_8px_20px_rgba(201,146,46,0.14)]">
                    <Icon size={18} />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{item.label}</p>
                </div>
                <div className="relative mt-5 h-px w-12 bg-gold/40" />
                <div className="relative mt-5">
                  <p className="text-[1.08rem] font-medium leading-tight text-foreground sm:text-[1.18rem]">{item.headline}</p>
                  <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-foreground/66 font-body">{item.detail}</p>
                </div>
                <div className="relative mt-5">{item.content}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
