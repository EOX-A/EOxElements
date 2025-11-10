import { html } from "lit";

export default {
  args: {
    endpoint: "/fake/endpoint",
    style: "position: relative !important; height: 250px;",
    unstyled: undefined,
    // Example event handler as stringified function
    submit: "(e) => console.log('Feedback submitted', e.detail)",
    close: "(e) => console.log('Feedback closed')",
  },
  render: (args, storyAdditionalComponents = {}) => html`
    <div style="${args.style}">
      <eox-feedback
        endpoint="${args.endpoint}"
        ?unstyled="${args.unstyled}"
        @submit="${eval(args.submit)}"
        @close="${eval(args.close)}"
      ></eox-feedback>
    </div>
  `,
};
