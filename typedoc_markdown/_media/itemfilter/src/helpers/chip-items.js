import { html } from "lit";

/**
 * Generates an array of chip items from the given filters.
 *
 * @param {Object} filters - An object containing filter data.
 * @returns {Array<Object>} An array of chip item objects.
 */
function getChipItems(filters) {
  return Object.keys(filters)
    .map((filter) => ({
      title: html`${filters[filter].title || filters[filter].key}:
      ${filters[filter].stringifiedState}`,
      key: filter,
    }))
    .filter((item) => filters[item.key].dirty);
}

export default getChipItems;
