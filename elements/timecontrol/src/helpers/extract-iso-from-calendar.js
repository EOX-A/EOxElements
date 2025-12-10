/**
 * Extracts an ISO date string (YYYY-MM-DD) from a calendar date element.
 * Tries multiple methods to find the date: data-calendar-date attribute, dataset.calendarDate,
 * or scans all dataset values for a value matching the date pattern.
 *
 * @param {HTMLElement} dateEl - The calendar date element to extract the date from.
 * @returns {string | null} ISO date string in YYYY-MM-DD format, or null if not found.
 */
export default function extractISOFromCalendar(dateEl) {
  // Try common attribute keys then fall back by scanning dataset values.
  return (
    dateEl.getAttribute("data-calendar-date") ||
    dateEl.dataset?.calendarDate ||
    Object.values(dateEl.dataset || {}).find((v) =>
      /^\d{4}-\d{2}-\d{2}$/.test(v),
    ) ||
    null
  );
}
