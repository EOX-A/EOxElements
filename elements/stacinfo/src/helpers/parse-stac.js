import StacFields from "@radiantearth/stac-fields";

/**
 * Parses a STAC object and formats it according to its type.
 *
 * @async
 * @param {Record<string, any> & {type: string}} stac - The STAC object to parse.
 * @returns {Array<any>|undefined} A promise that resolves to the formatted STAC object.
 */
function parseSTAC(stac) {
  // Check the type of the STAC object and format accordingly.
  if (stac.type === "Catalog") {
    // Format and return the STAC catalog.
    return StacFields.formatCatalog(stac);
  }
  if (stac.type === "Collection") {
    // Format and return the STAC collection.
    return StacFields.formatCollection(stac);
  }
  if (stac.type === "Feature") {
    // Format and return the STAC feature (item properties + top level data).
    const itemProperties = StacFields.formatItemProperties(stac);
    const formattedGroups = formatItem(stac);
    for (const group of formattedGroups) {
      const existingGroup = itemProperties.find(
        (g) => g.extension === group.extension,
      );
      if (existingGroup) {
        Object.assign(existingGroup.properties, group.properties);
      } else {
        itemProperties.push(group);
      }
    }
    return itemProperties;
  }

  return undefined;
}

export default parseSTAC;

function formatItem(stac) {
  if (!stac) {
    return undefined;
  }
  const excludedProperties = [
    "properties",
    "geometry",
    "bbox",
    "type",
    "stac_extensions",
    "stac_version",
  ];

  const topLevelData = {};

  for (const key in stac) {
    if (!excludedProperties.includes(key)) {
      topLevelData[key] = stac[key];
    }
  }

  return StacFields.formatGrouped(stac, topLevelData, "metadata", null, "");
}
