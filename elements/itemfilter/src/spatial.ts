// @ts-nocheck
import bboxPolygon from "@turf/bbox-polygon";
import booleanIntersects from "@turf/boolean-intersects";
import booleanWithin from "@turf/boolean-within";
import { BBox } from "@turf/helpers";

export const intersects = (itemBbox: BBox, filterBbox: BBox) => {
  return booleanIntersects(bboxPolygon(itemBbox), bboxPolygon(filterBbox));
};

export const within = (itemBbox: BBox, filterBbox: BBox) => {
  return booleanWithin(bboxPolygon(itemBbox), bboxPolygon(filterBbox));
};
