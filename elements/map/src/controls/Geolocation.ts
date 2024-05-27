import { Control } from "ol/control.js";
import Feature from "ol/Feature.js";
import Geolocation from "ol/Geolocation.js";
import Point from "ol/geom/Point.js";
import { Vector as VectorSource } from "ol/source.js";
import { Vector as VectorLayer } from "ol/layer.js";
import { Fill, Stroke, Style } from "ol/style";
import { Geometry } from "ol/geom";

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
    element.className = "geolocation ol-unselectable ol-control";
    const button = document.createElement("button");
    button.title = "Show your location";
    const image = document.createElement("img");
    if (options.buttonIcon) {
      image.src = options.buttonIcon;
    } else {
      // fallback icon
      const icon = `url(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-6 -6 36 36'%3E %3Cpath d='M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z' /%3E%3C/svg%3E"
      )`;
      image.style.background = "var(--ol-subtle-foreground-color)";
      image.style.maskImage = icon;
      image.style.webkitMaskImage = icon;
    }
    image.style.height = "100%";
    image.style.width = "100%";
    image.style.position = "absolute";
    image.style.pointerEvents = "none";
    element.appendChild(image);
    element.appendChild(button);

    super({
      element: element,
    });

    this._centerWhenReady = options.centerWhenReady;
    this._highAccuracy = options.highAccuracy;
    this._trackAccuracy = options.trackAccuracy;
    this._trackHeading = options.trackHeading;

    this._positionFeature = new Feature({
      geometry: new Point([NaN, NaN]),
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
      // @ts-ignore
      this._source.addFeature(this._accuracyFeature);
    }

    // @ts-ignore
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
    this._layer.setMap(map);
    super.setMap(map);
    if (map && this._centerWhenReady) {
      this.initGeolocation();
    }
  }

  private _centerWhenReady: boolean;
  private _highAccuracy: boolean;
  private _positionFeature: Feature<Point>;
  private _accuracyFeature: Feature<Geometry>;
  private _trackAccuracy: boolean;
  private _trackHeading: boolean;
  //@ts-ignore
  private _layer: VectorLayer<VectorSource>;
  private _source: VectorSource<Feature<Point>>;
  private _geolocation: Geolocation;

  /**
   * initializes the geolocation control.
   * calling this will cause a user prompt about allowing geolocation in the browser.
   * @returns {Promise} returns a promise that resolves to coordinates on success, or an error event.
   * this can be used to await the users input on the browsers location accept/deny
   */
  initGeolocation() {
    return new Promise((resolve, reject) => {
      const map = this.getMap();
      if (map) {
        this._geolocation = new Geolocation({
          tracking: true,
          trackingOptions: {
            enableHighAccuracy: this._highAccuracy,
          },
          // take the projection to use from the map's view
          projection: map.getView().getProjection(),
        });
      }

      if (this._centerWhenReady) {
        this._geolocation.once("change:position", (e) => {
          map.getView().setCenter(e.target.getPosition());
        });
      }

      this._geolocation.on("error", function (evt) {
        reject(evt);
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
        resolve(coordinates);
      });

      this._geolocation.on("change:accuracyGeometry", () => {
        if (this._trackAccuracy && this._accuracyFeature) {
          this._accuracyFeature.setGeometry(
            this._geolocation.getAccuracyGeometry()
          );
        }
      });
    });
  }

  /**
   * returns the geolocation control button
   * @returns
   */
  getElement() {
    return this.element;
  }

  /**
   * centers the map on the position of the geolocation, if possible
   */
  async centerOnPosition() {
    try {
      await this.initGeolocation();
      const coordinates = this._geolocation?.getPosition();
      if (coordinates) {
        this.getMap()?.getView().setCenter(coordinates);
      }
    } catch (e) {
      // user denied geolocation
      console.error(e);
    }
  }
}
