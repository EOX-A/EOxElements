import { Control } from "../Control";
import type { IControlParams } from "../Control";
import { SelectionScene } from "./SelectionScene";
import { ToggleButton } from "../../ui/ToggleButton";
interface ISelectionParams extends IControlParams {
    ignoreTerrain?: boolean;
    onSelect?: boolean;
    autoSelectionHide?: boolean;
}
/**
 * Activate Selection
 * @param {boolean} [options.ignoreTerrain=false].
 * @param {function} options.onSelect - callback (extent) => {} where extent is selected extent array [minLon,minLat,maxLon,maxLat]
 * @param {boolean} [options.autoSelectionHide=false] - clear selection rectangle  after passing extent to callback
 * @example:
 * to use bootstrap icons, include
 *  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
 *
 * new Selection({
 *       ignoreTerrain: false,
 *       autoSelectionHide:true,
 *       onSelect: (extent) => {
 *
 *           var vectorSource = new ol.source.Vector({
 *               format: new GeoJSON(),
 *               url: function (extent) {
 *                   return 'https://snap.ogs.trieste.it/geoserver/snap/ows?service=WFS&' +
 *                           'version=1.1.0&request=GetFeature&typename=snap:all_dataset_segy_view&' +
 *                           'outputFormat=application/json&srsname=EPSG:4326&' +
 *                           'bbox=' + extent.join(',') + ',EPSG:4326';
 *               },
 *               strategy: function (extent, resolution) {
 *                   if (this.resolution && this.resolution != resolution) {
 *                       this.loadedExtentsRtree_.clear();
 *                   }
 *                   return [extent];
 *               }
 *           });
 *
 *           vectorSource.loadFeatures(extent);
 *
 *           console.log(extent);
 *
 *       }
 *   });
 */
export declare class Selection extends Control {
    protected _selectorScene: SelectionScene;
    protected _toggleBtn: ToggleButton;
    constructor(options?: ISelectionParams);
    set ignoreTerrain(v: boolean);
    oninit(): void;
    onactivate(): void;
    ondeactivate(): void;
}
export {};
