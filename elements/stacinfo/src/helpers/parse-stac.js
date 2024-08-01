import StacFields from "@radiantearth/stac-fields";

/**
 * Parses a STAC object and formats it according to its type.
 *
 * @async
 * @param {Object} stac - The STAC object to parse.
 * @returns {Promise<Object>} A promise that resolves to the formatted STAC object.
 */
async function parseSTAC(stac) {
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
    // Format and return the STAC feature (item properties).
    return StacFields.formatItemProperties(stac);
  }
}

export default parseSTAC;
