import {
  virtualMapComponentsDefinitionsTest,
  eoxA2uiElementMapGetterTest,
  eoxA2uiElementSlotRenderTest,
  eoxA2uiWrapperCustomStylesTest,
} from "./cases";

describe("A2UI Virtual Map Components", () => {
  it("registers map virtual component definitions and schemas", () =>
    virtualMapComponentsDefinitionsTest());

  it("handles map getter on EOxA2uiElement", () =>
    eoxA2uiElementMapGetterTest());

  it("renders slot on target tag in EOxA2uiElement", () =>
    eoxA2uiElementSlotRenderTest());

  it("injects custom styles in EOxA2uiWrapper", () =>
    eoxA2uiWrapperCustomStylesTest());
});
