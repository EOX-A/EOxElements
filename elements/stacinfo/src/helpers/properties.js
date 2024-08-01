/**
 * Transforms and formats a list of STAC properties.
 *
 * @param {Array} properties - The list of properties to transform.
 * @param {string} [type="property"] - The type of transformation to apply.
 * @returns {Array} The transformed and formatted properties.
 */
export function transformProperties(properties, type = "property") {
  // Transform extent to only show temporal information.
  return properties.map(([key, property]) => {
    // Transform extent to only show temporal
    if (key === "extent") {
      if (property.value?.temporal?.interval.length > 0) {
        const extent = property.value.temporal.interval[0];
        if (
          Array.isArray(extent) &&
          (typeof extent[0] === "string" || typeof extent[1] === "string")
        ) {
          property.formatted = `${new Date(extent[0])
            .toISOString()
            .substring(0, 10)} - ${new Date(extent[1])
            .toISOString()
            .substring(0, 10)}`;
        }
      }
    }

    // Replace all plain text URLs with clickable links, unless already converted.
    property.formatted = property.formatted.replace(
      /(?<!href="|src=")(http|https|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/gi,
      (url) => {
        return `<a target="_blank" href="${url}">${url}</a>`;
      }
    );

    /**
     * Filters links based on their roles and relationships.
     *
     * @param {Object} links - The links to filter.
     * @returns {Array} The filtered links.
     */
    const filterLinks = (links) => {
      return Object.entries(links).filter(([_, itemValue]) => {
        let pass = true;
        if (itemValue.roles) pass = itemValue.roles.includes("metadata");
        if (itemValue.rel) pass = itemValue.rel === "example";
        return pass;
      });
    };

    // Format assets, links, or providers into HTML, depending on the type.
    if (key === "assets" || key === "links" || key === "providers") {
      if (type === "property") {
        property.formatted = `<ul>${filterLinks(property.value)
          .map(
            ([itemKey, itemValue]) =>
              `<li>
                <a target="_blank" href="${itemValue.href || itemValue.url}"
                  >${itemValue.name || itemValue.title || itemKey}</a
                >
              </li>`
          )
          .join("")}</ul>`;
      } else if (type === "featured") {
        property.formatted = filterLinks(property.value)
          .map(
            ([itemKey, itemValue]) =>
              `<div class="button-container">
                ${
                  itemValue.description
                    ? `<div><p>${itemValue.description}</p></div>`
                    : ``
                }
                <a class="button icon-text small block" target="_blank" href="${
                  itemValue.href || itemValue.url
                }"
                  >${itemValue.name || itemValue.title || itemKey}
                  </a>
              </div>`
          )
          .join("");
      }
    }

    // Add length information to properties of type "providers", "assets", or "links".
    if (["providers", "assets", "links"].includes(key)) {
      property.length = filterLinks(property.value).length;
    }

    return [key, property];
  });
}

/**
 * Updates the STAC properties of the component.
 *
 * @param {import("../main.js").EOxStacInfo} that - The component instance.
 */
export function updateProperties(that) {
  if (that.stacInfo.length) {
    that.stacProperties = that.stacInfo.reduce(
      (acc, curr) => ({
        ...acc,
        ...curr.properties,
      }),
      {}
    );
    that.requestUpdate();
  }
}
