/**
 * Fetch value based on nested key or individual key
 *
 * @param {string} key - Key to identify the value
 * @param {Object} items - Items contain list of key & it's value
 * @returns {any}
 */
export default function fetchValue(key, items) {
  return key?.includes(".")
    ? key.split(".").reduce((acc, key) => acc && acc[key], items)
    : items[key];
}
