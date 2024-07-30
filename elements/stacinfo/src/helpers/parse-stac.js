import StacFields from "@radiantearth/stac-fields";

/**
 *
 */
async function parseSTAC(stac) {
  if (stac.type === "Catalog") {
    return StacFields.formatCatalog(stac);
  }
  if (stac.type === "Collection") {
    return StacFields.formatCollection(stac);
  }
  if (stac.type === "Feature") {
    return StacFields.formatItemProperties(stac);
  }
}

export default parseSTAC;
