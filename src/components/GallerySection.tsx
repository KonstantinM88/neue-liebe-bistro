import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import { useIsMobile } from '@/hooks/use-mobile';
import heroDish from '@/assets/hero-dish.jpg';
import heroTerrace from '@/assets/hero-terrace.jpg';
import interior from '@/assets/interior.jpg';
import cocktail from '@/assets/cocktail.jpg';
import appetizer from '@/assets/appetizer.jpg';
import dessert from '@/assets/dessert.jpg';

type GalleryImage = {
  src: string;
  alt: string;
  eyebrow: { de: string; en: string };
  title: { de: string; en: string };
  className: string;
  variant: 'hero' | 'wide' | 'compact';
};

const images: GalleryImage[] = [
  {
    src: interior,
    alt: 'Restaurant Interior',
    eyebrow: { de: 'Atmosphäre', en: 'Ambience' },
    title: { de: 'Warme Abende im Gastraum', en: 'Warm evenings indoors' },
    className: 'col-span-1 sm:col-span-2 lg:col-span-5 lg:row-span-2',
    variant: 'hero',
  },
  {
    src: heroTerrace,
    alt: 'Terrasse Nebra',
    eyebrow: { de: 'Terrasse', en: 'Terrace' },
    title: { de: 'Golden Hour auf der Terrasse', en: 'Golden hour on the terrace' },
    className: 'col-span-1 sm:col-span-2 lg:col-span-7',
    variant: 'wide',
  },
  {
    src: heroDish,
    alt: 'Gourmet Dish',
    eyebrow: { de: 'Signature', en: 'Signature' },
    title: { de: 'Feine Teller mit Charakter', en: 'Plates with a signature touch' },
    className: 'col-span-1 lg:col-span-4',
    variant: 'compact',
  },
  {
    src: cocktail,
    alt: 'Craft Cocktail',
    eyebrow: { de: 'Bar', en: 'Bar' },
    title: { de: 'Cocktails mit ruhiger Eleganz', en: 'Cocktails with quiet elegance' },
    className: 'col-span-1 lg:col-span-3',
    variant: 'compact',
  },
  {
    src: appetizer,
    alt: 'Appetizer',
    eyebrow: { de: 'Küche', en: 'Kitchen' },
    title: { de: 'Leichte Starts, klares Handwerk', en: 'Light starts, precise craft' },
    className: 'col-span-1 sm:col-span-2 lg:col-span-5',
    variant: 'wide',
  },
  {
    src: dessert,
    alt: 'Dessert',
    eyebrow: { de: 'Finale', en: 'Finale' },
    title: { de: 'Desserts als sanfter Abschluss', en: 'Desserts as a soft finale' },
    className: 'col-span-1 sm:col-span-2 lg:col-span-7',
    variant: 'wide',
  },
];

interface GalleryCardProps {
  image: GalleryImage;
  index: number;
  lang: 'de' | 'en';
  reduceMotion: boolean | null;
  isMobile: boolean;
}

