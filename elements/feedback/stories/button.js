import { html } from "lit";

export const Button = {
  args: {},
  render: () => html`
    <eox-feedback-button
      endpoint="/fake/endpoint"
      position="bottom-left"
    ></eox-feedback-button>
  `,
};

export default Button;
