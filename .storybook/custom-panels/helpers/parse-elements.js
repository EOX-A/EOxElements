// Parses the elements from the storyData
// is always one main elment, but could also contain additional components
export const parseElements = (storyData) => {
  const primaryElement = (storyData.component || storyData.parent).replace(
    "elements-",
    "",
  );
  const additionalElements = storyData.args.storyAdditionalComponents
    ? Object.keys(storyData.args.storyAdditionalComponents)
    : [];

  let elements = [];
  const primaryArgs = storyData.args;

  [primaryElement, ...additionalElements].forEach((e, index) => {
    const isPrimary = index === 0;
    // Get args for the specific element, or fall back to main story args
    const elementArgs = isPrimary
      ? primaryArgs
      : storyData.args.storyAdditionalComponents?.[e] || {};

    // storyImport: Defaults to true. Can be set to false.
    const storyImport = elementArgs.storyImport !== false; // Check for explicit false
    // storySlot: Defaults to false. Can be set to true for nesting.
    const storySlot = !!elementArgs.storySlot; // Check for truthy value

    const attributes = Object.entries(elementArgs).filter(
      ([key, value]) =>
        ["id", "style", "class"].includes(key) ||
        (storyData.argTypes[key]?.table?.category === "attributes" && !!value),
    );
    const events = Object.entries(elementArgs).filter(
      ([key, value]) => storyData.argTypes[key]?.table?.category === "events",
    );

    // List of internal args to filter out from properties
    const internalArgs = [
      "id",
      "style",
      "class",
      "storyAdditionalComponents",
      "storyCodeBefore",
      "storyCodeAfter",
      "storySlotContent",
      "storyStyle",
      "storyImport",
      "storySlot",
    ];

    const properties = Object.entries(elementArgs).filter(
      ([key, value]) =>
        !internalArgs.includes(key) &&
        !attributes.find(([aKey, aValue]) => aKey === key) &&
        !events.find(([eKey, eValue]) => eKey === key),
    );

    elements.push({
      tagName: e,
      attributes,
      properties,
      events,
      storyImport,
      storySlot,
      isPrimary,
    });
  });
  return elements;
};
