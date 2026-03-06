import { MapPin, Phone, Clock } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';
import ScrollReveal from '@/components/ScrollReveal';

const ContactSection = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 lg:py-36 bg-dark-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">{t('contact.findUs')}</span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-display text-4xl lg:text-6xl text-foreground">{t('contact.title')}</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <ScrollReveal delay={0.08} className="flex gap-5">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-2 font-body">{t('contact.address')}</h4>
                <p className="text-foreground font-body">Wetzendorfer Str. 10</p>
                <p className="text-muted-foreground font-body">06642 Nebra (Unstrut)</p>
                <p className="text-muted-foreground font-body">Germany</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16} className="flex gap-5">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-2 font-body">{t('contact.phone')}</h4>
                <a href="tel:034461599804" className="text-foreground hover:text-gold transition-colors font-body">
                  034461 599804
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.24} className="flex gap-5">
              <Clock className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-gold text-xs tracking-[0.25em] uppercase mb-2 font-body">{t('contact.hours')}</h4>
                <p className="text-foreground font-body">{t('contact.hoursDetail')}</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18} className="h-[400px] lg:h-full min-h-[350px]">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
