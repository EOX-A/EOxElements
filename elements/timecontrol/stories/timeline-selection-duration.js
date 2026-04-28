import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Timeline visualization using vis-timeline with selection duration configuration
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const TimelineSelectionDurationStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    for: "eox-map#timeline-selection-duration",
    storyAdditionalComponents: {
      "eox-map": {
        id: "timeline-selection-duration",
        zoom: STORY_ARGS.zoom,
        center: STORY_ARGS.center,
        layers: STORY_ARGS.layers,
      },
      "eox-timecontrol-timeline": {
        storyImport: false,
        storySlot: true,
        selectionDuration: { months: 1 },
      },
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
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
      .filters=${args.filters}
      .externalMapRendering=${args.externalMapRendering}
    >
      <eox-timecontrol-timeline
        .selectionDuration=${args.storyAdditionalComponents[
          "eox-timecontrol-timeline"
        ].selectionDuration}
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
  `,
};

export default TimelineSelectionDurationStory;
