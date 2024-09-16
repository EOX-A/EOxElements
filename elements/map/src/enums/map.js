/**
 * Specifies the options for reading features with defined source and target projections.
 * `dataProjection` specifies the projection of the input data.
 * `featureProjection` specifies the projection that features should be transformed to.
 */
export const READ_FEATURES_OPTIONS = {
  dataProjection: "EPSG:4326", // Define the source projection
  featureProjection: "EPSG:3857", // Define the target projection for the map
};
