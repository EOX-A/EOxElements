import { html } from "lit";

export const Tabs = {
  render: () => html`
    <eox-layercontrol-tabs
      .noShadow=${false}
      .actions=${["delete"]}
      .tabs=${["info", "opacity", "config"]}
    ></eox-layercontrol-tabs>
  `,
};

export default Tabs;
