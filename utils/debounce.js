/**
 * Simple re-usable debounce function
 *
 * @param {Function} func - The function to debounce
 * @param {number} wait - The amount of time (in milliseconds) to delay
 * @return {Function} - Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default debounce;
