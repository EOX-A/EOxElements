/**
 * Transforms and formats a list of STAC properties.
 *
 * @param {Array<any>} properties - The list of properties to transform.
 * @param {import("../main.js").EOxStacInfo} element - The component instance containing STAC properties.
 * @param {string} [type="property"] - The type of transformation to apply.
 * @returns {Array<any>} The transformed and formatted properties.
 */
export function transformProperties(properties, element, type = "property") {
  // Helper to render anchor tags with class="link"
  function renderLink(url, text) {
    return `<a class="link" target="_blank" href="${url}">${text}</a>`;
  }

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

    // Replace markdown links [text](url) with clickable HTML links.
    property.formatted = property.formatted.replace(
      /\[([^\]]+)\]\((http[s]?|ftp):\/\/[^)]+\)/gi,
      (match, text) => {
        const urlMatch = match.match(/\((http[s]?|ftp):\/\/[^)]+\)/);
        const url = urlMatch ? urlMatch[0].slice(1, -1) : "";
        return renderLink(url, text);
      },
    );

    // Replace all plain text URLs with clickable links, unless already converted.
    property.formatted = property.formatted.replace(
      /(?<!href="|src=")(http|https|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/gi,
      (url) => {
        return renderLink(url, url);
      },
    );

    /**
     * Filters links based on their roles and relationships.
     *
     * @param {Object} links - The links to filter.
     * @returns {Array<any>} The filtered links.
     */
    const filterLinks = (links) => {
      return Object.entries(links).filter(([_, itemValue]) => {
        let pass = true;
        if (itemValue.roles && key !== "providers")
          pass = itemValue.roles.includes("metadata");
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
              </li>`,
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
                <a class="button small responsive border" target="_blank" href="${
                  itemValue.href || itemValue.url
                }"
                  >
                    ${
                      !element.unstyled
                        ? `<i class="small">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
                    </i>`
                        : ""
                    }
                    <span>${itemValue.name || itemValue.title || itemKey}</span>
                  </a>
              </div>`,
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
    // Throwing all properties from all extensions into one object
    // TODO render extensions in separate sections?
    that.stacProperties = that.stacInfo.reduce(
      (acc, curr) => ({
        ...acc,
        ...curr.properties,
      }),
      {},
    );

    that.requestUpdate();
  }
}
