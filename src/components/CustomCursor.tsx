import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'textarea',
  'select',
  'summary',
  '[data-cursor="interactive"]',
].join(', ');

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const ringX = useSpring(pointerX, { stiffness: 260, damping: 28, mass: 0.45 });
  const ringY = useSpring(pointerY, { stiffness: 260, damping: 28, mass: 0.45 });
  const dotX = useSpring(pointerX, { stiffness: 720, damping: 42, mass: 0.18 });
  const dotY = useSpring(pointerY, { stiffness: 720, damping: 42, mass: 0.18 });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const syncEnabledState = () => {
      const isEnabled = mediaQuery.matches;
      setEnabled(isEnabled);
      document.body.classList.toggle('custom-cursor-enabled', isEnabled);
    };

    syncEnabledState();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', syncEnabledState);
    } else {
      mediaQuery.addListener(syncEnabledState);
    }

    return () => {
      document.body.classList.remove('custom-cursor-enabled');

      if (mediaQuery.addEventListener) {
        mediaQuery.removeEventListener('change', syncEnabledState);
      } else {
        mediaQuery.removeListener(syncEnabledState);
      }
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      setInteractive(false);
      setPressed(false);
      return undefined;
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);
    const handleWindowBlur = () => setVisible(false);
    const handleMouseLeave = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        setVisible(false);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerover', handlePointerOver, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('blur', handleWindowBlur);
    document.documentElement.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerover', handlePointerOver);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('blur', handleWindowBlur);
      document.documentElement.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [enabled, pointerX, pointerY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[140] h-11 w-11 -ml-[22px] -mt-[22px] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          borderColor: interactive ? 'hsl(var(--gold) / 0.78)' : 'hsl(var(--gold) / 0.52)',
          boxShadow: interactive
            ? '0 0 0 1px hsl(var(--gold) / 0.12), 0 0 22px hsl(var(--gold) / 0.18)'
            : '0 0 0 1px hsl(var(--gold) / 0.06), 0 0 16px hsl(var(--gold) / 0.12)',
          background: 'radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 72%)',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.88 : interactive ? 1.28 : 1,
        }}
        transition={{
          opacity: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
          scale: { type: 'spring', stiffness: 320, damping: 24, mass: 0.45 },
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[141] h-2.5 w-2.5 -ml-[5px] -mt-[5px] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          backgroundColor: 'hsl(var(--gold) / 0.9)',
          boxShadow: '0 0 14px hsl(var(--gold) / 0.28)',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.72 : interactive ? 1.12 : 1,
        }}
        transition={{
          opacity: { duration: 0.16 },
          scale: { type: 'spring', stiffness: 420, damping: 26, mass: 0.22 },
        }}
      />
    </>
  );
};

export default CustomCursor;
