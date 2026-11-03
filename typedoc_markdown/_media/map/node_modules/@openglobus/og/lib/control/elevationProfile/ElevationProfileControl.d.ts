import { Control, type IControlParams } from "../Control";
import { Dialog } from "../../ui/Dialog";
import { View } from "../../ui/View";
import { ToggleButton } from "../../ui/ToggleButton";
import { ElevationProfileView } from "./ElevationProfileView";
import { ElevationProfileScene } from "./ElevationProfileScene";
import { ElevationProfileButtonsView } from "./ElevationProfileButtonsView";
import { PointListDialog } from "./PointListDialog";
import type { GroundItem, TrackItem } from "./ElevationProfile";
import { ElevationProfileLegend } from "./ElevationProfileLegend";
interface IElevationProfileGraphParams extends IControlParams {
}
export declare class ElevationProfileControl extends Control {
    protected _toggleBtn: ToggleButton;
    protected _dialog: Dialog<null>;
    protected _graphView: View<null>;
    protected _poiListDialog: PointListDialog;
    protected _elevationProfileView: ElevationProfileView;
    protected _elevationProfileScene: ElevationProfileScene;
    protected _elevationProfileButtonsView: ElevationProfileButtonsView;
    protected _elevationProfileLegend: ElevationProfileLegend;
    protected _collectProfileThrottled: () => void;
    constructor(options?: IElevationProfileGraphParams);
    oninit(): void;
    protected _onSceneChange: () => void;
    onactivate(): void;
    ondeactivate(): void;
    protected _onElevationProfilePointer: (pointerDistance: number, tp0: TrackItem, tp1: TrackItem, gp0: GroundItem, gp1: GroundItem, trackPoiIndex: number, groundPoiIndex: number, elevation: number) => void;
    protected _onElevationProfileDblClick: (pointerDistance: number, tp0: TrackItem, tp1: TrackItem, gp0: GroundItem, gp1: GroundItem, trackPoiIndex: number, groundPoiIndex: number, elevation: number) => void;
    protected _onElevationProfileMouseEnter: () => void;
    protected _onElevationProfileMouseLeave: () => void;
}
export {};
