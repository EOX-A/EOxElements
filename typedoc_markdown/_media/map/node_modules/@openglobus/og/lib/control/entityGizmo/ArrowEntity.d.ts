import { Entity, type IEntityParams } from "../../entity/Entity";
export interface IArrowEntityParams extends IEntityParams {
    yaw?: number;
    pitch?: number;
    roll?: number;
    size?: number;
    color?: string;
    properties?: any;
}
export declare class ArrowEntity extends Entity {
    protected _size: number;
    constructor(params?: IArrowEntityParams);
    setSize(size: number): void;
    setColorHTML(color: string): void;
}
