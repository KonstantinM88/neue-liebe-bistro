import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.menu'), href: '#menu' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="font-display text-2xl tracking-wider text-gold">
          NEUE LIEBE
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm tracking-[0.2em] uppercase text-foreground hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language switcher */}
          <div className="flex items-center gap-1 text-sm tracking-wider">
            <button
              onClick={() => setLang('de')}
              className={`px-2 py-1 transition-colors ${lang === 'de' ? 'text-gold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              DE
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-gold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="border border-gold text-gold px-6 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {t('nav.reserve')}
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-[0.2em] uppercase text-foreground hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 text-sm tracking-wider pt-4 border-t border-border">
                <button
                  onClick={() => setLang('de')}
                  className={`px-2 py-1 ${lang === 'de' ? 'text-gold' : 'text-muted-foreground'}`}
                >
                  DE
                </button>
                <span className="text-muted-foreground">/</span>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 ${lang === 'en' ? 'text-gold' : 'text-muted-foreground'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
