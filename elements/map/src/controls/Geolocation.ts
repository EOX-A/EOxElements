import { Control } from "ol/control.js";
import Feature from "ol/Feature.js";
import Geolocation from "ol/Geolocation.js";
import Point from "ol/geom/Point.js";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style.js";
import { Vector as VectorSource } from "ol/source.js";
import { Vector as VectorLayer } from "ol/layer.js";


// The certificate is at "./localhost.pem" and the key at "./localhost-key.pem" ✅

export default class GeolocationControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options: import("ol/control/Control").Options) {
    const options = opt_options || {};

    const button = document.createElement("button");
    //button.innerHTML = '&#1792;';
    button.innerHTML = "&#6816";

    const element = document.createElement("div");
    element.className = "rotate-north ol-unselectable ol-control";
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });

    this.centerWhenReady_ = options.centerWhenReady;
    this.highAccuracy_ = options.highAccuracy;
    this.trackAccuracy_ = true;
    button.addEventListener("click", this.centerOnPosition.bind(this), false);
  }

  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(map: import("ol/Map.js").default | null) {
    console.log("set map");
    if (map) {
      console.log(map);
      console.log(map.getView().getProjection());
      this.geolocation_ = new Geolocation({
        // take the projection to use from the map's view
        tracking: true,
        trackingOptions: {
          enableHighAccuracy: this.highAccuracy_,
        },
        projection: map.getView().getProjection(),
      });
      
      if (this.centerWhenReady_) {
        this.geolocation_.once('change:position', (e) => {
          map.getView().setCenter(e.target.getPosition());
        })
      }

      this.accuracyFeature_ = new Feature();

      this.positionFeature_ = new Feature({
        geometry: new Point([0, 0]),
      })
      this.positionFeature_.setStyle(new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: "orangered",
          }),
          stroke: new Stroke({
            color: "#fff",
            width: 2,
          }),
        }),
      }))
      this.source_ = new VectorSource({
        features: [this.positionFeature_]
      })
      this.layer_ = new VectorLayer({
        source: this.source_
      })
      this.layer_.setMap(map);

      // listen to changes in position
      this.geolocation_.on("change", function (e) {
        console.log("geolocation changed");
        console.log(e);
        console.log(e.target.getPosition());
      });

      this.geolocation_.on("error", function (evt) {
        console.log(evt);
      });

      this.geolocation_.on('change:accuracyGeometry', () => {
        if (this.trackAccuracy_) {
          this.accuracyFeature_.setGeometry(this.geolocation_.getAccuracyGeometry());
        }
      });
      this.geolocation_.on('change:heading', (e) => {
        console.log('changeHeading');
        console.log(e);
        if (this.trackHeading_ && this.highAccuracy_) {
          this.accuracyFeature_.getStyle().setRotation(e.target.getHeading());
        }
      });


      this.geolocation_.on("change:position", () => {
        console.log("change position");
        const coordinates = this.geolocation_.getPosition();
        console.log(coordinates);
        this.positionFeature_.getGeometry().setCoordinates(coordinates ? coordinates : null)
      });

      this.geolocation_.on("change:accuracyGeometry", () => {
        this.accuracyFeature_.setGeometry(this.geolocation_.getAccuracyGeometry());
      });
    }

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
