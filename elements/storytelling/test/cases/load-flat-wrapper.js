import "../../src/main";

const loadFlatWrapperTest = () => {
  cy.viewport(1200, 800);

  cy.mount(`
    <eox-storytelling show-nav id="my-story">
      <eox-storytelling-hero id="welcome" title="Hero Title"></eox-storytelling-hero>
      <eox-storytelling-text id="section1" title="First Section" markdown="Text..."></eox-storytelling-text>
      <eox-storytelling-text id="section2" markdown="## Second Section <!-- { style='color: red' } -->"></eox-storytelling-text>
    </eox-storytelling>
  `);

  // Assert navigation bar is rendered automatically with correct links
  cy.get("eox-storytelling")
    .shadow()
    .within(() => {
      cy.get(".navigation").should("exist");
      cy.get(".navigation li.nav-welcome").should("not.exist");
      cy.get(".navigation li.nav-section1 a").should(
        "have.attr",
        "href",
        "#section1",
      );
      cy.get(".navigation li.nav-section2 a").should(
        "have.attr",
        "href",
        "#section2",
      );
      cy.get(".navigation li.nav-section2 a small").should(
        "have.text",
        "Second Section",
      );
    });

  // Clicking a nav link triggers a smooth transition/scroll to the respective slotted child
  cy.get("eox-storytelling")
    .shadow()
    .within(() => {
      cy.get(".navigation li.nav-section1 a").click({ force: true });
    });

  // Verify location hash matches
  cy.window().then((win) => {
    expect(win.parent.location.hash).to.equal("#section1");
  });
};

export default loadFlatWrapperTest;
