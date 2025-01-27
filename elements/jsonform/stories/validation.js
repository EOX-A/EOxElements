/**
 * Demonstration of validation and button callback
 */

const Validation = {
  args: {
    schema: {
      type: "object",
      required: ["eox"],
      properties: {
        eox: {
          type: "boolean",
          format: "checkbox",
          title: `I agree to the EOX Terms And Conditions`,
          description: `<a target="_blank" href="https://eox.at/terms-conditions/">https://eox.at/terms-conditions/</a>`,
          const: true,
          options: {
            error_messages: {
              en: {
                error_const: "Please accept to continue!",
              },
            },
          },
        },
        // Adds a submit button that is only cliackable
        // once the validation passes
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
    },
  },
};
export default Validation;
