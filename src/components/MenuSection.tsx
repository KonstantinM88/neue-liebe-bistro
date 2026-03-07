import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import { useIsMobile } from '@/hooks/use-mobile';
import backfischDesktop from '@/assets/backfisch_desktop_1600x1200.webp';
import backfischMobile from '@/assets/backfisch_mobile_900.webp';
import bauernfruhstuckDesktop from '@/assets/bauernfruhstuck_desktop_1600x1200.webp';
import bauernfruhstuckMobile from '@/assets/bauernfruhstuck_mobile_900.webp';
import burgerStGeorgDesktop from '@/assets/burger_st_georg_desktop_1600x1200.webp';
import burgerStGeorgMobile from '@/assets/burger_st_georg_mobile_900.webp';
import geschnetzeltesDesktop from '@/assets/geschnetzeltes_desktop_1600x1200.webp';
import geschnetzeltesMobile from '@/assets/geschnetzeltes_mobile_900.webp';
import kostritzerDesktop from '@/assets/kostritzer_desktop.webp';
import kostritzerMobile from '@/assets/kostritzer_mobile.webp';
import germanSnacksDesktop from '@/assets/german_snacks_desktop.webp';
import germanSnacksMobile from '@/assets/german_snacks_mobile.webp';
import nebraerBiersteakDesktop from '@/assets/nebraer_biersteak_desktop_1600x1200.webp';
import nebraerBiersteakMobile from '@/assets/nebraer_biersteak_mobile_900.webp';
import schweinemedaillonsDesktop from '@/assets/schweinemedaillons_desktop_1600x1200.webp';
import schweinemedaillonsMobile from '@/assets/schweinemedaillons_mobile_900.webp';
import strammerMaxDesktop from '@/assets/strammer_max_desktop_1600x1200.webp';
import strammerMaxMobile from '@/assets/strammer_max_mobile_900.webp';
import zigeunerSteakDesktop from '@/assets/zigeuner_steak_desktop_1600x1200.webp';
import zigeunerSteakMobile from '@/assets/zigeuner_steak_mobile_900.webp';

interface MenuImageSet {
  mobile: string;
  desktop: string;
}

interface MenuItem {
  name: { de: string; en: string };
  desc: { de: string; en: string };
  price: string;
  image?: MenuImageSet;
}

interface MenuCategory {
  items: MenuItem[];
  image: MenuImageSet;
}

