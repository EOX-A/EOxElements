Cypress.Commands.add("setMap", (type, body) => {
  cy.window().then((window) => {
    window.postMessage(
      {
        type,
        ...body,
      },
      "*"
    );
  });
});

Cypress.Commands.add("getMap", () => {
  cy.window().then((window) => {
    return window.map;
  });
});
