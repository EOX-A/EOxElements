export const iframeHandoff = () => {
  cy.mount(
    `<iframe id="my-iframe" src="about:blank"></iframe>
     <eox-tour show-every-time></eox-tour>`,
  ).as("mount");

  cy.get("iframe").then(($iframe) => {
    // We need to spy on the iframe's contentWindow.postMessage
    const contentWindow = $iframe[0].contentWindow;
    cy.stub(contentWindow, "postMessage").as("postMessageStub");
  });

  cy.get("eox-tour").and(($el) => {
    const tour = $el[0];
    tour.config = {
      showButtons: ["next", "previous", "close"],
      steps: [
        {
          element: "#my-iframe",
          popover: {
            title: "Test",
            description: "Test description",
          },
        },
        {
          targetIframe: "#my-iframe",
          element: "h1",
          popover: {
            title: "Test 2",
            description: "Test description 2",
          },
        },
      ],
    };
    tour.start();
  });

  // Go to next step to trigger the handoff
  cy.document().find(".driver-popover-next-btn").click();

  // Verify that postMessage was called with the handoff configuration
  cy.get("@postMessageStub").should(
    "have.been.calledWithMatch",
    {
      type: "EOX_TOUR_HANDOFF",
      stepIndex: 1,
    },
    "*",
  );
};
