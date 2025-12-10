import { html } from "lit";
import Primary from "./primary";

const AdditionalParameters = {
  ...Primary,
  args: {
    ...Primary.args,
    params: {
      language: "en",
      limit: 5,
      countrycode: "us",
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "geosearch-map-primary",
        animationOptions: { duration: 400, padding: [10, 10, 10, 10] },
        config: {
          layers: [{ type: "Tile", source: { type: "OSM" } }],
          view: { center: [15, 48], zoom: 3 },
        },
        style: "width: 100%; height: 500px;",
      },
    },
  },
  render: (args) => {
    return html`
      <eox-geosearch
        .endpoint="${args.endpoint}"
        .label="${args.label}"
        style="${args.style}"
        .params="${args.params}"
      ></eox-geosearch>
      <eox-map
        id="${args.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${args.storyAdditionalComponents["eox-map"]
          .animationOptions}"
        .config="${args.storyAdditionalComponents["eox-map"].config}"
        style="${args.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
    `;
  },
};

export default AdditionalParameters;
