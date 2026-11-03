import { Entity, type IEntityParams } from "../../entity/Entity";
import { Vec3 } from "../../math/Vec3";
export interface IAxisTrackEntityParams extends IEntityParams {
}
export declare class AxisTrackEntity extends Entity {
    constructor(params?: IAxisTrackEntityParams);
    private _init;
    setCartesian3v(cart: Vec3): void;
}
