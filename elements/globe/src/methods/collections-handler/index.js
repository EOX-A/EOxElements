import { handleBillboardsCreation } from "./billboards";
import { handlePointCreation } from "./points";
import { handleVectorCreation } from "./vectors";

/**
 * Description placeholder
 *
 * @param {import("../../types").Collections3D[]} collections
 * @param {import("../../types").CollectionsManager} collectionsManager
 */
const collectionsHandler = (collections, collectionsManager) => {
  if (!collections) {
    return;
  }

  collections.forEach((collection) => {
    switch (collection.type) {
      case "Point": {
        handlePointCreation(collection, collectionsManager);
        break;
      }
      case "Vector": {
        handleVectorCreation(collection, collectionsManager);
        break;
      }
      case "Billboard": {
        handleBillboardsCreation(collection, collectionsManager);
        break;
      }
      default:
        break;
    }
  });

  collectionsManager.showAll();
};

export default collectionsHandler;
