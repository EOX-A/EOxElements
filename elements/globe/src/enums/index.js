import { NearFarScalar } from "cesium";

export const DEG2RAD = Math.PI / 180.0;

export const DEFAULT_POINT_PIXEL_SIZE = 6;

export const NEAR_FAR_SCALAR = new NearFarScalar(1.0e2, 4, 14.0e6, 0.8);

export const HEIGHT_OFFSET = 170000; //m

export const EARTH_RADIUS = 6371000; // m
export const SWARM_ALTITUDE = 450000; // m
export const IONOSPHERIC_ALTITUDE = 110000; // m

export const DEFAULT_NOMINAL_RADIUS = EARTH_RADIUS + SWARM_ALTITUDE;

export const MAX_VECTOR_LENGTH = 600000; // m - length of the longest regular vector
