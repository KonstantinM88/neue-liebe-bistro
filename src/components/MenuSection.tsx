import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import appetizer from '@/assets/appetizer.jpg';
import mainCourse from '@/assets/main-course.jpg';
import dessert from '@/assets/dessert.jpg';
import cocktail from '@/assets/cocktail.jpg';

interface MenuItem {
  name: { de: string; en: string };
  desc: { de: string; en: string };
  price: string;
}

const menuData: Record<string, { items: MenuItem[]; image: string }> = {
  starters: {
    image: appetizer,
    items: [
      { name: { de: 'Bruschetta Classica', en: 'Classic Bruschetta' }, desc: { de: 'Geröstetes Brot mit Tomaten, Basilikum & Olivenöl', en: 'Toasted bread with tomatoes, basil & olive oil' }, price: '8,50€' },
      { name: { de: 'Carpaccio vom Rind', en: 'Beef Carpaccio' }, desc: { de: 'Hauchdünn geschnitten mit Rucola & Parmesan', en: 'Thinly sliced with arugula & parmesan' }, price: '12,90€' },
      { name: { de: 'Saisonale Suppe', en: 'Seasonal Soup' }, desc: { de: 'Frische Zutaten der Saison', en: 'Fresh seasonal ingredients' }, price: '7,50€' },
      { name: { de: 'Garnelen in Knoblauch', en: 'Garlic Prawns' }, desc: { de: 'Gebratene Garnelen mit Knoblauchbutter', en: 'Pan-fried prawns in garlic butter' }, price: '14,50€' },
    ],
  },
  main: {
    image: mainCourse,
    items: [
      { name: { de: 'Rinderfilet', en: 'Beef Tenderloin' }, desc: { de: 'Mit Rotweinsauce und Gemüse der Saison', en: 'With red wine sauce and seasonal vegetables' }, price: '28,90€' },
      { name: { de: 'Gebratener Lachs', en: 'Pan-Seared Salmon' }, desc: { de: 'Auf Blattspinat mit Zitronenbutter', en: 'On baby spinach with lemon butter' }, price: '24,50€' },
      { name: { de: 'Pasta Trüffel', en: 'Truffle Pasta' }, desc: { de: 'Hausgemachte Tagliatelle mit Trüffelcreme', en: 'Homemade tagliatelle with truffle cream' }, price: '19,90€' },
      { name: { de: 'Wiener Schnitzel', en: 'Wiener Schnitzel' }, desc: { de: 'Klassisch paniert mit Kartoffelsalat', en: 'Classic breaded with potato salad' }, price: '22,50€' },
    ],
  },
  desserts: {
    image: dessert,
    items: [
      { name: { de: 'Schokoladen-Mousse', en: 'Chocolate Mousse' }, desc: { de: 'Belgische Schokolade mit Goldstaub', en: 'Belgian chocolate with gold dust' }, price: '9,50€' },
      { name: { de: 'Panna Cotta', en: 'Panna Cotta' }, desc: { de: 'Mit Waldbeeren-Kompott', en: 'With forest berry compote' }, price: '8,90€' },
      { name: { de: 'Crème Brûlée', en: 'Crème Brûlée' }, desc: { de: 'Klassisch mit Vanille', en: 'Classic vanilla' }, price: '8,50€' },
    ],
  },
  drinks: {
    image: cocktail,
    items: [
      { name: { de: 'Hauswein (Glas)', en: 'House Wine (Glass)' }, desc: { de: 'Rot oder Weiß aus der Region', en: 'Red or white from the region' }, price: '5,50€' },
      { name: { de: 'Craft Cocktails', en: 'Craft Cocktails' }, desc: { de: 'Handgemixte Cocktails unserer Bar', en: 'Handcrafted cocktails from our bar' }, price: '10,50€' },
      { name: { de: 'Aperol Spritz', en: 'Aperol Spritz' }, desc: { de: 'Der italienische Klassiker', en: 'The Italian classic' }, price: '8,50€' },
      { name: { de: 'Lokale Biere', en: 'Local Beers' }, desc: { de: 'Auswahl regionaler Brauereien', en: 'Selection from regional breweries' }, price: '4,50€' },
    ],
  },
};

const categoryKeys = ['starters', 'main', 'desserts', 'drinks'] as const;
const categoryTranslationKeys: Record<string, string> = {
  starters: 'menu.starters',
  main: 'menu.main',
  desserts: 'menu.desserts',
  drinks: 'menu.drinks',
};

const MenuSection = () => {
  const { lang, t } = useLang();
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string>('starters');
  const data = menuData[active];
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
      filter: reduceMotion ? 'blur(0px)' : 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: reduceMotion ? 0.2 : 0.72,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="menu" className="py-24 lg:py-36 bg-dark-deep relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, x: reduceMotion ? 0 : -54 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-body"
          >
            {t('menu.subtitle')}
          </motion.span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <motion.h2
            initial={{ opacity: 0, x: reduceMotion ? 0 : 58 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.82, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl lg:text-6xl text-foreground tracking-[-0.04em]"
          >
            {t('menu.title')}
          </motion.h2>
        </div>

        {/* Category tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.14,
              },
            },
          }}
          className="mb-16 flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {categoryKeys.map((key) => (
            <motion.button
              key={key}
              variants={{
                hidden: {
                  opacity: 0,
                  y: reduceMotion ? 0 : 28,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(key)}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              className={`rounded-full border px-5 py-3 text-[11px] md:px-6 md:text-sm tracking-[0.2em] uppercase font-body transition-all duration-300 backdrop-blur-md ${
                active === key
                  ? 'border-gold/65 bg-gold/12 text-gold shadow-[0_10px_28px_rgba(201,146,46,0.16)]'
                  : 'border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/18 hover:text-foreground'
              }`}
            >
              {t(categoryTranslationKeys[key])}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu content */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -26,
              scale: reduceMotion ? 1 : 0.985,
            }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[34px] bg-[radial-gradient(circle,rgba(201,146,46,0.15),transparent_72%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
              <div className="overflow-hidden rounded-[22px]">
                <img
                  src={data.image}
                  alt={t(categoryTranslationKeys[active])}
                  className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            key={active + '-items'}
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="grid gap-4 sm:gap-5"
          >
            {data.items.map((item, i) => (
              <motion.article
                key={`${active}-${i}`}
                variants={itemVariants}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-md transition-colors duration-300 sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_38%,transparent)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-gold/20 bg-white/[0.04] px-2 text-[10px] tracking-[0.22em] text-gold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px w-10 bg-gold/35" />
                    </div>
                    <h4 className="mt-4 font-display text-[1.45rem] leading-tight tracking-[-0.03em] text-foreground sm:text-[1.65rem]">
                      {item.name[lang]}
                    </h4>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-3 py-2 text-sm text-gold shadow-[0_8px_20px_rgba(201,146,46,0.14)]">
                    {item.price}
                  </span>
                </div>
                <p className="relative mt-4 max-w-[44ch] font-body text-sm leading-relaxed text-foreground/66 sm:text-[0.96rem]">
                  {item.desc[lang]}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-muted-foreground text-sm font-body mt-12">{t('menu.avg')}</p>
      </div>
    </section>
  );
};

export default MenuSection;
