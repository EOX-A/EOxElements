import "../index";

describe("general", () => {
  // beforeEach(() => {
  // cy.visit("/elements/testelement/test/index.html");
  // });

  it("should show foo-bar", () => {
    // cy.mount <"eox-testelement">(new EOxTestelement());
    // @ts-ignore
    cy.mount(`<eox-testelement message="test12333"></eox-testelement`);
    // const test = new EOxTestelement();
    // cy.mount(test, html`<eox-testelement message="test" />`).as(
    //   "eox-testelement"
    // );
    // console.log(test);
    // test.setAttribute("message", "1234");
    cy.get("eox-testelement").shadow().should("contains.text", "test12333");
  });
});
