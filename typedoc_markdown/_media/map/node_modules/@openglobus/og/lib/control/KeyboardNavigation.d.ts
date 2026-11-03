import { Control, type IControlParams } from "./Control";
import { Vec3 } from "../math/Vec3";
import { Camera } from "../camera/Camera";
import { PlanetCamera } from "../camera/PlanetCamera";
interface IKeyboardNavigationParams extends IControlParams {
    speed?: number;
    camera?: Camera | PlanetCamera;
}
/**
 * Planet camera keyboard navigation. Use W,S,A,D and left shift key for fly around a planet.
 */
export declare class KeyboardNavigation extends Control {
    speed: number;
    force: Vec3;
    vel: Vec3;
    mass: number;
    protected _camera: Camera | PlanetCamera | null;
    constructor(options?: IKeyboardNavigationParams);
    bindCamera(camera: Camera): void;
    onactivate(): void;
    ondeactivate(): void;
    oninit(): void;
    protected get dt(): number;
    protected onCameraPitchUp: () => void;
    protected onCameraPitchDown: () => void;
    protected onCameraYawLeft: () => void;
    protected onCameraYawRight: () => void;
    protected onCameraMoveForward: () => void;
    protected onCameraMoveBackward: () => void;
    protected onDraw(): void;
}
export {};
