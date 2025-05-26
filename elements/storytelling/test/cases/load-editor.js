import { TEST_SELECTORS } from "../../src/enums";
import "../../../jsonform/src/main";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Load markdown editor
 */
const loadMarkdownEditorTest = () => {
  const testText = "## Foo";
  const editorSelector = "eox-storytelling-editor";
  const jsonFormSelector = `${editorSelector} eox-jsonform`;

  cy.mount(
    `<eox-storytelling show-editor markdown="${testText}"></eox-storytelling>`,
  ).as(storyTelling);

  cy.get(storyTelling).and(($el) => {
    $el[0].addEventListener("upload:file", (e) => {
      const { file, update } = e.detail;
      const reader = new FileReader();
      reader.onload = () => {
        const base64Url = reader.result;
        update(base64Url);
      };
      reader.readAsDataURL(file);
    });
  });

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get(editorSelector).should("exist");
      cy.get(jsonFormSelector).should("exist");

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1500);
      cy.get(jsonFormSelector).then(($jsonform) => {
        const newMardown = "## Bar";
        const formDOM = $jsonform[0];
        formDOM.value = { Story: newMardown };

        const startPos = { line: 0, ch: 0, sticky: null };
        const endPos = { line: 0, ch: 6, sticky: null };
        formDOM.editor.editors[
          "root.Story"
        ].simplemde_instance.codemirror.replaceRange(
          "## Bar",
          startPos,
          endPos,
        );

        expect(formDOM.value.Story).to.eq(newMardown);
      });
      cy.get("h2").should("have.text", "Bar");
      cy.get("button[title='Add custom section']").click();
      cy.get(".grid-item").eq(3).click();
      cy.get(".story-telling-section-submit-wrapper button").click();
      cy.get(".section-wrap").eq(1).should("have.id", "section-map-example");
      cy.get("button[title='Add custom section']").click();
      cy.get(".grid-item").eq(5).click();
      cy.get("eox-jsonform#storytelling-editor-fields").within(() => {
        cy.get("button.upload-button").click();
        cy.get('input[type="file"]#upload-file-input').as("fileInput");
        cy.get("input#upload-file-input").attachFile(
          "storytelling/test/fixtures/eox.png",
        );
      });
      cy.get(".story-telling-section-submit-wrapper button").click();
      cy.get("img#simple-image-example").should("exist");
    });
};

export default loadMarkdownEditorTest;
