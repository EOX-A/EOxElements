/**
 * Update the shared export dialog's status strip.
 * @param {import("../../components/timecontrol-timelapse").EOxTimeControlTimelapse} EOxTimelapse - Timelapse instance.
 * @param {string} [message] - Export status, or omit to show snapshot loading progress.
 * @returns {void}
 */
export default function updateExportStatusMethod(EOxTimelapse, message) {
  const status = EOxTimelapse.timelapseComponent?.querySelector(
    ".timecontrol-export-status",
  );
  if (!status) return;
  const frames = EOxTimelapse.exportConfig?.mapLayers || [];
  const loaded = frames.filter((frame) => frame.img).length;
  status.textContent =
    message ??
    `Loaded map frames (${loaded}/${frames.length})${loaded === frames.length && frames.length ? " — Ready to export" : " — Please wait…"}`;
}
