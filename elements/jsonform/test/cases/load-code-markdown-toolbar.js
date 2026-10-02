import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "markdown",
  value:
    "# Hello world!\nThis is a markdown field rendered with **ace editor**.",
};

/**
 * Test to verify if the jsonform component with ace markdown editor loads successfully.
 */
const loadAceMarkdownTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
            format: "markdown",
            options: {
              resolver: "ace",
              markdownToolbar: true,
            },
            description:
              "This is a markdown field rendered with a custom ace editor with a toolbar.",
          },
        },
      }}
      .value=${{
        [testVals.key]: testVals.value,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should("exist");
      cy.get("button[title='Heading']").should("exist");
      cy.get("button[title='Bold']").should("exist");
      cy.get("button[title='Italic']").should("exist");
      cy.get("button[title='Code']").should("exist");
      cy.get("button[title='Strikethrough']").should("exist");
      cy.get("button[title='Quote']").should("exist");
      cy.get("button[title='Link']").should("exist");
      cy.get("button[title='Image']").should("exist");
      cy.get("button[title='Bulleted List']").should("exist");
      cy.get("button[title='Numbered List']").should("exist");
      cy.get("button[title='Attach file']").should("not.exist");
    });
};

/**
 * Test to verify that the markdown toolbar stays sticky at the top when scrolling through long content.
 */
export const loadCodeMarkdownToolbarStickyTest = () => {
  const longValue =
    "# Hello world!\nThis is a markdown field rendered with **ace editor**.\n" +
    Array.from({ length: 60 }, (_, i) => `Line ${i + 1}`).join("\n");

  cy.mount(
    html`<eox-jsonform
      style="height: 300px; display: block;"
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
            format: "markdown",
            options: {
              resolver: "ace",
              markdownToolbar: true,
            },
            description:
              "This is a markdown field rendered with a custom ace editor with a toolbar.",
          },
        },
      }}
      .value=${{
        [testVals.key]: longValue,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".markdown-toolbar").should("have.css", "position", "sticky");
      cy.get(".markdown-toolbar").should("have.css", "top", "0px");
      cy.get(".ace_editor").should("exist");

      // Verify toolbar stays visible at top when scrolled
      cy.get(".form-container").scrollTo(0, 100);
      cy.get(".markdown-toolbar").should("be.visible");
      cy.get(".markdown-toolbar").then(($el) => {
        const toolbarTop = $el[0].getBoundingClientRect().top;
        cy.get(".form-container").then(($container) => {
          const containerTop = $container[0].getBoundingClientRect().top;
          expect(toolbarTop).to.be.closeTo(containerTop, 2);
        });
      });
    });
};

/**
 * Test to verify that unstyled markdown toolbar does not stick and is hidden when scrolled over.
 */
export const loadCodeMarkdownToolbarUnstyledTest = () => {
  const longValue =
    "# Hello world!\nThis is a markdown field rendered with **ace editor**.\n" +
    Array.from({ length: 60 }, (_, i) => `Line ${i + 1}`).join("\n");

  cy.mount(
    html`<eox-jsonform
      unstyled
      style="height: 300px; display: block; overflow: auto;"
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
            format: "markdown",
            options: {
              resolver: "ace",
              markdownToolbar: true,
            },
            description:
              "This is a markdown field rendered with a custom ace editor with a toolbar.",
          },
        },
      }}
      .value=${{
        [testVals.key]: longValue,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".markdown-toolbar").should("have.css", "position", "static");
      cy.get(".ace_editor").should("exist");
    });

  cy.get(jsonForm).scrollTo(0, 200);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".markdown-toolbar").should("not.be.visible");
    });
};

export default loadAceMarkdownTest;
