export type MouseEventExt = MouseEvent & {
    wheelDelta?: number;
    deltaY?: number;
    isTouchPad?: boolean;
};
export interface MouseHandlerEvent {
    button?: number;
    clientX: number;
    clientY: number;
}
type MouseHandlerEventCallback = (sys: MouseEvent, event?: MouseHandlerEvent) => void;
declare class MouseHandler {
    protected _htmlObject: HTMLElement;
    constructor(htmlObject: HTMLElement);
    setEvent(event: string, sender: any, callback: MouseHandlerEventCallback): void;
}
export { MouseHandler };
