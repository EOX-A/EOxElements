import { EarthQuadTreeStrategy } from "./earth/EarthQuadTreeStrategy";
import { EquiQuadTreeStrategy } from "./equi/EquiQuadTreeStrategy";
import { EPSG4326QuadTreeStrategy } from "./EPSG4326/EPSG4326QuadTreeStrategy";
import { QuadTreeStrategy } from "./QuadTreeStrategy";
import { Wgs84QuadTreeStrategy } from "./wgs84/Wgs84QuadTreeStrategy";
declare const quadTreeStrategyType: {
    epsg4326: typeof EPSG4326QuadTreeStrategy;
    earth: typeof EarthQuadTreeStrategy;
    equi: typeof EquiQuadTreeStrategy;
    wgs84: typeof Wgs84QuadTreeStrategy;
};
export { quadTreeStrategyType, QuadTreeStrategy, Wgs84QuadTreeStrategy, EquiQuadTreeStrategy, EarthQuadTreeStrategy };
