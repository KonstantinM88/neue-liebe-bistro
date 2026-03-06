import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

const MarqueeSection = () => {
  const { t } = useLang();
  const text = t('marquee.text');
  const repeated = Array(6).fill(text).join(' · ');

  return (
    <section className="py-12 bg-dark-surface overflow-hidden border-y border-border">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="whitespace-nowrap"
      >
        <span className="font-elegant text-4xl lg:text-6xl italic text-foreground/20 tracking-wider">
          {repeated}
        </span>
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
