import { transformProperties } from "./index";

/**
 * Parses and transforms a list of properties based on the provided criteria.
 *
 * @param {Array<string | import("../main.js").Filter>} list - The list of property keys to filter and sort.
 * @param {import("../main.js").EOxStacInfo} that - The component instance containing STAC properties.
 * @param {string} [type] - An optional type parameter to specify the transformation type.
 * @returns {Array<any>} The transformed list of properties.
 */
export default function parseEntries(list, that, type) {
  // Filter, reverse, and sort the properties based on the provided list.
  // Transform the filtered, reversed, and sorted properties.
  const listStr = list.map((item) =>
    typeof item === "string" ? item : item.key,
  );
  return transformProperties(
    Object.entries(that.stacProperties)
      .filter(([key]) => listStr?.includes(key))
      .reverse()
      .sort(([keyA], [keyB]) =>
        listStr?.indexOf(keyA) > listStr?.indexOf(keyB) ? 1 : -1,
      ),
    list.filter((item) => typeof item !== "string"),
    that,
    type,
  );
}
