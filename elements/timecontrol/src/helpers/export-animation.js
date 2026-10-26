import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";
import { createGIF } from "gifshot";

/**
 * @typedef {import("../types").ExportConfig} ExportConfig
 * @typedef {import("../components/timecontrol-timelapse").EOxTimeControlTimelapse} EOxTimeControlTimelapse
 */

/**
 * Exports an animation from map layer snapshots in either GIF or MP4 format.
 * For MP4, uses FFmpeg to convert images to video. For GIF, uses gifshot library.
 *
 * @param {Array<{img?: string}>} mapLayers - Array of map layer objects with optional img property containing image data URLs.
 * @param {"gif" | "mp4"} type - Export format type.
 * @param {number} fps - Frames per second for the animation.
 * @param {Function} setLoading - Callback function to update loading state.
 * @param {EOxTimeControlTimelapse} that - The timelapse component instance.
 * @param {(message: string) => void} [updateStatus] - Reports export stage and progress.
 * @returns {Promise<void>} Promise that resolves when the export is complete.
 */
export default async function exportAnimation(
  mapLayers,
  type,
  fps,
  setLoading,
  that,
  updateStatus = () => {},
) {
  const images = mapLayers.map((layer) => layer.img).filter((img) => img);

  if (images.length === 0) {
    console.error("No images available for export");
    setLoading("No map frames available for export");
    return;
  }

  if (type === "mp4") {
    try {
      const blob = await imagesToMp4(
        images,
        { fps, preset: "ultrafast" },
        updateStatus,
      );
      updateStatus("Preparing MP4 download…");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "timeslider.mp4";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setLoading();
    } catch (error) {
      setLoading(error instanceof Error ? error.message : String(error));
      console.error("MP4 conversion error:", error);
      alert(
        "Failed to convert to MP4: " +
          (error instanceof Error ? error.message : String(error)),
      );
    }
  } else {
    imagesToGIF(images, that, fps, setLoading, updateStatus);
  }
}

function imagesToGIF(dataUrls, that, fps, setLoading, updateStatus) {
  const map = that.timelapseComponent.querySelector(".map-view-item");
  const mapBounding = map.getBoundingClientRect();
  const mapWidth = mapBounding.width;
  const mapHeight = mapBounding.height;

  createGIF(
    {
      gifWidth: mapWidth,
      gifHeight: mapHeight,
      images: [...dataUrls],
      interval: 1 / fps,
      numFrames: dataUrls.length,
      // gifshot repeats each image frameDuration times; speed belongs in interval.
      frameDuration: 1,
      fontWeight: "normal",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontColor: "#ffffff",
      textAlign: "center",
      textBaseline: "bottom",
      sampleInterval: 10,
      numWorkers: 2,
      progressCallback: (progress) => {
        const prepared = Math.min(
          dataUrls.length,
          Math.floor(progress * dataUrls.length),
        );
        updateStatus(
          prepared === dataUrls.length
            ? "Encoding GIF…"
            : `Preparing GIF frames (${prepared}/${dataUrls.length})…`,
        );
      },
    },
    function (obj) {
      if (!obj.error) {
        updateStatus("Preparing GIF download…");
        // Download the generated GIF image
        const link = document.createElement("a");
        link.href = obj.image;
        link.download = "timeslider.gif";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setLoading();
      } else {
        console.error("GIF generation error:", obj.error);
        setLoading(obj.errorMsg || String(obj.error));
      }
    },
  );
}

async function imagesToMp4(
  dataUrls,
  { fps = 1, crf = 1, preset = "veryfast" } = {},
  updateStatus = (_message) => {},
) {
  if (!dataUrls || dataUrls.length === 0) throw new Error("No frames provided");

  // Use FFmpeg's new API for version 0.12+
  const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm";
  const ffmpeg = new FFmpeg();
  updateStatus("Loading MP4 encoder…");
  ffmpeg.on("progress", ({ progress }) => {
    updateStatus(
      `Encoding MP4 (${Math.min(100, Math.max(0, Math.round(progress * 100)))}%)…`,
    );
  });

  // Load with proper worker and wasm URLs
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
  });

  // Write each image as a uniquely named PNG
  const pad = Math.max(3, String(dataUrls.length - 1).length + 1); // always at least 3 digits
  const nameFor = (i) => `frame${String(i).padStart(pad, "0")}.png`;

  for (let i = 0; i < dataUrls.length; i++) {
    const url = dataUrls[i];

    // Convert dataURL to ArrayBuffer
    let buf;
    try {
      if (url.startsWith("data:")) {
        // Handle dataURL directly (faster)
        const base64Data = url.split(",")[1];
        if (!base64Data) {
          throw new Error(`Invalid data URL format at index ${i}`);
        }
        const byteString = atob(base64Data);
        const array = new Uint8Array(byteString.length);
        for (let j = 0; j < byteString.length; j++) {
          array[j] = byteString.charCodeAt(j);
        }
        buf = array;
      } else {
        // Remote fetch as before
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(
            `Failed to fetch image ${i}: ${resp.status} ${resp.statusText}`,
          );
        }
        buf = new Uint8Array(await resp.arrayBuffer());
      }

      if (buf.length === 0) {
        throw new Error(`Empty image data at index ${i}`);
      }

      await ffmpeg.writeFile(nameFor(i), buf);
      updateStatus(`Preparing MP4 frames (${i + 1}/${dataUrls.length})…`);
    } catch (error) {
      throw new Error(
        `Failed to process image ${i}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  // Assemble the input pattern ('frame%03d.png' etc)
  const inputPattern = `frame%0${pad}d.png`;
  const outputFile = "output.mp4";

  try {
    updateStatus("Encoding MP4…");
    await ffmpeg.exec([
      "-framerate",
      String(fps),
      "-i",
      inputPattern,
      "-movflags",
      "faststart",
      "-pix_fmt",
      "yuv420p",
      "-vf",
      "scale=trunc(iw/2)*2:trunc(ih/2)*2",
      "-c:v",
      "libx264",
      "-preset",
      preset,
      "-crf",
      String(crf),
      "-r",
      String(fps),
      outputFile,
    ]);

    const data = /** @type {Uint8Array} */ (await ffmpeg.readFile(outputFile));

    if (!data || data.length === 0) {
      throw new Error("FFmpeg produced no output");
    }

    // Clean up temporary files
    try {
      for (let i = 0; i < dataUrls.length; i++) {
        await ffmpeg.deleteFile(nameFor(i));
      }
      await ffmpeg.deleteFile(outputFile);
    } catch (cleanupError) {
      console.warn("Failed to clean up temporary files:", cleanupError);
    }

    // data is a Uint8Array, convert to ArrayBuffer for Blob
    // @ts-expect-error TODO: Fix typing
    return new Blob([data.buffer], { type: "video/mp4" });
  } catch (error) {
    // Clean up on error
    try {
      for (let i = 0; i < dataUrls.length; i++) {
        await ffmpeg.deleteFile(nameFor(i));
      }
      await ffmpeg.deleteFile(outputFile);
    } catch {
      // Ignore cleanup errors
    }
    throw new Error(
      `FFmpeg encoding failed: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
