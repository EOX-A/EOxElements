import "../index";

describe("general", () => {
  // beforeEach(() => {
  // cy.visit("/elements/testelement/test/index.html");
  // });

  it("should show foo-bar", () => {
    // cy.mount <"eox-testelement">(new EOxTestelement());
    // @ts-ignore
    cy.mount(`<eox-testelement></eox-testelement`, {
      properties: {
        message2: "message33232",
        foo: "not bar"
      }
    })
    // const test = new EOxTestelement();
    // cy.mount(test, html`<eox-testelement message="test" />`).as(
    //   "eox-testelement"
    // );
    // console.log(test);
    // test.setAttribute("message", "1234");
    cy.get("eox-testelement").shadow().should("contains.text", "message33232");

    // cy.get("eox-testelement").should(($el) => {
    //   const eoxTestelement = $el[0];
    //   setTimeout(() => {
    //     // eoxTestelement.setAttribute("message", "test444");
    //     eoxTestelement.message2 = () => {
    //       return "message2";
    //     }
    //   }, 1000);
    // })
  });
});
