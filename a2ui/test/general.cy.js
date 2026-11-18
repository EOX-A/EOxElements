import {
  virtualMapComponentsDefinitionsTest,
  eoxA2uiElementMapGetterTest,
  eoxA2uiElementSlotRenderTest,
  eoxA2uiElementNodeRenderTest,
  eoxA2uiWrapperCustomStylesTest,
} from "./cases";

describe("A2UI Virtual Map Components", () => {
  it("registers map virtual component definitions and schemas", () =>
    virtualMapComponentsDefinitionsTest());

  it("handles map getter on EOxA2uiElement", () =>
    eoxA2uiElementMapGetterTest());

  it("renders slot on target tag in EOxA2uiElement via context", () =>
    eoxA2uiElementSlotRenderTest());

  it("renders slot on target tag in EOxA2uiElement via node", () =>
    eoxA2uiElementNodeRenderTest());

  it("injects custom styles in EOxA2uiWrapper", () =>
    eoxA2uiWrapperCustomStylesTest());
});
