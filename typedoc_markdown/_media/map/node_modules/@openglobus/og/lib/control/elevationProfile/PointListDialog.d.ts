import { type IDialogParams, Dialog } from "../../ui/Dialog";
import { ElevationProfileScene } from "./ElevationProfileScene";
interface IPointListDialog extends IDialogParams {
    model: ElevationProfileScene;
}
declare class PointListDialog extends Dialog<ElevationProfileScene> {
    $textarea: HTMLTextAreaElement | null;
    constructor(params: IPointListDialog);
    render(params?: any): this;
    protected _onApplyClick: () => void;
}
export { PointListDialog };
