import { html } from "lit";

function getChipItems(filters) {
  return Object.keys(filters)
    .map((filter) => ({
      title: html`${filter}:
        <strong>${filters[filter].stringifiedState}</strong>`,
      key: filter,
    }))
    .filter((item) => filters[item.key].dirty);
}

export default getChipItems;
