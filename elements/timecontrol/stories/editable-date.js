import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Edit and navigate UTC dates from map layers, with a synchronized popup picker.
 */
const EditableDateStory = {
  args: {
    showUTC: true,
    initDate: "first",
    for: "eox-map#editable-date",
    layerIdKey: STORY_ARGS.layerIdKey,
    titleKey: STORY_ARGS.titleKey,
    select: (event) => console.log("Selected date range:", event.detail.date),
    storyAdditionalComponents: {
      "eox-map": {
        id: "editable-date",
        zoom: STORY_ARGS.zoom,
        center: STORY_ARGS.center,
        layers: STORY_ARGS.layers,
      },
      "eox-timecontrol-date": {
        storyImport: false,
        storySlot: true,
        format: "YYYY-MM-DD",
        navigation: true,
        editable: true,
      },
      "eox-timecontrol-picker": {
        storyImport: false,
        storySlot: true,
        popup: true,
        position: ["bottom", "left"],
        showDots: true,
      },
    },
  },
  render: (args) => html`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${args.storyAdditionalComponents["eox-map"].id}
      .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
      .center=${args.storyAdditionalComponents["eox-map"].center}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${args.for}
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .showUTC=${args.showUTC}
      .initDate=${args.initDate}
      @select=${args.select}
    >
      <eox-timecontrol-date
        .editable=${args.storyAdditionalComponents["eox-timecontrol-date"]
          .editable}
        .format=${args.storyAdditionalComponents["eox-timecontrol-date"].format}
        .navigation=${args.storyAdditionalComponents["eox-timecontrol-date"]
          .navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${args.storyAdditionalComponents["eox-timecontrol-picker"]
          .showDots}
        .popup=${args.storyAdditionalComponents["eox-timecontrol-picker"].popup}
        .position=${args.storyAdditionalComponents["eox-timecontrol-picker"]
          .position}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `,
};

export default EditableDateStory;
