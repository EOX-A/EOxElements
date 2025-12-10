import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const Slider = {
  args: {
    ...STORY_ARGS,
    navigation: true,
    for: "eox-map#slider",
  },
  render: (args) => html`
    <eox-map
      id="slider"
      style="width: 100%; height: 500px;"
      .zoom=${args.zoom}
      .center=${args.center}
      .layers=${args.layers}
    ></eox-map>
    <eox-timecontrol
      .for=${args.for}
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .filters=${args.filters}
      .externalMapRendering=${args.externalMapRendering}
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          format=${args.format}
          .navigation=${args.navigation}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .range=${true}
          .showDots=${true}
          .popup=${true}
        ></eox-timecontrol-picker>
      </div>
      <eox-timecontrol-slider style="width: 600px;"></eox-timecontrol-slider>
    </eox-timecontrol>
  `,
};

export default Slider;
