import { IViewParams, View, type ViewEventsList } from "../../ui/View";
import { IObject3dItem, Object3dCollection } from "./Object3dCollection";
import { Object3dItemView } from "./Object3dItemView";
import { type EventsHandler } from "../../Events";
type Object3dCollectionViewEvents = ["select"];
export declare class Object3dCollectionView extends View<Object3dCollection> {
    events: EventsHandler<Object3dCollectionViewEvents> & EventsHandler<ViewEventsList>;
    protected _activeView: Object3dItemView | null;
    constructor(params: IViewParams);
    protected _addItem(item: IObject3dItem): void;
    render(params: IViewParams): this;
    protected _initEvents(): void;
    protected _onAdd: (item: IObject3dItem) => void;
}
export {};
