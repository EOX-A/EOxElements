/**
 * Initially check if all layers have an id and title,
 * fill in some backup in case they haven't
 *
 * @param {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>} collection
 * @param {string} idProperty
 * @param {string} titleProperty
 */
//
export default function checkProperties(collection, idProperty, titleProperty) {
  const layerArray = collection.getArray();
  layerArray.forEach((layer) => {
    if (!layer.get(idProperty)) {
      //@ts-ignore
      layer.set(idProperty, layer.ol_uid);
    }
    if (!layer.get(titleProperty)) {
      //@ts-ignore
      layer.set(titleProperty, `layer ${layer.ol_uid}`);
    }
  });
}
