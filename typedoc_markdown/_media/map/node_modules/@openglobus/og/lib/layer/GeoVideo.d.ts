import { BaseGeoImage } from "./BaseGeoImage";
import type { IBaseGeoImageParams } from "./BaseGeoImage";
import { Material } from "./Material";
export interface IGeoVideoParams extends IBaseGeoImageParams {
    videoElement?: HTMLVideoElement;
    src?: string;
}
/**
 * Used to load and display a video stream by specific corners coordinates on the globe.
 * @class
 * @extends {BaseGeoImage}
 */
declare class GeoVideo extends BaseGeoImage {
    /**
     * HTML5 video element object.
     * @protected
     * @type {HTMLVideoElement}
     */
    protected _video: HTMLVideoElement | null;
    /**
     * Video source url path.
     * @protected
     * @type {string}
     */
    protected _src: string | null;
    constructor(name: string | null, options?: IGeoVideoParams);
    get instanceName(): string;
    /**
     * Sets video source url path.
     * @public
     * @param {string} src - Video url path.
     */
    setSrc(src: string): void;
    /**
     * Sets HTML5 video object.
     * @public
     * @param {HTMLVideoElement} video - HTML5 video element object.
     */
    setVideoElement(video: HTMLVideoElement): void;
    /**
     * Sets layer visibility.
     * @public
     * @param {boolean} visibility - Layer visibility.
     */
    setVisibility(visibility: boolean): void;
    /**
     * Creates or refresh source video GL texture.
     * @virtual
     * @protected
     */
    protected _createSourceTexture(): void;
    /**
     * @private
     */
    protected _onCanPlay(video: HTMLVideoElement): void;
    protected _onError(video: HTMLVideoElement): void;
    /**
     * Loads planet segment material. In this case - GeoImage source video.
     * @public
     * @param {Material} material - GeoImage planet material.
     */
    loadMaterial(material: Material): void;
    /**
     * @virtual
     * @param {Material} material - GeoImage material.
     */
    abortMaterialLoading(material: Material): void;
}
export { GeoVideo };
