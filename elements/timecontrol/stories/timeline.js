import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const Timeline = {
  args: {
    ...STORY_ARGS,
    for: "eox-map#timeline",
    select: (e) => {
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
    >
      <eox-timecontrol-timeline />
    </eox-timecontrol>
  `,
};

export default Timeline;
