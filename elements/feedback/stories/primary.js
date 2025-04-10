import { html } from "lit";

export const Primary = {
  args: {},
  render: () => html`
    <div style="height: 250px;">
      <eox-feedback
        endpoint="/fake/endpoint"
        style="position: relative !important;"
      ></eox-feedback>
    </div>
  `,
};

export default Primary;
