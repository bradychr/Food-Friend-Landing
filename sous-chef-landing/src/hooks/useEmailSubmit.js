import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { validateEmail, sanitizeInput } from '../utils/validation';
import { ERROR_MESSAGES, FORM_SOURCES, PLATFORM_OPTIONS } from '../utils/constants';

/**
 * Custom hook for handling email submission to waitlist
 * @returns {Object} - { submitEmail, loading, error, success }
 */
export const useEmailSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitEmail = async (
    email,
    source = FORM_SOURCES.HERO,
    platformInterest = PLATFORM_OPTIONS.BOTH
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Client-side validation
    if (!validateEmail(email)) {
      setError(ERROR_MESSAGES.INVALID_EMAIL);
      setLoading(false);
      return false;
    }

    const sanitizedEmail = sanitizeInput(email);

    try {
      // Insert to Supabase
      const { data, error: supabaseError } = await supabase
        .from('waitlist_signups')
        .insert([
          {
            email: sanitizedEmail,
            source,
            platform_interest: platformInterest,
            metadata: {
              user_agent: navigator.userAgent,
              referrer: document.referrer || 'direct',
              submitted_at: new Date().toISOString(),
            },
          },
        ])
        .select();

      if (supabaseError) {
        // Handle duplicate email gracefully
        if (supabaseError.code === '23505') {
          setError(ERROR_MESSAGES.DUPLICATE_EMAIL);
        } else {
          setError(ERROR_MESSAGES.GENERIC_ERROR);
          console.error('Supabase error:', supabaseError);
        }
        setLoading(false);
        return false;
      }

      setSuccess(true);
      setLoading(false);
      return true;
    } catch (err) {
      setError(ERROR_MESSAGES.NETWORK_ERROR);
      console.error('Submission error:', err);
      setLoading(false);
      return false;
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return { submitEmail, loading, error, success, reset };
};
