/**
 * Initially check if all layers have an id and title,
 * fill in some backup in case they haven't
 *
 * @param {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>} collection - The collection of layers to be checked.
 * @param {string} idProperty - The property used as the ID.
 * @param {string} titleProperty - The property used as the title.
 * @param {import("lit").LitElement} that - The LitElement instance.
 */
//
export default function checkProperties(
  collection,
  idProperty,
  titleProperty,
  that
) {
  const layerArray = collection.getArray(); // Get an array of layers from the collection.

  let requestUpdateNecessary = false;
  // Loop through each layer in the array to check and assign properties if missing.
  layerArray.forEach((layer) => {
    //@ts-ignore
    const olUID = layer.ol_uid;

    // Check and assign an ID property if it's missing.
    if (!layer.get(idProperty)) {
      layer.set(idProperty, olUID);
      requestUpdateNecessary = true;
    }

    // Check and assign a title property if it's missing.
    if (!layer.get(titleProperty)) {
      layer.set(titleProperty, `layer ${olUID}`);
      requestUpdateNecessary = true;
    }

    if (requestUpdateNecessary) {
      that.requestUpdate();
    }
  });
}
