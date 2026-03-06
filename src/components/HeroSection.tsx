import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import heroDish from '@/assets/hero-dish.jpg';
import heroTerrace from '@/assets/hero-terrace.jpg';

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />

      {/* Right side images */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-24 right-24 w-[380px] h-[460px] z-20"
        >
          <div className="img-overlay w-full h-full">
            <img src={heroDish} alt="Gourmet dish at Neue Liebe" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-48 right-0 w-[500px] h-[400px] z-10"
        >
          <img src={heroTerrace} alt="Restaurant Neue Liebe Terrasse" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] max-w-2xl text-foreground uppercase"
        >
          {t('hero.title')}
        </motion.h1>

        {/* Mobile images */}
        <div className="lg:hidden mt-8 flex gap-4">
          <img src={heroDish} alt="Gourmet dish" className="w-1/2 h-48 object-cover" />
          <img src={heroTerrace} alt="Terrasse" className="w-1/2 h-48 object-cover" />
        </div>

        {/* Bottom info row */}
        <div className="mt-16 lg:mt-24 flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h5 className="text-gold text-xs tracking-[0.25em] uppercase mb-3 font-body">{t('hero.visit')}</h5>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Wetzendorfer Str. 10<br />
              06642 Nebra (Unstrut)<br />
              Germany
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h5 className="text-gold text-xs tracking-[0.25em] uppercase mb-3 font-body">{t('hero.contactUs')}</h5>
            <p className="text-muted-foreground text-sm font-body">
              <a href="tel:034461599804" className="hover:text-gold transition-colors">034461 599804</a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="md:ml-auto"
          >
            <a
              href="#about"
              className="border border-gold-muted text-cream px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block font-body"
            >
              {t('hero.explore')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
