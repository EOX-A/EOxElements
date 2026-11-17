import {
  DEFAULT_EOX_CSP_CONNECT_DOMAINS,
  DEFAULT_EOX_CSP_RESOURCE_DOMAINS,
} from "../enums/index.js";

/**
 * Deduplicate and sanitize a list of CSP origin/source entries.
 *
 * @param {...(string[] | undefined)} lists
 * @returns {string[]}
 */
function mergeUniqueOrigins(...lists) {
  const seen = new Set();
  for (const list of lists) {
    if (!Array.isArray(list)) continue;
    for (const item of list) {
      if (typeof item !== "string") continue;
      const trimmed = item.trim();
      if (trimmed) {
        seen.add(trimmed);
      }
    }
  }
  return Array.from(seen);
}

/**
 * Build a compliant MCP Apps `_meta.ui.csp` metadata object for EOxElements views.
 *
 * Includes default EOX basemap origins (`https://tiles.maps.eox.at`,
 * `https://s2maps-tiles.eu`) as well as `blob:` and `data:` in `resourceDomains`,
 * merged with any caller-supplied STAC, TiTiler, or custom origins.
 *
 * @param {string | string[] | import("../types.ts").EoxCspMetaOptions} [extraOrigins]
 *   Additional origin URL(s) (added to both `connectDomains` and `resourceDomains`),
 *   or an options object for granular CSP and UI metadata configuration.
 * @returns {import("../types.ts").EoxCspMeta}
 */
export function buildEoxCspMeta(extraOrigins) {
  /** @type {import("../types.ts").EoxCspMetaOptions} */
  let opts;
  if (typeof extraOrigins === "string") {
    opts = { origins: [extraOrigins] };
  } else if (Array.isArray(extraOrigins)) {
    opts = { origins: extraOrigins };
  } else if (extraOrigins && typeof extraOrigins === "object") {
    opts = extraOrigins;
  } else {
    opts = {};
  }

  const includeBasemaps = opts.includeBasemaps !== false;
  const sharedOrigins = Array.isArray(opts.origins) ? opts.origins : [];

  const connectDomains = mergeUniqueOrigins(
    includeBasemaps ? [...DEFAULT_EOX_CSP_CONNECT_DOMAINS] : [],
    sharedOrigins,
    opts.connectDomains,
  );

  const resourceDomains = mergeUniqueOrigins(
    includeBasemaps ? [...DEFAULT_EOX_CSP_RESOURCE_DOMAINS] : [],
    sharedOrigins,
    opts.resourceDomains,
  );

  /** @type {import("../types.ts").EoxCspMeta["ui"]["csp"]} */
  const csp = {
    connectDomains,
    resourceDomains,
  };

  if (Array.isArray(opts.frameDomains) && opts.frameDomains.length > 0) {
    csp.frameDomains = mergeUniqueOrigins(opts.frameDomains);
  }
  if (Array.isArray(opts.baseUriDomains) && opts.baseUriDomains.length > 0) {
    csp.baseUriDomains = mergeUniqueOrigins(opts.baseUriDomains);
  }

  /** @type {import("../types.ts").EoxCspMeta["ui"]} */
  const ui = { csp };

  if (typeof opts.prefersBorder === "boolean") {
    ui.prefersBorder = opts.prefersBorder;
  }
  if (typeof opts.domain === "string" && opts.domain.trim()) {
    ui.domain = opts.domain.trim();
  }

  return { ui };
}
