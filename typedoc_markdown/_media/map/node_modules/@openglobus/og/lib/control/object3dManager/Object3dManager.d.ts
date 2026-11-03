import { Control, type IControlParams } from "../Control";
import { Object3dManagerDialog } from "./Object3dManagerDialog";
import { Object3dCollection } from "./Object3dCollection";
import { IObject3dItem } from "./Object3dCollection";
import { Vector } from "../../layer/Vector";
import { IMouseState } from "../../renderer/RendererEvents";
import { LonLat } from "../../LonLat";
import { Entity } from "../../entity/Entity";
export interface IObject3dManagerParams extends IControlParams {
    collection?: IObject3dItem[];
    layer?: Vector;
}
export declare class Object3dManager extends Control {
    protected _dialog: Object3dManagerDialog;
    protected _collection: Object3dCollection;
    protected _layer: Vector | null;
    protected _currentItem: IObject3dItem | null;
    constructor(options?: IObject3dManagerParams);
    oninit(): void;
    onactivate(): void;
    ondeactivate(): void;
    protected _onSelect: (item: IObject3dItem) => void;
    bindLayer(layer: Vector): void;
    protected _initEvents(): void;
    protected _clearEvents(): void;
    protected _onClick: (e: IMouseState) => void;
    protected _createEntity(item: IObject3dItem, lonLat: LonLat): Entity;
}