const menuData: Record<string, MenuCategory> = {
  starters: {
    image: {
      mobile: bauernfruhstuckMobile,
      desktop: bauernfruhstuckDesktop,
    },
    items: [
      {
        name: { de: 'Bauernfrühstück', en: 'Farmer’s Breakfast' },
        desc: {
          de: 'Serviert mit Rohkostsalat und Gewürzgurke.',
          en: 'Served with fresh salad and pickled cucumber.',
        },
        price: '12,50€',
        image: {
          mobile: bauernfruhstuckMobile,
          desktop: bauernfruhstuckDesktop,
        },
      },
      {
        name: { de: 'Strammer Max', en: 'Strammer Max' },
        desc: {
          de: 'Schwarzbrot mit Schinken, zwei Spiegeleiern, Rohkostsalat und Gewürzgurke.',
          en: 'Dark bread with ham, two fried eggs, side salad, and pickled cucumber.',
        },
        price: '9,50€',
        image: {
          mobile: strammerMaxMobile,
          desktop: strammerMaxDesktop,
        },
      },
      {
        name: { de: 'Backfisch', en: 'Fried Fish Fillet' },
        desc: {
          de: 'Serviert mit hausgemachter Remoulade und Bratkartoffeln.',
          en: 'Served with homemade remoulade and pan-fried potatoes.',
        },
        price: '13,50€',
        image: {
          mobile: backfischMobile,
          desktop: backfischDesktop,
        },
      },
    ],
  },
  main: {
    image: {
      mobile: geschnetzeltesMobile,
      desktop: geschnetzeltesDesktop,
    },
    items: [
      {
        name: { de: 'Geschnetzeltes', en: 'Creamy Sliced Chicken' },
        desc: {
          de: 'Zarte Hähnchenbruststreifen mit cremigen Champignons, serviert mit Kroketten.',
          en: 'Tender chicken breast strips with creamy mushrooms, served with croquettes.',
        },
        price: '18,50€',
        image: {
          mobile: geschnetzeltesMobile,
          desktop: geschnetzeltesDesktop,
        },
      },
      {
        name: { de: 'Burger „St. Georg“', en: 'St. Georg Burger' },
        desc: {
          de: 'Saftiger Rindfleisch-Burger mit Bacon, Spiegelei, Weißkrautsalat, BBQ-Sauce, Gewürzgurke und Schmorzwiebeln, serviert mit Pommes.',
          en: 'Juicy beef burger with bacon, fried egg, cabbage slaw, BBQ sauce, pickled cucumber, braised onions, and fries.',
        },
        price: '19,50€',
        image: {
          mobile: burgerStGeorgMobile,
          desktop: burgerStGeorgDesktop,
        },
      },
    ],
  },
  desserts: {
    image: {
      mobile: nebraerBiersteakMobile,
      desktop: nebraerBiersteakDesktop,
    },
    items: [
      {
        name: { de: 'Nebraer-Biersteak', en: 'Nebra Beer Steak' },
        desc: {
          de: 'Gebratenes Schweinenackensteak mit Schmorzwiebeln, mit Nebraer Bier abgelöscht und mit Bratkartoffeln serviert.',
          en: 'Pan-seared pork neck steak with braised onions, finished with Nebra beer and served with fried potatoes.',
        },
        price: '18,50€',
        image: {
          mobile: nebraerBiersteakMobile,
          desktop: nebraerBiersteakDesktop,
        },
      },
      {
        name: { de: 'Zarte Schweinemedaillons', en: 'Tender Pork Medallions' },
        desc: {
          de: 'Serviert mit cremigen Pilzen und Kroketten.',
          en: 'Served with creamy mushrooms and croquettes.',
        },
        price: '19,50€',
        image: {
          mobile: schweinemedaillonsMobile,
          desktop: schweinemedaillonsDesktop,
        },
      },
      {
        name: { de: '„Zigeuner-Steak“', en: 'Paprika Steak' },
        desc: {
          de: 'Saftig gebratenes Schweinenackensteak mit kräftiger Paprikagemüse-Sauce und Pommes.',
          en: 'Juicy pork neck steak with a hearty paprika vegetable sauce and fries.',
        },
        price: '18,50€',
        image: {
          mobile: zigeunerSteakMobile,
          desktop: zigeunerSteakDesktop,
        },
      },
    ],
  },
  beerSnacks: {
    image: {
      mobile: germanSnacksMobile,
      desktop: germanSnacksDesktop,
    },
    items: [
      {
        name: { de: 'Bierbrett Neue Liebe', en: 'Neue Liebe Beer Board' },
        desc: {
          de: 'Kleine Auswahl aus Kaminwurst, Käsewürfeln, Gewürzgurken und kräftigem Landbrot.',
          en: 'A small board with smoked sausage, cheese cubes, pickled cucumbers, and rustic country bread.',
        },
        price: '12,90€',
      },
      {
        name: { de: 'Brezelknusper mit Obazda', en: 'Pretzel Bites with Obazda' },
        desc: {
          de: 'Warme Laugenbissen mit cremigem Bierkäse-Dip und roten Zwiebeln.',
          en: 'Warm pretzel bites with creamy beer cheese dip and red onions.',
        },
        price: '6,90€',
      },
      {
        name: { de: 'Paprika-Kartoffelecken', en: 'Paprika Potato Wedges' },
        desc: {
          de: 'Knusprige Kartoffelecken mit Rauchpaprika und milder Kräutercreme.',
          en: 'Crispy potato wedges with smoked paprika and mild herb cream.',
        },
        price: '7,50€',
      },
      {
        name: { de: 'Käsekrainer-Happen', en: 'Sausage Bites' },
        desc: {
          de: 'Gebratene Würstchenstücke mit Senfzwiebeln und frischem Brot.',
          en: 'Pan-seared sausage bites with mustard onions and fresh bread.',
        },
        price: '9,80€',
      },
    ],
  },
  drinks: {
    image: {
      mobile: kostritzerMobile,
      desktop: kostritzerDesktop,
    },
    items: [
      {
        name: { de: '„Nebraer Bier“ St. Georg', en: 'Nebra Beer St. Georg' },
        desc: {
          de: 'Feinmilde Bierspezialität mit malzig-süßem, vollmundigem Geschmack. 0,5 l.',
          en: 'A smooth beer specialty with malty sweetness and a full-bodied finish. 0.5 l.',
        },
        price: '4,50€',
      },
      {
        name: { de: 'Köstritzer Schwarzbier', en: 'Köstritzer Black Beer' },
        desc: {
          de: 'Herb-fein mit röstigen Malznoten und eleganter Tiefe. 0,5 l.',
          en: 'Finely bitter with roasted malt notes and elegant depth. 0.5 l.',
        },
        price: '4,80€',
      },
      {
        name: { de: 'Keller-Radler', en: 'Cellar Radler' },
        desc: {
          de: 'Erfrischend gemischt, leicht, spritzig und ideal zum Essen. 0,5 l.',
          en: 'Refreshing and lightly sparkling, ideal alongside hearty dishes. 0.5 l.',
        },
        price: '4,60€',
      },
      {
        name: { de: 'Hausgemachte Limonade', en: 'Homemade Lemonade' },
        desc: {
          de: 'Zitrone, Minze und kühler Sprudel mit frischer Note. 0,4 l.',
          en: 'Lemon, mint, and sparkling water with a fresh finish. 0.4 l.',
        },
        price: '4,90€',
      },
    ],
  },
};

const categoryKeys = ['starters', 'main', 'desserts', 'beerSnacks', 'drinks'] as const;
const categoryTranslationKeys: Record<string, string> = {
  starters: 'menu.starters',
  main: 'menu.main',
  desserts: 'menu.desserts',
  beerSnacks: 'menu.beerSnacks',
  drinks: 'menu.drinks',
};

