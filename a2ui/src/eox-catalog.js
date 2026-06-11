import { Catalog } from "@a2ui/web_core/v0_9";
import { eoxComponents, version } from "./generated-catalog.js";
import { A2UI_SPEC_VERSION } from "./constants.js";

export const urlVersion = A2UI_SPEC_VERSION;

export const eoxCatalog = new Catalog(
  `https://eox-a.github.io/EOxElements/a2ui/${urlVersion}/eox_catalog.json`,
  eoxComponents,
);
