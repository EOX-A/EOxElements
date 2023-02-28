import { elements } from "../../src/protocol";

describe("general", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html", {
      onBeforeLoad(win) {
        const postMessageStub = cy.stub().as("postMessage");
        win.addEventListener("message", (e) => {
          // we are only interested in the argument itself
          postMessageStub(e.data);
        });
      },
    });
  });
  it("loads the map", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const map = await elements.map.create(doc.querySelector("#map"));
        map?.tell({ key: "foo", value: "bar" });
        // doc
        //   .querySelector("#map > iframe")
        //   .contentWindow.postMessage("hello", "*");
      };
      init();
      cy.window().then((win) => {
        win.addEventListener("message", (event) => {
          console.log(event);
        });
      });
    });
    cy.get('[data-cy="map"] > iframe').should("exist");
    cy.get("@postMessage")
      .should("have.been.calledOnce")
      .its("lastCall")
      .should("have.been.calledWith", { "map-event": { type: "loadend" } });
  });
  // it("emits a map-load event", () => {
  //   cy.get("@postMessage")
  //     .should("have.been.calledOnce")
  //     .its("lastCall")
  //     .should("have.been.calledWith", { "map-event": { type: "loadend" } });
  // });
});
