import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MarqueeSection from '@/components/MarqueeSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLang } from '@/contexts/LangContext';

const Index = () => {
  const { lang } = useLang();

  const title = lang === 'de'
    ? 'Neue Liebe – Restaurant in Nebra (Unstrut) | Terrasse & Genuss'
    : 'Neue Liebe – Restaurant in Nebra (Unstrut) | Terrace & Fine Dining';

  const description = lang === 'de'
    ? 'Restaurant Neue Liebe in Nebra an der Unstrut, Sachsen-Anhalt. Genießen Sie frische Aromen auf unserer Terrasse. Täglich geöffnet bis 23:00. ☎ 034461 599804'
    : 'Restaurant Neue Liebe in Nebra on the Unstrut, Saxony-Anhalt. Enjoy fresh flavors on our terrace. Open daily until 23:00. ☎ 034461 599804';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Neue Liebe",
    "image": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wetzendorfer Str. 10",
      "addressLocality": "Nebra (Unstrut)",
      "postalCode": "06642",
      "addressCountry": "DE",
      "addressRegion": "Sachsen-Anhalt"
    },
    "telephone": "+49-34461-599804",
    "priceRange": "20–30€",
    "servesCuisine": "European",
    "openingHours": "Mo-Su 00:00-23:00",
    "url": typeof window !== 'undefined' ? window.location.href : ''
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Restaurant Nebra, Restaurant Unstrut, Restaurant Nebra Terrasse, Restaurant Sachsen-Anhalt, Neue Liebe, Essen Nebra" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main className="page-stage">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
