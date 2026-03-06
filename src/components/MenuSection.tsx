import { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [active, setActive] = useState<string>('starters');
  const data = menuData[active];

  return (
    <section id="menu" className="py-24 lg:py-36 bg-dark-deep relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">{t('menu.subtitle')}</span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-display text-4xl lg:text-6xl text-foreground">{t('menu.title')}</h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 md:gap-8 mb-16 flex-wrap">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`text-xs md:text-sm tracking-[0.2em] uppercase font-body px-4 py-2 border transition-all duration-300 ${
                active === key
                  ? 'border-gold text-gold'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {t(categoryTranslationKeys[key])}
            </button>
          ))}
        </div>

        {/* Menu content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={data.image} alt={t(categoryTranslationKeys[active])} className="w-full h-[400px] object-cover" />
          </motion.div>

          <motion.div
            key={active + '-items'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {data.items.map((item, i) => (
              <div key={i} className="border-b border-border pb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-display text-xl text-foreground">{item.name[lang]}</h4>
                  <span className="text-gold font-body text-sm ml-4 shrink-0">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm font-body">{item.desc[lang]}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-muted-foreground text-sm font-body mt-12">{t('menu.avg')}</p>
      </div>
    </section>
  );
};

export default MenuSection;
