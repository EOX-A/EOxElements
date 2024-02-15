/**
 * Generates events for upload, drag-drop and copy-paste
 *
 * @param {VectorLayer<VectorSource>} vectorLayer
 * @param {EOxMap} EOxMap
 */
export function generateUploadEvents(vectorLayer, EOxMap) {
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "v")
      pasteFeaturesFromClipboard(vectorLayer, EOxMap);
  });

  // Prevent default drag behaviors
  document.body.addEventListener("drop", preventDefaults, false);
  document.body.addEventListener("dragstart", preventDefaults, false);
  document.body.addEventListener("dragover", preventDefaults, false);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ["dragenter", "dragover"].forEach((eventName) => {
    document.body.addEventListener(eventName, highlight, false);
  });

  ["dragleave", "drop"].forEach((eventName) => {
    document.body.addEventListener(eventName, unHighlight, false);
  });

  // Handle dropped files
  document.body.addEventListener(
    "drop",
    (e) => handleDrop(e, vectorLayer, EOxMap),
    false
  );
}

/**
 * This function reads text from the clipboard and
 * attempts to parse it as GeoJSON, KML, or TopoJSON.
 *
 * @param {VectorLayer<VectorSource>} vectorLayer
 * @param {EOxMap} EOxMap
 */
export function pasteFeaturesFromClipboard(vectorLayer, EOxMap) {
  navigator.clipboard
    .readText()
    .then((text) => {
      EOxMap.parseTextToFeature(text, vectorLayer);
    })
    .catch((err) => {
      console.error("Failed to read from clipboard:", err);
    });
}

function highlight() {
  document.body.style.opacity = "0.4";
}

function unHighlight() {
  document.body.style.opacity = "1";
}

function handleDrop(e, vectorLayer, EOxMap) {
  const dt = e.dataTransfer;
  const files = dt.files;

  // @ts-ignore
  [...files].forEach((file) => uploadFile(file, vectorLayer, EOxMap));
}

function uploadFile(file, vectorLayer, EOxMap) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = function () {
    if (typeof reader.result === "string")
      EOxMap.parseTextToFeature(reader.result, vectorLayer);
  };
}
