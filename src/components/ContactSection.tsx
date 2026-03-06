import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';

const ContactSection = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 lg:py-36 bg-dark-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">{t('contact.findUs')}</span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-display text-4xl lg:text-6xl text-foreground">{t('contact.title')}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex gap-5">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-2 font-body">{t('contact.address')}</h4>
                <p className="text-foreground font-body">Wetzendorfer Str. 10</p>
                <p className="text-muted-foreground font-body">06642 Nebra (Unstrut)</p>
                <p className="text-muted-foreground font-body">Germany</p>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-2 font-body">{t('contact.phone')}</h4>
                <a href="tel:034461599804" className="text-foreground hover:text-gold transition-colors font-body">
                  034461 599804
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-2 font-body">{t('contact.hours')}</h4>
                <p className="text-foreground font-body">{t('contact.hoursDetail')}</p>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-full min-h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.5!2d11.5554!3d51.2847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE3JzA0LjkiTiAxMcKwMzMnMTkuNCJF!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.3)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Neue Liebe Restaurant Nebra"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
