import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'de' | 'en';

interface Translations {
  [key: string]: { de: string; en: string };
}

const translations: Translations = {
  // Nav
  'nav.home': { de: 'Startseite', en: 'Home' },
  'nav.about': { de: 'Über uns', en: 'About' },
  'nav.menu': { de: 'Speisekarte', en: 'Our Menu' },
  'nav.gallery': { de: 'Galerie', en: 'Gallery' },
  'nav.contact': { de: 'Kontakt', en: 'Contact' },
  'nav.reserve': { de: 'Reservieren', en: 'Book Now' },

  // Hero
  'hero.title': { de: 'Gemütliches Dining-Erlebnis mit authentischen Aromen', en: 'Cozy Dining Experience with Authentic Flavor Delights' },
  'hero.subtitle': { de: 'Willkommen bei Neue Liebe', en: 'Welcome to Neue Liebe' },
  'hero.explore': { de: 'Entdecken', en: 'Explore More' },
  'hero.visit': { de: 'Besuchen Sie uns', en: 'Visit Us' },
  'hero.contactUs': { de: 'Kontaktieren Sie uns', en: 'Contact Us' },

  // About
  'about.welcome': { de: 'Willkommen', en: 'Welcome' },
  'about.title': { de: 'Köstliche Gerichte: Frische Aromen für jeden Geschmack', en: 'Delicious Bites: Fresh Flavors for Every Taste' },
  'about.desc': { de: 'Wir schaffen unvergessliche kulinarische Erlebnisse, die Innovation mit außergewöhnlichem Service verbinden. Unsere eleganten Gerichte sorgen dafür, dass jeder Besuch unvergesslich bleibt.', en: 'We create unforgettable dining experiences that blend culinary innovation with exceptional service. Our elegantly crafted dishes ensure every visit is memorable.' },
  'about.cta': { de: 'Bereit loszulegen?', en: 'Ready to get started?' },
  'about.hours': { de: 'Öffnungszeiten', en: 'Opening Hours' },
  'about.hoursDetail': { de: 'Täglich geöffnet bis 23:00 Uhr', en: 'Daily open — Closes at 23:00' },

  // Menu
  'menu.title': { de: 'Unsere Speisekarte', en: 'Our Menu' },
  'menu.subtitle': { de: 'Entdecken Sie unsere kulinarischen Kreationen', en: 'Discover our culinary creations' },
  'menu.starters': { de: 'Vorspeisen', en: 'Starters' },
  'menu.main': { de: 'Hauptgerichte', en: 'Main Courses' },
  'menu.desserts': { de: 'Desserts', en: 'Desserts' },
  'menu.drinks': { de: 'Getränke', en: 'Drinks' },
  'menu.avg': { de: 'Durchschnittspreis: 20–30€ pro Person', en: 'Average price: 20–30€ per person' },

  // Gallery
  'gallery.title': { de: 'Galerie', en: 'Gallery' },
  'gallery.subtitle': { de: 'Einblicke in unser Restaurant', en: 'A Glimpse Into Our Restaurant' },

  // Contact
  'contact.title': { de: 'Kontakt', en: 'Contact' },
  'contact.address': { de: 'Adresse', en: 'Address' },
  'contact.phone': { de: 'Telefon', en: 'Phone' },
  'contact.hours': { de: 'Öffnungszeiten', en: 'Opening Hours' },
  'contact.hoursDetail': { de: 'Täglich geöffnet · Schließt um 23:00', en: 'Daily open · Closes at 23:00' },
  'contact.findUs': { de: 'So finden Sie uns', en: 'Find Us' },

  // Footer
  'footer.rights': { de: 'Alle Rechte vorbehalten.', en: 'All rights reserved.' },

  // Marquee
  'marquee.text': { de: 'Köstliche Aromen · Gemütliche Atmosphäre · Perfekte Terrasse', en: 'Delicious Flavors · Cozy Atmosphere · Perfect Terrace' },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'de',
  setLang: () => {},
  t: (key: string) => key,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('de');

  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
