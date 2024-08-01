import { transformProperties } from "./index";

/**
 * Parses and transforms a list of properties based on the provided criteria.
 *
 * @param {Array} list - The list of property keys to filter and sort.
 * @param {import("../main.js").EOxStacInfo} that - The component instance containing STAC properties.
 * @param {string} [type] - An optional type parameter to specify the transformation type.
 * @returns {Array} The transformed list of properties.
 */
export default function parseEntries(list, that, type) {
  // Filter, reverse, and sort the properties based on the provided list.
  // Transform the filtered, reversed, and sorted properties.
  return transformProperties(
    Object.entries(that.stacProperties)
      .filter(([key]) => {
        return list === that.properties && (!list || list.length < 1)
          ? true
          : list?.includes(key);
      })
      .reverse()
      .sort(([keyA], [keyB]) =>
        list?.indexOf(keyA) > list?.indexOf(keyB) ? 1 : -1
      ),
    type
  );
}
