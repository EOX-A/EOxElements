import { Control, type IControlParams } from "./Control";
import { LonLat } from "../LonLat";
import { Vec3 } from "../math/Vec3";
import { type EventsHandler } from "../Events";
import { Entity } from "../entity/Entity";
import type { IMouseState } from "../renderer/RendererEvents";
import { Planet } from "../scene/Planet";
type CameraLockEventsList = ["lockview", "unlockview"];
interface ICameraLockParams extends IControlParams {
    planet?: Planet | null;
}
export declare class CameraLock extends Control {
    events: EventsHandler<CameraLockEventsList>;
    protected _lockDistance: number;
    protected _isFromTheBack: boolean;
    protected _lockEntity: Entity | null;
    protected _viewDir: Vec3;
    constructor(options?: ICameraLockParams);
    onactivate(): void;
    ondeactivate(): void;
    oninit(): void;
    flyCartesian(cartesian: Vec3, dist?: number): void;
    lockView(entity: Entity, fromTheBack?: boolean): void;
    protected _activateNav(): void;
    protected _deactivateNav(): void;
    unlockView(): void;
    private _getCenterDist;
    protected _getDistance(entity: Entity, prevEntity?: Entity | null): number;
    isVisibleDistance(cart: Vec3, C?: number): boolean;
    get lockEntity(): Entity | null;
    flyLonLat(lonLat: LonLat, dist?: number): void;
    protected _activateLockViewEvents(): void;
    protected _deactivateLockViewEvents(): void;
    private _onLockViewDraw;
    protected _onMouseWheel: (e: IMouseState) => void;
    protected _onMouseMove: (ms: IMouseState) => void;
}
export {};
