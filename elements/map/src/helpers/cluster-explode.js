import Feature from "ol/Feature";
import Stroke from "ol/style/Stroke";
import Interaction from "ol/interaction/Interaction";
import Style from "ol/style/Style";
import { createEmpty, extend, getArea } from "ol/extent";
import { LineString, Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";

/**
 * @typedef {import('../main').EOxMap} EOxMap
 * @typedef {import("../layers").EoxLayer} EoxLayer
 * @typedef {import("../types").SelectLayer} SelectLayer
 * @typedef {import("../types").ClusterExplodeOptions} ClusterExplodeOptions
 * @typedef {import("../types").DrawOptions} DrawOptions
 */

const circleDistanceMultiplier = 1;
const circleFootSeparation = 28;
const circleStartAngle = Math.PI / 2;

/**
 * Class representing the EOxClusterInteraction.
 * Handles the the zoom and the "spider-explosion" of clustered features of a cluster layer
 */
export class EOxClusterExplodeInteraction extends Interaction {
  /**
   * @param {EOxMap} eoxMap - Instance of the EOxMap class.
   * @param {import("ol/layer/Vector").default<import("ol/source/Cluster").default>} clusterLayer - Vector Layer with Cluster Source for the interaction.
   * @param {ClusterExplodeOptions} options - Options for the selection interaction.
   */
  constructor(eoxMap, clusterLayer, options) {
    super(options);
    this.clusterLayer = clusterLayer;
    this.eoxMap = eoxMap;

    const defaultOptions = {
      maxZoom: 20,
      atPixelOptions: {},
      fitOptions: {
        duration: 500,
        padding: [40, 40, 40, 40],
      },
    };

    // keep the options object immutable, while keeping the sub-properties of the default options
    const _options = structuredClone(options);
    if (_options.fitOptions) {
      defaultOptions.fitOptions = {
        ...defaultOptions.fitOptions,
        ..._options.fitOptions,
      };
      delete _options.fitOptions;
    }

    this.#options = { ...defaultOptions, ..._options };
    this.active = options.active || clusterLayer.getVisible();

    const temporaryVectorLayer = new VectorLayer();
    temporaryVectorLayer.setStyle(options.style);
    this.#explodedFeatureStyleFunction =
      temporaryVectorLayer.getStyleFunction();
    console.log(this.#explodedFeatureStyleFunction);
  }

  #options = null;
  #explodedFeatureStyleFunction = null;
  #explodedFeature = null;

  closeCluster() {
    if (this.#explodedFeature) {
      this.#explodedFeature.setStyle(undefined);
      this.#explodedFeature = null;
    }
  }

  handleEvent(evt) {
    if (!this.getActive()) {
      return true;
    }
    if (evt.type === "pointermove") {
      const hasFeature = this.eoxMap.map.hasFeatureAtPixel(evt.pixel, {
        layerFilter: (layer) => {
          return layer === this.clusterLayer;
        },
        ...this.#options.atPixelOptions,
      });
      this.eoxMap.map.getTargetElement().style.cursor = hasFeature
        ? "pointer"
        : "default";
      // If the pointer is over a feature, we don't want to propagate the event
      return !hasFeature;
    }

    if (evt.type === "click") {
      const features = this.eoxMap.map.getFeaturesAtPixel(evt.pixel, {
        layerFilter: (layer) => {
          return layer === this.clusterLayer;
        },
        ...this.#options.atPixelOptions,
      });
      if (features.length === 0) {
        this.closeCluster();
        return true; // No features found, let other interactions handle the event
      }

      const clusterFeature = features[0];
      const clusterMembers = clusterFeature.get("features");
      if (clusterMembers.length <= 1) {
        this.closeCluster();
        return true;
      }

      if (this.#explodedFeature && this.#explodedFeature === clusterFeature) {
        const clusterMember = this.getClusterMemberForCoordinate(
          /** @type {import("ol/Feature").default<import("ol/geom/Point").default>} */ (
            clusterFeature
          ),
          evt.coordinate,
        );
        console.log("clusterMember", clusterMember);
        // to do: fire event
      }

      // If the zoom level is at the maximum, explode the cluster
      if (this.eoxMap.map.getView().getZoom() > this.#options.maxZoom - 1) {
        this.explodeCluster(clusterFeature);
        return false;
      }
      // If the zoom level is not at the maximum, pan to the extent of the cluster members
      const extent = createEmpty();
      clusterMembers.forEach((feature) =>
        extend(extent, feature.getGeometry().getExtent()),
      );

      // if the features are really close together, explode the cluster
      if (getArea(extent) < 100) {
        console.log("explode because area is too small");
        this.explodeCluster(clusterFeature);
        return false;
      }

      this.panTo(extent);
      return false;
    }

    return true; // Let other interactions handle the event
  }

  /**
   * Sets the active state of the interaction.
   * @param {boolean} active - Whether the interaction should be active.
   */
  setActive(active) {
    if (!active) {
      this.closeCluster();
      this.eoxMap.map.getTargetElement().style.cursor = "default";
    }
    super.setActive(active);
  }

  setMap(map) {
    if (!map) {
      this.closeCluster();
      this.eoxMap.map.getTargetElement().style.cursor = "default";
    }
    super.setMap(map);
  }

  /**
   * Pans the map to the specified extent.
   * @param {import("ol/extent").Extent} extent - The feature or extent to pan to.
   */
  panTo = (extent) => {
    this.eoxMap.map.getView().fit(extent, this.#options.fitOptions);
  };

  explodeCluster(clusterFeature) {
    if (this.#explodedFeature) {
      this.closeCluster();
    }
    const centerCoordinates = clusterFeature.getGeometry().getCoordinates();
    const clusterMembers = clusterFeature.get("features");
    const pointsCircle = this.generatePointsCircle(
      clusterMembers.length,
      centerCoordinates,
      this.eoxMap.map.getView().getResolution(),
    ).reduce(
      /**
       * @param {Array<import("ol/style/Style").default>} styles
       * @param {Array<number>} coordinates
       * @param {number} i
       * @returns
       */
      (styles, coordinates, i) => {
        const point = new Point(coordinates);
        const line = new LineString([centerCoordinates, coordinates]);

        styles.unshift(
          new Style({
            geometry: line,
            stroke: new Stroke({
              color: "rgba(50, 50, 50, 0.5)",
              width: 2.5,
            }),
          }),
        );

        const temporaryFeature = new Feature({
          ...clusterMembers[i].getProperties(),
        });
        const temporaryFeatureStyle = this.#explodedFeatureStyleFunction(
          temporaryFeature,
          this.eoxMap.map.getView().getResolution(),
        );
        if (temporaryFeatureStyle?.length) {
          temporaryFeatureStyle.forEach((s) => {
            //console.log(s.getProperties(temporaryFeature.getProperties()))
            const style = s.clone();
            style.setGeometry(point);
            styles.unshift(style);
          });
        }
        return styles;
      },
      [],
    );
    clusterFeature.setStyle(pointsCircle);
    this.#explodedFeature = clusterFeature;
  }

  /**
   * get the cluster member of an (open) cluster feature by calculating the points circle
   * @param {Feature<Point>} openClusterFeature cluster feature
   * @param {Array} coordinate coordinate
   * @returns {*} Object with feature and calculated coords
   */
  getClusterMemberForCoordinate(openClusterFeature, coordinate) {
    const members = openClusterFeature.get("features");
    const coords = this.generatePointsCircle(
      members.length,
      openClusterFeature.getGeometry().getCoordinates(),
      this.eoxMap.map.getView().getResolution(),
    );
    let dist = Infinity;
    let index;
    for (let i = 0, ii = coords.length; i < ii; ++i) {
      const newDist =
        (coordinate[0] - coords[i][0]) ** 2 +
        (coordinate[1] - coords[i][1]) ** 2;
      if (newDist < dist) {
        index = i;
        dist = newDist;
      }
    }
    return { feature: members[index], coords: coords[index] };
  }

  /**
   * From
   * https://github.com/Leaflet/Leaflet.markercluster/blob/31360f2/src/MarkerCluster.Spiderfier.js#L55-L72
   * Arranges points in a circle around the cluster center, with a line pointing from the center to
   * each point.
   * @param {number} count Number of cluster members.
   * @param {Array<number>} clusterCenter Center coordinate of the cluster.
   * @param {number} resolution Current view resolution.
   * @return {Array<Array<number>>} An array of coordinates representing the cluster members.
   */
  generatePointsCircle(count, clusterCenter, resolution) {
    const circumference =
      circleDistanceMultiplier * circleFootSeparation * (2 + count);
    let legLength = circumference / (Math.PI * 2); // radius from circumference
    const angleStep = (Math.PI * 2) / count;
    const res = [];
    let angle;
    legLength = Math.max(legLength, 35) * resolution; // Min distance to get outside the cluster icon.

    for (let i = 0; i < count; ++i) {
      // Clockwise, like spiral.
      angle = circleStartAngle + i * angleStep;
      res.push([
        clusterCenter[0] + legLength * Math.cos(angle),
        clusterCenter[1] + legLength * Math.sin(angle),
      ]);
    }
    return res;
  }

  /**
   * Removes the selection interaction and associated layers from the map.
   */
  /*remove() {
    delete this.eoxMap.selectInteractions[this.options.id];
    this.eoxMap.map.un(this.options.condition || "click", this.listener);
    this.eoxMap.map.un("pointermove", this.pointerMoveListener);
  }*/
}

/**
 * Adds a `select` interaction to the map.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {import("ol/layer/Vector").default<import("ol/source/Cluster").default>} clusterLayer - Layer to be selected.
 * @param {*} options - Options for the select interaction.
 *
 * @throws Will throw an error if an interaction with the specified ID already exists.
 */
export function addClusterExplode(EOxMap, clusterLayer, options) {
  if (EOxMap.interactions[options.id]) {
    throw Error(`Interaction with id: ${options.id} already exists.`);
  }

  const clusterExplodeInteraction = new EOxClusterExplodeInteraction(
    EOxMap,
    clusterLayer,
    options,
  );

  EOxMap.interactions[options.id] = clusterExplodeInteraction;
  EOxMap.map.addInteraction(clusterExplodeInteraction);
  setTimeout(() => {
    EOxMap.map.getInteractions().getArray();
  }, 2000);
}
