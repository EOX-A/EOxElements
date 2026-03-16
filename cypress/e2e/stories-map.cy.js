import stories from "../../docs/index.json";

describe("Map Stories", () => {
  Cypress.env(
    "SPEC_FILTER",
    "map,layercontrol,drawtools,geosearch,timecontrol",
  );
});

import "./storybook-engine.js";
