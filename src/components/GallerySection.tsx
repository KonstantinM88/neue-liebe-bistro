import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import heroDish from '@/assets/hero-dish.jpg';
import heroTerrace from '@/assets/hero-terrace.jpg';
import interior from '@/assets/interior.jpg';
import cocktail from '@/assets/cocktail.jpg';
import appetizer from '@/assets/appetizer.jpg';
import dessert from '@/assets/dessert.jpg';

const images = [
  { src: interior, alt: 'Restaurant Interior' },
  { src: heroDish, alt: 'Gourmet Dish' },
  { src: heroTerrace, alt: 'Terrasse Nebra' },
  { src: cocktail, alt: 'Craft Cocktail' },
  { src: appetizer, alt: 'Appetizer' },
  { src: dessert, alt: 'Dessert' },
];

const GallerySection = () => {
  const { t } = useLang();

  return (
    <section id="gallery" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">{t('gallery.subtitle')}</span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-display text-4xl lg:text-6xl text-foreground">{t('gallery.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`overflow-hidden group ${i === 0 ? 'row-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? 'h-full' : 'h-64 lg:h-72'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
