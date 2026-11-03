import { LonLat } from "../LonLat";
interface IGeoidParams {
    model?: GeoidModel;
    src?: string | null;
}
export type GeoidModel = {
    scale: number;
    offset: number;
    width: number;
    height: number;
    rlonres: number;
    rlatres: number;
    i: number;
    rawfile: Uint8Array;
};
declare class Geoid {
    model: GeoidModel | null;
    src: string | null;
    protected _cached_ix: number;
    protected _cached_iy: number;
    protected _v00: number;
    protected _v01: number;
    protected _v10: number;
    protected _v11: number;
    protected _t: number;
    constructor(options?: IGeoidParams);
    static loadModel(url?: string | null): Promise<GeoidModel | null>;
    setModel(model: GeoidModel | null): void;
    protected _rawval(ix: number, iy: number): number;
    getHeightLonLat(lonlat: LonLat): number;
    getHeight(lon: number, lat: number): number;
}
export { Geoid };
