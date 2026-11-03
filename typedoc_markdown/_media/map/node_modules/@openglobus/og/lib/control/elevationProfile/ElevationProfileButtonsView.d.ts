import { View } from "../../ui/View";
import type { IViewParams, ViewEventsList } from "../../ui/View";
import { ToggleButton } from "../../ui/ToggleButton";
import type { EventsHandler } from "../../Events";
import { ElevationProfile } from "./ElevationProfile";
interface IElevationProfileButtonsViewParams extends IViewParams {
}
type ElevationProfileButtonsViewEventsList = ["reset", "list", "location"];
export declare class ElevationProfileButtonsView extends View<ElevationProfile> {
    events: EventsHandler<ElevationProfileButtonsViewEventsList> & EventsHandler<ViewEventsList>;
    pointListBtn: ToggleButton;
    constructor(params?: IElevationProfileButtonsViewParams);
    render(params: any): this;
}
export {};
