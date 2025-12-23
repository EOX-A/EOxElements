import { html } from "lit";

const customFormTest = () => {
  const schema = {
    type: "object",
    properties: {
      message: {
        type: "string",
        format: "textarea",
        title: "Message",
        description: "Your feedback",
      },
    },
    required: ["message"],
  };

  cy.mount(
    html`<eox-feedback
      endpoint="https://jsonplaceholder.typicode.com/posts"
      .schema=${schema}
    ></eox-feedback>`,
  ).as("eox-feedback");

  cy.get("eox-feedback").shadow().find("eox-jsonform").should("exist");

  // Check if textarea inside jsonform exists
  cy.get("eox-feedback")
    .shadow()
    .find("eox-jsonform")
    .shadow()
    .find("textarea")
    .should("exist");

  // Type something
  cy.get("eox-feedback")
    .shadow()
    .find("eox-jsonform")
    .shadow()
    .find("textarea")
    .type("Hello World");

  // Submit button should be enabled
  cy.get("eox-feedback")
    .shadow()
    .find("button#submit")
    .should("not.have.class", "disabled");
};

export default customFormTest;
