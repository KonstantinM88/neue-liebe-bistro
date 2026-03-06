import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
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
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'border-white/10 bg-background/80 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : 'border-white/8 bg-background/30 shadow-[0_12px_36px_rgba(0,0,0,0.18)] backdrop-blur-md'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:h-[74px] sm:px-6 lg:px-8">
          <a href="#home" className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-lg tracking-[0.18em] text-gold sm:text-xl">NEUE LIEBE</span>
            <span className="mt-1 hidden font-body text-[10px] uppercase tracking-[0.34em] text-foreground/45 sm:block">
              Nebra an der Unstrut
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-xs tracking-[0.24em] uppercase text-foreground/76 hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm tracking-wider">
              <button
                onClick={() => setLang('de')}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === 'de' ? 'bg-white/8 text-gold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLang('en')}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === 'en' ? 'bg-white/8 text-gold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="rounded-full border border-gold/60 bg-gold/10 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase text-gold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {t('nav.reserve')}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:border-gold/40 hover:text-gold"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-7xl lg:hidden"
          >
            <div className="rounded-[28px] border border-white/10 bg-background/92 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="font-display text-xl text-gold">Neue Liebe</p>
                  <p className="mt-1 font-body text-[11px] uppercase tracking-[0.28em] text-foreground/45">
                    Nebra an der Unstrut
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-1 text-sm tracking-wider">
                  <button
                    onClick={() => setLang('de')}
                    className={`rounded-full px-2.5 py-1 ${
                      lang === 'de' ? 'bg-white/8 text-gold' : 'text-muted-foreground'
                    }`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`rounded-full px-2.5 py-1 ${
                      lang === 'en' ? 'bg-white/8 text-gold' : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 font-body text-sm tracking-[0.22em] uppercase text-foreground hover:border-gold/30 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{t('hero.visit')}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-body">
                  Wetzendorfer Str. 10
                  <br />
                  06642 Nebra (Unstrut)
                  <br />
                  Germany
                </p>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex rounded-full border border-gold/60 bg-gold/10 px-4 py-2.5 text-[11px] tracking-[0.24em] uppercase text-gold"
                >
                  {t('nav.reserve')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
