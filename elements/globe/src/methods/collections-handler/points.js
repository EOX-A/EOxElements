import { PointPrimitiveCollection, Color } from "cesium";
import { DEFAULT_POINT_PIXEL_SIZE, NEAR_FAR_SCALAR } from "../../enums";
import { getPosition3D } from "./utils";

/**
 * Description placeholder
 *
 * @param {import("../../types").Point3DCollection} pointCollection
 * @param {import("../../types").CollectionsManager} collectionsManager
 */
export const handlePointCreation = (pointCollection, collectionsManager) => {
  const { createPoint, featureCollection } = getPointCreator();
  pointCollection.points.forEach((point) => {
    createPoint(point);
  });
  //@ts-expect-error ???
  collectionsManager.add(pointCollection.id, featureCollection);
};

function getPointCreator() {
  const featureCollection = new PointPrimitiveCollection();

  /** @param {import("../../types").Point3D} point */
  const createPoint = (point) => {
    const position = getPosition3D(point.position);
    featureCollection.add({
      ...(point.id && {
        id: point.id,
      }),
      position,
      show: true,
      color: Color.fromCssColorString(point.color),
      pixelSize: point.pixelSize ?? DEFAULT_POINT_PIXEL_SIZE,
      outlineWidth: point.outlineWidth ?? 0,
      scaleByDistance: point.scaleByDistance ?? NEAR_FAR_SCALAR,
    });
  };
  return {
    featureCollection,
    createPoint,
  };
}
