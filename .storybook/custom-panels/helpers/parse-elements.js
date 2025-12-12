// Parses the elements from the storyData
// is always one main elment, but could also contain additional components
export const parseElements = (storyData) => {
  const storyComponent = storyData.component || storyData.parent;
  if (!storyComponent) return [];
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
    const elementArgs = isPrimary
      ? primaryArgs
      : storyData.args.storyAdditionalComponents?.[e] || {};

    const storyImport = elementArgs.storyImport !== false;
    const storySlot = !!elementArgs.storySlot;
    const storyWrap = !!elementArgs.storyWrap;

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
      "storyWrap",
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
      storyWrap,
      isPrimary,
    });
  });
  return elements;
};
