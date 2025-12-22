/**
 * Extract argTypes for a given component from custom-elements.json and types.json
 * @param {string} component
 * @param {object} customElements
 * @param {object} typedocJson
 * @returns
 */
export const extractArgTypes = (component, customElements, typedocJson) => {
  const {
    attributes,
    events,
    members: properties,
  } = customElements.modules.find(
    (m) => m.declarations[0].tagName === component,
  )?.declarations[0] || {};
  return [
    ...(properties
      ? properties.map((m) => ({
          category: m.kind === "method" ? "methods" : "properties",
          ...m,
        }))
      : []),
    ...(attributes
      ? attributes.map((a) => ({ category: "attributes", ...a }))
      : []),
    ...(events ? events.map((a) => ({ category: "events", ...a })) : []),
  ].reduce((acc, curr) => {
    const {
      category,
      default: defaultValue,
      description,
      name,
      parameters,
      type,
    } = curr;
    const typeText =
      parameters?.[0].type?.text || parameters?.[0].type || type?.text || type;
    let matchingType;

    if (typedocJson && typedocJson.children) {
      typedocJson.children.forEach((c) => {
        const child = c.children?.find((cc) => typeText?.includes(cc.name));
        if (child) matchingType = child;
      });
    }
    acc[name] = {
      description: matchingType
        ? `${description} <br /> <code>${typeText.replace(matchingType.name, `<a target="_blank" href="${matchingType?.sources?.[0]?.url}">${matchingType.name}</a>`)}</code>`
        : description,
      table: {
        defaultValue: { summary: defaultValue },
        category,
        type: {
          ...(!matchingType
            ? {
                summary: typeText,
              }
            : {}),
        },
      },
    };
    return acc;
  }, {});
};
