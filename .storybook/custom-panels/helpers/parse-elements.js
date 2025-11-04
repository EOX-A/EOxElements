// Parses the elements from the storyData
// is always one main elment, but could also contain additional components
export const parseElements = (storyData) => {
  const primaryElement = storyData.parent.replace("elements-", "");
  const additionalElements = storyData.args.additionalComponents
    ? Object.keys(storyData.args.additionalComponents)
    : [];

  let elements = [];

  [primaryElement, ...additionalElements].forEach((e) => {
    const elementArgs =
      storyData.args.additionalComponents?.[e] || storyData.args;

    const attributes = Object.entries(elementArgs).filter(
      ([key, value]) =>
        key === "style" ||
        (storyData.argTypes[key]?.table?.category === "attributes" && !!value),
    );
    const events = Object.entries(elementArgs).filter(
      ([key, value]) => storyData.argTypes[key]?.table?.category === "events",
    );
    const properties = Object.entries(elementArgs).filter(
      ([key, value]) =>
        storyData.argTypes[key]?.table?.category === "properties" ||
        (!["style", "additionalComponents"].includes(key) &&
          !attributes.find(([aKey, aValue]) => aKey === key) &&
          !events.find(([eKey, eValue]) => eKey === key)),
    );

    elements.push({
      tagName: e,
      attributes,
      properties,
      events,
    });
  });
  return elements;
};
