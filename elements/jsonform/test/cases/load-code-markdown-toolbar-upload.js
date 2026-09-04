import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "markdown",
  value: "Initial content",
};

/**
 * Test to verify if the jsonform markdown toolbar upload button works for images and non-image files.
 */
const loadCodeMarkdownToolbarUploadTest = () => {
  cy.intercept("POST", "/api/upload", {
    statusCode: 200,
    body: {
      url: "https://example.com/uploads/sample.png",
    },
  }).as("imageUpload");

  cy.intercept("POST", "/api/upload-pdf", {
    statusCode: 200,
    body: {
      url: "https://example.com/uploads/document.pdf",
    },
  }).as("pdfUpload");

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
              markdownToolbar: {
                upload: {
                  endpoint: "/api/upload",
                },
              },
            },
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
      cy.get("button[title='Attach file']").should("exist");

      // Select an image file and verify it inserts an image tag
      cy.get("input[type='file']").selectFile(
        {
          contents: Cypress.Buffer.from("sample image data"),
          fileName: "sample.png",
          mimeType: "image/png",
        },
        { force: true },
      );
    });

  cy.wait("@imageUpload");

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should(
        "contain.text",
        "![sample.png](https://example.com/uploads/sample.png)",
      );
    });
};

/**
 * Test to verify that non-image files are inserted as markdown link tags.
 */
export const loadCodeMarkdownToolbarPdfUploadTest = () => {
  cy.intercept("POST", "/api/upload-pdf", {
    statusCode: 200,
    body: {
      url: "https://example.com/uploads/document.pdf",
    },
  }).as("pdfUpload");

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
              markdownToolbar: {
                upload: {
                  endpoint: "/api/upload-pdf",
                },
              },
            },
          },
        },
      }}
      .value=${{
        [testVals.key]: "",
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should("exist");
      cy.get("button[title='Attach file']").should("exist");

      // Select a non-image file (PDF)
      cy.get("input[type='file']").selectFile(
        {
          contents: Cypress.Buffer.from("pdf document data"),
          fileName: "document.pdf",
          mimeType: "application/pdf",
        },
        { force: true },
      );
    });

  cy.wait("@pdfUpload");

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should(
        "contain.text",
        "[document.pdf](https://example.com/uploads/document.pdf)",
      );
    });
};

/**
 * Test to verify that custom upload handler functions (e.g. via defaults.callbacks) work as expected.
 */
export const loadCodeMarkdownToolbarCustomHandlerTest = () => {
  const customUploadHandler = cy
    .spy((jseditor, path, file, cbs) => {
      cbs.success({
        fileUrl: `https://raw.githubusercontent.com/org/repo/sha/assets/${file.name}`,
      });
    })
    .as("customUploadHandler");

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
              markdownToolbar: {
                upload: {
                  upload_handler: "customGithubUploader",
                },
              },
            },
          },
        },
      }}
      .defaults=${{
        callbacks: {
          upload: {
            customGithubUploader: customUploadHandler,
          },
        },
      }}
      .value=${{
        [testVals.key]: "",
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should("exist");
      cy.get("button[title='Attach file']").should("exist");

      cy.get("input[type='file']").selectFile(
        {
          contents: Cypress.Buffer.from("sample image data"),
          fileName: "photo.jpg",
          mimeType: "image/jpeg",
        },
        { force: true },
      );
    });

  cy.get("@customUploadHandler").should("have.been.called");

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should(
        "contain.text",
        "![photo.jpg](https://raw.githubusercontent.com/org/repo/sha/assets/photo.jpg)",
      );
    });
};

/**
 * Test to verify that video files are inserted as <video> tags.
 */
export const loadCodeMarkdownToolbarVideoUploadTest = () => {
  cy.intercept("POST", "/api/upload-video", {
    statusCode: 200,
    body: {
      url: "https://example.com/uploads/clip.mp4",
    },
  }).as("videoUpload");

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
              markdownToolbar: {
                upload: {
                  endpoint: "/api/upload-video",
                },
              },
            },
          },
        },
      }}
      .value=${{
        [testVals.key]: "",
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should("exist");
      cy.get("button[title='Attach file']").should("exist");

      // Select a video file (MP4)
      cy.get("input[type='file']").selectFile(
        {
          contents: Cypress.Buffer.from("mp4 video data"),
          fileName: "clip.mp4",
          mimeType: "video/mp4",
        },
        { force: true },
      );
    });

  cy.wait("@videoUpload");

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should(
        "contain.text",
        '<video src="https://example.com/uploads/clip.mp4" controls></video>',
      );
    });
};

export default loadCodeMarkdownToolbarUploadTest;
