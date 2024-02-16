/**
 * Generates events for upload, drag-drop and copy-paste
 *
 * @param {EOxDraw} EOxDraw
 * @param {EOxMap} EOxMap
 */
export function generateUploadEvents(EOxDraw, EOxMap) {
  // document.addEventListener("keydown", (event) => {
  //   console.log(event);
  //   if ((event.ctrlKey || event.metaKey) && event.key === "v")
  //     pasteFeaturesFromClipboard(vectorLayer, EOxMap);
  // });

  // Prevent default drag behaviors
  EOxMap.addEventListener("drop", preventDefaults, false);
  EOxMap.addEventListener("dragstart", preventDefaults, false);
  EOxMap.addEventListener("dragover", preventDefaults, false);

  ["dragenter", "dragover"].forEach((eventName) => {
    EOxMap.addEventListener(eventName, highlight, false);
  });

  ["dragleave", "drop"].forEach((eventName) => {
    EOxMap.addEventListener(eventName, unHighlight, false);
  });

  // Handle dropped files
  EOxMap.addEventListener("drop", (e) => handleFiles(e, EOxDraw), false);
}

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

/**
 * This function reads text from the clipboard and
 * attempts to parse it as GeoJSON, KML, or TopoJSON.
 *
 * @param {EOxDraw} EOxDraw
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

export function handleFiles(e, EOxDraw) {
  preventDefaults(e);
  const dt = e.dataTransfer;
  const files = dt?.files || e.target.files;

  // @ts-ignore
  [...files].forEach((file) => importFile(file, EOxDraw));
}

function importFile(file, EOxDraw) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = function () {
    if (typeof reader.result === "string")
      EOxDraw.handleFeatureChange(reader.result);
  };
}
