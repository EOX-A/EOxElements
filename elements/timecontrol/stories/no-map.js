import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * No map story
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const NoMapStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    titleKey: STORY_ARGS.titleKey,
    filters: STORY_ARGS.filters,
    navigation: true,
    popup: true,
    position: ["bottom", "left"],
    select: (e) => {
      console.log(e.detail);
    },
    storyAdditionalComponents: {
      "eox-timecontrol-date": {
        storyImport: false,
        storySlot: true,
        format: STORY_ARGS.format,
        navigation: true,
      },
      "eox-timecontrol-picker": {
        storyImport: false,
        storySlot: true,
        format: STORY_ARGS.format,
        showDots: true,
        popup: true,
        position: ["bottom", "left"],
      },
      "eox-timecontrol-timeline": {
        storyImport: false,
        storySlot: true,
      },
      "eox-timecontrol-slider": {
        storyImport: false,
        storySlot: true,
      },
      "eox-itemfilter": {
        storyImport: false,
        storySlot: true,
      },
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-timecontrol
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .filters=${args.filters}
      .controlValues=${STORY_ARGS.layers.map((layer) => layer.properties)}
      @select=${args.select}
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          .format=${args.storyAdditionalComponents["eox-timecontrol-date"]
            .format}
          .navigation=${args.storyAdditionalComponents["eox-timecontrol-date"]
            .navigation}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .format=${args.storyAdditionalComponents["eox-timecontrol-picker"]
            .format}
          .showDots=${args.storyAdditionalComponents["eox-timecontrol-picker"]
            .showDots}
          .popup=${args.storyAdditionalComponents["eox-timecontrol-picker"]
            .popup}
          .position=${args.storyAdditionalComponents["eox-timecontrol-picker"]
            .position}
        ></eox-timecontrol-picker>
        <div style="display: flex;align-items: center;">
          <eox-itemfilter
            id="timecontrol-filter"
            .inlineMode=${true}
            .titleProperty=${"id"}
            .showResults=${false}
            .filterProperties=${args.filters}
            style="--inline-container-height: 40px"
          ></eox-itemfilter>
        </div>
      </div>
      <eox-timecontrol-timeline
        style="margin-top: 10px;"
      ></eox-timecontrol-timeline>
      <eox-timecontrol-slider
        style="width: 600px; margin-top: 10px;"
      ></eox-timecontrol-slider>
    </eox-timecontrol>
  `,
};

export default NoMapStory;
