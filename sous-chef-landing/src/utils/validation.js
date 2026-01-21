/**
 * Validates email format using regex
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Sanitizes user input by trimming and converting to lowercase
 * @param {string} input - Input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  return input.trim().toLowerCase();
};
