import { Entity, type IEntityParams } from "../../entity/Entity";
import { Vec3 } from "../../math/Vec3";
import { ArrowEntity } from "./ArrowEntity";
export interface IAxisEntityParams extends IEntityParams {
    size?: number;
}
export declare class MoveAxisEntity extends Entity {
    protected _size: number;
    childEntities: ArrowEntity[];
    constructor(params?: IAxisEntityParams);
    private _init;
    setSize(size: number): void;
    setPitch(a: number): void;
    setYaw(a: number): void;
    setRoll(a: number): void;
    getY(): Vec3;
}
