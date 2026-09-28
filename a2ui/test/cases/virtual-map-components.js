import { mapVirtualComponents } from "../../src/transformers/eox-map-virtual-components.js";
import { virtualComponents } from "../../src/transformers/virtual-components.js";
import "../../src/index.js";
import { html } from "lit";

/**
 * Test that map virtual component definitions are properly registered with valid schemas
 */
export const virtualMapComponentsDefinitionsTest = () => {
  const names = mapVirtualComponents.map((c) => c.name);
  expect(names).to.include("EOxMapWorkspace");
  expect(names).to.include("EOxMapCompare");
  expect(names).to.include("EOxMapSideBySide");

  // Check that virtualComponents exports them
  const allNames = virtualComponents.map((c) => c.name);
  expect(allNames).to.include("EOxMapWorkspace");
  expect(allNames).to.include("EOxMapCompare");
  expect(allNames).to.include("EOxMapSideBySide");

  // Validate EOxMapWorkspace schema
  const workspaceDef = mapVirtualComponents.find(
    (c) => c.name === "EOxMapWorkspace",
  );
  expect(workspaceDef.tagName).to.eq("eox-a2ui-element");
  expect(workspaceDef.targetTagName).to.eq("eox-map-workspace");
  const parsedWorkspace = workspaceDef.schema.parse({
    slot: "sidebar",
    style: "width: 100%;",
    children: ["child1"],
  });
  expect(parsedWorkspace.slot).to.eq("sidebar");

  // Validate EOxMapCompare schema
  const compareDef = mapVirtualComponents.find(
    (c) => c.name === "EOxMapCompare",
  );
  expect(compareDef.tagName).to.eq("eox-a2ui-element");
  expect(compareDef.targetTagName).to.eq("eox-map-compare");
  const parsedCompare = compareDef.schema.parse({
    slot: "map",
    sync: "#other-map",
    enabled: "true",
    value: 50,
  });
  expect(parsedCompare.value).to.eq(50);
  expect(parsedCompare.sync).to.eq("#other-map");

  // Validate EOxMapSideBySide schema
  const sideBySideDef = mapVirtualComponents.find(
    (c) => c.name === "EOxMapSideBySide",
  );
  expect(sideBySideDef.tagName).to.eq("eox-a2ui-element");
  expect(sideBySideDef.targetTagName).to.eq("eox-map-side-by-side");
  const parsedSideBySide = sideBySideDef.schema.parse({
    slot: "map",
    style: "width: 50%;",
  });
  expect(parsedSideBySide.slot).to.eq("map");
};

/**
 * Test EOxA2uiElement map getter
 */
export const eoxA2uiElementMapGetterTest = () => {
  const el = /** @type {any} */ (document.createElement("eox-a2ui-element"));
  expect(el.map).to.be.undefined;

  const mapElement = document.createElement("eox-map");
  // @ts-expect-error Mock openlayers map
  mapElement.map = { isMock: true };
  el.appendChild(mapElement);
  expect(el.map).to.deep.eq({ isMock: true });
};

/**
 * Test EOxA2uiElement slot rendering
 */
export const eoxA2uiElementSlotRenderTest = () => {
  const el = /** @type {any} */ (document.createElement("eox-a2ui-element"));
  el.context = {
    componentModel: {
      id: "comp-1",
      type: "EOxMapWorkspace",
    },
  };
  el.controller = {
    props: {
      slot: "map",
      children: [],
    },
  };
  const templateResult = el.render();
  expect(templateResult).to.exist;
  expect(templateResult.strings.join("")).to.include("slot=");
};

/**
 * Test EOxA2uiWrapper custom CSS injection
 */
export const eoxA2uiWrapperCustomStylesTest = () => {
  class TestHostChild extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  }
  if (!customElements.get("test-host-child")) {
    customElements.define("test-host-child", TestHostChild);
  }

  cy.mount(html`
    <eox-a2ui-wrapper>
      <test-host-child></test-host-child>
    </eox-a2ui-wrapper>
  `);

  cy.get("test-host-child")
    .shadow()
    .find("style#custom-a2ui-style")
    .should("exist")
    .and(($style) => {
      expect($style.text()).to.include("eox-map-workspace");
      expect($style.text()).to.include("a2ui-card");
    });
};
