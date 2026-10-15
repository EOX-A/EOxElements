import { mount } from "cypress-lit";
import "@cypress/code-coverage/support";
import "cypress-file-upload";

const cleanup = () => {
  const root = document.querySelector("[data-cy-root]");
  if (root) {
    root.innerHTML = "";
  }
};

beforeEach(cleanup);

Cypress.Commands.overwrite("mount", (originalMount, element, options = {}) => {
  cleanup();
  return originalMount(element, options);
});
