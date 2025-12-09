export default function snapshotGenerator(EOxTimeControl) {
  const EoxMaps = EOxTimeControl.renderRoot.querySelectorAll(".map-view-item");
  EoxMaps.forEach((EoxMap) => {
    const map = EoxMap.map;
    const index = EoxMap.getAttribute("data-index");
    const renderComplete = () => {
      const mapCanvas = document.createElement("canvas");
      const size = map.getSize();
      mapCanvas.width = size[0];
      mapCanvas.height = size[1];
      const mapContext = mapCanvas.getContext("2d");
      Array.prototype.forEach.call(
        map.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),
        function (canvas) {
          if (canvas.width > 0) {
            const opacity =
              canvas.parentNode.style.opacity || canvas.style.opacity;
            mapContext.globalAlpha = opacity === "" ? 1 : Number(opacity);
            let matrix;
            const transform = canvas.style.transform;
            if (transform) {
              matrix = transform
                // eslint-disable-next-line no-useless-escape
                .match(/^matrix\(([^\(]*)\)$/)[1]
                .split(",")
                .map(Number);
            } else {
              matrix = [
                parseFloat(canvas.style.width) / canvas.width,
                0,
                0,
                parseFloat(canvas.style.height) / canvas.height,
                0,
                0,
              ];
            }
            CanvasRenderingContext2D.prototype.setTransform.apply(
              mapContext,
              matrix,
            );
            const backgroundColor = canvas.parentNode.style.backgroundColor;
            if (backgroundColor) {
              mapContext.fillStyle = backgroundColor;
              mapContext.fillRect(0, 0, canvas.width, canvas.height);
            }
            mapContext.drawImage(canvas, 0, 0);
          }
        },
      );
      mapContext.globalAlpha = 1;
      mapContext.setTransform(1, 0, 0, 1, 0, 0);
      if (
        EOxTimeControl &&
        EOxTimeControl.exportConfig &&
        Array.isArray(EOxTimeControl.exportConfig.mapLayers) &&
        typeof index !== "undefined"
      ) {
        const idx = Number(index);
        if (!isNaN(idx) && EOxTimeControl.exportConfig.mapLayers[idx]) {
          EOxTimeControl.exportConfig.mapLayers[idx].img =
            mapCanvas.toDataURL();
          EOxTimeControl.requestUpdate();
        }
      }
    };
    map.once("rendercomplete", renderComplete);
    map.renderSync();
  });
}
