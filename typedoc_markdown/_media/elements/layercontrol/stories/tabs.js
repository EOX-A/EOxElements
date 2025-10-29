import { html } from "lit";

export const Tabs = {
  render: () => html`
    <eox-layercontrol-tools-items
      .noShadow=${false}
      .actions=${["delete"]}
      .tabs=${["info", "opacity", "config"]}
    ></eox-layercontrol-tools-items>
  `,
};

export default Tabs;
