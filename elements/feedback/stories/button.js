import { html } from "lit";

export default {
  args: {
    endpoint: "/fake/endpoint",
    position: "bottom-left",
    // Example event handler as stringified function
    click: "(e) => console.log('Feedback button clicked', e)",
  },
  render: (args) => html`
    <eox-feedback-button
      endpoint="${args.endpoint}"
      position="${args.position}"
      @click="${eval(args.click)}"
    ></eox-feedback-button>
  `,
};
