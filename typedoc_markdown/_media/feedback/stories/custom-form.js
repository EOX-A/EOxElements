import { html } from "lit";

const schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      title: "Email",
      description: "Your email address",
      options: {
        inputAttributes: {
          placeholder: "Include your email address (optional).",
        },
      },
    },
    message: {
      type: "string",
      format: "textarea",
      title: "Message",
      description: "Your feedback",
      options: {
        inputAttributes: {
          placeholder: "Type your feedback here!",
        },
      },
      minLength: 1,
    },
    hidden_field: {
      type: "string",
      options: {
        hidden: true,
      },
      default: "some-hidden-value",
    },
  },
  required: ["message"],
};

export default {
  args: {
    storyCodeBefore: 'import "@eox/jsonform"',
    endpoint: "https://jsonplaceholder.typicode.com/posts",
    schema: schema,
    style: "position: relative !important; height: 400px;",
    submit: (e) => console.log("Feedback submitted", e.detail),
    close: () => console.log("Feedback closed"),
  },
  render: (args) => html`
    <div style="${args.style}">
      <eox-feedback
        endpoint="${args.endpoint}"
        .schema=${args.schema}
        @submit="${args.submit}"
        @close="${args.close}"
      ></eox-feedback>
    </div>
  `,
};
