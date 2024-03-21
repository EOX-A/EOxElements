import { Control } from "ol/control.js";
import Feature from "ol/Feature.js";
import Geolocation from "ol/Geolocation.js";
import Point from "ol/geom/Point.js";
import { Vector as VectorSource } from "ol/source.js";
import { Vector as VectorLayer } from "ol/layer.js";
import { Fill, Stroke, Style } from "ol/style";

export type GeolocationOptions = import("ol/control/Control").Options & {
  /**
   * @property {import("ol/style/flat.js").FlatStyleLike} style style definition of the position feature.
   */
  style?: import("ol/style/flat.js").FlatStyleLike;
  /**
   * @property {boolean} centerWhenReady will pan the view to the user-location on the first position update.
   */
  centerWhenReady?: boolean;
  /**
   * @property {boolean} highAccuracy enables high accuracy of geolocator. Required for tracking the heading.
   */
  highAccuracy?: boolean;
  /**
   * @property {boolean} trackAccuracy tracks accuracy and displays it as a circle underneath the position feature.
   */
  trackAccuracy?: boolean;
  /**
   * @property {boolean} trackHeading tracks heading and sets it as 'heading'-property on the position feature.
   * "highAccuracy" must be set in order to track heading.
   */
  trackHeading?: boolean;
  /**
   * @property {string} buttonIcon image src of control element icon
   */
  buttonIcon?: string;
};

export default class GeolocationControl extends Control {
  /**
   * @param {GeolocationOptions} [opt_options] Control options.
   */
  constructor(opt_options: GeolocationOptions) {
    const options = opt_options || {};

    const element = document.createElement("div");
    element.className = "ol-unselectable ol-control";
    element.style.top = "65px";
    element.style.left = ".5em";
    const button = document.createElement("button");
    if (options.buttonIcon) {
      const image = document.createElement("img");
      image.src = options.buttonIcon;
      image.style.height = "22px";
      image.style.width = "22px";
      image.style.position = "absolute";
      image.style.pointerEvents = "none";
      element.appendChild(image);
    } else {
      // fallback icon
      button.innerHTML = "&#6816";
    }
    element.appendChild(button);

    super({
      element: element,
    });

    this._centerWhenReady = options.centerWhenReady;
    this._highAccuracy = options.highAccuracy;
    this._trackAccuracy = options.trackAccuracy;
    this._trackHeading = options.trackHeading;

    this._positionFeature = new Feature({
      geometry: new Point([0, 0]),
      heading: 0,
    });

    this._source = new VectorSource({
      features: [this._positionFeature],
    });
    if (this._trackAccuracy) {
      this._accuracyFeature = new Feature();
      // flat styles only work at the layer atm.
      // for now, override the accuracy-feature style with a default one
      this._accuracyFeature.setStyle(
        new Style({
          fill: new Fill({
            color: "rgba(0, 0, 0, 0.2)",
          }),
          stroke: new Stroke({
            width: 2,
            color: "rgba(0, 0, 0, 0.7)",
          }),
        })
      );
      this._source.addFeature(this._accuracyFeature);
    }

    this._layer = new VectorLayer({
      source: this._source,
    });

    if (options.style) {
      this._layer.setStyle(options.style);
    }

    button.addEventListener("click", this.centerOnPosition.bind(this), false);
  }

  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("ol/Map").default|null} map Map.
   * @api
   */
  setMap(map: import("ol/Map.js").default | null) {
    if (map) {
      this._geolocation = new Geolocation({
        // take the projection to use from the map's view
        tracking: true,
        trackingOptions: {
          enableHighAccuracy: this._highAccuracy,
        },
        projection: map.getView().getProjection(),
      });

      if (this._centerWhenReady) {
        this._geolocation.once("change:position", (e) => {
          map.getView().setCenter(e.target.getPosition());
        });
      }

      this._geolocation.on("error", function (evt) {
        console.log(evt);
      });

      this._geolocation.on("change:accuracyGeometry", () => {
        if (this._trackAccuracy) {
          this._accuracyFeature.setGeometry(
            this._geolocation.getAccuracyGeometry()
          );
        }
      });
      this._geolocation.on("change:heading", (e) => {
        if (this._trackHeading && this._highAccuracy) {
          this._positionFeature.set("heading", e.target.getHeading());
        }
      });

      this._geolocation.on("change:position", () => {
        const coordinates = this._geolocation.getPosition();
        this._positionFeature
          .getGeometry()
          .setCoordinates(coordinates ? coordinates : null);
      });

      this._geolocation.on("change:accuracyGeometry", () => {
        if (this._trackAccuracy && this._accuracyFeature) {
          this._accuracyFeature.setGeometry(
            this._geolocation.getAccuracyGeometry()
          );
        }
      });
    }

    this._layer.setMap(map);
    super.setMap(map);
  }

  private _centerWhenReady: boolean;
  private _highAccuracy: boolean;
  private _positionFeature: Feature<Point>;
  private _accuracyFeature: Feature;
  private _trackAccuracy: boolean;
  private _trackHeading: boolean;
  private _layer: VectorLayer<VectorSource>;
  private _source: VectorSource;
  private _geolocation: Geolocation;

  /**
   * returns the geolocation control button
   * @returns
   */
  getElement() {
    return this.element;
  }

  centerOnPosition() {
    this.getMap().getView().setCenter(this._geolocation.getPosition());
  }
}