const GalleryCard = ({ image, index, lang, reduceMotion, isMobile }: GalleryCardProps) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const parallaxDistance = reduceMotion ? 0 : isMobile ? 34 : 18;
  const imageY = useTransform(scrollYProgress, [0, 1], [-parallaxDistance, parallaxDistance]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1.02, 1.02] : isMobile ? [1.13, 1.2] : [1.07, 1.12]
  );
  const numberLabel = String(index + 1).padStart(2, '0');
  const entryOffset = reduceMotion ? 0 : isMobile ? 78 + (index % 2) * 14 : 44 + (index % 3) * 12;

  const titleSizeClass =
    image.variant === 'hero'
      ? 'text-[1.3rem] leading-[0.96] sm:text-[1.7rem] lg:text-[2.4rem]'
      : image.variant === 'wide'
        ? 'text-[0.96rem] leading-[1.02] sm:text-[1.2rem] lg:text-[1.65rem]'
        : 'text-[0.82rem] leading-[1.04] sm:text-[0.98rem] lg:text-[1.28rem]';

  const cardHeightClass =
    image.variant === 'hero'
      ? 'h-[320px] sm:h-[380px] lg:h-full'
      : image.variant === 'wide'
        ? 'h-[240px] sm:h-[280px] lg:h-full'
        : 'h-[220px] sm:h-[250px] lg:h-full';

  const panelWidthClass =
    image.variant === 'hero'
      ? 'max-w-[56%] sm:max-w-[60%] lg:max-w-[68%]'
      : image.variant === 'wide'
        ? 'max-w-[52%] sm:max-w-[56%] lg:max-w-[60%]'
        : 'max-w-[58%] sm:max-w-[64%] lg:max-w-[74%]';

  const titleMeasureClass =
    image.variant === 'hero'
      ? 'max-w-[8ch] sm:max-w-[9ch] lg:max-w-[10ch]'
      : image.variant === 'wide'
        ? 'max-w-[12ch] lg:max-w-[13ch]'
        : 'max-w-[10ch] lg:max-w-[11ch]';

  const viewportSettings = { once: !isMobile, amount: isMobile ? 0.28 : 0.12 };
  const captionViewportSettings = { once: !isMobile, amount: isMobile ? 0.42 : 0.35 };

  return (
    <motion.article
      ref={cardRef}
      initial={{
        opacity: 0,
        y: entryOffset,
        scale: reduceMotion ? 1 : 0.96,
        filter: reduceMotion ? 'blur(0px)' : isMobile ? 'blur(14px)' : 'blur(10px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={viewportSettings}
      transition={{
        duration: reduceMotion ? 0.2 : isMobile ? 0.95 : 0.85,
        delay: reduceMotion ? 0 : isMobile ? index * 0.05 : index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className={`group relative isolate overflow-hidden rounded-[24px] border border-white/10 bg-dark-surface shadow-[0_24px_80px_rgba(0,0,0,0.32)] ${cardHeightClass} ${image.className}`}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-x-0 top-[-12%] h-[124%] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/24 to-black/6" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : isMobile ? 26 : 18, scale: reduceMotion ? 1 : 0.98 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={captionViewportSettings}
        transition={{
          duration: reduceMotion ? 0.2 : isMobile ? 0.78 : 0.7,
          delay: reduceMotion ? 0 : isMobile ? 0.08 + index * 0.04 : 0.12 + index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`absolute bottom-2.5 left-2.5 rounded-[16px] border border-white/10 bg-black/18 p-2.5 backdrop-blur-[4px] sm:bottom-3.5 sm:left-3.5 sm:p-3 lg:bottom-5 lg:left-5 lg:p-4 ${panelWidthClass}`}
      >
        <div className="mb-2 flex items-center gap-2 sm:mb-2.5 sm:gap-2.5">
          <span className="h-px w-6 bg-[hsl(var(--gold)/0.8)] sm:w-8" />
          <span className="text-[8px] font-body uppercase tracking-[0.28em] text-[hsl(var(--gold-light)/0.88)] sm:text-[9px]">
            {image.eyebrow[lang]}
          </span>
        </div>

        <div className="flex items-end justify-between gap-2">
          <h3 className={`font-display text-foreground ${titleMeasureClass} ${titleSizeClass}`}>{image.title[lang]}</h3>
          <span className="shrink-0 pb-0.5 font-body text-[9px] tracking-[0.22em] text-white/52 sm:text-[10px]">
            {numberLabel}
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
};

const GallerySection = () => {
  const { lang, t } = useLang();
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <section id="gallery" className="theme-ivory section-aura section-aura--sapphire section-panel relative overflow-hidden py-24 lg:py-36 bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent" />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.16) 0%, transparent 68%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">{t('gallery.subtitle')}</span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-display text-4xl lg:text-6xl text-foreground">{t('gallery.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[230px]">
          {images.map((image, index) => (
            <GalleryCard
              key={image.alt}
              image={image}
              index={index}
              lang={lang}
              reduceMotion={reduceMotion}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
