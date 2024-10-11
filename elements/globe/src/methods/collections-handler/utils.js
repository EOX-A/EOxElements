import { Cartesian3, Cartesian2, NearFarScalar } from "cesium";
/**
 * Description placeholder
 *
 * @param {import("../../types").Position3D} position
 */
export const getPosition3D = (position) => {
  if (position instanceof Cartesian3) {
    return Cartesian3.clone(position);
  }
  const { x, y, z } = position;
  return new Cartesian3(x, y, z);
};

/**
 * Description placeholder
 *
 * @param {import("../../types").Position2D} position
 */
export const getPosition2D = (position) => {
  if (position instanceof Cartesian2) {
    return Cartesian2.clone(position);
  }
  const { x, y } = position;
  return new Cartesian2(x, y);
};

/**
 * Description placeholder
 *
 * @param {import("../../types").NearFarScalar} nearFarScalar
 */
export const getNearFarScalar = (nearFarScalar) => {
  if (nearFarScalar instanceof NearFarScalar) {
    return NearFarScalar.clone(nearFarScalar);
  }
  const { near, nearValue, far, farValue } = nearFarScalar;
  return new NearFarScalar(near, nearValue, far, farValue);
};
