import md5 from "md5";

/**
 * Converts an email address into a Gravatar image request URL.
 * Emails are hashed with md5.
 *
 * @param {string} email The email to generate a url for.
 * @returns {string} The Gravatar image request URL.
 */
export const generateGravatarUrl = (email: string): string => {
  const lowercase = email.toLowerCase();
  const trimmed = lowercase.trim();
  const hash = md5(trimmed);
  return `https://www.gravatar.com/avatar/${hash}?d=robohash`;
};
