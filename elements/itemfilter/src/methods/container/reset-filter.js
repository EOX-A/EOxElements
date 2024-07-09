function resetFilterMethod(event, EOxItemFilterContainer) {
  const filterKey = event.target.getAttribute("data-close").replace("|", "-");
  EOxItemFilterContainer.querySelector(`#filter-${filterKey}`).reset();
  EOxItemFilterContainer.dispatchEvent(new CustomEvent("filter"));
  EOxItemFilterContainer.requestUpdate();
}

export default resetFilterMethod;
