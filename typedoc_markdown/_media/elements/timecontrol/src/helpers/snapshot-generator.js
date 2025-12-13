import { html, render } from "lit";
import { when } from "lit/directives/when.js";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import minMax from "dayjs/plugin/minMax";
import { TIME_CONTROL_DATE_FORMAT } from "../enums";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(minMax);

/**
 * @typedef {import("../components/timecontrol-timelapse").EOxTimeControlTimelapse} EOxTimeControlTimelapse
 * @typedef {import("@eox/map").EOxMap} EOxMap
 */

/**
 * Generates snapshots (canvas images) from map layers for each time step in the export configuration.
 * Renders each map layer to a canvas, converts it to a data URL, and updates the export configuration
 * with the image URLs. Also updates the preview images in the export dialog.
 *
 * @param {EOxTimeControlTimelapse} EOxTimeControlTimelapse - The timelapse component instance.
 */
export default function snapshotGenerator(EOxTimeControlTimelapse) {
  const EOxTimeControlDate = /** @type {EOxTimeControlDate} */ (
    EOxTimeControlTimelapse.getEOxTimeControl().querySelector(
      ".eox-timecontrol-date",
    )
  );
  const EoxMaps = /** @type {Array<HTMLElement>} */ Array.from(
    EOxTimeControlTimelapse.timelapseComponent.querySelectorAll(
      ".map-view-item",
    ),
  ).map((element) => /** @type {EOxMap} */ (element));
  const exportImgsComponent =
    EOxTimeControlTimelapse.timelapseComponent.querySelector(".export-images");
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
        EOxTimeControlTimelapse &&
        EOxTimeControlTimelapse.exportConfig &&
        Array.isArray(EOxTimeControlTimelapse.exportConfig.mapLayers) &&
        typeof index !== "undefined"
      ) {
        const idx = Number(index);
        if (
          !isNaN(idx) &&
          EOxTimeControlTimelapse.exportConfig.mapLayers[idx]
        ) {
          const layer = EOxTimeControlTimelapse.exportConfig.mapLayers[idx];
          EOxTimeControlTimelapse.exportConfig.mapLayers[idx].img =
            mapCanvas.toDataURL();

          const imgComponent = /** @type {HTMLElement} */ (
            exportImgsComponent.children[idx]
          );
          imgComponent.classList.remove("loader-image");
          if (EOxTimeControlTimelapse.exportConfig.selectedPreview === idx)
            imgComponent.classList.add("selected-preview");
          imgComponent.addEventListener("click", () =>
            EOxTimeControlTimelapse.handleSelectedPreview(idx),
          );
          while (imgComponent.firstChild) {
            imgComponent.removeChild(imgComponent.firstChild);
          }

          render(
            html`<img src=${layer.img} alt="Exported map ${index + 1}" />
              ${when(
                layer.date,
                () =>
                  html`<span
                    >${dayjs(layer.date).format(
                      EOxTimeControlDate?.format || TIME_CONTROL_DATE_FORMAT,
                    )}</span
                  >`,
              )}`,
            imgComponent,
          );
          EOxTimeControlTimelapse.requestUpdate();
        }
      }
    };
    map.once("rendercomplete", renderComplete);
    map.renderSync();
  });
}
