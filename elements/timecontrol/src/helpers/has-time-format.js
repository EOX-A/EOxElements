/**
 * Whether a Day.js format includes time tokens outside bracketed literal text
 * @param {string} [format] - The date display format
 * @returns {boolean} Whether hours, minutes, seconds, or milliseconds are displayed
 */
export default function hasTimeFormat(format) {
  // without a format, Day.js falls back to its ISO default, which includes time
  if (!format) return true;
  return /[HhmsS]/.test(format.replace(/\[[^\]]*\]/g, ""));
}
