import { html } from "lit";
import { Ion } from "cesium";
import { SW_OPER_MAGA_LR_1B } from "./assets/collections";

//@ts-ignore
Ion.defaultAccessToken = import.meta.env.STORYBOOK_CESIUM_TOKEN;

export default {
  title: "Elements/eox-globe",
  tags: ["autodocs"],
  component: "eox-globe",
  args: {
    collections: [],
  },
  /** @param {Record<string,any>} args */
  render: (args) => html`
    <eox-globe
      style="width: 100%; height: 300px;"
      .collections=${args.collections}
    ></eox-globe>
  `,
};

export const Primary = {
  args: {
    collections: SW_OPER_MAGA_LR_1B,
  },
  /** @param {Record<string,any>} args */
  render: (args) => {
    return html`
      <eox-globe
        style="width: 100%; height: 300px;"
        .collections=${args.collections}
      ></eox-globe>
    `;
  },
};
