import { Control } from "ol/control";
import Feature from "ol/Feature";
import Geolocation from "ol/Geolocation";
import Point from "ol/geom/Point";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Fill, Stroke, Style } from "ol/style";

/**
 * @typedef {import("../../types").GeolocationOptions} GeolocationOptions
 */

export default class GeolocationControl extends Control {
  /**
   * @param {GeolocationOptions} [opt_options] - Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    // Create the main control element and the button for geolocation
    const element = document.createElement("div");
    element.className = "geolocation ol-unselectable ol-control";
    const button = document.createElement("button");
    button.title = "Show your location";
    const image = document.createElement("img");

    // Set the button icon, using a fallback icon if none is provided
    if (options.buttonIcon) {
      image.src = options.buttonIcon;
    } else {
      // Fallback icon: A data URL SVG icon
      const icon = `url(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-6 -6 36 36'%3E %3Cpath d='M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z' /%3E%3C/svg%3E"
      )`;
      image.style.background = "var(--ol-subtle-foreground-color)";
      image.style.maskImage = icon;
      image.style.webkitMaskImage = icon;
    }

    // Style the icon to fit inside the button
    image.style.height = "100%";
    image.style.width = "100%";
    image.style.position = "absolute";
    image.style.pointerEvents = "none";
    element.appendChild(image);
    element.appendChild(button);

    // Call the superclass constructor to set up the control
    super({ element: element });

    // Store the configuration options
    this._centerWhenReady = options.centerWhenReady;
    this._highAccuracy = options.highAccuracy;
    this._trackAccuracy = options.trackAccuracy;
    this._trackHeading = options.trackHeading;

    // Create a feature for the current position
    this._positionFeature = new Feature({
      geometry: new Point([NaN, NaN]),
      heading: 0,
    });

    // Set up a vector source for the geolocation features
    this._source = new VectorSource({
      features: [this._positionFeature],
    });

    // If tracking accuracy, create an accuracy feature and add it to the source
    if (this._trackAccuracy) {
      this._accuracyFeature = new Feature();
      this._accuracyFeature.setStyle(
        new Style({
          fill: new Fill({ color: "rgba(0, 0, 0, 0.2)" }),
          stroke: new Stroke({ width: 2, color: "rgba(0, 0, 0, 0.7)" }),
        })
      );
      this._source.addFeature(this._accuracyFeature);
    }

    // Create a vector layer for the geolocation features
    this._layer = new VectorLayer({ source: this._source });

    // Apply a custom style to the layer if provided
    if (options.style) {
      this._layer.setStyle(options.style);
    }

    // Add an event listener for the button click to center on the geolocation
    button.addEventListener("click", this.centerOnPosition.bind(this), false);
  }

  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   *
   * @param {import("ol/Map").default|null} map - Map instance.
   * @api
   */
  setMap(map) {
    // Set the vector layer on the specified map
    this._layer.setMap(map);
    super.setMap(map);

    // If the control should center on geolocation when ready, initialize geolocation
    if (map && this._centerWhenReady) {
      this.initGeolocation();
    }
  }

  /**
   * Initializes the geolocation control.
   * This will prompt the user for geolocation permissions in the browser.
   *
   * @returns {Promise} - A promise that resolves to the coordinates on success, or an error event on failure.
   */
  initGeolocation() {
    return new Promise((resolve, reject) => {
      const map = this.getMap();
      if (map) {
        this._geolocation = new Geolocation({
          tracking: true,
          trackingOptions: { enableHighAccuracy: this._highAccuracy },
          projection: map.getView().getProjection(),
        });
      }

      // Center the map on the user's location when the geolocation is first determined
      if (this._centerWhenReady) {
        this._geolocation.once("change:position", (e) => {
          map.getView().setCenter(e.target.getPosition());
        });
      }

      // Handle geolocation errors
      this._geolocation.on("error", (evt) => reject(evt));

      // Update the accuracy feature when the accuracy geometry changes
      this._geolocation.on("change:accuracyGeometry", () => {
        if (this._trackAccuracy) {
          this._accuracyFeature.setGeometry(
            this._geolocation.getAccuracyGeometry()
          );
        }
      });

      // Track heading changes if the option is enabled
      this._geolocation.on("change:heading", (e) => {
        if (this._trackHeading && this._highAccuracy) {
          this._positionFeature.set("heading", e.target.getHeading());
        }
      });

      // Update the position feature when the position changes
      this._geolocation.on("change:position", () => {
        const coordinates = this._geolocation.getPosition();
        this._positionFeature.getGeometry().setCoordinates(coordinates || null);
        resolve(coordinates);
      });
    });
  }

  /**
   * Returns the geolocation control element.
   *
   * @returns {HTMLElement} - The control element.
   */
  getElement() {
    return this.element;
  }

  /**
   * Centers the map on the position of the geolocation, if possible.
   */
  async centerOnPosition() {
    try {
      await this.initGeolocation();
      const coordinates = this._geolocation?.getPosition();
      if (coordinates) {
        this.getMap()?.getView().setCenter(coordinates);
      }
    } catch (e) {
      console.error(e);
    }
  }
}
