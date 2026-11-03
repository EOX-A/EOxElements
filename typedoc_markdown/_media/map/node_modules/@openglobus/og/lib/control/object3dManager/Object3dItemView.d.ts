import { IViewParams, View, type ViewEventsList } from "../../ui/View";
import { IObject3dItem } from "./Object3dCollection";
import { EventsHandler } from "../../Events";
type Object3dItemViewEvents = ["click"];
export declare class Object3dItemView extends View<IObject3dItem> {
    events: EventsHandler<Object3dItemViewEvents> & EventsHandler<ViewEventsList>;
    constructor(params: IViewParams);
    render(params?: any): this;
}
export {};
