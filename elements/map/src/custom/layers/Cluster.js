import VectorLayer from "ol/layer/Vector";
import {
  Style,
  Circle as CircleStyle,
  Fill,
  Stroke,
  Text,
} from "ol/style";

/**
 * @typedef {import("../../../types").ClusterLayerOptions} ClusterLayerOptions
 */

class Cluster extends VectorLayer {
  /**
   * Constructs a Clustered Vector Layer
   *
   * @param {ClusterLayerOptions} options ol vector layer options plus specifics for EOx-Clustering
   */
  constructor(options = {}) {
    console.log("constructor");
    console.log(options);
    super({
      ...options
    });
    console.log(options);
  }


  /*static clusterStyle = (feature) => {
    console.log("cluster style function");
    const clusterMembers = feature.get("features");
    if (clusterMembers.length > 1) {
      const hasClickedFeature = clusterMembers.includes(
        this.clickedClusterMember,
      );
      const selectedIndicatorFeature = clusterMembers.find(
        this.isFeatureSelected,
      );
      if (hasClickedFeature && this.expanded) {
        return [
          new Style({
            image: this.outerCircleTransparent,
          }),
          new Style({
            image: this.innerCircleTransparent,
            text: new Text({
              text: clusterMembers.length.toString(),
              fill: this.textFill,
              font: "12px sans-serif",
            }),
          }),
        ];
      }
      // "expanded" style, will collapse after resolution change
      const amount = clusterMembers.length;
      // minimum size for a cluster of
      // maximum size is reached at 50
      const minSize = 18;
      const maxSize = 40;
      if (amount <= 5) {
        this.innerCircle.setRadius(minSize);
        this.outerCircle.setRadius(minSize + 4);
      } else if (amount <= 50) {
        const addition = ((amount - 5) / maxSize) * (maxSize - minSize);
        // aus 0 soll 0 werden
        // aus 45 soll 30 werden
        this.innerCircle.setRadius(minSize + addition);
        this.outerCircle.setRadius(minSize + addition + 4);
      } else {
        this.innerCircle.setRadius(maxSize);
        this.outerCircle.setRadius(maxSize + 4);
      }
      const styles = [
        new Style({
          image: selectedIndicatorFeature
            ? this.outerCircleSelected
            : this.outerCircle,
        }),
        new Style({
          image: this.innerCircle,
          text: new Text({
            text: clusterMembers.length.toString(),
            fill: this.textFill,
            font: "bold 12px Roboto, sans-serif",
          }),
        }),
      ];
      return styles;
    }
    const originalFeature = feature.get("features")[0];
    return this.clusterMemberStyle(originalFeature);
  };*/

  /**
   * Single feature style, for clusters with 1 feature and cluster circles.
   * @param {Feature} clusterMember A feature from a cluster.
   * @return {Style} An icon style for the cluster member's location.
   */
  /*static clusterMemberStyle = (clusterMember) => {
    console.log("cluster member code");
    const indicatorObject = clusterMember.getProperties().indicatorObject;
    if (indicatorObject) {
      console.log(clusterMember.getProperties());
      const indicatorCode = indicatorObject.indicator;
      console.log(indicatorCode);
      debugger;
      //const indicator = store.getters['features/getIndicators'].find((i) => i.code === indicatorCode);
      const isSelected = this.isFeatureSelected(clusterMember);
      //const image = indicatorClassesStyles[indicator.themes[0]]?.[isSelected ? 'large' : 'small'];
      const iconStyle = new Style({
        image,
        geometry: clusterMember.getGeometry(),
      });
      return [iconStyle];
    }
  };*/

  

  /**
   * returns true if given ol indicator feature is currently selected
   * @param {*} feature ol indicator feature
   * @returns {boolean}
   */
  static isFeatureSelected = (feature) => {
    // to do
    return false;
    /*const { indicatorObject } = feature.getProperties().properties;
    const { selectedIndicator } = store.state.indicators;
    return selectedIndicator && selectedIndicator.indicator === indicatorObject.indicator
    && selectedIndicator.aoiID === indicatorObject.aoiID;*/
  };
}

export default Cluster;
