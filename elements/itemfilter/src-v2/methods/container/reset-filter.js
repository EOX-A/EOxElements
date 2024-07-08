function resetFilterMethod(event, EOxItemFilterContainer) {
  console.log(event);
  const filterKey = event.target.getAttribute("data-close").replace("|", "-");
  console.log(filterKey);
  EOxItemFilterContainer.querySelector(`#filter-${filterKey}`).reset();
  EOxItemFilterContainer.dispatchEvent(new CustomEvent("filter"));
  EOxItemFilterContainer.requestUpdate();
}

export default resetFilterMethod;
