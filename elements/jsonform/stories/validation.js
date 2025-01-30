/**
 * Demonstration of validation and button callback
 */

const Validation = {
  args: {
    schema: {
      type: "object",
      properties: {
        tos_accepted: {
          type: "object",
          title:
            "In order to be able to click the 'continue' button, check the following checkboxes:",
          properties: {
            foo: {
              title: `<a target="_blank" href="https://foo.com/terms-conditions/">Foo Terms and Conditions v1.0</a>`,
              $ref: "#/definitions/tos",
            },
            bar: {
              title: `<a target="_blank" href="https://bar.com/terms-conditions/">Bar Terms and Conditions v1.0</a>`,
              $ref: "#/definitions/tos",
            },
          },
        },
        button: {
          format: "button",
          options: {
            button: {
              text: "Continue",
              action: "onSubmit",
              validated: true,
            },
          },
        },
      },
      definitions: {
        tos: {
          type: "object",
          required: ["accepted"],
          properties: {
            accepted: {
              type: "boolean",
              format: "checkbox",
              title: "I accept",
              const: true,
              options: {
                error_messages: {
                  en: {
                    error_const: "Please accept to continue!",
                  },
                },
              },
            },
            timestamp: {
              type: "string",
              default: new Date().toISOString(),
              options: {
                hidden: true,
              },
            },
            version: {
              type: "string",
              default: "1.0",
              options: {
                hidden: true,
              },
            },
          },
        },
      },
    },
  },
};
export default Validation;
