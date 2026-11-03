import { Entity, type IEntityParams } from "../../entity/Entity";
export interface IMovePlaneEntityParams extends IEntityParams {
}
export declare class MovePlaneEntity extends Entity {
    constructor(params?: IMovePlaneEntityParams);
    private _init;
}
