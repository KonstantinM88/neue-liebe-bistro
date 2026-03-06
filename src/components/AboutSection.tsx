import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import interior from '@/assets/interior.jpg';

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="img-overlay">
              <img src={interior} alt="Restaurant Neue Liebe Interior" className="w-full h-[500px] object-cover" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">{t('about.welcome')}</span>
            <div className="section-divider mt-4 mb-8" />
            <h2 className="font-display text-3xl lg:text-5xl leading-tight text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body text-base">
              {t('about.desc')}
            </p>

            <a
              href="#menu"
              className="text-gold text-sm tracking-[0.15em] uppercase border-b border-gold pb-1 hover:text-gold-light transition-colors font-body inline-block mb-12"
            >
              {t('about.cta')}
            </a>

            <div className="border-t border-border pt-8">
              <h5 className="text-gold text-xs tracking-[0.25em] uppercase mb-3 font-body">{t('about.hours')}</h5>
              <p className="text-muted-foreground text-sm font-body">{t('about.hoursDetail')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
