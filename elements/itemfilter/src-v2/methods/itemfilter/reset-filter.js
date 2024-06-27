export default function resetFilterMethod(EOxItemFilter) {
  EOxItemFilter.renderRoot
    .querySelectorAll("[data-type='filter']")
    .forEach((filter) => {
      if (typeof filter.reset === "function") filter.reset();
    });
  EOxItemFilter.search();
}
