import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const NoMap = {
  args: {
    ...STORY_ARGS,
    navigation: true,
    popup: true,
    position: ["bottom", "left"],
    select: (e) => {
      console.log(e.detail);
    },
  },
  render: (args) => html`
    <eox-timecontrol
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .filters=${args.filters}
      .controlValues=${args.layers.map((layer) => layer.properties)}
      @select=${args.select}
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          format=${args.format}
          .navigation=${args.navigation}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .format=${args.format}
          .showDots=${true}
          .popup=${args.popup}
          .position=${args.position}
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

export default NoMap;
