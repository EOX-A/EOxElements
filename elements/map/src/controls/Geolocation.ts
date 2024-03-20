import { Control } from "ol/control.js";
import Feature from "ol/Feature.js";
import Geolocation from "ol/Geolocation.js";
import Point from "ol/geom/Point.js";
import { Vector as VectorSource } from "ol/source.js";
import { Vector as VectorLayer } from "ol/layer.js";
import { Fill, Stroke, Style } from "ol/style";

export type GeolocationOptions = import("ol/control/Control").Options & {
  style?: import("ol/style/flat.js").FlatStyleLike;
  centerWhenReady?: boolean;
  highAccuracy?: boolean;
  trackAccuracy?: boolean;
  trackHeading?: boolean;
};

export default class GeolocationControl extends Control {
  /**
   * @param {GeolocationOptions} [opt_options] Control options.
   */
  constructor(opt_options: GeolocationOptions) {
    const options = opt_options || {};

    const button = document.createElement("button");
    button.innerHTML = "&#6816";

    const element = document.createElement("div");
    element.className = "rotate-north ol-unselectable ol-control";
    element.appendChild(button);

    super({
      element: element,
    });

    this.centerWhenReady_ = options.centerWhenReady;
    this.highAccuracy_ = options.highAccuracy;
    this.trackAccuracy_ = options.trackAccuracy;
    this.trackHeading_ = options.trackHeading;

    this.positionFeature_ = new Feature({
      geometry: new Point([0, 0]),
    });

    this.source_ = new VectorSource({
      features: [this.positionFeature_],
    });
    if (this.trackAccuracy_) {
      this.accuracyFeature_ = new Feature();
      // flat styles only work at the layer atm.
      // for now, override the accuracy-feature style with a default one
      this.accuracyFeature_.setStyle(
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
      this.source_.addFeature(this.accuracyFeature_);
    }

    this.layer_ = new VectorLayer({
      source: this.source_,
    });

    if (options.style) {
      this.layer_.setStyle(options.style);
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
      this.geolocation_ = new Geolocation({
        // take the projection to use from the map's view
        tracking: true,
        trackingOptions: {
          enableHighAccuracy: this.highAccuracy_,
        },
        projection: map.getView().getProjection(),
      });

      if (this.centerWhenReady_) {
        this.geolocation_.once("change:position", (e) => {
          map.getView().setCenter(e.target.getPosition());
        });
      }

      this.geolocation_.on("error", function (evt) {
        console.log(evt);
      });

      this.geolocation_.on("change:accuracyGeometry", () => {
        if (this.trackAccuracy_) {
          this.accuracyFeature_.setGeometry(
            this.geolocation_.getAccuracyGeometry()
          );
        }
      });
      this.geolocation_.on("change:heading", () => {
        // TO DO
        /*if (this.trackHeading_ && this.highAccuracy_) {
          const style = this.layer_.getStyle();
          console.log(style);
          this.layer_.getStyle().setRotation(e.target.getHeading());
        }*/
      });

      this.geolocation_.on("change:position", () => {
        const coordinates = this.geolocation_.getPosition();
        this.positionFeature_
          .getGeometry()
          .setCoordinates(coordinates ? coordinates : null);
      });

      this.geolocation_.on("change:accuracyGeometry", () => {
        this.accuracyFeature_.setGeometry(
          this.geolocation_.getAccuracyGeometry()
        );
      });
    }

    this.layer_.setMap(map);
    super.setMap(map);
  }

  centerWhenReady_: boolean;
  highAccuracy_: boolean;
  positionFeature_: Feature<Point>;
  accuracyFeature_: Feature;
  trackAccuracy_: boolean;
  trackHeading_: boolean;
  layer_: VectorLayer<VectorSource>;
  source_: VectorSource;
  geolocation_: Geolocation;

  centerOnPosition() {
    this.getMap().getView().setCenter(this.geolocation_.getPosition());
  }
}
