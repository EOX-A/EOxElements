export const WORLD_LON_LAT_EXTENT = Object.freeze([-180, -90, 180, 90]);

// Screen edges map to curves on the globe, so corners alone miss the extremes.
export const EXTENT_EDGE_FRACTIONS = Object.freeze([0, 0.25, 0.5, 0.75, 1]);

export const HORIZON_BISECT_STEPS = 20;
