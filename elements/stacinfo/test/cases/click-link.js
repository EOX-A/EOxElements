import { testBody } from "../general.cy.js";

/**
 * Tests whether click:link event is emitted on link clicks in eox-stacinfo
 */
const ClickLinkTest = () => {
  const collection = {
    type: "Collection",
    id: "test-collection",
    title: "Test Collection",
    description: '<a href="https://example.com/shadow-link">Shadow Link</a>',
    links: [
      {
        rel: "example",
        href: "https://example.com/item-link",
        title: "Item Link",
      },
    ],
  };
  testBody(collection);

  cy.mount(
    `
      <eox-stacinfo
        for="/collection"
        allow-html
      ></eox-stacinfo>`,
  ).as("eox-stacinfo");

  const linkSpy = cy.spy();
  /** @type {HTMLElement} */
  let stacInfoEl;
  cy.get("eox-stacinfo").then(($el) => {
    stacInfoEl = $el[0];
    // @ts-expect-error TODO
    $el[0].addEventListener("click:link", linkSpy);
    // @ts-expect-error TODO
    $el[0].body = ["description", "links"];
  });

  // Test link click inside eox-stacinfo-shadow (description)
  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("#body eox-stacinfo-shadow")
        .shadow()
        .within(() => {
          cy.get("a").click();
        });
    });

  cy.wrap(linkSpy).should("have.been.calledOnce");
  cy.wrap(linkSpy).should(() => {
    expect(linkSpy.firstCall.args[0].target).to.eq(stacInfoEl);
    expect(linkSpy.firstCall.args[0].detail.href).to.eq(
      "https://example.com/shadow-link",
    );
    expect(linkSpy.firstCall.args[0].detail.text).to.eq("Shadow Link");
    expect(linkSpy.firstCall.args[0].detail.section).to.eq("body");
  });

  // Test link click directly in eox-stacinfo body (links list)
  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("#body ul li a").click();
    });

  cy.wrap(linkSpy).should("have.been.calledTwice");
  cy.wrap(linkSpy).should(() => {
    expect(linkSpy.secondCall.args[0].target).to.eq(stacInfoEl);
    expect(linkSpy.secondCall.args[0].detail.href).to.eq(
      "https://example.com/item-link",
    );
    expect(linkSpy.secondCall.args[0].detail.text).to.eq("Item Link");
    expect(linkSpy.secondCall.args[0].detail.section).to.eq("body");
  });
};

export default ClickLinkTest;
