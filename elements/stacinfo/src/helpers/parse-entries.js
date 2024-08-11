import { transformProperties } from "./index";

/**
 * Parses and transforms a list of properties based on the provided criteria.
 *
 * @param {Array<String>} list - The list of property keys to filter and sort.
 * @param {import("../main.js").EOxStacInfo} that - The component instance containing STAC properties.
 * @param {string} [type] - An optional type parameter to specify the transformation type.
 * @returns {Array<any>} The transformed list of properties.
 */
export default function parseEntries(list, that, type) {
  // Filter, reverse, and sort the properties based on the provided list.
  // Transform the filtered, reversed, and sorted properties.
  return transformProperties(
    Object.entries(that.stacProperties)
      .filter(([key]) => list?.includes(key))
      .reverse()
      .sort(([keyA], [keyB]) =>
        list?.indexOf(keyA) > list?.indexOf(keyB) ? 1 : -1
      ),
    type
  );
}
