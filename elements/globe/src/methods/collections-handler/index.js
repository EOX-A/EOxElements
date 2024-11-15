import { handleBillboardsCreation } from "./billboards";
import { handlePointCreation } from "./points";
import { handleVectorCreation } from "./vectors";

/**
 * Description placeholder
 *
 * @param {import("../../types").Collections3D[]} [oldCollections]
 * @param {import("../../types").Collections3D[]} [collections]
 * @param {import("../../types").CollectionsManager} [collectionsManager]
 */
const collectionsHandler = (
  oldCollections,
  collections,
  collectionsManager,
) => {
  if (oldCollections?.length) {
    const updatedIDs = collections?.map((col) => col.id);
    const removed = oldCollections.filter(
      (col) => !updatedIDs?.includes(col.id),
    );
    removed.forEach((col) => {
      collectionsManager.remove(col.id);
    });
  }

  if (!collections || !collectionsManager) {
    return;
  }

  collections.forEach((collection) => {
    if (collectionsManager.contains(collection.id)) {
      collectionsManager.remove(collection.id);
    }
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
