import { useLang } from '@/contexts/LangContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-display text-2xl tracking-wider text-gold">
            NEUE LIEBE
          </a>
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Neue Liebe. {t('footer.rights')}
          </p>
          <div className="text-muted-foreground text-sm font-body">
            <a href="tel:034461599804" className="hover:text-gold transition-colors">034461 599804</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
