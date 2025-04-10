import { html } from "lit";

export const Button = {
  args: {},
  render: () => html`
    <eox-feedback-button
      endpoint="https://git-issue-creator.hub-int.eox.at/create-issue?repo=1038"
      position="bottom-left"
    ></eox-feedback-button>
  `,
};

export default Button;
