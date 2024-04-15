export const transformProperties = (
  properties: Array<any>,
  type: string = "property"
) => {
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

    // Replace all links (that haven't been converted yet)
    property.formatted = property.formatted.replaceAll(
      /(?<!href="|src=")(http|https|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/gi,
      (url: string) => {
        return `<a target="_blank" href="${url}">${url}</a>`;
      }
    );

    // Only show assets with roles "metadata" and links with rel "example"
    const filterLinks = (links: Array<any>) => {
      return Object.entries(links).filter(([_, itemValue]) => {
        let pass = true;
        if (itemValue.roles) pass = itemValue.roles.includes("metadata");
        if (itemValue.rel) pass = itemValue.rel === "example";
        return pass;
      });
    };

    // Format assets to look like button
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

    // Add length information to display in list
    if (["providers", "assets", "links"].includes(key)) {
      property.length = filterLinks(property.value).length;
    }

    return [key, property];
  });
};
