import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const UpdateView = {
  args: {
    ...STORY_ARGS,
    for: "eox-map#timeline",
    updateView: (e) => {
      console.log(e.detail);
    },
  },
  render: (args) => html`
    <eox-map
      id="timeline"
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
      @select=${args.select}
      @update:view=${args.updateView}
    >
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
      <eox-timecontrol-date .navigation=${true}></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${true}
        .popup=${true}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `,
};

export default UpdateView;
