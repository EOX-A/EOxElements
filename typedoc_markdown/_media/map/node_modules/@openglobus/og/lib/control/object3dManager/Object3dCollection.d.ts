import { Object3d } from "../../Object3d";
import { type EventsHandler } from "../../Events";
type Object3dCollectionEvents = ["add", "remove"];
export interface IObject3dItem {
    name: string;
    objects: Object3d[];
    scale?: number;
}
interface Object3dCollectionParams {
    collection?: IObject3dItem[];
}
export declare class Object3dCollection {
    protected _items: Map<string, IObject3dItem>;
    events: EventsHandler<Object3dCollectionEvents>;
    constructor(params?: Object3dCollectionParams);
    static createItemsMap(items: IObject3dItem[]): Map<string, IObject3dItem>;
    getItem(name: string): IObject3dItem | undefined;
    addItem(item: IObject3dItem, force?: boolean): void;
    getItems(): IObject3dItem[];
}
export {};
