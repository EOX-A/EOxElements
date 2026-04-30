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

    const attributes = Object.entries(elementArgs).filter(([key, value]) => {
      const isBaseAttr = ["id", "style", "class"].includes(key);
      const isCategoryAttr =
        storyData.argTypes[key]?.table?.category === "attributes";
      if (!isBaseAttr && !isCategoryAttr) return false;
      if (!value) return false;
      if (typeof value === "object") {
        return JSON.stringify(value).length <= 50;
      }
      return true;
    });
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
      "storyTemplateBefore",
      "storyTemplateAfter",
      "storyStyle",
      "storyImport",
      "storySlot",
      "storyWrap",
    ];

    const properties = Object.entries(elementArgs).filter(([key, value]) => {
      if (internalArgs.includes(key)) return false;
      const attrMatch = attributes.find(([aKey]) => aKey === key);
      if (attrMatch) return false;
      if (events.find(([eKey]) => eKey === key)) return false;

      return true;
    });

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
