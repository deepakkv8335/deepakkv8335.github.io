import { AnimatePresence, motion } from 'framer-motion';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import useContactForm from '@/hooks/useContactForm.js';

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
];

function StatusBanner({ status, onDismiss }) {
  if (status === 'success') {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className="flex items-start gap-2.5 rounded-xl border border-line bg-accent-soft px-4 py-3 text-sm text-ink"
      >
        <CircleCheck size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
        <p>Thanks for reaching out — your message has been sent. I&apos;ll reply soon.</p>
      </motion.div>
    );
  }

  if (status === 'error') {
    return (
      <motion.div
        role="alert"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className="flex items-start gap-2.5 rounded-xl border border-line bg-red-500/10 px-4 py-3 text-sm text-ink"
      >
        <CircleAlert size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-red-500" />
        <div className="flex-1">
          <p>Something went wrong sending your message. Please try again.</p>
          <button
            type="button"
            onClick={onDismiss}
            className="mt-1 font-medium text-accent hover:underline"
          >
            Dismiss
          </button>
        </div>
      </motion.div>
    );
  }

  if (status === 'unconfigured') {
    return (
      <motion.div
        role="alert"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className="flex items-start gap-2.5 rounded-xl border border-line bg-red-500/10 px-4 py-3 text-sm text-ink"
      >
        <CircleAlert size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-red-500" />
        <div className="flex-1">
          <p>
            Email sending isn&apos;t configured yet — reach out directly using the details above.
          </p>
          <button
            type="button"
            onClick={onDismiss}
            className="mt-1 font-medium text-accent hover:underline"
          >
            Dismiss
          </button>
        </div>
      </motion.div>
    );
  }

  return null;
}

export default function ContactForm() {
  const { values, errors, status, updateField, submit, dismissStatus } = useContactForm();
  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-5">
      <AnimatePresence mode="wait" initial={false}>
        {status !== 'idle' && status !== 'submitting' && (
          <StatusBanner status={status} onDismiss={dismissStatus} />
        )}
      </AnimatePresence>

      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.slice(0, 2).map(({ name, label, type, autoComplete }) => (
          <div key={name}>
            <label htmlFor={`contact-${name}`} className="text-sm font-medium text-ink">
              {label}
            </label>
            <input
              id={`contact-${name}`}
              name={name}
              type={type}
              autoComplete={autoComplete}
              value={values[name]}
              onChange={(event) => updateField(name, event.target.value)}
              aria-invalid={Boolean(errors[name])}
              aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
              disabled={isSubmitting}
              className="mt-1.5 w-full rounded-xl border border-line bg-white/70 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-accent disabled:opacity-60 dark:bg-white/[0.05]"
            />
            {errors[name] && (
              <p id={`contact-${name}-error`} className="mt-1.5 text-sm text-red-500">
                {errors[name]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="contact-subject" className="text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          autoComplete="off"
          value={values.subject}
          onChange={(event) => updateField('subject', event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          disabled={isSubmitting}
          className="mt-1.5 w-full rounded-xl border border-line bg-white/70 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-accent disabled:opacity-60 dark:bg-white/[0.05]"
        />
        {errors.subject && (
          <p id="contact-subject-error" className="mt-1.5 text-sm text-red-500">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          disabled={isSubmitting}
          className="mt-1.5 w-full resize-y rounded-xl border border-line bg-white/70 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-accent disabled:opacity-60 dark:bg-white/[0.05]"
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-accent-solid px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle size={18} aria-hidden="true" className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
