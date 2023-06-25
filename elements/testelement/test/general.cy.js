import { html } from "lit";
import { EOxTestelement } from "../main.ts";

describe("general", () => {
  beforeEach(() => {
    // cy.visit("/elements/testelement/test/index.html");
  });

  it("should show foo-bar", () => {
    // cy.mount<"eox-testelement">(`<eox-testelement></eox-testelement>`);
    cy.mount(
      new EOxTestelement(),
      html`<eox-testelement .message="test" />`
    ).as("eox-testelement");
    cy.get("eox-testelement").shadow().should("contains.text", "Hello world!");
  });
});
