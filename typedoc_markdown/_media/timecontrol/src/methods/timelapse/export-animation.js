import exportAnimation from "../../helpers/export-animation.js";
import updateExportStatusMethod from "./update-export-status.js";

/**
 * Guard incomplete snapshots and manage status for the current export dialog.
 * @param {import("../../components/timecontrol-timelapse").EOxTimeControlTimelapse} EOxTimelapse - Timelapse instance.
 * @param {() => void} onComplete - Clear the component's export loading state.
 * @returns {boolean} Whether an export was started.
 */
export default function exportAnimationMethod(EOxTimelapse, onComplete) {
  const dialog = EOxTimelapse.timelapseComponent;
  const config = EOxTimelapse.exportConfig;
  if (!dialog || !config) return false;
  const frames = config.mapLayers;
  const loaded = frames.filter((frame) => frame.img).length;
  if (!frames.length || loaded !== frames.length) {
    updateExportStatusMethod(EOxTimelapse);
    alert(
      `Please wait until all map frames are loaded before exporting (${loaded}/${frames.length} loaded).`,
    );
    return false;
  }

  const format = EOxTimelapse.format.toUpperCase();
  const button = /** @type {HTMLButtonElement} */ (
    dialog.querySelector(".export-btn")
  );
  const icon = button.querySelector("i");
  button.disabled = true;
  icon.classList.replace("export-icon", "export-icon-loading");
  const updateStatus = (message) => {
    if (
      EOxTimelapse.timelapseComponent === dialog &&
      EOxTimelapse.exportConfig === config
    )
      updateExportStatusMethod(EOxTimelapse, message);
  };
  const finish = (error) => {
    // An old export must not update a closed or newly opened dialog.
    if (
      EOxTimelapse.timelapseComponent !== dialog ||
      EOxTimelapse.exportConfig !== config
    )
      return;
    button.disabled = false;
    icon.classList.replace("export-icon-loading", "export-icon");
    updateStatus(
      error
        ? `Export failed: ${error}`
        : `${format} export complete — Download ready`,
    );
    onComplete();
  };
  updateStatus(`Preparing ${format} export…`);
  exportAnimation(
    frames,
    EOxTimelapse.format,
    EOxTimelapse.speed,
    finish,
    EOxTimelapse,
    updateStatus,
  ).catch((error) =>
    finish(error instanceof Error ? error.message : String(error)),
  );
  return true;
}
