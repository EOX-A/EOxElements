import {
  getContainerEl,
  setupHooks,
  type StyleOptions,
} from "@cypress/mount-utils";
import { html, LitElement, render, type TemplateResult } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

interface MountOptions<T extends HTMLElement> extends Partial<StyleOptions> {
  log?: boolean;
  properties?: Partial<T>;
}

let componentInstance: LitElement | HTMLElement | undefined;

Cypress.on("run:start", () => {
  if (Cypress.testingType !== "component") {
    return;
  }

  Cypress.on("test:before:run", () => {
    componentInstance?.remove();
    const containerEl = getContainerEl();
    containerEl.innerHTML = "";
  });
});

/**
 * Mount places a web component into the `id="data-cy-root"` elements
 * in component testing
 */
export const mount = <T extends keyof HTMLElementTagNameMap>(
  template: TemplateResult | string,
  options: MountOptions<HTMLElementTagNameMap[T]> = {}
): Cypress.Chainable<JQuery<HTMLElementTagNameMap[T]>> => {
  return cy.then(() => {
    const containerEl = getContainerEl();

    const elementTemplate =
      typeof template === "string" ? html`${unsafeHTML(template)}` : template;
    console.log(elementTemplate);
    const componentNode = document.createElement("div");
    componentNode.id = "__cy_lit_root";
    containerEl.append(componentNode);
    render(elementTemplate, componentNode);

    return cy
      .wrap(componentNode, { log: false })
      .wait(1, { log: false })
      .children()
      .first()
      .then((element) => {
        const name = element.prop("tagName").toLowerCase();
        const el = document.getElementsByTagName<T>(name)[0];
        const { properties, log = true } = options;

        if (
          properties &&
          typeof properties === "object" &&
          Array.isArray(properties) === false
        ) {
          for (const prop in properties) {
            if (Object.prototype.hasOwnProperty.call(el, prop)) {
              const val = properties[prop]!;
              el[prop] = val;
            }
          }
        }

        componentInstance = el;
        if (log) {
          const mountMessage = `<${name} ... />`;
          Cypress.log({
            name: "mount",
            message: [mountMessage],
          })
            .snapshot("mounted")
            .end();
        }

        return cy.wrap(el, { log: false });
      });
  });
};

setupHooks();