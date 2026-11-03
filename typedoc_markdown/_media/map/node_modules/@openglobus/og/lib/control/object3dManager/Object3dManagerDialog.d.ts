import { Dialog, type IDialogParams, type DialogEventsList } from "../../ui/Dialog";
import { Object3dCollection } from "./Object3dCollection";
import { Object3dCollectionView } from "./Object3dCollectionView";
import { type EventsHandler } from "../../Events";
import { type ViewEventsList } from "../../ui/View";
import { Object3d } from "../../Object3d";
type Object3dManagerDialogEvents = ["select"];
interface IObject3dManagerDialogParams extends IDialogParams {
    model: Object3dCollection;
}
type Object3dManagerDialogEventsExt = EventsHandler<Object3dManagerDialogEvents> & EventsHandler<DialogEventsList> & EventsHandler<ViewEventsList>;
export declare class Object3dManagerDialog extends Dialog<null> {
    events: Object3dManagerDialogEventsExt;
    protected _object3dCollectionView: Object3dCollectionView;
    constructor(params: IObject3dManagerDialogParams);
    render(params: any): this;
    protected _onLoadClick: () => void;
    protected _addObject: (item: {
        name: string;
        objects: Object3d[];
    }) => void;
}
export {};
