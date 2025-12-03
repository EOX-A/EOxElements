export default function updateChildrenDateRange(
  EOxTimeControl,
  selectors,
  dateRange,
) {
  selectors.forEach((selector) => {
    const Ele = EOxTimeControl.querySelector(selector);
    if (Ele) {
      Ele.setDateRange(dateRange);
    }
  });
}
