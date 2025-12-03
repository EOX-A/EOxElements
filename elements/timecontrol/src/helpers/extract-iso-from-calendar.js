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
