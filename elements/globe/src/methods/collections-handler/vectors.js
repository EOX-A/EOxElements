import {
  Color,
  ColorGeometryInstanceAttribute,
  GeometryInstance,
  PolylineColorAppearance,
  PolylineGeometry,
  Primitive,
} from "cesium";
import { getPosition3D } from "./utils";

/**
 * Description placeholder
 *
 * @param {import("../../types").Vector3DCollection} vectorCollection
 * @param {import("../../types").CollectionsManager} collectionsManager
 */
export const handleVectorCreation = (vectorCollection, collectionsManager) => {
  const { createVector, featureCollection } = getVectorCreator();
  vectorCollection.vectors.forEach((vector) => {
    createVector(vector);
  });
  collectionsManager.add(vectorCollection.id, featureCollection);
};

function getVectorCreator() {
  const featureCollection = new Primitive({
    geometryInstances: [],
    appearance: new PolylineColorAppearance({
      translucent: true,
    }),
    releaseGeometryInstances: false,
  });

  /** @param {import("../../types").Vector3D} vector */
  const createVector = (vector) => {
    const positions = vector.positions.map(getPosition3D);
    const geometry = new PolylineGeometry({
      // to do: add vector
      positions,
      arcType: 1,
      width: 1.7,
      vertexFormat: PolylineColorAppearance.VERTEX_FORMAT,
    });
    const color = ColorGeometryInstanceAttribute.fromColor(
      Color.fromCssColorString(vector.color),
    );

    /** @type {import("cesium").GeometryInstance[]} */
    (featureCollection.geometryInstances).push(
      new GeometryInstance({
        ...(vector.id && {
          id: vector.id,
        }),
        geometry,
        attributes: {
          color,
        },
      }),
    );
  };

  return {
    featureCollection,
    createVector,
  };
}
