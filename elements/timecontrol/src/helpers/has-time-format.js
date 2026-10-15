/**
 * Whether a Day.js format includes time tokens outside bracketed literal text
 * @param {string} format - The date display format
 * @returns {boolean} Whether hours, minutes, seconds, or milliseconds are displayed
 */
export default function hasTimeFormat(format) {
  return /[HhmsS]/.test(format.replace(/\[[^\]]*\]/g, ""));
}
