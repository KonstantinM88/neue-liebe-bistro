import type { FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import ScrollReveal from '@/components/ScrollReveal';

const fieldLabelClass = 'mb-2 block font-body text-[10px] uppercase tracking-[0.28em] text-gold';
const fieldClass =
  'h-14 w-full rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 font-body text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-foreground/32 focus:border-gold/42 focus:bg-white/[0.07]';
const textareaClass =
  'min-h-[132px] w-full rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-4 font-body text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-foreground/32 focus:border-gold/42 focus:bg-white/[0.07]';

const ReservationSection = () => {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="reservation"
      className="theme-merlot-noir section-aura section-aura--merlot section-panel relative overflow-hidden bg-dark-deep py-24 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(199,149,82,0.18),transparent_22%),radial-gradient(circle_at_50%_50%,rgba(175,98,64,0.1),transparent_32%),linear-gradient(90deg,rgba(0,0,0,0.12),transparent_14%,transparent_86%,rgba(0,0,0,0.12))]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(196,153,91,0.18),transparent)] lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal className="text-center">
          <span className="font-body text-xs uppercase tracking-[0.32em] text-gold">{t('reservation.eyebrow')}</span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-display text-4xl text-foreground lg:text-6xl">{t('reservation.title')}</h2>
          <p className="mx-auto mt-5 max-w-[38rem] font-body text-[0.98rem] leading-[1.9] text-foreground/66 sm:text-[1.04rem]">
            {t('reservation.description')}
          </p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 max-w-4xl"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-[radial-gradient(circle,rgba(199,149,82,0.18),transparent_64%)] blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-6 shadow-[0_32px_110px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:px-7 sm:py-8 lg:rounded-[34px] lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,146,46,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_22%)]" />

            <form onSubmit={handleSubmit} className="relative z-10 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="reservation-first-name" className={fieldLabelClass}>
                  {t('reservation.firstName')}
                </label>
                <input
                  id="reservation-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder={t('reservation.firstName')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="reservation-last-name" className={fieldLabelClass}>
                  {t('reservation.lastName')}
                </label>
                <input
                  id="reservation-last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder={t('reservation.lastName')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="reservation-email" className={fieldLabelClass}>
                  {t('reservation.email')}
                </label>
                <input
                  id="reservation-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mail@beispiel.de"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="reservation-phone" className={fieldLabelClass}>
                  {t('reservation.phone')}
                </label>
                <input
                  id="reservation-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+49 ..."
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="reservation-date" className={fieldLabelClass}>
                  {t('reservation.date')}
                </label>
                <input
                  id="reservation-date"
                  name="date"
                  type="date"
                  className={fieldClass}
                  style={{ colorScheme: 'dark' }}
                />
              </div>

              <div>
                <label htmlFor="reservation-time" className={fieldLabelClass}>
                  {t('reservation.time')}
                </label>
                <input
                  id="reservation-time"
                  name="time"
                  type="time"
                  className={fieldClass}
                  style={{ colorScheme: 'dark' }}
                />
              </div>

              <div>
                <label htmlFor="reservation-guests" className={fieldLabelClass}>
                  {t('reservation.guests')}
                </label>
                <input
                  id="reservation-guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="20"
                  placeholder={t('reservation.guestsPlaceholder')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="reservation-occasion" className={fieldLabelClass}>
                  {t('reservation.occasion')}
                </label>
                <select
                  id="reservation-occasion"
                  name="occasion"
                  defaultValue=""
                  className={fieldClass}
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" disabled>
                    {t('reservation.occasionPlaceholder')}
                  </option>
                  <option value="dinner">{t('reservation.occasionDinner')}</option>
                  <option value="birthday">{t('reservation.occasionBirthday')}</option>
                  <option value="anniversary">{t('reservation.occasionAnniversary')}</option>
                  <option value="business">{t('reservation.occasionBusiness')}</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="reservation-notes" className={fieldLabelClass}>
                  {t('reservation.notes')}
                </label>
                <textarea
                  id="reservation-notes"
                  name="notes"
                  placeholder={t('reservation.notesPlaceholder')}
                  className={textareaClass}
                />
              </div>

              <div className="sm:col-span-2">
                <p className="mb-5 text-center font-body text-sm leading-relaxed text-foreground/56">
                  {t('reservation.note')}
                </p>
                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gold/60 bg-[linear-gradient(135deg,rgba(210,170,102,0.96),rgba(186,143,76,0.94))] px-6 font-body text-[11px] uppercase tracking-[0.3em] text-[rgba(31,20,12,0.94)] shadow-[0_16px_34px_rgba(194,152,87,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {t('reservation.submit')}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
