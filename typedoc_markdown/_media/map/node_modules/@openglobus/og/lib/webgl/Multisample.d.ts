import { BaseFramebuffer } from "./BaseFramebuffer";
import type { IBaseFramebufferParams } from "./BaseFramebuffer";
import { Handler } from "./Handler";
interface IMultisampleParams extends IBaseFramebufferParams {
    msaa?: number;
    internalFormat?: string;
}
/**
 * Class represents multisample framebuffer.
 * @class
 * @param {Handler} handler - WebGL handler.
 * @param {Object} [options] - Framebuffer options:
 */
export declare class Multisample extends BaseFramebuffer {
    protected _internalFormat: string;
    protected _msaa: number;
    protected _glFilter: number;
    renderbuffers: WebGLRenderbuffer[];
    constructor(handler: Handler, options?: IMultisampleParams);
    destroy(): void;
    /**
     * Framebuffer initialization.
     * @public
     */
    init(): void;
    blitTo(framebuffer: BaseFramebuffer, attachmentIndex?: number): void;
}
export {};
