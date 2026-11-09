/** Mount a deterministic tour without changing the baseline fixtures. */
const mountActivityTour = () => {
  cy.mount(`
    <div id="activity-first">First target</div>
    <div id="activity-second">Second target</div>
    <div id="activity-third">Third target</div>
    <eox-tour prevent-auto-start show-every-time></eox-tour>
  `);
  cy.get("eox-tour").then(async ([$tour]) => {
    $tour.addEventListener("eox:activity", cy.stub().as("activity"));
    for (const event of [
      "tour-highlight-started",
      "tour-highlighted",
      "tour-deselected",
      "tour-destroy-started",
    ]) {
      $tour.addEventListener(event, cy.stub().as(event));
    }
    $tour.config = {
      animate: false,
      showButtons: ["next", "previous", "close"],
      onNextClick: cy.stub().as("onNextClick"),
      onPrevClick: cy.stub().as("onPrevClick"),
      onCloseClick: cy.stub().as("onCloseClick"),
      onDestroyStarted: cy.stub().as("onDestroyStarted"),
      steps: ["first", "second", "third"].map((name) => ({
        element: `#activity-${name}`,
        popover: { title: name, description: `${name} step` },
      })),
    };
    await $tour.updateComplete;
  });
};

/** @param {number} index */
const expectStep = (index) => {
  cy.get("eox-tour").should(([$tour]) => {
    expect($tour.driver.getActiveIndex()).to.equal(index);
  });
  // onHighlighted runs on the next animation frame, even with animate: false.
  cy.document()
    .find(".driver-popover h6")
    .should("have.text", ["first", "second", "third"][index]);
};

export const programmaticDriveIsSilent = () => {
  mountActivityTour();
  cy.get("eox-tour").then(([$tour]) => $tour.driver.drive(1));
  expectStep(1);
  cy.get("@tour-highlight-started").should("have.been.calledOnce");
  cy.get("@tour-highlighted").should("have.been.calledOnce");
  cy.get("@activity").should("not.have.been.called");
};

export const programmaticNavigationIsSilent = () => {
  mountActivityTour();
  cy.get("eox-tour").then(([$tour]) => $tour.driver.drive());
  cy.get("@tour-highlighted").should("have.been.calledOnce");
  cy.get("eox-tour").then(([$tour]) => $tour.driver.moveTo(1));
  expectStep(1);
  cy.get("@tour-highlighted").should("have.been.calledTwice");
  cy.get("eox-tour").then(([$tour]) => $tour.driver.moveNext());
  expectStep(2);
  cy.get("@tour-highlighted").should("have.been.calledThrice");
  cy.get("eox-tour").then(([$tour]) => $tour.driver.movePrevious());
  expectStep(1);
  cy.get("@tour-highlight-started").should("have.callCount", 4);
  cy.get("@tour-highlighted").should("have.callCount", 4);
  cy.get("@tour-deselected").should("have.been.calledThrice");
  cy.get("@activity").should("not.have.been.called");
};

export const userNavigationEmitsOnce = () => {
  mountActivityTour();
  cy.get("eox-tour").then(([$tour]) => $tour.driver.drive());
  cy.get("@tour-highlighted").should("have.been.calledOnce");
  cy.document().find(".driver-popover-next-btn").click();
  expectStep(1);
  cy.get("@tour-highlighted").should("have.been.calledTwice");
  cy.get("@activity").should("have.been.calledOnce");
  cy.get("@onNextClick").should("have.been.calledOnce");
  cy.document().find(".driver-popover-prev-btn").click();
  expectStep(0);
  cy.get("@tour-highlighted").should("have.been.calledThrice");
  cy.get("@activity").should("have.been.calledTwice");
  cy.get("@onPrevClick").should("have.been.calledOnce");
  cy.document().find(".driver-popover-close-btn").click();
  cy.get("@activity").should("have.been.calledThrice");
  cy.get("@tour-destroy-started").should("have.been.calledOnce");
  cy.get("@onCloseClick").should("have.been.calledOnce");
  cy.get("@onDestroyStarted").should("have.been.calledOnce");
  cy.get("@activity").then((spy) => {
    expect(
      spy.getCalls().map(({ args }) => args[0].detail.action),
    ).to.deep.equal([
      "tour-highlight-started",
      "tour-highlight-started",
      "tour-destroy-started",
    ]);
  });
  cy.document().find(".driver-popover").should("not.exist");
};

export const programmaticNavigationAfterClickIsSilent = () => {
  mountActivityTour();
  cy.get("eox-tour").then(([$tour]) => $tour.driver.drive());
  cy.get("@tour-highlighted").should("have.been.calledOnce");
  cy.document().find(".driver-popover-next-btn").click();
  cy.get("@tour-highlighted").should("have.been.calledTwice");
  cy.get("@activity").should("have.been.calledOnce");
  cy.get("eox-tour").then(([$tour]) => $tour.driver.moveTo(2));
  cy.get("@tour-highlighted").should("have.been.calledThrice");
  cy.get("eox-tour").then(([$tour]) => $tour.driver.movePrevious());
  cy.get("@tour-highlighted").should("have.callCount", 4);
  cy.get("@activity").should("have.been.calledOnce");
};

export const keyboardNavigationEmitsOnce = () => {
  mountActivityTour();
  cy.get("eox-tour").then(([$tour]) => $tour.driver.drive());
  cy.get("@tour-highlighted").should("have.been.calledOnce");
  cy.window().trigger("keyup", { key: "ArrowRight" });
  cy.get("@tour-highlighted").should("have.been.calledTwice");
  cy.get("@activity").should("have.been.calledOnce");
  cy.window().trigger("keyup", { key: "ArrowLeft" });
  cy.get("@tour-highlighted").should("have.been.calledThrice");
  cy.get("@activity").should("have.been.calledTwice");
};
