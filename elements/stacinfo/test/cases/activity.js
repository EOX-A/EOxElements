import { html } from "lit";

/** Link activity is collected outside both component shadow roots without duplicate signals. */
export function linkActivityTest() {
  cy.intercept("/activity-collection*", {
    body: {
      type: "Collection",
      id: "activity-collection",
      title: "Activity collection",
      description: '<a href="#description-link">Description link</a>',
      links: [{ rel: "example", href: "#listed-link", title: "Listed link" }],
    },
  });
  const activity = cy.spy().as("linkActivity");
  const functional = cy.spy().as("functionalLink");
  cy.mount(html`
    <section @eox:activity=${activity} @click:link=${functional}>
      <eox-stacinfo
        for="/activity-collection"
        allow-html
        .body=${["description", "links"]}
      ></eox-stacinfo>
    </section>
  `);
  cy.get("eox-stacinfo")
    .shadow()
    .find("#body eox-stacinfo-shadow")
    .shadow()
    .find("a")
    .should("have.text", "Description link");
  cy.get("@linkActivity").should("not.have.been.called");
  cy.get("eox-stacinfo")
    .shadow()
    .find("#body eox-stacinfo-shadow")
    .shadow()
    .find("a")
    .click();
  cy.get("@linkActivity").should("have.been.calledOnce");
  cy.get("@functionalLink").should("have.been.calledOnce");
  cy.wrap(activity).should((spy) => {
    const event = spy.firstCall.args[0];
    expect(event.target.tagName).to.equal("EOX-STACINFO");
    expect(event.bubbles).to.equal(true);
    expect(event.composed).to.equal(true);
    expect(event.detail).to.include({
      element: "eox-stacinfo",
      action: "click:link",
    });
    expect(event.detail.payload).to.deep.equal({
      href: "#description-link",
      text: "Description link",
      section: "body",
    });
    expect(event.detail.originalEvent.type).to.equal("click");
  });
  cy.get("eox-stacinfo").shadow().find("#body ul li a").click();
  cy.get("@linkActivity").should("have.been.calledTwice");
  cy.get("@functionalLink").should("have.been.calledTwice");
  cy.wrap(activity).should((spy) => {
    expect(spy.secondCall.args[0].detail.payload).to.deep.equal({
      href: "#listed-link",
      text: "Listed link",
      section: "body",
    });
  });
}
