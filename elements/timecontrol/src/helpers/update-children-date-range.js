export default function updateChildrenDateRange(
  EOxTimeControl,
  selectors,
  dateRange,
  data,
) {
  selectors.forEach((selector) => {
    const Ele = EOxTimeControl.querySelector(selector);
    if (Ele) {
      Ele.setDateRange(dateRange, data);
    }
  });
}
