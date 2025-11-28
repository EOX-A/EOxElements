import { html } from "lit";

export default {
  args: {
    endpoint: "/fake/endpoint",
    style: "position: relative !important; height: 250px;",
    unstyled: undefined,
    submit: (e) => console.log("Feedback submitted", e.detail),
    close: () => console.log("Feedback closed"),
  },
  render: (args) => html`
    <div style=${args.style}>
      <eox-feedback
        endpoint=${args.endpoint}
        ?unstyled=${args.unstyled}
        @submit=${args.submit}
        @close=${args.close}
      ></eox-feedback>
    </div>
  `,
};
