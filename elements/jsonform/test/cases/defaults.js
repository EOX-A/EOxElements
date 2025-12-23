import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

const { jsonForm } = TEST_SELECTORS;

const defaultsTest = () => {
  const uploadHandlerSpy = cy.spy().as("uploadHandler");

  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          upload: {
            type: "string",
            format: "url",
            options: {
              upload: {
                upload_handler: "testUploadHandler",
              },
            },
          },
        },
      }}
      .defaults=${{
        callbacks: {
          upload: {
            testUploadHandler: (jseditor, path, file, cbs) => {
              uploadHandlerSpy(path, file);
              cbs.success("http://example.com/" + file.name);
            },
          },
        },
      }}
    ></eox-jsonform>`,
  );

  // Check if upload input exists
  cy.get(jsonForm).shadow().find("input[type='file']").should("exist");

  // Upload a file
  cy.get(jsonForm)
    .shadow()
    .find("input[type='file']")
    .selectFile(
      {
        contents: Cypress.Buffer.from("file content"),
        fileName: "test.txt",
        mimeType: "text/plain",
      },
      { force: true },
    );

  // Click the upload button
  cy.get(jsonForm)
    .shadow()
    .find(".json-editor-btn-upload")
    .click({ force: true });

  // Check if upload handler was called
  cy.get("@uploadHandler").should("have.been.called");
};

export default defaultsTest;
