/**
 * Generates events for upload, drag-drop and copy-paste
 *
 * @param {VectorLayer<VectorSource>} vectorLayer
 * @param {EOxMap} EOxMap
 */
export function generateUploadEvents(vectorLayer, EOxMap) {
  document.addEventListener("keydown", (event) => {
    console.log(event);
    if ((event.ctrlKey || event.metaKey) && event.key === "v")
      pasteFeaturesFromClipboard(vectorLayer, EOxMap);
  });

  // Prevent default drag behaviors
  EOxMap.addEventListener("drop", preventDefaults, false);
  EOxMap.addEventListener("dragstart", preventDefaults, false);
  EOxMap.addEventListener("dragover", preventDefaults, false);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ["dragenter", "dragover"].forEach((eventName) => {
    EOxMap.addEventListener(eventName, highlight, false);
  });

  ["dragleave", "drop"].forEach((eventName) => {
    EOxMap.addEventListener(eventName, unHighlight, false);
  });

  // Handle dropped files
  EOxMap.addEventListener(
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

function highlight(e) {
  e.srcElement.style.opacity = "0.4";
}

function unHighlight(e) {
  e.srcElement.style.opacity = "1";
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
