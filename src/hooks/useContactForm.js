import { useCallback, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// True once real EmailJS credentials are set in .env — see .env.example.
const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const EMPTY_VALUES = { name: '', email: '', subject: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

/**
 * Drives the contact form: field state, validation, and the EmailJS submit call.
 * `status` is one of 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'.
 */
export default function useContactForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const updateField = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }, []);

  const dismissStatus = useCallback(() => setStatus('idle'), []);

  const submit = useCallback(
    async (event) => {
      event.preventDefault();

      const nextErrors = validate(values);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;

      if (!isEmailConfigured) {
        setStatus('unconfigured');
        return;
      }

      setStatus('submitting');
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: values.name.trim(),
            from_email: values.email.trim(),
            subject: values.subject.trim(),
            message: values.message.trim(),
          },
          { publicKey: PUBLIC_KEY },
        );
        setStatus('success');
        setValues(EMPTY_VALUES);
      } catch {
        setStatus('error');
      }
    },
    [values],
  );

  return { values, errors, status, updateField, submit, dismissStatus, isEmailConfigured };
}
