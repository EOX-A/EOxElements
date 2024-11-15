import { BillboardCollection, Cartesian2, Cartesian3 } from "cesium";
import { getNearFarScalar, getPosition2D, getPosition3D } from "./utils";
import { NEAR_FAR_SCALAR } from "../../enums";

/**
 * Description placeholder
 *
 * @param {import("../../types").BillboardCollection} billboardCollection
 * @param {import("../../types").CollectionsManager} collectionsManager
 */
export const handleBillboardsCreation = (
  billboardCollection,
  collectionsManager,
) => {
  const { createBillboard, featureCollection } = getBillboardCreator();
  billboardCollection.billboards.forEach((billboard) => {
    createBillboard(billboard);
  });

  collectionsManager.add(billboardCollection.id, featureCollection);
};

function getBillboardCreator() {
  const featureCollection = new BillboardCollection();

  /**
   * Description placeholder
   *
   * @param {import("../../types").Billboard} billboard
   */
  const createBillboard = (billboard) => {
    const {
      image,
      position,
      height,
      id,
      eyeOffset,
      pixelOffset,
      scale,
      scaleByDistance,
      width,
    } = billboard;

    featureCollection.add({
      id,
      position: getPosition3D(position),
      image,
      height,
      width,
      eyeOffset: eyeOffset
        ? getPosition3D(eyeOffset)
        : new Cartesian3(0, 0, -50000),
      pixelOffset: pixelOffset
        ? getPosition2D(pixelOffset)
        : new Cartesian2(0, 0),
      scale: scale ?? 0.1,
      scaleByDistance: scaleByDistance
        ? getNearFarScalar(scaleByDistance)
        : NEAR_FAR_SCALAR,
    });
  };

  return {
    featureCollection,
    createBillboard,
  };
}
