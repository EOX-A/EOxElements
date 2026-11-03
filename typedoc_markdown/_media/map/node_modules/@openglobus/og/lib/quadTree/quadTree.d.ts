export declare const VISIBLE_DISTANCE = 3570;
export declare const MAX_RENDERED_NODES = 1000;
export declare const NW = 0;
export declare const NE = 1;
export declare const SW = 2;
export declare const SE = 3;
export declare const N = 0;
export declare const E = 1;
export declare const S = 2;
export declare const W = 3;
export declare const NOTRENDERING = 0;
export declare const RENDERING = 1;
export declare const WALKTHROUGH = 2;
/**
 * World opposite side table.
 */
export declare const OPSIDE: number[];
/**
 * First index is {N,E,S,W} and second is {NW,NE,SW,SE}
 */
export declare const NEIGHBOUR: number[][];
/**
 * Neighbor's oposite part. For example oposite side
 * on the east neighbor side is: [S][SE] = NE
 */
export declare const OPPART: number[][];
/**
 * Neighbos's opside array order. For example NW node
 * by E side array index is 0, SE node by S side is 1.
 */
export declare const NOPSORD: number[][];
/**
 * First index is {NW,NE,SW,SE}, another one is {N,E,S,W}
 */
export declare const COMSIDE: boolean[][];
/**
 * Gets segment part left to right or up to downo ffset against neighbour side.
 * Where 0 - no offset 1 - half segment size offset.
 */
export declare const PARTOFFSET: number[][];
