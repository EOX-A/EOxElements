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

Cypress.Commands.add("mount", (element, options = {}) => {
  cleanup();
  return mount(element, options);
});
