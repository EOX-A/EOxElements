import booleanIntersects from "@turf/boolean-intersects";
import booleanWithin from "@turf/boolean-within";

export const intersects = (itemGeometry, filterGeometry) => {
  if (!filterGeometry) {
    return true;
  }
  return booleanIntersects(itemGeometry, filterGeometry);
};

export const within = (itemGeometry, filterGeometry) => {
  if (!filterGeometry) {
    return true;
  }
  return booleanWithin(itemGeometry, filterGeometry);
};