const MenuSection = () => {
  const { lang, t } = useLang();
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [active, setActive] = useState<string>('starters');
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState<1 | -1>(1);
  const [hasManualSelection, setHasManualSelection] = useState(false);
  const data = menuData[active];
  const imageItemIndexes = data.items
    .map((item, index) => (item.image ? index : -1))
    .filter((index) => index >= 0);
  const hasImageCarousel = imageItemIndexes.length > 1;
  const safeSelectedItemIndex = imageItemIndexes.includes(selectedItemIndex)
    ? selectedItemIndex
    : imageItemIndexes[0] ?? 0;
  const activeImageItem = data.items[safeSelectedItemIndex];
  const activeImage = activeImageItem?.image ?? data.image;

  useEffect(() => {
    setSelectedItemIndex(imageItemIndexes[0] ?? 0);
    setCarouselDirection(1);
    setHasManualSelection(false);
  }, [active]);

  useEffect(() => {
    if (reduceMotion || !hasImageCarousel || hasManualSelection) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setCarouselDirection(1);
      setSelectedItemIndex((current) => {
        const currentIndex = imageItemIndexes.includes(current) ? imageItemIndexes.indexOf(current) : 0;
        const nextIndex = (currentIndex + 1) % imageItemIndexes.length;
        return imageItemIndexes[nextIndex];
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, [hasImageCarousel, hasManualSelection, imageItemIndexes, reduceMotion]);

  const selectItemImage = (index: number) => {
    if (!data.items[index]?.image) {
      return;
    }

    const currentIndex = imageItemIndexes.includes(safeSelectedItemIndex)
      ? imageItemIndexes.indexOf(safeSelectedItemIndex)
      : 0;
    const nextIndex = imageItemIndexes.indexOf(index);

    setCarouselDirection(nextIndex >= currentIndex ? 1 : -1);
    setSelectedItemIndex(index);
    setHasManualSelection(true);
  };

  const moveCarousel = (direction: 1 | -1) => {
    if (!hasImageCarousel) {
      return;
    }

    setHasManualSelection(true);
    setCarouselDirection(direction);
    setSelectedItemIndex((current) => {
      const currentIndex = imageItemIndexes.includes(current) ? imageItemIndexes.indexOf(current) : 0;
      const nextIndex = (currentIndex + direction + imageItemIndexes.length) % imageItemIndexes.length;
      return imageItemIndexes[nextIndex];
    });
  };

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
  const slideVariants = {
    enter: (direction: 1 | -1) => ({
      x: reduceMotion ? 0 : direction > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
    },
    exit: (direction: 1 | -1) => ({
      x: reduceMotion ? 0 : direction > 0 ? '-100%' : '100%',
    }),
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
              className={`rounded-full border px-4 py-3 text-[10px] tracking-[0.16em] uppercase font-body transition-all duration-300 backdrop-blur-md sm:px-5 sm:text-[11px] sm:tracking-[0.2em] md:px-6 md:text-sm ${
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
              <div
                className="relative overflow-hidden rounded-[22px]"
              >
                <motion.div
                  drag={isMobile && hasImageCarousel ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -45) {
                      moveCarousel(1);
                    }

                    if (info.offset.x > 45) {
                      moveCarousel(-1);
                    }
                  }}
                  className="relative"
                >
                  <div className="relative h-[400px]">
                    <AnimatePresence initial={false} custom={carouselDirection}>
                      <motion.div
                        key={`${active}-${safeSelectedItemIndex}-${isMobile ? 'mobile' : 'desktop'}`}
                        custom={carouselDirection}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: reduceMotion ? 0.15 : 0.62, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                      >
                        <img
                          src={isMobile ? activeImage.mobile : activeImage.desktop}
                          alt={activeImageItem?.name[lang] ?? t(categoryTranslationKeys[active])}
                          className="h-full w-full object-cover object-center"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {hasImageCarousel && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center">
                    <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
                      {imageItemIndexes.map((itemIndex) => (
                        <button
                          key={`${active}-dot-${itemIndex}`}
                          type="button"
                          aria-label={data.items[itemIndex].name[lang]}
                          onClick={() => selectItemImage(itemIndex)}
                          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                            safeSelectedItemIndex === itemIndex ? 'bg-gold shadow-[0_0_14px_rgba(201,146,46,0.55)]' : 'bg-white/35 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
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
                onMouseEnter={() => selectItemImage(i)}
                onClick={() => selectItemImage(i)}
                className={`group relative overflow-hidden rounded-[28px] border bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-md transition-colors duration-300 sm:p-6 ${
                  safeSelectedItemIndex === i && item.image
                    ? 'border-gold/35 bg-[linear-gradient(135deg,rgba(201,146,46,0.12),rgba(255,255,255,0.03))]'
                    : 'border-white/10'
                } ${item.image ? 'cursor-pointer' : ''}`}
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
