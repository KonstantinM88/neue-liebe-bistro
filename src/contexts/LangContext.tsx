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
  'hero.badge': { de: 'Restaurant · Gastraum · Nebra (Unstrut)', en: 'Restaurant · Dining Room · Nebra (Unstrut)' },
  'hero.description': {
    de: 'Ein heller Gastraum mit warmem Tageslicht, gemütlichen Sitznischen und entspannter Atmosphäre für ruhige Genussmomente in Nebra an der Unstrut.',
    en: 'A bright dining room with warm daylight, cozy seating corners, and a calm atmosphere for unhurried moments in Nebra on the Unstrut.',
  },
  'hero.explore': { de: 'Entdecken', en: 'Explore More' },
  'hero.visit': { de: 'Besuchen Sie uns', en: 'Visit Us' },
  'hero.contactUs': { de: 'Kontaktieren Sie uns', en: 'Contact Us' },
  'hero.callNow': { de: 'Jetzt anrufen', en: 'Call now' },
  'hero.openLabel': { de: 'Jeden Tag für Sie', en: 'Here for you daily' },
  'hero.openValue': { de: 'Geöffnet bis 23:00 Uhr', en: 'Open until 23:00' },
  'hero.experienceLabel': { de: 'Atmosphäre', en: 'Atmosphere' },
  'hero.experienceValue': {
    de: 'Licht, Ruhe, feine Gemütlichkeit',
    en: 'Light, calm, refined comfort',
  },
  'hero.addressHeadline': { de: 'Wetzendorfer Str. 10', en: 'Wetzendorfer Str. 10' },
  'hero.addressDetail': { de: '06642 Nebra (Unstrut)', en: '06642 Nebra (Unstrut)' },
  'hero.hoursHeadline': { de: 'Täglich geöffnet', en: 'Open every day' },
  'hero.hoursDetail': {
    de: 'Für entspannte Genussmomente bis 23:00 Uhr.',
    en: 'For relaxed dining moments until 23:00.',
  },
  'hero.phoneHeadline': { de: '034461 599804', en: '034461 599804' },
  'hero.phoneDetail': {
    de: 'Reservierungen und persönliche Anfragen gern telefonisch.',
    en: 'Reservations and personal inquiries welcome by phone.',
  },
  'hero.dishLabel': { de: 'Detail aus der Küche', en: 'Kitchen detail' },
  'hero.dishValue': {
    de: 'Fein angerichtet, elegant serviert',
    en: 'Carefully plated, elegantly served',
  },

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
  'menu.starters': { de: 'Klassiker', en: 'Classics' },
  'menu.main': { de: 'Pfanne & Burger', en: 'Pan Dishes & Burgers' },
  'menu.desserts': { de: 'Steaks & Medaillons', en: 'Steaks & Medallions' },
  'menu.beerSnacks': { de: 'Zum Bier', en: 'Beer Snacks' },
  'menu.drinks': { de: 'Bier & Drinks', en: 'Beer & Drinks' },
  'menu.avg': { de: 'Preise in dieser Auswahl: 4,50€ bis 19,50€', en: 'Prices in this selection: €4.50 to €19.50' },

  // Gallery
  'gallery.title': { de: 'Galerie', en: 'Gallery' },
  'gallery.subtitle': { de: 'Einblicke in unser Restaurant', en: 'A Glimpse Into Our Restaurant' },

  // Reservation
  'reservation.eyebrow': { de: 'Ihren Platz sichern', en: 'Secure your table' },
  'reservation.title': { de: 'Tisch reservieren', en: 'Reserve your table' },
  'reservation.description': {
    de: 'Wir freuen uns auf Ihren Besuch. Teilen Sie uns Datum, Uhrzeit und Anlass mit, damit wir Ihren Tisch in der Neuen Liebe stilvoll vorbereiten können.',
    en: 'We look forward to your visit. Share your date, time, and occasion so we can prepare your table at Neue Liebe with care.',
  },
  'reservation.firstName': { de: 'Vorname', en: 'First name' },
  'reservation.lastName': { de: 'Nachname', en: 'Last name' },
  'reservation.email': { de: 'E-Mail', en: 'E-mail' },
  'reservation.phone': { de: 'Telefon', en: 'Phone' },
  'reservation.date': { de: 'Datum', en: 'Date' },
  'reservation.time': { de: 'Uhrzeit', en: 'Time' },
  'reservation.guests': { de: 'Anzahl Personen', en: 'Number of guests' },
  'reservation.guestsPlaceholder': { de: '4', en: '4' },
  'reservation.occasion': { de: 'Anlass', en: 'Occasion' },
  'reservation.occasionPlaceholder': { de: 'Anlass wählen', en: 'Choose occasion' },
  'reservation.occasionDinner': { de: 'Dinner', en: 'Dinner' },
  'reservation.occasionBirthday': { de: 'Geburtstag', en: 'Birthday' },
  'reservation.occasionAnniversary': { de: 'Jahrestag', en: 'Anniversary' },
  'reservation.occasionBusiness': { de: 'Geschäftlich', en: 'Business' },
  'reservation.notes': { de: 'Sonderwünsche', en: 'Special requests' },
  'reservation.notesPlaceholder': {
    de: 'Allergien, Kinderstuhl, ruhiger Tisch oder weitere Wünsche ...',
    en: 'Allergies, baby chair, quiet table, or any other wishes ...',
  },
  'reservation.note': {
    de: 'Reservierungen werden persönlich telefonisch bestätigt: 034461 599804',
    en: 'Reservations are confirmed personally by phone: 034461 599804',
  },
  'reservation.submit': { de: 'Reservierung anfragen', en: 'Request reservation' },

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
  'marquee.text': {
    de: 'Feine Aromen · Lichtdurchfluteter Gastraum · Ruhige Genussmomente · Täglich bis 23:00',
    en: 'Refined flavors · Light-filled dining room · Calm dining moments · Open daily until 23:00',
  },
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
